export type Market = {
  slug: string;
  name: string;
  region: string;
  /** One-line summary used on cards and meta descriptions. */
  summary: string;
  /** Local context paragraphs (keep these genuinely specific to the market). */
  context: string[];
  homeTypes: string[];
};

/**
 * Launch set: markets where we actively acquire. Add a market only when there is
 * real local content to write; thin templated pages are an SEO liability.
 */
export const MARKETS: Market[] = [
  {
    slug: "bellevue-wa",
    name: "Bellevue",
    region: "Washington",
    summary: "Older Eastside homes on high-value lots, from Enatai and Northwest Bellevue to Eastgate.",
    context: [
      "Bellevue's most valuable inventory is often its oldest: mid-century ramblers and 1960s to 1980s homes on generous lots in Enatai, Northwest Bellevue, Eastgate and the Bridle Trails area. In many of these neighborhoods the land is worth more than the structure, and new custom construction is the natural next chapter.",
      "We have recently acquired Bellevue properties for redevelopment, including parcels in Eastgate, Northwest Bellevue and Enatai (see our portfolio). If your home is dated, deferred on maintenance, or simply not worth renovating, we can make a direct as-is offer.",
    ],
    homeTypes: ["Mid-century ramblers", "1970s to 1990s homes", "Large-lot tear-downs", "Estate and inherited homes"],
  },
  {
    slug: "medina-wa",
    name: "Medina",
    region: "Washington",
    summary: "Lakefront and view properties where land value drives the sale, from dated estates to full tear-downs.",
    context: [
      "Medina is one of the most land-driven markets in the Northwest. Many older homes on Lake Washington and the surrounding streets are sold for their lot, view and location, then rebuilt. Sellers here often value discretion as much as price.",
      "We buy privately and as-is, with no listing, no showings and no staging, which suits owners of high-profile properties and estates who prefer a quiet sale.",
    ],
    homeTypes: ["Waterfront and view estates", "Dated luxury homes", "Teardown lots", "Estate sales"],
  },
  {
    slug: "mercer-island-wa",
    name: "Mercer Island",
    region: "Washington",
    summary: "Established island homes on sizeable lots, many due for a rebuild or major renovation.",
    context: [
      "Mercer Island's housing stock includes a large number of 1950s to 1980s homes on lots that support significantly larger new construction. Owners who have lived in the same house for decades often face a choice between a costly update and selling as-is.",
      "We can make a direct cash offer on the home as it stands, so you skip the repairs, the listing process and the carrying costs.",
    ],
    homeTypes: ["Mid-century and 1980s homes", "Lake-view properties", "Long-held family homes"],
  },
  {
    slug: "kirkland-wa",
    name: "Kirkland",
    region: "Washington",
    summary: "Older Kirkland homes in the Market, Juanita and Houghton areas with strong redevelopment value.",
    context: [
      "Kirkland's waterfront-adjacent neighborhoods and close-in streets have seen steady teardown and rebuild activity as older homes give way to new construction. Homes that need substantial work are often better sold as-is than renovated.",
      "We evaluate each property on its lot, location and redevelopment potential, then make a straightforward offer.",
    ],
    homeTypes: ["Older close-in homes", "Waterfront-adjacent lots", "Homes needing major work"],
  },
  {
    slug: "denver-co",
    name: "Denver",
    region: "Colorado",
    summary: "Older Denver homes in established neighborhoods, including infill and tear-down candidates.",
    context: [
      "Denver's established neighborhoods contain many pre-war and mid-century homes on lots that support larger infill construction. Sellers with inherited, dated or heavily deferred properties often prefer an as-is sale over a renovation and listing.",
      "We make direct as-is offers on Denver properties and can work to your closing timeline.",
    ],
    homeTypes: ["Pre-war and mid-century homes", "Infill and tear-down candidates", "Inherited properties"],
  },
  {
    slug: "cherry-hills-village-co",
    name: "Cherry Hills Village",
    region: "Colorado",
    summary: "Large-lot luxury properties and estates in Cherry Hills Village, sold privately and as-is.",
    context: [
      "Cherry Hills Village is defined by large lots and high-end residences, many built decades ago. Owners of older estates often want a discreet, certain sale without the demands of preparing and showing a large property.",
      "We buy privately and as-is, and can accommodate longer timelines when a move needs to be planned.",
    ],
    homeTypes: ["Large-lot estates", "Dated luxury homes", "Teardown and rebuild lots"],
  },
  {
    slug: "englewood-co",
    name: "Englewood",
    region: "Colorado",
    summary: "Older Englewood homes with redevelopment value close to Denver.",
    context: [
      "Englewood's central location and older housing stock make it a steady source of redevelopment opportunities. Dated homes and lots with outdated improvements are often worth more to a builder than to a retail buyer.",
      "We make a direct cash offer with no repairs required and no commissions.",
    ],
    homeTypes: ["Older single-family homes", "Redevelopment lots", "Homes needing repair"],
  },
];

export function getMarket(slug: string) {
  return MARKETS.find((m) => m.slug === slug);
}
