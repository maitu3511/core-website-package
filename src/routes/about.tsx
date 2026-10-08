import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../content/AboutPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Advay Engineers – Redefine Excellence Since 2016" },
      {
        name: "description",
        content:
          "Established in 2016 in Rajkot, Gujarat. Keyur Vaghani (Founder), precision injection moulds, engineering plastic components, and OEM manufacturing solutions.",
      },
      {
        property: "og:title",
        content: "About Us | Advay Engineers – Redefine Excellence Since 2016",
      },
      {
        property: "og:description",
        content:
          "Established in 2016 in Rajkot, Gujarat. Keyur Vaghani (Founder), precision injection moulds, engineering plastic components, and OEM manufacturing solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <AboutPage {...actions} />;
}
