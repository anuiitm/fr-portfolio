import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useRoute } from '../lib/router';
import { productSaved, productToggled } from '../store/catalog';
import { toastShown } from '../store/content';
import { productsSel } from '../store/selectors';
import { money } from '../lib/format';
import { Badge, Empty, Field, Icon, Modal, PageHeader } from '../components/ui';
import { Pager } from './Orders';

export const CATEGORIES = ['Food', 'Treats', 'Toys', 'Health', 'Grooming', 'Beds & habitat', 'Accessories'];
export const PET_TYPES = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit', 'Hamster', 'All pets'];
const PAGE = 12;

export default function Products() {
  const { id } = useRoute();
  const products = useSelector(productsSel.selectAll);
  const lowStock = useSelector((s) => s.settings.lowStock);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ q: '', category: '', pet: '', state: '' });
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return products.filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)) &&
        (!filters.category || p.category === filters.category) &&
        (!filters.pet || p.petType === filters.pet) &&
        (!filters.state || (filters.state === 'active' ? p.active : !p.active)),
    );
  }, [products, filters]);

  const set = (k) => (e) => {
    setFilters({ ...filters, [k]: e.target.value });
    setPage(0);
  };
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const current = Math.min(page, pages - 1);

  return (
    <>
      <PageHeader title="Products" sub={`${products.length} products, ${products.filter((p) => p.active).length} listed on the store.`}>
        <a className="btn btn-primary" href="#/products/new">
          <Icon name="plus" /> Add product
        </a>
      </PageHeader>

      <div className="toolbar">
        <input className="search-input" type="search" placeholder="Name or SKU" aria-label="Search products" value={filters.q} onChange={set('q')} />
        <select aria-label="Category" value={filters.category} onChange={set('category')}>
          <option value="">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select aria-label="Pet" value={filters.pet} onChange={set('pet')}>
          <option value="">All pets</option>
          {PET_TYPES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select aria-label="Visibility" value={filters.state} onChange={set('state')}>
          <option value="">Listed and hidden</option>
          <option value="active">Listed</option>
          <option value="hidden">Hidden</option>
        </select>
      </div>

      <div className="card card-flush">
        {filtered.length === 0 ? (
          <Empty title="No products match">Clear a filter or add a new product.</Empty>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Category</th>
                  <th scope="col">Pet</th>
                  <th scope="col" className="num">
                    Price
                  </th>
                  <th scope="col" className="num">
                    Stock
                  </th>
                  <th scope="col">Listed</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(current * PAGE, current * PAGE + PAGE).map((p) => (
                  <tr key={p.id} className={p.active ? undefined : 'row-muted'}>
                    <th scope="row">
                      <a href={`#/products/${p.id}`}>{p.name}</a>
                      <br />
                      <small className="muted">{p.sku}</small>
                    </th>
                    <td>{p.category}</td>
                    <td>{p.petType}</td>
                    <td className="num">{money(p.price)}</td>
                    <td className="num">
                      {p.stock <= lowStock ? <Badge tone={p.stock === 0 ? 'bad' : 'warn'}>{p.stock}</Badge> : p.stock}
                    </td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={p.active}
                          onChange={() => {
                            dispatch(productToggled(p.id));
                            dispatch(toastShown(`${p.name} ${p.active ? 'hidden from' : 'listed on'} the store`));
                          }}
                        />
                        <span className="sr-only">Listed on store</span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pager page={current} pages={pages} total={filtered.length} onPage={setPage} />
      </div>

      <ProductForm id={id} products={products} />
    </>
  );
}

const EMPTY = { name: '', sku: '', price: '', stock: '0', category: 'Food', petType: 'Dog', description: '', active: true };

function ProductForm({ id, products }) {
  const isNew = id === 'new';
  const existing = products.find((p) => p.id === id);
  const open = isNew || Boolean(existing);
  return (
    <Modal open={open} title={isNew ? 'Add product' : 'Edit product'} onClose={() => navigate('/products')} wide>
      {/* Keyed so the form state resets whenever a different product opens. */}
      {open && <ProductFields key={id} product={existing} products={products} />}
    </Modal>
  );
}

function ProductFields({ product, products }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(() => (product ? { ...product, price: String(product.price), stock: String(product.stock) } : EMPTY));
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 3) e.name = 'At least 3 characters.';
    if (!/^[A-Z]{2,5}-\d{3}$/.test(form.sku.trim())) e.sku = 'Format: 2–5 capitals, a dash, 3 digits (DOG-012).';
    else if (products.some((p) => p.sku === form.sku.trim() && p.id !== product?.id)) e.sku = 'Another product already uses this SKU.';
    if (!(Number(form.price) > 0)) e.price = 'Enter a price above zero.';
    if (!Number.isInteger(Number(form.stock)) || Number(form.stock) < 0) e.stock = 'Whole number, zero or more.';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    dispatch(productSaved({ ...form, name: form.name.trim(), sku: form.sku.trim(), price: Number(form.price), stock: Number(form.stock) }));
    dispatch(toastShown(product ? 'Product updated' : 'Product added'));
    navigate('/products');
  };

  return (
    <form onSubmit={submit} noValidate className="form-grid">
      <Field label="Name" error={errors.name}>
        {(a) => <input {...a} value={form.name} onChange={set('name')} autoFocus />}
      </Field>
      <Field label="SKU" error={errors.sku} hint="Shown on invoices and packing slips.">
        {(a) => <input {...a} value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value.toUpperCase() })} />}
      </Field>
      <Field label="Price (₹)" error={errors.price}>
        {(a) => <input {...a} inputMode="decimal" value={form.price} onChange={set('price')} />}
      </Field>
      <Field label="Stock" error={errors.stock} hint={product ? 'Use Inventory to log stock changes with a reason.' : undefined}>
        {(a) => <input {...a} inputMode="numeric" value={form.stock} onChange={set('stock')} disabled={Boolean(product)} />}
      </Field>
      <Field label="Category">
        {(a) => (
          <select {...a} value={form.category} onChange={set('category')}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        )}
      </Field>
      <Field label="Pet">
        {(a) => (
          <select {...a} value={form.petType} onChange={set('petType')}>
            {PET_TYPES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        )}
      </Field>
      <div className="span-all">
        <Field label="Description">{(a) => <textarea {...a} rows={3} value={form.description} onChange={set('description')} />}</Field>
      </div>
      <label className="check span-all">
        <input type="checkbox" checked={form.active} onChange={set('active')} /> List on the store
      </label>
      <div className="form-actions span-all">
        <a className="btn" href="#/products">
          Cancel
        </a>
        <button type="submit" className="btn btn-primary">
          {product ? 'Save changes' : 'Add product'}
        </button>
      </div>
    </form>
  );
}
