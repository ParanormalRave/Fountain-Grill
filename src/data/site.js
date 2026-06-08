// Central source of truth for business info shown across the site.
// Pulled from https://fountaingrillva.com

export const site = {
  name: 'Fountain Grill',
  fullName: 'Fountain Grill of Ashburn',
  tagline: 'Where Great Food and Good Company Come Together',
  owners: ['Wali Ghause', 'Hicham Younes'],
  phone: '(571) 918-0142',
  phoneHref: 'tel:+15719180142',
  email: 'hello@fountaingrillva.com',
  address: {
    line1: '44927 George Washington Blvd STE 125',
    line2: 'Ashburn, VA 20147',
  },
  mapsUrl:
    'https://www.google.com/maps/place/Fountain+Grill/@39.0156,-77.4569,17z',
  hours: [
    { days: 'Sunday – Thursday', time: '11:00 AM – 9:00 PM' },
    { days: 'Friday – Saturday', time: '11:00 AM – 10:00 PM' },
  ],
  perks: ['Dine-In', 'Takeout', 'Catering', 'Pet-Friendly Patio'],
  links: {
    order:
      'https://order.toasttab.com/online/fountain-grill-44927-george-washington-boulevard?diningOption=takeout',
    giftCards:
      'https://order.toasttab.com/egiftcards/fountain-grill-44927-george-washington-boulevard',
    facebook: 'https://www.facebook.com/Fountaingrillashburn/',
    instagram: 'https://www.instagram.com/fountaingrillashburn/',
    yelp: 'https://www.yelp.com/biz/fountain-grill-ashburn',
  },
};

export default site;
