export type Deal = {
  id: string;
  title: string;
  area: string;
  status: "In Escrow" | "Closed";
  street: string;
  parcel: string;
};

/** Add a deal or flip a status here; the portfolio page and homepage strip both read this. */
export const DEALS: Deal[] = [
  { id: "3756", title: "Eastgate Redevelopment", area: "East Bellevue", status: "In Escrow", street: "/portfolio/3756-Street.jpg", parcel: "/portfolio/3756-Parcel.jpg" },
  { id: "1520", title: "NW Bellevue Redevelopment", area: "Northwest Bellevue", status: "Closed", street: "/portfolio/1520-Street.jpg", parcel: "/portfolio/1520-Parcel.jpg" },
  { id: "1646", title: "Enatai Redevelopment", area: "West Bellevue", status: "Closed", street: "/portfolio/1646-Street.jpg", parcel: "/portfolio/1646-Parcel.jpg" },
  { id: "15126", title: "Eastgate Redevelopment", area: "East Bellevue", status: "In Escrow", street: "/portfolio/15126-Street.jpg", parcel: "/portfolio/15126-Parcel.jpg" },
];
