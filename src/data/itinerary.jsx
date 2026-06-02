export const overview = {
  title: 'Melbourne',
  subtitle: 'Australia Itinerary · Aug 2026',
  days: '9 Days',
  areas1: ['Yarra Valley', 'Dandenong', 'Phillip Island', 'Mornington'],
  areas2: ['Great Ocean Road', 'Grampians', 'Ballarat']
};

export const heroStats = [
  { label: 'Depart', value: '15 Aug, SG' },
  { label: 'Return', value: '24 Aug, SG' },
  { label: 'Duration', value: '9 Days' },
  { label: 'Transport', value: 'Self-drive' },
  { label: 'Time Zone', value: 'AEST (SG +2h)' },
];

export const overviewItems = [
  { label: 'Arrival', value: 'Scoot TR58 · Day 1 · 2:30am - 11:45am' },
  { label: 'Car Rental', value: 'Pick up Day 1 ~1pm · Return Day 9 ~7pm' },
  { label: 'Car Provider', value: 'TBC' },
  // { label: 'Airport Lounge', value: 'Aspire Lounge · Priority Pass' },
  { label: 'Departure', value: 'Scoot TR39 · Day 9 · 9:35pm - 3:40am' },
];

export const navTabs = [
  { href: '#yarra', label: 'Yarra Valley' },
  { href: '#dandenong', label: 'Dandenong' },
  { href: '#phillip', label: 'Phillip Island' },
  { href: '#mornington', label: 'Mornington' },
  { href: '#gor', label: 'Great Ocean Rd' },
  { href: '#grampians', label: 'Grampians' },
  { href: '#ballarat', label: 'Ballarat' },
  { href: '#essentials', label: 'Essentials' },
];

export const budgetItems = [
  { label: 'Flight', value: '$600' },
  { label: 'Transport & Fuel', value: '$150' },
  { label: 'Accommodation  (Est. S$45/day)', value: '$360' },
  { label: 'Food (Est. S$60/day)', value: '$540' },
  { label: 'Activities', value: '$200' },
  { label: 'Others (Insurance, SIM)', value: '$100' },
];

export const essentialsCategories = [
  {
    title: 'Documents',
    items: [
      'Passport (6+ months valid)',
      "Singapore driver's licence",
      'International Driving Permit',
      'Travel insurance card',
      'Hotel confirmation printouts',
      'Rental car confirmation',
    ],
  },
  {
    title: 'Clothing (Winter)',
    items: [
      'Warm puffer/down jacket',
      'Thermal base layers',
      'Waterproof rain jacket',
      'Hiking boots or solid shoes',
      'Gloves, beanie, scarf',
      'Smart casual for dinners',
    ],
  },
  {
    title: 'Tech & Gear',
    items: [
      'GoPro + spare batteries',
      'Power bank (10,000mAh+)',
      'Type I Australian adapter',
      'Car phone mount',
      'Offline Google Maps (Victoria)',
      'Torch / headlamp',
    ],
  },
  {
    title: 'Useful Apps',
    items: [
      'Google Maps (offline Vic)',
      'Parks Victoria (closures)',
      'WillyWeather (tides)',
      'GoPro Quik',
      'Klook (bookings)',
      'Finder AU (fuel prices)',
    ],
  },
  {
    title: 'Pre-Book Now',
    items: [
      'Puffing Billy Railway ✓',
      'Penguin Parade ✓',
      'Peninsula Hot Springs ✓',
      'Searoad Ferries (car) ✓',
      'Seppelt tour ✓',
      'Busselton Jetty (Klook) ✓',
    ],
  },
  {
    title: 'Drive Smart',
    items: [
      'Drive on the left',
      'Check car before pickup (video)',
      'Fill petrol before car return',
      'Avoid Riverside Roadhouse (~A$2.80/L)',
      'Rest stops every 2h on long drives',
      'Wildlife on roads at dawn & dusk',
    ],
  },
];

export const sections = [
  {
    id: 'yarra',
    tag: 'Arrival Day · Region 1 of 7',
    title: 'Yarra Valley',
    date: '15-16 Aug 2026 — Arrive in Melbourne, straight to wine country',
    days: [
      {
        number: 'Day 01',
        title: 'Arrival & Yarra Valley',
        date: '15 Aug 2026',
        activities: [
          { type: 'activity', time: '2:30 AM', title: 'Depart Singapore Changi T1 · Scoot TR58', duration: '9h 15m', desc: '7h15min flight - Melbourne is 2h ahead of Singapore.' },
          { type: 'activity', time: '11:45 AM', title: 'Reach Melbourne Airport (T2)', desc: 'Pass immigration, collect luggage and clear customs.' },
          { type: 'activity', time: '1:00 PM', title: 'Take shuttle bus to car pickup point', desc: 'Call ahead for pickup from airport arrivals (7am–7pm).' },
          { type: 'activity', time: '1:15 PM', title: 'Pick up rental car', desc: 'Inspect the car carefully and note any existing damage before leaving the lot.' },
          { type: 'activity', time: '1:45 PM', title: 'Drive to Lunch', duration: '5m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '1:50 PM', title: 'Three Blue Ducks Melbourne', priceTag: 'A$20-60', badges: [{ label: 'Lunch', className: 'badge-food' }], href: 'https://maps.app.goo.gl/ewisdKpawLXdKRvv9', desc: 'Modern Australian farm-to-table restaurant. A relaxed landing meal after the flight.' },
          { type: 'activity', time: '2:35 PM', title: 'Drive to Yarra Valley', duration: '55m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '3:30 PM', title: 'Yarra Valley Chocolaterie & Ice Creamery', href: 'https://maps.app.goo.gl/1qHRGJLbybC3n5rC6', priceTag: 'A$4', imgSrc: '/images/yarra-valley-chocolaterie.png', badges: [{ label: 'Tasting', className: 'badge-paid' }], duration: '30m', desc: 'Daily tastings of 12 chocolates; aim for the 3:30pm session.' },
          { type: 'activity', time: '4:00 PM', title: 'Drive', duration: '15m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '4:15 PM', title: 'Yarra Valley Dairy', imgSrc: '/images/yarra-valley-dairy.png', href: 'https://maps.app.goo.gl/zQ9BbUPn1ErrXvJT6', priceTag: 'A$15', badges: [{ label: 'Tasting', className: 'badge-paid' }], duration: '30m', desc: 'Walk-in cheese tasting from 10:30am–4:30pm. A$5pp for 4 cheese; A$15 for the entire range.' },
          { type: 'activity', time: '4:45 PM', title: 'Drive', duration: '5m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '4:50 PM', title: 'Yering Station Winery', imgSrc: '/images/yering-station-winery.png', href: 'https://maps.app.goo.gl/tSgSh3m1N42jciPK9', priceTag: 'A$20', badges: [{ label: 'Tasting', className: 'badge-paid' }], duration: '1h', desc: 'Wine tasting at one of the region’s most famous cellar doors. Note Sunday surcharge.' },
          { type: 'activity', time: '5:50 PM', title: 'Drive', duration: '15m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:05 PM', title: 'Monroe’s Burgers & Beers', priceTag: 'A$20-40', badges: [{ label: 'Dinner', className: 'badge-food' }], href: 'https://maps.app.goo.gl/SZoFZHkiGSLzjTHr7', desc: 'Casual burger dinner near the winery circuit.' },
          { type: 'activity', time: '7:35 PM', title: 'Drive', duration: '5m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:40 PM', title: 'Check-in · Healesville Motor Inn', priceTag: 'A$208', desc: '45 Maroondah Hwy — confirm check-in time with accommodation.' },
          { type: 'activity', time: '7:55 PM', title: 'Shower, rest' },
          { type:'activity', time: '10:55 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 02',
        title: 'Healesville Sanctuary & wineries',
        date: '16 Aug 2026',
        activities: [
          { type: 'activity', time: '7:45 AM', title: 'Wake up and get ready', desc: 'Early start for the wildlife day.' },
          { type: 'activity', time: '8:15 AM', title: 'Drive', duration: '5m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:20 AM', title: 'Beechworth Bakery Healesville', href: 'https://maps.app.goo.gl/iTmdRuPUSe4yiLXG6', badges: [{ label: 'Breakfast', className: 'badge-food' }], priceTag: '<A$20', desc: 'A local favourite for pastries, pies and good coffee.' },
          { type: 'activity', time: '8:50 AM', title: 'Drive', duration: '10m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:00 AM', title: 'Healesville Sanctuary', imgSrc: '/images/healesville-sanctuary.png', href: 'https://maps.app.goo.gl/mPBjrszt8E22hwdX9', badges: [{ label: 'Wildlife', className: 'badge-paid' }], priceTag: 'A$54.50', duration: '2h 30m', desc: 'Native Australian wildlife zoo open 9am–5pm. See koalas, wombats, platypus, devils and raptors.' },
          { type: 'activity', time: '11:30 AM', title: 'Drive', duration: '10m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '11:40 AM', title: 'Four Pillars Gin Distillery', imgSrc: '/images/four-pillars-gin-distillery.png', href: 'https://maps.app.goo.gl/JCvAqrGFzubAzkpr7', badges: [{ label: 'Tasting', className: 'badge-paid' }], priceTag: 'A$15-30', duration: '1h', desc: 'Bench tastings run from 10:30am–5pm.' },
          { type: 'activity', time: '12:40 PM', title: 'Drive', duration: '10m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '12:50 PM', title: 'CHANDON Australia', imgSrc: '/images/chandon-australia.png', href: 'https://maps.app.goo.gl/LjUZtJqobAbHfXEC7', badges: [{ label: 'Tasting', className: 'badge-paid' }], priceTag: 'A$22.00', duration: '30m', desc: 'Sparkling wine estate tours and tastings.' }
        ]
      },
    ]
  },
  {
    id: 'dandenong',
    tag: 'Region 2 of 7',
    title: 'Dandenong Ranges',
    date: '16–17 Aug 2026 — Tearooms, ferns & steam trains',
    days: [
      {
        number: 'Day 02 (cont.)',
        title: 'Sassafras, Puffing Billy & morning drive',
        date: '16 Aug 2026',
        activities: [
          { type: 'activity', time: '1:20 PM', title: 'Drive', duration: '35m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '1:55 PM', title: 'Miss Marple\'s Tearoom', badges: [{ label: 'Lunch', className: 'badge-food' }], priceTag: 'A$20-40', href: 'https://maps.app.goo.gl/8T7LfQvuVJM7ng258', desc: 'English-style tearoom in Sassafras.' },
          { type: 'activity', time: '2:55 PM', title: 'Sassafras Village', href: 'https://maps.app.goo.gl/kir9kn2tuf3VFvwg9', desc: 'Quaint mountain village with cozy shops and tearooms.' },
          { type: 'activity', time: '3:10 PM', title: 'Drive', duration: '5m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '3:15 PM', title: 'Dandenong Ranges Botanic Garden', imgSrc: '/images/dandenong-ranges-botanic-garden.png', href: 'https://maps.app.goo.gl/XmFsgC5FiZ7xv7QT7', badges: [{ label: 'Free', className: 'badge-time' }], priceTag: 'Free', duration: '1h 45m', desc: 'Beautiful gardens with lakes and walking paths. Gates close at 5pm.' },
          { type: 'activity', time: '5:00 PM', title: 'Drive', duration: '10m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:10 PM', title: 'Burkes Lookout', imgSrc: '/images/burkes-lookout.png', href: 'https://maps.app.goo.gl/vW32VVabDUFMjM5B8', badges: [{ label: 'Free', className: 'badge-time' }], priceTag: 'Free', desc: 'Short scenic stop for sunset views.' },
          { type: 'activity', time: '5:40 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:40 PM', title: 'Dinner', badges: [{ label: 'Dinner', className: 'badge-food' }], desc: 'Local dinner stop in the ranges.' },
          { type: 'activity', time: '7:10 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:10 PM', title: 'Check-in', desc: 'Confirm arrival time with accommodation.' },
          { type: 'activity', time: '7:25 PM', title: 'Shower, rest' },
          { type: 'activity', time: '10:25 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 03 ',
        title: 'Dandenong Ranges National Park',
        date: '17 Aug 2026',
        activities: [
          { type: 'activity', time: '7:00 AM', title: 'Wake up and get ready' },
          { type: 'activity', time: '7:30 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:30 AM', title: 'Proserpina Bakehouse', href: 'https://maps.app.goo.gl/MrH3NzTQm5NZZNV28', badges: [{ label: 'Breakfast', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Breakfast bakery open from 7am for an early start.' },
          { type: 'activity', time: '8:30 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:40 AM', title: 'Dandenong Ranges National Park', imgSrc: '/images/dandenong-ranges-national-park.png', href: 'https://maps.app.goo.gl/75b1uZdTn3DrpVkYA', desc: 'Morning nature drive with short walks in the park.' },
          { type: 'activity', time: '10:40 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '10:50 AM', title: 'Puffing Billy Railway', imgSrc: '/images/puffing-billy-railway.png', href: 'https://maps.app.goo.gl/oPifx8tFJ6NSCzn5A', badges: [{ label: 'Book', className: 'badge-book' }, { label: 'Lunch', className: 'badge-food' }], priceTag: 'A$66.00', duration: '4h 25m', desc: 'Historic steam train ride. Book 2 months ahead for the best seats.' }
        ]
      }
    ]
  },
  {
    id: 'phillip',
    tag: 'Region 3 of 7',
    title: 'Phillip Island',
    date: '17–18 Aug 2026 — Penguins, seals & coastal drives',
    days: [
      {
        number: 'Day 03 (cont.)',
        title: 'Penguin Parade & Phillip Island arrival',
        date: '17 Aug 2026',
        activities: [
          { type: 'activity', time: '3:15 PM', title: 'Drive to Phillip Island', badges: [{ label: 'Drive', className: 'badge-drive' }], driveDuration: '1h 40m' },
          { type: 'activity', time: '4:55 PM', title: 'The Nobbies View Point', imgSrc: '/images/nobbies-view-point.png', href: 'https://maps.app.goo.gl/bYZK4SZvmaAd8q1RA', desc: 'Seal rocks and coastal views; may be a brief stop if timing is tight.' },
          { type: 'activity', time: '5:05 PM', title: 'Penguin Parade', imgSrc: '/images/penguin-parade.png', href: 'https://maps.app.goo.gl/svwjoPUDYarAqaKK8', badges: [{ label: 'Pre-book', className: 'badge-book' }], priceTag: 'A$34.00', duration: '1h 15m', desc: 'Little penguins arrive ~5:40–6pm; arrive early for a good seat.' },
          { type: 'activity', time: '6:20 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:35 PM', title: 'Pino\'s Trattoria', href: 'https://maps.app.goo.gl/8dN8BGCyWG2UBDh66', badges: [{ label: 'Dinner', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Italian dinner option with pasta, pizza and seafood.' },
          { type: 'activity', time: '8:05 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:10 PM', title: 'Groceries · Woolworths Cowes', href: 'https://maps.app.goo.gl/dzbNUcS1RUYvUYDU9', desc: 'Quick grocery stop to stock up for the night.' },
          { type: 'activity', time: '8:40 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:40 PM', title: 'Check-in · Phillip Island', priceTag: '~S$80-150', desc: 'Confirm check-in time with the property.' },
          { type: 'activity', time: '8:55 PM', title: 'Shower, rest' },
          { type: 'activity', time: '11:25 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 04',
        title: 'Sunrise & Phillip Island morning',
        date: '18 Aug 2026',
        activities: [
          { type: 'activity', time: '6:20 AM', title: 'Wake up and get ready' },
          { type: 'activity', time: '6:30 AM', title: 'Sunrise · Cowes Beach', href: 'https://maps.app.goo.gl/WewEwsASZG75GtFu9', desc: 'Sunrise around 6:50am at the beach.' },
          { type: 'activity', time: '7:00 AM', title: 'Get ready' },
          { type: 'activity', time: '7:10 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:30 AM', title: 'Forrest Caves', imgSrc: '/images/forrest-caves.png', href: 'https://maps.app.goo.gl/oiEWa17JC3uQLbyf6', desc: 'Low tide visit before 9:30am.' },
          { type: 'activity', time: '8:00 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:10 AM', title: 'Island Pies', href: 'https://maps.app.goo.gl/TUEgV5vAxMPCRDM77', badges: [{ label: 'Breakfast', className: 'badge-food' }], desc: 'Local pie shop for a quick breakfast.' }
        ]
      }
    ]
  },
  {
    id: 'mornington',
    tag: 'Region 4 of 7',
    title: 'Mornington Peninsula',
    date: '18 Aug 2026 — Hot springs, coastal vineyards',
    days: [
      {
        number: 'Day 04 (cont.)',
        title: 'Mornington Peninsula highlights',
        date: '18 Aug 2026',
        activities: [
          { type: 'activity', time: '8:40 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }], desc: 'Drive from Phillip Island to Mornington Peninsula.' },
          { type: 'activity', time: '10:10 AM', title: 'Cape Schanck Lighthouse', imgSrc: '/images/cape-schanck-lighthouse.png', href: 'https://maps.app.goo.gl/SUc7s3iBAp9ECgJo7',priceTag: 'Free', badges: [{ label: 'Sightseeing', className: 'badge-time' }], desc: 'Historic lighthouse with boardwalk views.' },
          { type: 'activity', time: '11:10 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '11:30 AM', title: 'Spitfire Restaurant & Grill', href: 'https://maps.app.goo.gl/ya5SQ2yW9tg6BHUF8', badges: [{ label: 'Lunch', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Harbour-view lunch in Sorrento.' },
          { type: 'activity', time: '12:30 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '12:45 PM', title: 'Peninsula Hot Springs', imgSrc: '/images/peninsula-hot-springs.png', href: 'https://maps.app.goo.gl/CvP7bVoyRYmUaLY68', priceTag: 'A$60.00', badges: [{ label: 'Relax', className: 'badge-paid' }], duration: '4h', desc: 'Thermal mineral pools. Pre-book to secure your time slot.' },
          { type: 'activity', time: '4:45 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:05 PM', title: 'Sorrento Beach', href: 'https://maps.app.goo.gl/XcNMao2brgMzWaXN7', desc: 'Picture-perfect beach with colourful bathing boxes.' },
          { type: 'activity', time: '5:20 PM', title: 'Searoad Ferries · Sorrento', imgSrc: '/images/searoad-ferries.png', href: 'https://maps.app.goo.gl/PXDhRRCmRbpYcQhPA', duration: '1h 30m', desc: 'Ferry across Port Phillip Bay; arrive 40 minutes early for vehicle boarding.' }
        ]
      }
    ]
  },
  {
    id: 'gor',
    tag: 'Region 5 of 7',
    title: 'Great Ocean Road',
    date: '18–20 Aug 2026 — Koalas, waterfalls & the Twelve Apostles',
    days: [
      {
        number: 'Day 04 (cont.)',
        title: 'Arrive Geelong / Torquay',
        date: '18 Aug 2026',
        activities: [
          { type: 'activity', time: '6:50 PM', title: 'Drive to Geelong or Torquay', desc: 'Evening drive after the ferry crossing.', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:25 PM', title: 'Dinner', badges: [{ label: 'Dinner', className: 'badge-food' }], desc: 'Dinner stop in Geelong or Torquay.' },
          { type: 'activity', time: '8:55 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:55 PM', title: 'Check-in', desc: 'Overnight stay near the start of the Great Ocean Road.' },
          { type: 'activity', time: '10:10 PM', title: 'Shower, rest' },
          { type: 'activity', time: '1:10 AM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 05',
        title: 'Great Ocean Road west to Apollo Bay',
        date: '19 Aug 2026',
        activities: [
          { type: 'activity', time: '7:30 AM', title: 'Wake up and get ready', duration: '0:30' },
          { type: 'activity', time: '8:00 AM', title: 'Drive', duration: '0:00', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:00 AM', title: 'King Of The Castle Cafe', href: 'https://maps.app.goo.gl/5CyxeYqcw41hmyRz8', priceTag: 'A$20-40', duration: '0:45', badges: [{ label: 'Breakfast', className: 'badge-food' }], desc: 'Torquay breakfast cafe open 6:30am–3pm to kick off the day.' },
          { type: 'activity', time: '8:45 AM', title: 'Drive', duration: '0:15', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:00 AM', title: 'Geelong Waterfront', imgSrc: '/images/geelong-waterfront.png', duration: '1:00', href: 'https://maps.app.goo.gl/BM8uwzSb6rsGYM5j8', desc: 'Cunningham Pier—scenic waterfront stop.' },
          { type: 'activity', time: '10:00 AM', title: 'Drive', duration: '0:00', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '10:00 AM', title: 'Wathaurong Booln Booln Cultural Centre', href: 'https://maps.app.goo.gl/dfvRuc2hMexpasVeA', priceTag: 'Free', duration: '0:45', badges: [{ label: 'Culture', className: 'badge-paid' }], desc: 'Aboriginal cultural centre celebrating the heritage of the Wathaurong people. Open 9am–4pm.' },
          { type: 'activity', time: '10:45 AM', title: 'Drive', duration: '0:20', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '11:05 AM', title: 'Bells Beach Lookout', imgSrc: '/images/bells-beach-lookout.png', href: 'https://maps.app.goo.gl/272pGk9CJ9u65KiL6', priceTag: 'Free', duration: '0:30', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'World-famous surfing beach open 24/7.' },
          { type: 'activity', time: '11:35 AM', title: 'Drive', duration: '0:10', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '11:45 AM', title: 'The Chocolateries Great Ocean Road', priceTag: 'A$4.00',href: 'https://maps.app.goo.gl/8Q3jy7hsfPnM8Gge6', duration: '0:15', desc: 'Sweet destination with free chocolate tastings, artisan ice cream, and beautiful grounds. Open 9am–5pm.' },
          { type: 'activity', time: '12:00 PM', title: 'Drive', duration: '0:25', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '12:25 PM', title: 'Memorial Arch at Eastern View', imgSrc: '/images/memorial-arch.png', href: 'https://maps.app.goo.gl/rWovoLJ1oUvYrtzy8', priceTag: 'Free', duration: '0:30', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Historic archway marking the official start of the Great Ocean Road, built by WWI veterans. Open 24/7.' },
          { type: 'activity', time: '12:55 PM', title: 'Drive', duration: '0:20', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '1:15 PM', title: 'The Salty Dog Fish & Chippery', href: 'https://maps.app.goo.gl/2KUJGJw9bokr2LHPA', badges: [{ label: 'Lunch', className: 'badge-food' }], priceTag: 'A$20-40', duration: '1:00', desc: 'Seafood lunch in a relaxed coastal town. Open 11am–8:30pm.' },
          { type: 'activity', time: '2:15 PM', title: 'Drive', duration: '0:15', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '2:30 PM', title: 'Erskine Falls', priceTag: 'Free', href: 'https://maps.app.goo.gl/e5b11awuDbFT5Xnh6', duration: '0:45', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Beautiful waterfall in the Otways. Open 24/7.' },
          { type: 'activity', time: '3:15 PM', title: 'Drive', duration: '0:15', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '3:30 PM', title: 'Teddy\'s Lookout', duration: '0:30', href: 'https://maps.app.goo.gl/jrDtJLqvnVVg1Wzi9', desc: 'Scenic viewpoint offering spectacular sweeping views over the coast and Saint George River.' },
          { type: 'activity', time: '4:00 PM', title: 'Drive', duration: '0:30', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '4:30 PM', title: 'Kennett River Nature Walk', duration: '0:45', href: 'https://maps.app.goo.gl/FwccnzC3evehTAxk8', desc: 'Prime location for spotting wild koalas in eucalyptus trees and colorful native birds.' },
          { type: 'activity', time: '5:15 PM', title: 'Drive to Apollo Bay', duration: '0:30', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:45 PM', title: 'Marriner\'s Lookout', href: 'https://maps.app.goo.gl/Ah9sHXsSqZN8bPyW8', desc: 'Short lookout stop with sweeping coastal views.' },
          { type: 'activity', time: '6:15 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:20 PM', title: 'Apollo Bay Seafood Cafe', badges: [{ label: 'Dinner', className: 'badge-food' }], href: 'https://maps.app.goo.gl/RcgCWqvoAn2gAxw66', priceTag: 'A$20-40', desc: 'Seafood dinner in Apollo Bay.' },
          { type: 'activity', time: '7:50 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:50 PM', title: 'Check-in' },
          { type: 'activity', time: '8:05 PM', title: 'Shower, rest' },
          { type: 'activity', time: '11:05 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 06',
        title: 'Twelve Apostles & Shipwreck Coast',
        date: '20 Aug 2026',
        activities: [
          { type: 'activity', time: '8:00 AM', title: 'Wake up and get ready' },
          { type: 'activity', time: '8:30 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:40 AM', title: 'Apollo Bay Bakery', href: 'https://maps.app.goo.gl/MkVZRPFrdboeZUQn9', badges: [{ label: 'Breakfast', className: 'badge-food' }], priceTag: '<A$20', desc: 'Casual bakery breakfast.' },
          { type: 'activity', time: '9:25 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:45 AM', title: 'Maits Rest Rainforest Walk', href: 'https://maps.app.goo.gl/6mDcpNN7RQAUByxx9', desc: 'Easy boardwalk trail through ancient rainforest.' },
          { type: 'activity', time: '10:30 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '11:35 AM', title: 'Gibson Steps', href: 'https://maps.app.goo.gl/rKjLCQafQXekJ33y6', desc: 'Beach-level views of the limestone stacks.' },
          { type: 'activity', time: '12:20 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '12:25 PM', title: 'Twelve Apostles', badges: [{ label: 'Free', className: 'badge-time' }], href: 'https://maps.app.goo.gl/uwBPz2A5CkVkLCs38', desc: 'World-famous coastal limestone formations.' },
          { type: 'activity', time: '1:10 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '1:25 PM', title: '12 Rocks Beach Bar Cafe', href: 'https://maps.app.goo.gl/TDBm14sUkAR8VFQy5', badges: [{ label: 'Lunch', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Lunch near the Twelve Apostles.' },
          { type: 'activity', time: '2:25 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '2:35 PM', title: 'The Razorback', href: 'https://maps.app.goo.gl/hpeFgiwLp7pSAbGd6', desc: 'Jagged limestone formation along the coast.' },
          { type: 'activity', time: '3:05 PM', title: 'Loch Ard Gorge', href: 'https://maps.app.goo.gl/cJAXrvjnugHqV1b16', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Historic shipwreck site with dramatic cliffs.' },
          { type: 'activity', time: '3:35 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '3:55 PM', title: 'The Arch', href: 'https://maps.app.goo.gl/64ZSptKqMeWMDgqh8', desc: 'Natural offshore limestone arch.' },
          { type: 'activity', time: '4:10 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '4:15 PM', title: 'London Bridge', href: 'https://maps.app.goo.gl/CsEb6w3KteDVcSK17', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Iconic rock formation on the Shipwreck Coast.' },
          { type: 'activity', time: '4:45 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '4:50 PM', title: 'The Grotto', href: 'https://maps.app.goo.gl/BaqUeL2s1D499XXv6', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Sinkhole and cave formation with ocean views.' },
          { type: 'activity', time: '5:20 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:30 PM', title: 'Bay Of Islands', href: 'https://maps.app.goo.gl/vRvFQnaPotiTnKAH9', desc: 'Coastal rock stacks and quieter views than the Apostles.' },
          { type: 'activity', time: '6:15 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:55 PM', title: 'Dinner', badges: [{ label: 'Dinner', className: 'badge-food' }], desc: 'Dinner stop near the Great Ocean Road route.' },
          { type: 'activity', time: '8:25 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:30 PM', title: 'Check-in' },
          { type: 'activity', time: '8:45 PM', title: 'Shower, rest' },
          { type: 'activity', time: '11:45 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 07',
        title: 'Tower Hill Wildlife Reserve',
        date: '21 Aug 2026',
        activities: [
          { type: 'activity', time: '8:30 AM', title: 'Wake up and get ready' },
          { type: 'activity', time: '9:00 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:10 AM', title: 'Pavilion Cafe & Bar', href: 'https://maps.app.goo.gl/Qz5BL2rnNByHJw2UA', priceTag: 'A$20-40', badges: [{ label: 'Breakfast', className: 'badge-food' }], desc: 'Breakfast stop on the way west.' },
          { type: 'activity', time: '10:10 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '10:35 AM', title: 'Tower Hill Wildlife Reserve', href: 'https://maps.app.goo.gl/Y1ZY8isgA1uy5Nwr5', desc: 'Volcanic crater reserve for kangaroos, emus and koalas in the wild.' }
        ]
      }
    ]
  },
  {
    id: 'grampians',
    tag: 'Region 6 of 7',
    title: 'Grampians',
    date: '21–22 Aug 2026 — Mountains, hikes & wildlife',
    days: [
      {
        number: 'Day 07 (cont.)',
        title: 'Halls Gap arrival & falls',
        date: '21 Aug 2026',
        activities: [
          { type: 'activity', time: '11:35 AM', title: 'Drive to Halls Gap', duration: '1h 55m' },
          { type: 'activity', time: '1:30 PM', title: 'Grampians Restaurant Cafe & Bar', href: 'https://maps.app.goo.gl/vsxAFC6xXdZU3974A', priceTag: 'A$20-40', badges: [{ label: 'Lunch', className: 'badge-food' }], desc: 'Lunch in Halls Gap before the afternoon hikes.' },
          { type: 'activity', time: '2:30 PM', title: 'Drive', duration: '30m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '3:00 PM', title: 'Zumsteins Picnic Area & Fish Falls', href: 'https://maps.app.goo.gl/AZZ1gdQiNnAmP6h27', desc: 'Picnic stop and short waterfall walk.' },
          { type: 'activity', time: '4:30 PM', title: 'MacKenzie Falls', href: 'https://maps.app.goo.gl/XMMRZvNRkj3bsyiR6', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Victoria\'s largest waterfall; check local access conditions.' },
          { type: 'activity', time: '5:15 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '5:30 PM', title: 'Reed Lookout', href: 'https://maps.app.goo.gl/yWJacCaMC2vBMWFQ6', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Walk to the Balconies for sunset views.' },
          { type: 'activity', time: '6:30 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:50 PM', title: 'Paper Scissors Rock Brew Co', href: 'https://maps.app.goo.gl/dHMnT7NqXJ98cQei9', priceTag: 'A$20-40', badges: [{ label: 'Dinner', className: 'badge-food' }], desc: 'Brewery dinner with tasting paddle options.' },
          { type: 'activity', time: '8:20 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:25 PM', title: 'Check-in' },
          { type: 'activity', time: '8:40 PM', title: 'Shower, rest' },
          { type: 'activity', time: '11:40 PM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 08',
        title: 'Grampians sunrise & Pinnacle',
        date: '22 Aug 2026',
        activities: [
          { type: 'activity', time: '6:15 AM', title: 'Wake up and get ready' },
          { type: 'activity', time: '6:30 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:50 AM', title: 'Boroka Lookout', href: 'https://maps.app.goo.gl/XgoQGt9HDE2CXhRD9', badges: [{ label: 'Free', className: 'badge-time' }], desc: 'Sunrise views over the ranges.' },
          { type: 'activity', time: '7:20 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '7:40 AM', title: 'Livefast Cafe', href: 'https://maps.app.goo.gl/9xgVxH6U77wA14Uc7', badges: [{ label: 'Breakfast', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Breakfast before the morning walk.' },
          { type: 'activity', time: '8:40 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:45 AM', title: 'Rest and get ready', desc: 'Prepare for the Pinnacle hike.' },
          { type: 'activity', time: '9:45 AM', title: 'Drive to Wonderland Carpark', desc: 'Access point for the Pinnacle walk.' },
          { type: 'activity', time: '9:55 AM', title: 'Pinnacle Lookout', href: 'https://maps.app.goo.gl/qFpNAv6aTGzG1fQF7', badges: [{ label: 'Hike', className: 'badge-time' }], duration: '3h', desc: 'Medium-hard hike with panoramic views.' },
          { type: 'activity', time: '12:55 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '1:05 PM', title: 'Flame Brothers Cafe Restaurant & Bar', href: 'https://maps.app.goo.gl/QL74Hh5FUpJ4REDR9', badges: [{ label: 'Lunch', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Lunch back in Halls Gap.' },
          { type: 'activity', time: '2:15 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '2:50 PM', title: 'Seppelt Cellar Door', href: 'https://maps.app.goo.gl/zEMeTqRrPjwSqNyB6', priceTag: 'A$5-28', badges: [{ label: 'Tasting', className: 'badge-book' }], desc: 'Wine tasting and optional underground tour.' }
        ]
      }
    ]
  },
  {
    id: 'ballarat',
    tag: 'Region 7 of 7',
    title: 'Ballarat & Sovereign Hill',
    date: '22–24 Aug 2026 — Gold rush history',
    days: [
      {
        number: 'Day 08 (cont.)',
        title: 'Drive to Ballarat',
        date: '22 Aug 2026',
        activities: [
          { type: 'activity', time: '4:00 PM', title: 'Drive to Ballarat', duration: '1h 15m', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '', title: 'Ballarat Wildlife Park', href: 'https://maps.app.goo.gl/enS7cZ5ckaQMsBQx9', priceTag: 'A$35.00', duration: '2h', desc: 'Interactive wildlife park with hands-on animal experiences.' },
          { type: 'activity', time: '5:15 PM', title: 'Ballarat Botanical Gardens', href: 'https://maps.app.goo.gl/ubFsQLN6NFS3m1pX8', desc: 'Walk around Lake Wendouree and the gardens.' },
          { type: 'activity', time: '6:15 PM', title: 'Walk around the city', desc: 'Evening stroll near Ballarat Town Hall.' },
          { type: 'activity', time: '7:15 PM', title: 'Schnitz Ballarat', href: 'https://maps.app.goo.gl/SkLWrqfZXzPTXP1Y6', badges: [{ label: 'Dinner', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Casual schnitzel dinner in Ballarat.' },
          { type: 'activity', time: '8:45 PM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '8:55 PM', title: 'Check-in' },
          { type: 'activity', time: '9:10 PM', title: 'Shower, rest' },
          { type: 'activity', time: '12:25 AM', title: 'Sleep' }
        ]
      },
      {
        number: 'Day 09',
        title: 'Sovereign Hill & departure',
        date: '23 Aug 2026',
        activities: [
          { type: 'activity', time: '8:30 AM', title: 'Wake up, get ready and check out' },
          { type: 'activity', time: '9:00 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '9:05 AM', title: 'Beechworth Bakery Ballarat', href: 'https://maps.app.goo.gl/FNknE4YzcGd8gyeC6', badges: [{ label: 'Breakfast', className: 'badge-food' }], priceTag: '<A$20', desc: 'Breakfast before the gold rush experience.' },
          { type: 'activity', time: '9:50 AM', title: 'Drive', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '10:00 AM', title: 'Sovereign Hill', href: 'https://maps.app.goo.gl/bDc6esLBUpGcKHBv6', priceTag: 'A$52.50', duration: '7h', desc: 'Outdoor museum depicting the gold rush era.' },
          { type: 'activity', time: '5:00 PM', title: 'Drive to return car', badges: [{ label: 'Drive', className: 'badge-drive' }] },
          { type: 'activity', time: '6:20 PM', title: 'Return car' },
          { type: 'activity', time: '6:40 PM', title: 'Shuttle bus to airport' },
          { type: 'activity', time: '6:55 PM', title: 'Check-in' },
          { type: 'activity', time: '7:25 PM', title: 'Bar Pulpo by MoVida', href: 'https://maps.app.goo.gl/PuQdEWt7jEebvzgd6', badges: [{ label: 'Dinner', className: 'badge-food' }], priceTag: 'A$20-40', desc: 'Dinner near the airport before departure.' },
          { type: 'activity', time: '8:25 PM', title: 'Go to departure gate' },
          { type: 'activity', time: '9:40 PM', title: 'Depart Melbourne', desc: 'Scoot TR39 overnight flight to Singapore.' }
        ]
      },
      {
        number: 'Day 10',
        title: 'Return to Singapore',
        date: '24 Aug 2026',
        activities: [
          { type: 'activity', time: '3:35 AM', title: 'Reach Singapore', desc: 'Arrive back in Singapore.' },
          { type: 'activity', time: '4:20 AM', title: 'Grab back' },
          { type: 'activity', time: '4:40 AM', title: 'Shower' },
          { type: 'activity', time: '5:00 AM', title: 'Sleep' },
          { type: 'activity', time: '8:30 AM', title: 'Wake up and get ready for work' },
          { type: 'activity', time: '8:50 AM', title: 'Travel' },
          { type: 'activity', time: '9:35 AM', title: 'Reach office' }
        ]
      }
    ]
  }
];
