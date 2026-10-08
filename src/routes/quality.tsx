import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "../content/QualityPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Achievements | Advay Engineers – Repeatable Precision" },
      {
        name: "description",
        content:
          "Quality built into every stage: tool & component inspection, process control, T0/T1 trial validation, 800+ custom moulds commissioned.",
      },
      {
        property: "og:title",
        content: "Quality & Achievements | Advay Engineers – Repeatable Precision",
      },
      {
        property: "og:description",
        content:
          "Quality built into every stage: tool & component inspection, process control, T0/T1 trial validation, 800+ custom moulds commissioned.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <QualityPage {...actions} />;
}
