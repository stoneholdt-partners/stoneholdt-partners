export type City = {
  name: string;
  /** One-line description of the local market. */
  summary: string;
  /** Genuinely local context (keep specific; thin text hurts SEO). */
  paragraphs: string[];
};

export type StateMarket = {
  slug: string;
  name: string;
  abbr: string;
  /** Short line for cards and meta descriptions. */
  summary: string;
  intro: string[];
  cities: City[];
  /** Lifestyle photo in /public/cover-photos used on the page hero. */
  image: string;
  imageAlt: string;
};

/**
 * Markets are organized by state, with cities covered inside each state page. Add a city
 * only when there is real local content to write; thin text is an SEO liability.
 */
export const STATES: StateMarket[] = [
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    summary: "Eastside redevelopment, including Bellevue, Kirkland and Clyde Hill.",
    intro: [
      "Washington's Eastside is one of the strongest redevelopment markets in the country. Many neighborhoods are filled with mid-century and 1970s to 1990s homes on lots that support significantly larger new construction, and builders actively look for them.",
      "We have recently acquired Bellevue properties for redevelopment (see our portfolio). Whether your home is dated and tired or well kept and larger than most, we can make a direct, as-is offer.",
    ],
    cities: [
      {
        name: "Bellevue",
        summary: "Enatai, Northwest Bellevue, Eastgate and Bridle Trails.",
        paragraphs: [
          "Bellevue's most valuable inventory is often its oldest: mid-century ramblers and 1960s to 1980s homes on generous lots in Enatai, Northwest Bellevue, Eastgate and the Bridle Trails area. In many of these neighborhoods the land is worth more than the structure, and new custom construction is the natural next chapter.",
        ],
      },
      {
        name: "Kirkland",
        summary: "Market, Juanita, Houghton and close-in streets.",
        paragraphs: [
          "Kirkland's waterfront-adjacent neighborhoods and close-in streets have seen steady teardown and rebuild activity as older homes give way to new construction. Homes that need substantial work are often better sold as-is than renovated, and well-kept homes on strong lots can appeal to builders too.",
        ],
      },
      {
        name: "Clyde Hill",
        summary: "A small, high-value city beside Bellevue.",
        paragraphs: [
          "Clyde Hill is a compact, entirely residential city next to Bellevue, known for larger lots, view properties and some of the Eastside's highest home values. Much of its housing was built decades ago, and owners often weigh a costly renovation against selling to a builder who values the lot.",
        ],
      },
    ],
    image: "/cover-photos/CO.jpg",
    imageAlt: "Modern luxury home lit at dusk",
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    summary: "Close-in Washington, D.C. suburbs, including Bethesda.",
    intro: [
      "Maryland's close-in suburbs of Washington, D.C. combine high land values with a large stock of older homes. Builders are steadily replacing mid-century houses with larger new homes, and sellers benefit from that demand.",
    ],
    cities: [
      {
        name: "Bethesda",
        summary: "Older homes inside the Beltway on valuable lots.",
        paragraphs: [
          "Bethesda's close-in neighborhoods are full of mid-century and older homes on lots that support significantly larger new construction, a pattern that has driven steady teardown and rebuild activity for years. Proximity to Washington, D.C. keeps land values high. Sellers of dated properties, estates and even well-kept homes on strong lots often prefer a direct as-is sale to renovating and listing.",
        ],
      },
    ],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    summary: "Northern Virginia redevelopment, including McLean.",
    intro: [
      "Northern Virginia's established neighborhoods have large lots and substantial older homes, and new luxury construction is a common next step. Owners of long-held properties often face a choice between a major update and selling to a builder.",
    ],
    cities: [
      {
        name: "McLean",
        summary: "Established homes on large lots, many ready for rebuild.",
        paragraphs: [
          "McLean is defined by large lots and substantial residences, with many 1950s to 1980s homes sitting on land that supports much larger new houses. We make direct as-is offers and handle the sale privately, with no listing and no showings, and with flexible closing for sellers who need time to plan a move.",
        ],
      },
    ],
    image: "/cover-photos/CO.jpg",
    imageAlt: "Modern luxury home lit at dusk",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    summary: "Established Charlotte neighborhoods with strong rebuild demand.",
    intro: [
      "North Carolina's largest city has several established neighborhoods where older homes sit on lots that builders value for new construction. Local rules, including tree and historic overlays, vary by neighborhood, which makes experience matter.",
    ],
    cities: [
      {
        name: "Charlotte",
        summary: "Myers Park, Eastover, Dilworth and SouthPark.",
        paragraphs: [
          "Charlotte's established neighborhoods, including Myers Park, Eastover, Dilworth and SouthPark, mix older homes with newer construction, and many mid-century properties sit on lots that support a larger rebuild. We evaluate each property on its lot and location and make a direct as-is offer, so you do not have to repair, stage or list the home.",
        ],
      },
    ],
    image: "/cover-photos/CO.jpg",
    imageAlt: "Modern luxury home lit at dusk",
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    summary: "South Tampa, Naples and West Palm Beach.",
    intro: [
      "Florida's coastal markets are land-driven. Older homes are regularly replaced by new construction, and flood-zone and elevation requirements, storm damage and rising insurance costs often make renovating an older house impractical. For many owners, selling as-is is the simpler path.",
    ],
    cities: [
      {
        name: "South Tampa",
        summary: "Hyde Park, Palma Ceia, Beach Park and Davis Islands.",
        paragraphs: [
          "South Tampa's older bungalows and mid-century homes sit on some of the area's most sought-after land. Flood-zone and elevation requirements, hurricane damage and insurance costs make renovating an older house expensive. We buy South Tampa homes in any condition, including storm-damaged and deferred-maintenance properties, with no repair requests and no commissions.",
        ],
      },
      {
        name: "Naples",
        summary: "Older and waterfront homes on high-value lots.",
        paragraphs: [
          "Naples is one of Florida's most land-driven luxury markets. Many older homes, especially near the water, are bought for their lots and then rebuilt, and post-storm rebuilding rules and elevation requirements can make renovating an older property impractical. We buy privately and as-is, with no listing or showings.",
        ],
      },
      {
        name: "West Palm Beach",
        summary: "El Cid, Flamingo Park, Northwood and nearby areas.",
        paragraphs: [
          "West Palm Beach combines older neighborhoods with strong demand from the island and the coast. Some areas, such as certain historic districts, have additional review requirements for demolition and changes, so what can be done with a property depends heavily on where it sits. We evaluate each property's lot, location and local constraints before making an as-is offer.",
        ],
      },
    ],
    image: "/cover-photos/WA.jpg",
    imageAlt: "Modern luxury home with glass balconies and landscaped garden",
  },
];

export function getState(slug: string) {
  return STATES.find((s) => s.slug === slug);
}

export function cityList(s: StateMarket) {
  return s.cities.map((c) => c.name).join(", ");
}
