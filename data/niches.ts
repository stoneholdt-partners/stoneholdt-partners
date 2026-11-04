import type { Faq } from "./faqs";

export type Niche = {
  slug: string;
  /** Short label for nav/cards. */
  label: string;
  /** H1 */
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  bullets: string[];
  faqs: Faq[];
};

export const NICHES: Niche[] = [
  {
    slug: "sell-old-house-as-is",
    label: "Older homes",
    title: "Sell your older home as-is, for cash",
    metaTitle: "Sell an Old House As-Is for Cash",
    metaDescription:
      "Own an older home with dated systems or deferred maintenance? Get a private, as-is cash offer from Stoneholdt Partners. No repairs, no showings, no commissions.",
    lead: "Decades of ownership leave a house with outdated systems, deferred maintenance and a long list of things a buyer would ask you to fix. We buy older homes exactly as they are.",
    sections: [
      {
        heading: "Why older homes are hard to sell the traditional way",
        body: [
          "Retail buyers and their inspectors focus on knob-and-tube or aging wiring, original plumbing, roof age, foundation questions, and dated finishes. Each item becomes a repair request or a price reduction, and many older homes never reach a clean closing on the open market.",
          "Selling to us removes that process. We review the property as it stands, make a direct offer, and do not ask you to repair, update or even clean out the house.",
        ],
      },
      {
        heading: "What we look at",
        body: [
          "The lot, the neighborhood, recent comparable sales and what the property can become. In many established areas, an older home's value is in its land, so condition matters less to us than it does to a retail buyer.",
        ],
      },
    ],
    bullets: ["No repairs, updates or staging", "No agent commissions or listing fees", "Close on your timeline", "Contents can stay"],
    faqs: [
      { q: "Will you buy a house with an old roof, wiring or plumbing?", a: "Yes. We buy as-is, so aging systems, deferred maintenance and outdated finishes do not need to be addressed before closing." },
      { q: "Do I have to clear out my belongings?", a: "Not necessarily. Tell us what you would like to leave or take, and we will work out the details with you." },
    ],
  },
  {
    slug: "sell-teardown-property",
    label: "Tear-downs",
    title: "Sell your tear-down property for its land value",
    metaTitle: "Sell a Tear-Down Property for Cash",
    metaDescription:
      "Is your home worth more as a lot than as a house? Stoneholdt Partners buys tear-down properties and redevelopment lots with private, as-is cash offers.",
    lead: "When a home is a candidate for demolition and rebuild, its real value is the lot. We price tear-down properties on their redevelopment potential and buy them as-is.",
    sections: [
      {
        heading: "How tear-down value works",
        body: [
          "Builders and developers value a parcel on what can be built there: lot size, zoning, setbacks, views and neighborhood comps for new construction. The existing house may add little or even subtract value because of demolition cost.",
          "We have acquired properties like this for redevelopment; see our portfolio for recent Bellevue deals. We understand how to underwrite the lot, not just the building on it.",
        ],
      },
      {
        heading: "What makes it simple for the seller",
        body: [
          "You do not need to prepare the house, schedule showings, or negotiate repair credits. We make a direct offer and handle the rest, with a closing date that works for you.",
        ],
      },
    ],
    bullets: ["Priced on redevelopment potential", "No demolition or clean-up by you", "Private sale, no listing", "Experienced redevelopment buyer"],
    faqs: [
      { q: "How do you value a tear-down?", a: "We evaluate the lot, zoning and what new construction in the area sells for, then work backward to what the parcel is worth, rather than pricing the old structure." },
      { q: "Do I need to demolish the house first?", a: "No. We buy the property with the structure in place." },
    ],
  },
  {
    slug: "sell-luxury-home-as-is",
    label: "Luxury homes",
    title: "Sell your luxury home privately and as-is",
    metaTitle: "Sell a Luxury Home As-Is, Privately",
    metaDescription:
      "Sell a high-end or dated luxury home privately for cash. No listing, no showings, no staging. Stoneholdt Partners buys luxury homes and estates as-is.",
    lead: "For high-end properties, discretion and certainty matter as much as price. We buy luxury homes and estates privately, with no listing and no showings.",
    sections: [
      {
        heading: "A quieter way to sell",
        body: [
          "A public listing on a prominent property invites attention, showings by unqualified lookers, and months of uncertainty. A direct sale to us avoids all of it.",
          "Dated luxury homes are also expensive to update. If a renovation would cost more than the value it adds, selling as-is is often the better path.",
        ],
      },
      {
        heading: "Flexible terms for larger properties",
        body: [
          "We can accommodate longer closing windows, leasebacks where appropriate, and the practical needs of estates and trusts.",
        ],
      },
    ],
    bullets: ["No listing, signs or showings", "Dated luxury homes welcome", "Flexible closing and terms", "Straightforward, direct offer"],
    faqs: [
      { q: "Will my sale be public?", a: "No. There is no listing, no marketing and no open houses." },
      { q: "Can you close on a longer timeline?", a: "Yes. Many luxury sellers need time to plan a move, and we can build that into the agreement." },
    ],
  },
  {
    slug: "sell-inherited-estate-home",
    label: "Estates & inherited homes",
    title: "Sell an inherited or estate home without the burden",
    metaTitle: "Sell an Inherited or Estate Home As-Is",
    metaDescription:
      "Inherited a house you do not want to renovate or manage? Stoneholdt Partners buys inherited and estate homes as-is for cash, with flexible closing.",
    lead: "An inherited home often comes with taxes, upkeep, family decisions and a house full of belongings. We make the sale simple and respectful of the process.",
    sections: [
      {
        heading: "Built for the realities of estates",
        body: [
          "Estates involve multiple decision-makers, paperwork and timelines you do not control. We work with executors, trustees and families, and we buy the property as-is so there is no cleaning, repairing or staging to coordinate.",
        ],
      },
      {
        heading: "Skip the carrying costs",
        body: [
          "Every month an inherited property sits, taxes, insurance and utilities continue. A direct as-is sale stops those costs and gives the estate a clear outcome.",
        ],
      },
    ],
    bullets: ["Works with executors and trustees", "No cleaning, repairs or staging", "Stop carrying costs sooner", "Private and respectful"],
    faqs: [
      { q: "Can an executor or trustee sell to you?", a: "Yes. We work with the people authorized to sell and coordinate with the estate's attorney and title company." },
    ],
  },
  {
    slug: "sell-house-needs-repairs",
    label: "Homes needing repairs",
    title: "Sell a house that needs repairs, exactly as it is",
    metaTitle: "Sell a House That Needs Repairs",
    metaDescription:
      "Home needs major work? Skip the contractors. Stoneholdt Partners buys houses in any condition with as-is cash offers and no repair requests.",
    lead: "Foundation, roof, water damage, fire damage or just years of wear: we buy houses in any condition, with no repair requests and no renegotiation after inspection.",
    sections: [
      {
        heading: "No repairs, no renegotiation",
        body: [
          "Traditional buyers use inspections to renegotiate. Because we purchase as-is, the number we offer is the number you receive, with no repair credits.",
        ],
      },
    ],
    bullets: ["Any condition", "No repair credits", "No agent commissions", "Choose your closing date"],
    faqs: [
      { q: "What if the house has major damage?", a: "That is fine. Tell us what you know about its condition and we will take it from there." },
    ],
  },
];

export function getNiche(slug: string) {
  return NICHES.find((n) => n.slug === slug);
}
