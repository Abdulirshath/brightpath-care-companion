import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Badge, card, PageIntro, seo, type Tone } from "@/components/kit";

export const Route = createFileRoute("/family")({
  head: () => seo("Family", "Linked family health profiles with revocable consent."),
  component: Family,
});

const people: [string, string, string, Tone][] = [
  ["Lakshmi C P", "Spouse · 45 yrs", "Thyroid review due", "warn"],
  ["Arjun C P", "Son · 16 yrs", "Vaccination up to date", "ok"],
  ["Shanta Bai", "Mother · 74 yrs", "BP log missing for 3 weeks", "bad"],
];
const principles = [
  "The citizen owns the record; the platform is a custodian.",
  "Every share is purpose-bound, time-bound and revocable.",
  "Linked family access is logged and visible to the member.",
  "Minors transition to self-control at majority.",
  "No identifiable health data is ever sold.",
  "Aggregate analytics are anonymised and consented.",
];

function Family() {
  return (
    <>
      <PageIntro layer="Layer 8" title="Family health wallet">
        In India health decisions are frequently made at family level. One wallet can hold linked profiles — always with explicit authorisation and revocable consent.
      </PageIntro>
      <div className="grid gap-4 md:grid-cols-3">
        {people.map(([n, r, s, t]) => (
          <div key={n} className={`${card} p-5`}>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-bold text-accent-foreground">{n[0]}</div>
            <h2 className="mt-3 font-bold">{n}</h2>
            <p className="text-xs text-muted-foreground">{r}</p>
            <div className="mt-3"><Badge tone={t}>{s}</Badge></div>
            <p className="mt-4 text-[11px] text-muted-foreground">Access granted by consent · revocable anytime</p>
          </div>
        ))}
      </div>
      <div className={`${card} mt-6 p-5`}>
        <h2 className="font-bold">Consent principles</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p} className="flex gap-2 text-sm"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" />{p}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
