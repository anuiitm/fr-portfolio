// Deterministic demo data. Dates are generated relative to the first visit so the
// dashboard always shows "this month", not a frozen snapshot from when it was built.

function rng(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// [sku, name, price, petType, category, stock]
const CATALOGUE = [
  ['DOG-001', 'CanineCare Adult Lamb & Rice 3kg', 1499, 'Dog', 'Food', 70],
  ['DOG-002', 'PlayBall Durable Fetch Ball (Large)', 299, 'Dog', 'Toys', 200],
  ['DOG-003', 'VetFlex Joint Support Chews (60ct)', 1299, 'Dog', 'Health', 80],
  ['DOG-004', 'PawComfort Orthopedic Dog Bed, Medium', 3999, 'Dog', 'Beds & habitat', 30],
  ['DOG-005', 'RuffLead No-Pull Harness, Medium', 999, 'Dog', 'Accessories', 110],
  ['CAT-001', 'FelineFit Indoor Adult Salmon 2kg', 1199, 'Cat', 'Food', 60],
  ['CAT-002', 'FelineClinic Renal Support Diet', 2899, 'Cat', 'Health', 40],
  ['CAT-003', 'ScratchMate Corrugated Scratcher', 799, 'Cat', 'Toys', 90],
  ['CAT-004', 'WhiskerTreat Salmon Pouch Bundle', 499, 'Cat', 'Treats', 180],
  ['CAT-005', 'TurboFeeder Automatic Cat Feeder', 2499, 'Cat', 'Accessories', 25],
  ['BIRD-001', 'ParrotPrime Fortified Pellets 1kg', 1299, 'Bird', 'Food', 80],
  ['BIRD-002', 'AviaryFun Chew Toy Pack', 399, 'Bird', 'Toys', 160],
  ['BIRD-003', 'AvianCare Clinical Seed Blend 1kg', 899, 'Bird', 'Food', 70],
  ['BIRD-004', 'PerchPro Natural Wood Perch', 349, 'Bird', 'Beds & habitat', 120],
  ['BIRD-005', 'WingBeat Foraging Toy', 499, 'Bird', 'Toys', 95],
  ['FISH-001', 'TetraColor Tropical Flakes 250g', 349, 'Fish', 'Food', 200],
  ['FISH-002', 'AquaGuard Parasite Treatment', 699, 'Fish', 'Health', 90],
  ['FISH-003', 'SmartFeed Automatic Fish Feeder', 1799, 'Fish', 'Accessories', 55],
  ['FISH-004', 'NanoTank Startup Kit 20L', 2599, 'Fish', 'Beds & habitat', 40],
  ['FISH-005', 'OmegaOne Freeze-Dried Shrimp 85g', 549, 'Fish', 'Treats', 140],
  ['RAB-001', 'RabbitWell Timothy Hay 2kg', 499, 'Rabbit', 'Food', 120],
  ['RAB-002', 'BunnyBite Rabbit Pellets 2kg', 599, 'Rabbit', 'Food', 90],
  ['RAB-003', 'RabbitFirst Wound Spray 75ml', 459, 'Rabbit', 'Health', 60],
  ['RAB-004', 'HopNHide Insulated Rabbit Igloo', 899, 'Rabbit', 'Beds & habitat', 40],
  ['RAB-006', 'NipNibbles Rabbit Treats 200g', 249, 'Rabbit', 'Treats', 150],
  ['RAB-007', 'BunnyBrush Grooming Glove', 399, 'Rabbit', 'Grooming', 95],
  ['RAB-008', 'HayRack Hanging Feeder', 349, 'Rabbit', 'Accessories', 110],
  ['HAM-001', 'HamsterCrunch Seed Mix 500g', 199, 'Hamster', 'Food', 140],
  ['HAM-002', 'SilentRoller Exercise Wheel 15cm', 599, 'Hamster', 'Toys', 120],
  ['HAM-003', 'HamsterHide Tunnel Tube', 179, 'Hamster', 'Toys', 210],
  ['HAM-004', 'SmallPet Probiotic Paste', 499, 'Hamster', 'Health', 90],
  ['HAM-005', 'HamsterCozy Nesting Bed', 249, 'Hamster', 'Beds & habitat', 130],
  ['OTH-001', 'AllPets Travel Water Bottle 500ml', 399, 'All pets', 'Accessories', 160],
  ['OTH-003', 'ProVet Oral Dental Gel', 649, 'All pets', 'Health', 85],
  ['OTH-004', 'MultiPet Grooming Wipes (50)', 299, 'All pets', 'Grooming', 300],
  ['OTH-005', 'AllPet Comfort Carry Case', 1299, 'All pets', 'Accessories', 60],
  ['OTH-008', 'SmallPet Nail Trimmer', 299, 'All pets', 'Grooming', 200],
  ['OTH-010', 'Emergency First Aid Kit for Pets', 999, 'All pets', 'Health', 85],
];

const FIRST = ['Aarav', 'Diya', 'Kabir', 'Ananya', 'Rohan', 'Meera', 'Ishaan', 'Sara', 'Vivaan', 'Nisha', 'Arjun', 'Tara', 'Dev', 'Kavya', 'Neel', 'Riya', 'Aditya', 'Pooja', 'Kunal', 'Zoya', 'Siddharth', 'Lakshmi', 'Farhan', 'Aditi', 'Varun', 'Sneha', 'Harsh', 'Ira'];
const LAST = ['Sharma', 'Iyer', 'Khan', 'Reddy', 'Mehta', 'Nair', 'Gupta', 'Das', 'Kapoor', 'Joshi', 'Bose', 'Menon', 'Singh', 'Pillai', 'Rao', 'Chopra'];
const CITIES = ['Bengaluru', 'Chennai', 'Mumbai', 'Pune', 'Hyderabad', 'New Delhi', 'Kolkata', 'Kochi', 'Jaipur', 'Ahmedabad'];
const CARRIERS = ['Delhivery', 'Blue Dart', 'Ekart', 'XpressBees'];

const DAY = 86400000;

export function buildSeed(now = Date.now()) {
  const r = rng(20251204);
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const iso = (t) => new Date(t).toISOString();

  const products = CATALOGUE.map(([sku, name, price, petType, category, stock], i) => ({
    id: `p${i + 1}`,
    sku,
    name,
    price,
    petType,
    category,
    stock,
    active: i !== 26,
    subscribers: 0,
    description: '',
    createdAt: iso(now - (400 - i * 6) * DAY),
  }));
  // A few products near or at zero so the inventory views have something to show.
  for (const [i, stock, subs] of [[3, 0, 14], [9, 4, 0], [18, 0, 6], [6, 7, 0], [23, 3, 0]]) {
    products[i].stock = stock;
    products[i].subscribers = subs;
  }

  const customers = Array.from({ length: 36 }, (_, i) => {
    const first = FIRST[i % FIRST.length];
    const last = LAST[(i * 7) % LAST.length];
    return {
      id: `c${i + 1}`,
      name: `${first} ${last}`,
      email: `${first}.${last}${i}@example.com`.toLowerCase(),
      phone: `+91 9${String(800000000 + Math.floor(r() * 99999999)).slice(0, 9)}`,
      city: pick(CITIES),
      joinedAt: iso(now - Math.floor(30 + r() * 600) * DAY),
      active: i !== 11 && i !== 29,
    };
  });

  const orders = [];
  for (let i = 0; i < 160; i += 1) {
    // More orders in recent months, so the revenue chart trends up like a growing shop.
    const ageDays = Math.floor(r() ** 1.6 * 360);
    const placed = now - ageDays * DAY - Math.floor(r() * DAY);
    const customer = customers[Math.floor(r() ** 1.3 * customers.length)];
    const lines = 1 + Math.floor(r() * 3);
    const items = [];
    for (let j = 0; j < lines; j += 1) {
      const p = products[Math.floor(r() * products.length)];
      if (items.some((it) => it.productId === p.id)) continue;
      items.push({ productId: p.id, name: p.name, sku: p.sku, qty: 1 + Math.floor(r() * 2.2), price: p.price });
    }
    const subtotal = items.reduce((a, it) => a + it.qty * it.price, 0);
    const discount = r() < 0.22 ? Math.round(subtotal * 0.1) : 0;
    const shipping = subtotal - discount >= 999 ? 0 : 79;
    const tax = Math.round((subtotal - discount) * 0.05);

    let status;
    if (ageDays <= 1) status = 'processing';
    else if (ageDays <= 4) status = r() < 0.55 ? 'shipped' : 'processing';
    else status = r() < 0.08 ? 'cancelled' : 'delivered';
    const shipments = [];
    const history = [{ at: iso(placed), status: 'processing', note: 'Order placed' }];
    if (status === 'shipped' || status === 'delivered') {
      const shippedAt = placed + DAY * (0.5 + r());
      shipments.push({
        id: `s${i + 1}`,
        carrier: pick(CARRIERS),
        tracking: `TRK${Math.floor(1e9 + r() * 9e9)}`,
        shippedAt: iso(shippedAt),
        deliveredAt: status === 'delivered' ? iso(shippedAt + DAY * (1 + r() * 3)) : null,
      });
      history.push({ at: iso(shippedAt), status: 'shipped', note: `Shipped with ${shipments[0].carrier}` });
      if (status === 'delivered') history.push({ at: shipments[0].deliveredAt, status: 'delivered', note: 'Delivered' });
    }
    if (status === 'cancelled') history.push({ at: iso(placed + DAY * 0.3), status: 'cancelled', note: 'Customer asked to cancel' });

    orders.push({
      id: `PT-${10050 + i}`,
      customerId: customer.id,
      placedAt: iso(placed),
      items,
      subtotal,
      discount,
      promo: discount ? 'PAWS10' : null,
      shipping,
      tax,
      total: subtotal - discount + shipping + tax,
      status,
      payment: status === 'cancelled' ? 'refunded' : r() < 0.06 && status === 'processing' ? 'pending' : 'paid',
      cancelReason: status === 'cancelled' ? 'Customer asked to cancel' : null,
      shipments,
      history,
    });
  }
  orders.sort((a, b) => b.placedAt.localeCompare(a.placedAt));

  const promos = [
    { id: 'pr1', code: 'PAWS10', type: 'percent', value: 10, minOrder: 499, startsAt: iso(now - 200 * DAY), endsAt: iso(now + 60 * DAY), limit: 500, used: 312, paused: false },
    { id: 'pr2', code: 'WELCOME150', type: 'flat', value: 150, minOrder: 999, startsAt: iso(now - 300 * DAY), endsAt: null, limit: null, used: 128, paused: false },
    { id: 'pr3', code: 'DIWALI25', type: 'percent', value: 25, minOrder: 1499, startsAt: iso(now - 380 * DAY), endsAt: iso(now - 340 * DAY), limit: 1000, used: 846, paused: false },
    { id: 'pr4', code: 'FISHDAY', type: 'flat', value: 100, minOrder: 699, startsAt: iso(now + 12 * DAY), endsAt: iso(now + 14 * DAY), limit: 200, used: 0, paused: false },
    { id: 'pr5', code: 'VETCARE15', type: 'percent', value: 15, minOrder: 0, startsAt: iso(now - 40 * DAY), endsAt: iso(now + 20 * DAY), limit: 50, used: 50, paused: false },
    { id: 'pr6', code: 'BIRDIE5', type: 'percent', value: 5, minOrder: 0, startsAt: iso(now - 90 * DAY), endsAt: iso(now + 90 * DAY), limit: null, used: 41, paused: true },
  ];

  const faqs = [
    { id: 'f1', category: 'Orders', question: 'How do I track my order?', answer: 'Open My Orders and select the order. The tracking number links to the courier’s page once the parcel ships.', published: true },
    { id: 'f2', category: 'Orders', question: 'Can I cancel an order after placing it?', answer: 'Yes, until it ships. Cancelled prepaid orders are refunded to the original payment method in 5–7 working days.', published: true },
    { id: 'f3', category: 'Shipping', question: 'Do you deliver everywhere in India?', answer: 'We deliver to over 19,000 pin codes. Enter yours on any product page to check.', published: true },
    { id: 'f4', category: 'Shipping', question: 'When is shipping free?', answer: 'Orders of ₹999 or more ship free. Smaller orders have a flat ₹79 charge.', published: true },
    { id: 'f5', category: 'Returns', question: 'What is your return policy?', answer: 'Unopened food and treats can be returned within 7 days. Toys and accessories within 14 days if unused.', published: true },
    { id: 'f6', category: 'Pet care', question: 'Does the assistant replace a vet?', answer: 'No. It suggests products from your pet’s profile. For symptoms or medication, please see a vet.', published: true },
    { id: 'f7', category: 'Account', question: 'How do I add a second pet?', answer: 'Go to Profile → My Pets → Add pet. Recommendations update for each pet separately.', published: false },
  ];

  const movements = [
    [6, 20, 'Received from supplier', 1],
    [9, -2, 'Damaged in warehouse', 3],
    [0, 40, 'Received from supplier', 4],
    [23, -1, 'Stock count correction', 6],
    [16, 30, 'Received from supplier', 9],
  ].map(([i, delta, reason, days], n) => ({ id: `m${n + 1}`, productId: products[i].id, delta, reason, at: iso(now - days * DAY) }));

  return { products, customers, orders, promos, faqs, movements };
}
