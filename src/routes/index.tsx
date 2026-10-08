import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../content/HomePage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advay Engineers | Integrated Tooling & Injection Moulding" },
      {
        name: "description",
        content:
          "Injection Moulds • Engineering Plastic Components • OEM Manufacturing in Rajkot, Gujarat. In-house toolroom, Haas VMC, and automatic injection moulding machines.",
      },
      {
        property: "og:title",
        content: "Advay Engineers | Integrated Tooling & Injection Moulding",
      },
      {
        property: "og:description",
        content:
          "Injection Moulds • Engineering Plastic Components • OEM Manufacturing in Rajkot, Gujarat. In-house toolroom, Haas VMC, and automatic injection moulding machines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <HomePage {...actions} />;
}
