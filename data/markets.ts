export type Market = {
  slug: string;
  name: string;
  /** State abbreviation, shown as "Name, ST". */
  state: string;
  /** One-line summary used on cards and meta descriptions. */
  summary: string;
  /** Local context paragraphs (keep these genuinely specific to the market). */
  context: string[];
  homeTypes: string[];
  /** Lifestyle photo in /public/cover-photos used on the page hero. */
  image: string;
  imageAlt: string;
};

/**
 * Launch set: markets where we actively acquire. Add a market only when there is
 * real local content to write; thin templated pages are an SEO liability.
 */
export const MARKETS: Market[] = [
  {
    slug: "bellevue-wa",
    name: "Bellevue",
    state: "WA",
    summary: "Older Eastside homes on high-value lots, from Enatai and Northwest Bellevue to Eastgate.",
    context: [
      "Bellevue's most valuable inventory is often its oldest: mid-century ramblers and 1960s to 1980s homes on generous lots in Enatai, Northwest Bellevue, Eastgate and the Bridle Trails area. In many of these neighborhoods the land is worth more than the structure, and new custom construction is the natural next chapter.",
      "We have recently acquired Bellevue properties for redevelopment, including parcels in Eastgate, Northwest Bellevue and Enatai (see our portfolio). If your home is dated, deferred on maintenance, or simply not worth renovating, we can make a direct as-is offer.",
    ],
    homeTypes: ["Mid-century ramblers", "1970s to 1990s homes", "Large-lot tear-downs", "Estate and inherited homes"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "kirkland-wa",
    name: "Kirkland",
    state: "WA",
    summary: "Older Kirkland homes in the Market, Juanita and Houghton areas with strong redevelopment value.",
    context: [
      "Kirkland's waterfront-adjacent neighborhoods and close-in streets have seen steady teardown and rebuild activity as older homes give way to new construction. Homes that need substantial work are often better sold as-is than renovated.",
      "We evaluate each property on its lot, location and redevelopment potential, then make a straightforward offer.",
    ],
    homeTypes: ["Older close-in homes", "Waterfront-adjacent lots", "Homes needing major work"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "clyde-hill-wa",
    name: "Clyde Hill",
    state: "WA",
    summary: "A small, high-value Eastside city next to Bellevue where lot size, views and location drive the sale.",
    context: [
      "Clyde Hill is a compact, entirely residential city beside Bellevue, known for larger lots, view properties and some of the Eastside's highest home values. Much of its housing was built decades ago, and owners are often weighing a costly renovation against selling the land.",
      "We buy privately and as-is, which suits owners who would rather not list a home in a small, close-knit community. We price the lot and what it can become, not the condition of the existing house.",
    ],
    homeTypes: ["View and large-lot homes", "Dated custom homes", "Teardown and rebuild lots", "Estate sales"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "bethesda-md",
    name: "Bethesda",
    state: "MD",
    summary: "Older Bethesda homes inside the Beltway where land value and rebuild potential drive demand.",
    context: [
      "Bethesda's close-in neighborhoods are full of mid-century and older homes on lots that support significantly larger new construction, a pattern that has driven steady teardown and rebuild activity for years. Proximity to Washington, D.C. keeps land values high.",
      "Sellers with dated or heavily deferred properties, and families handling an estate, often prefer a direct as-is sale to renovating and listing. We buy as-is and can work to your timeline.",
    ],
    homeTypes: ["Mid-century homes", "Large close-in lots", "Teardown and rebuild candidates", "Estate and inherited homes"],
    image: "/cover-photos/MN.jpg",
    imageAlt: "Luxury home with arched windows at sunset",
  },
  {
    slug: "mclean-va",
    name: "McLean",
    state: "VA",
    summary: "Established McLean homes on large lots, many ready for rebuild or a private as-is sale.",
    context: [
      "McLean is defined by large lots and substantial residences, with many 1950s to 1980s homes sitting on land that supports much larger new houses. Owners of long-held properties often face the choice between a major update and selling the lot's potential.",
      "We make direct as-is offers and handle the sale privately, with no listing and no showings, and with flexible closing for sellers who need time to plan a move.",
    ],
    homeTypes: ["1950s to 1980s homes", "Large-lot estates", "Teardown candidates", "Estate and inherited homes"],
    image: "/cover-photos/MN.jpg",
    imageAlt: "Luxury home with arched windows at sunset",
  },
  {
    slug: "charlotte-nc",
    name: "Charlotte",
    state: "NC",
    summary: "Older homes in Myers Park, Eastover, SouthPark and nearby neighborhoods with strong rebuild demand.",
    context: [
      "Charlotte's established neighborhoods, including Myers Park, Eastover, Dilworth and SouthPark, mix older homes with newer construction, and many mid-century properties sit on lots that support a larger rebuild. Local rules and tree and historic overlays vary by neighborhood, which makes experience matter.",
      "We evaluate each property on its lot and location and make a direct as-is offer, so you do not have to repair, stage or list the home.",
    ],
    homeTypes: ["Mid-century homes", "Dated luxury homes", "Teardown and rebuild lots", "Inherited properties"],
    image: "/cover-photos/CO.jpg",
    imageAlt: "Modern luxury home lit at dusk",
  },
  {
    slug: "south-tampa-fl",
    name: "South Tampa",
    state: "FL",
    summary: "Older South Tampa homes, from Hyde Park and Palma Ceia to Davis Islands, with strong land value.",
    context: [
      "South Tampa's older bungalows and mid-century homes sit on some of the area's most sought-after land. Flood-zone and elevation requirements, along with hurricane damage and rising insurance costs, make renovating an older house expensive, and many owners find selling as-is to be the simpler path.",
      "We buy South Tampa homes in any condition, including homes with storm damage or deferred maintenance, with no repair requests and no commissions.",
    ],
    homeTypes: ["Older bungalows", "Mid-century homes", "Storm-damaged properties", "Teardown and rebuild lots"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "naples-fl",
    name: "Naples",
    state: "FL",
    summary: "Older Naples homes on high-value lots, including waterfront and golf-community properties.",
    context: [
      "Naples is one of Florida's most land-driven luxury markets. Many older homes, especially near the water, are bought for their lots and then rebuilt, and post-storm rebuilding rules and elevation requirements can make renovating an older property impractical.",
      "We buy privately and as-is, with no listing or showings, which suits owners of higher-profile properties and families settling an estate.",
    ],
    homeTypes: ["Waterfront and near-water homes", "Dated luxury homes", "Storm-affected properties", "Teardown lots"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "west-palm-beach-fl",
    name: "West Palm Beach",
    state: "FL",
    summary: "Older West Palm Beach homes in El Cid, Flamingo Park, Northwood and nearby areas.",
    context: [
      "West Palm Beach combines older neighborhoods with strong demand from the island and the coast. Some areas, such as certain historic districts, have additional review requirements for demolition and changes, so what can be done with a property depends heavily on where it sits.",
      "We evaluate each property's lot, location and local constraints before making an as-is offer, and we handle the sale so you do not have to repair, stage or list.",
    ],
    homeTypes: ["Older neighborhood homes", "Dated coastal-area properties", "Homes needing major work", "Inherited properties"],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
];

export function getMarket(slug: string) {
  return MARKETS.find((m) => m.slug === slug);
}
