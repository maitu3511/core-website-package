import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "../content/IndustriesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Applications | Advay Engineers – Plastic Tooling Solutions" },
      {
        name: "description",
        content:
          "Moulds and engineered plastic parts across Automotive, Electrical, Industrial, Irrigation, Consumer Goods, Thin-Wall Enclosures, and Sanitary applications.",
      },
      {
        property: "og:title",
        content: "Industries & Applications | Advay Engineers – Plastic Tooling Solutions",
      },
      {
        property: "og:description",
        content:
          "Moulds and engineered plastic parts across Automotive, Electrical, Industrial, Irrigation, Consumer Goods, Thin-Wall Enclosures, and Sanitary applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <IndustriesPage {...actions} />;
}
