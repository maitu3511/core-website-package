import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "../content/IndustriesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications | Advay Engineers – Plastic Tooling Solutions" },
      {
        name: "description",
        content:
          "High-precision injection tooling and engineering plastic components across automotive, electrical, industrial, and consumer applications.",
      },
      {
        property: "og:title",
        content: "Applications | Advay Engineers – Plastic Tooling Solutions",
      },
      {
        property: "og:description",
        content:
          "High-precision injection tooling and engineering plastic components across automotive, electrical, industrial, and consumer applications.",
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
