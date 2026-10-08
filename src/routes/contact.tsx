import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../content/ContactPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact / RFQ | Advay Engineers – Rajkot Works & Quotation" },
      {
        name: "description",
        content:
          "Send your component drawing, mould requirement or manufacturing brief. Connect with our engineering team in Veraval (Shapar), Rajkot.",
      },
      {
        property: "og:title",
        content: "Contact / RFQ | Advay Engineers – Rajkot Works & Quotation",
      },
      {
        property: "og:description",
        content:
          "Send your component drawing, mould requirement or manufacturing brief. Connect with our engineering team in Veraval (Shapar), Rajkot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <ContactPage {...actions} />;
}
