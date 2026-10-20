import { createFileRoute } from "@tanstack/react-router";
import { card, PageIntro, seo } from "@/components/kit";

export const Route = createFileRoute("/concept")({
  head: () => seo("Concept outline", "The layers that make up the Digital Health Wallet."),
  component: Concept,
});

const layers = [
  ["Layer 1", "Identity", "Linked health ID and profile."],
  ["Layer 2", "Physical health profile", "Vitals tracked as trends."],
  ["Layer 3", "Investigations", "Lab reports turned into structured values."],
  ["Layer 4", "Health journey", "Every visit as a structured event."],
  ["Layer 5", "Metabolic dashboard", "Results compared with your own history."],
  ["Layer 6", "Medicines", "The full life of each medicine."],
  ["Layer 7", "Follow-up engine", "Reminders for reviews, tests and refills."],
  ["Layer 8", "Family wallet", "Linked profiles with revocable consent."],
  ["Layer 9", "Emergency card", "Only what a first responder needs."],
];

function Concept() {
  return (
    <>
      <PageIntro layer="Overview" title="Concept outline">
        A lifelong health passport built in layers, each adding meaning to the one below it.
      </PageIntro>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map(([l, t, d]) => (
          <div key={l} className={`${card} p-5`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{l}</p>
            <h2 className="mt-2 font-bold">{t}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
