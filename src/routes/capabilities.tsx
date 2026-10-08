import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "../content/CapabilitiesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Products & Capabilities | Advay Engineers – Tooling & Moulding" },
      {
        name: "description",
        content:
          "Explore precision injection moulds, automatic injection moulding, OEM contract manufacturing, 3D product development, and custom plastic parts.",
      },
      {
        property: "og:title",
        content: "Products & Capabilities | Advay Engineers – Tooling & Moulding",
      },
      {
        property: "og:description",
        content:
          "Explore precision injection moulds, automatic injection moulding, OEM contract manufacturing, 3D product development, and custom plastic parts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <CapabilitiesPage {...actions} />;
}
