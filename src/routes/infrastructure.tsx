import { createFileRoute } from "@tanstack/react-router";
import { InfrastructurePage } from "../content/InfrastructurePage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Engineering Infrastructure | Advay Engineers – Haas VMC Toolroom" },
      {
        name: "description",
        content:
          "In-house toolroom setup, Haas VMC high-speed machining centers, 3 automatic injection moulding machines, and CAD/CAM engineering facilities.",
      },
      {
        property: "og:title",
        content: "Engineering Infrastructure | Advay Engineers – Haas VMC Toolroom",
      },
      {
        property: "og:description",
        content:
          "In-house toolroom setup, Haas VMC high-speed machining centers, 3 automatic injection moulding machines, and CAD/CAM engineering facilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <InfrastructurePage {...actions} />;
}
