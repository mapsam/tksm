export function groupByKey(key: string, list: Array<any>) {
  return list.reduce((memo, item) => {
    const keyName = item[key];
    if (!(keyName in memo)) memo[keyName] = [];
    if (keyName in memo) memo[keyName].push(item);
    return memo;
  }, {});
};

export default [
  {
    name: 'Metropolist (Venue)',
    group: 'Wedding locations',
    description: 'Metropolist is housed in the historic Ederer Building on 1st Avenue South. Built in 1919, the Ederer Crane building was used to manufacture large-scale cranes for construction projects around the area. The surrounding area offers ample parking and a 12 minute walk to the SODO light rail stop.',
    address: '2931 1st Ave S suite a, Seattle, WA 98134',
    lng: -122.33441400104783,
    lat: 47.5766910659785,
    link: 'https://metropolist.com/event-space',
    neighborhood: 'SODO / Venue'
  },
  {
    name: 'Gasworks Park (Day-After Picnic)',
    group: 'Wedding locations',
    description: 'Say hello and goodbye to the bride & groom at Gasworks Park, which provides a beautiful view of Lake Union and downtown Seattle. We\'ll provide baked goods and coffee!',
    address: '2101 N Northlake Way, Seattle, WA 98103',
    lng: -122.3338459810224,
    lat: 47.646041605543246,
    neighborhood: 'Wallingford'
  },
  // {
  //   name: 'Out-of-towner\'s shindig',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'TBD',
  // group: 'Wedding locations',
  // },
  {
    name: 'Pike Place Market',
    group: 'Iconic Seattle',
    description: 'Toss a fish, eat some cheese, buy some flowers. If you\'ve ever thought about Seattle, you\'ve thought about this place. Littered with lovely restaurants and trinket shops. We recommend the smoked salmon from Pure Food Fish Market, soup and chicken from Turkish Delight, and sampling yogurt from Ellenos. Grab some food or drinks in Belltown nearby.',
    address: '85 Pike St, Seattle, WA 98101',
    maps: 'https://g.page/pikeplacepublicmarket?share',
    lng: -122.34180380050668,
    lat: 47.60943555021687,
    link: 'https://www.pikeplacemarket.org',
    neighborhood: 'Downtown'
  },
  {
    name: 'Seattle Center & Space Needle',
    group: 'Iconic Seattle',
    description: 'The source of every Grey\'s Anatomy opening shot. Take a ride up the Space Needle, go to the Museum of Pop Culture (MoPOP), and enjoy the beauty of the Chihuly Glass Blowing Museum.',
    address: '400 Broad St, Seattle, WA 98109',
    lng: -122.34933570461915,
    lat: 47.62052354457686,
    link: 'https://www.seattlecenter.com/explore/attractions',
    neighborhood: 'Queen Anne'
  },
  {
    name: 'Ballard Locks & Fish Ladder',
    group: 'Iconic Seattle',
    description: 'Busiest locking system in the nation, operated by the Army Corps of Engineers. Check out the salmon ladder, museum, and watch the yachts come and go. Combine this with lunch or dinner in the Ballard neighborhood.',
    address: '2930 W Commodore Way, Seattle, WA 98199',
    lng: -122.39718523439699,
    lat: 47.6656271150785,
    link: 'https://www.ballardlocks.org/fish-salmon-ladder.html',
    neighborhood: 'Ballard'
  },
  {
    name: 'Fremont Troll',
    group: 'Iconic Seattle',
    description: 'It\'s a troll under a bridge! Snap a family photo with the big thing and give yourself a reason to explore the Fremont neighborhood, which has endless shops, restaurants, and views along the canal.',
    address: '820 N 36th St, Seattle, WA 98103',
    lng: -122.34750079444281,
    lat: 47.651061436935144,
    link: 'https://en.wikipedia.org/wiki/Fremont_Troll',
    neighborhood: 'Ballard'
  },
  {
    name: 'Reuben\'s Brewery',
    group: 'Breweries',
    description: 'Our favorite beer in the Ballard neighborhood. Sip a tasty ale on the large patio, perfect for groups. Within walking distance of zillions of other breweries, such as Stoup, Bale Breaker & Yonder, Lagunitas, and Fair Isle.',
    address: '5010 14th Ave NW, Seattle, WA 98107',
    lng: -122.37329874530049,
    lat: 47.665411156225375,
    link: 'https://reubensbrews.com/',
    neighborhood: 'Ballard'
  },
  {
    name: 'Fremont Brewery',
    group: 'Breweries',
    description: 'Perhaps the most successful and popular brewery in Seattle over the past decade, Fremont boasts a significant lineup of beers, has a great outdoor patio, and sits within view of Lake Union and walking distance of the Troll and Fremont. Bring your own food and spend a day here!',
    address: '1050 N 34th St, Seattle, WA 98103',
    lng: -122.34443517110086,
    lat: 47.649049893076445,
    neighborhood: 'Fremont',
    link: 'http://www.fremontbrewing.com/'
  },
  {
    name: 'Seapine Brewery',
    group: 'Breweries',
    description: 'Across the alley from the wedding venue, Seapine is our favorite brewery south of downtown.',
    neighborhood: 'SODO / Venue',
    address: '2959 Utah Ave S, Seattle, WA 98134',
    link: 'https://www.seapinebrewing.com/',
    lat: 47.57596598102043,
    lng: -122.33538846073634
  },
  {
    name: 'Cloudburst Brewing',
    group: 'Breweries',
    description: 'Award winning beers near Pike Place Market. Grab an IPA and some lunch nearby.',
    neighborhood: 'Downtown',
    address: '2116 Western Ave, Seattle, WA 98121',
    maps: 'https://goo.gl/maps/4UQnLNzi8Snc53bi8',
    link: 'http://cloudburstbrew.com/'
  },
  {
    name: 'Westland Distillery',
    group: 'Breweries',
    description: 'Looking for some real American peat? Westland Distillery has the best single malt in Seattle. Go for a flight, stay for a cocktail and a tour. Westland is on the same block as the wedding venue. Perhaps a good spot to prefunk before the ceremony?',
    address: '2931 1st Ave S, Seattle, WA 98134',
    link: 'https://www.westlanddistillery.com/',
    lng: -122.33441750116988,
    lat: 47.57661737918267,
    neighborhood: 'SODO / Venue'
  },
  {
    name: 'Seattle Art Museum',
    group: 'Arts & Culture',
    description: 'Located downtown, one block from Pike Place Market, global art collections, temporary installations, and special exhibitions from around the world bridge cultures and centuries.',
    lng: -122.33795482514711,
    lat: 47.60751942597985,
    address: '1300 1st Ave, Seattle, WA 98101',
    link: 'https://www.seattleartmuseum.org/',
    neighborhood: 'Downtown'
  },
  {
    name: 'The Center for Wooden Boats',
    group: 'Arts & Culture',
    description: 'Museum preserves & exhibits historic wooden boats, which can be rented & taken out on Lake Union.',
    address: '1010 Valley St, Seattle, WA 98109',
    lng: -122.33647097911374,
    lat: 47.62626686086474,
    link: 'http://cwb.org/',
    neighborhood: 'South Lake Union'
  },
  {
    name: 'Museum of History and Industry',
    group: 'Arts & Culture',
    description: 'The MOHAI explores Seattle\'s journey from wilderness to world city. Learn about Boeing, maritime history, and Puget Sound\'s diverse history.',
    address: '860 Terry Ave N, Seattle, WA 98109',
    lng: -122.33656310191378,
    lat: 47.62752527918924,
    link: 'https://mohai.org/',
    neighborhood: 'South Lake Union'
  },
  {
    name: 'Elliot Bay Book Co.',
    group: 'Arts & Culture',
    description: 'Located in the heart of Seattle\'s Capitol Hill neighborhood, The Elliott Bay Book Company is an independently owned bookstore founded by Walter Carr in 1973. Grab a book and sip a coffee.',
    address: '1521 10th Ave, Seattle, WA 98122',
    lng: -122.31960954361946,
    lat: 47.61467897908314,
    link: 'http://www.elliottbaybook.com/',
    neighborhood: 'Capitol Hill'
  },
  {
    name: 'Central Library',
    group: 'Arts & Culture',
    description: 'Walk around the beautiful and whacky, flagship library in Downtown. Designed by Dutch architect Rem Koolhaas, the building offers spectacular attrium views, a never-ending spiral of books, and automatic book sorting.',
    address: '1521 10th Ave, Seattle, WA 98122',
    lng: -122.31960954361946,
    lat: 47.61467897908314,
    link: 'https://www.spl.org/hours-and-locations/central-library',
    neighborhood: 'Downtown'
  },

  // {
  //   name: 'Olympic Sculpture Garden',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Belltown'
  // },
  // {
  //   name: 'Volunteer Park & Conservatory',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Capitol Hill'
  // },
  // {
  //   name: 'Discovery Park',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Magnolia'
  // },
  // {
  //   name: 'Golden Gardens',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Ballard'
  // },
  // {
  //   name: 'University of Washington Arboretum',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Capitol Hill'
  // },
  // {
  //   name: 'Green Lake',
  //   group: 'Outdoors',
  //   address: '',
  //   lng: 0.0,
  //   lat: 0.0,
  //   neighborhood: 'Green Lake'
  // },
  // {
  //   name: 'Snoqualmie Falls',
  //   group: 'Outdoors'
  // },
  {
    name: 'Chukanut Drive & Taylor Shellfish Farms',
    group: 'Day Trips',
    address: '2182 Chuckanut Drive, Bow, WA 98232',
    lng: -122.43728628279995,
    lat: 48.610483721362094,
    time: 'Half to Full day',
    description: 'Drive through the beautiful Skagit Valley agricultural area, grab some cheese from Samish Bay Cheese, carbs from Breadfarm, and find yourself eating the best oysters in the Northwest at Taylor Shellfish. When someone visits Seattle, we take them here for an iconic PNW waterfront and seafood experience.',
    link: 'https://www.taylorshellfishfarms.com/location/samish-oyster-bar-and-shellfish-market',
    neighborhood: 'Bow, WA'
  },
  // {
  //   name: 'Whidbey Island',
  //   group: 'Day Trips',
  //   lng: 0.0,
  //   lat: 0.0,
  //   time: 'Full day',
  //   description: '...'
  // },
  {
    name: 'Bainbridge Island & Ferry',
    group: 'Day Trips',
    lng: -122.33783810191454,
    lat: 47.602326113346095,
    address: 'Seattle Ferry Terminal, Seattle, WA 98104',
    description: 'Want to ride a Ferry? Don\'t have a car? Grab the Bainbridge Island ferry from Downtown Seattle! 30 minute ride each direction, no reservations required, and you can wander around the cute little town of Eagle Harbor. Ideal for a half-day trip, grabbing ice cream or a bite to eat, and getting a skyline shot of Downtown Seattle. Heck, you might even see an orca on your voyage!',
    neighborhood: 'Downtown',
    link: 'https://www.wsdot.com/Ferries/Schedule/scheduledetail.aspx?departingterm=7&arrivingterm=3&roundtrip=true'
  },
  {
    name: 'Rent a boat from The Electric Boat Company',
    group: 'Day Trips',
    description: 'Captain your own electric boat, bring a cooler of beverages and food, and sail the high seas of Lake Union and the canal in Seattle. Book boats by the hour. No previous boating experience required.',
    address: '2046 Westlake Ave N Suite 102 Seattle, WA 98109',
    link: 'https://www.theelectricboatco.com/',
    lng: -122.34008553708115,
    lat: 47.63783577526858,
    neighborhood: 'Fremont'
  },
  {
    name: 'Storyville Coffee',
    group: 'Coffee',
    description: 'Located inside Pike Place market on the 2nd floor. Get a fancy pour over and walk around the market.',
    address: '94 Pike St #34 Seattle, WA 98101',
    link: 'https://storyville.com/pages/locations',
    neighborhood: 'Downtown'
  },
  {
    name: 'Victrola Coffee Roasters',
    group: 'Coffee',
    description: 'Along Pike St in Capitol Hill, great spot to grab table and do some people watching.',
    address: '310 E Pike St, Seattle, WA 98122',
    link: 'http://www.victrolacoffee.com/',
    neighborhood: 'Capitol Hill'
  },
  {
    name: 'Milstead & Co',
    group: 'Coffee',
    description: 'Sam\'s favorite snobby coffee in Seattle. Art lines the walls of this rustic-chic coffeehouse that pours brews & sells bags of beans too. Grab a cup and walk the canal or visit the Fremont troll under the bridge.',
    address: '754 N 34th St, Seattle, WA 98103',
    maps: 'https://goo.gl/maps/fs4Mhp9ZfJdP6Mcp8',
    link: 'http://www.milsteadandco.com/',
    neighborhood: 'Fremont'
  },
  {
    name: 'Espresso Vivace',
    group: 'Coffee',
    description: 'Taylor\'s favorite coffee in Seattle that sits along Broadway in Capitol Hill, offering infinite bars, restaurants, and thrift boutique shops.',
    address: '532 Broadway E, Seattle, WA 98102',
    maps: 'https://goo.gl/maps/QahRZjUqgnmoPhCe6',
    link: 'http://espressovivace.com/',
    neighborhood: 'Capitol Hill'
  }
];