import { createFileRoute } from "@tanstack/react-router";
import { Badge, card, PageIntro, seo, type Tone } from "@/components/kit";

export const Route = createFileRoute("/medications")({
  head: () => seo("Medicines", "Your medicines over time, follow-ups due and overlap checks."),
  component: Meds,
});

const meds: [string, string, string, string, string, Tone][] = [
  ["Metformin", "1000 mg · twice daily", "Blood glucose control", "Aug 2026", "Changed by doctor", "warn"],
  ["Telmisartan", "40 mg · once daily", "Blood pressure", "Mar 2023", "Continuing", "ok"],
  ["Atorvastatin", "10 mg · at night", "Cholesterol", "Aug 2026", "Started", "info"],
  ["Vitamin D3", "60,000 IU · weekly", "Vitamin D deficiency", "Jan 2026", "Completed", "ok"],
  ["Pantoprazole", "40 mg · once daily", "Acidity", "Nov 2025", "Stopped", "bad"],
];
const fu: [string, string, string][] = [
  ["Diabetology review", "Consultation", "Dr. Anita Rao – carry latest HbA1c · due 20 Nov 2026"],
  ["Repeat HbA1c", "Investigation", "Advised at last consultation · due 10 Nov 2026"],
  ["Annual eye screening", "Preventive", "Diabetic retinopathy screening due · due 28 Sep 2026"],
  ["Refill Telmisartan", "Medicine", "Stock likely exhausted · due 25 Aug 2026 · overdue"],
];

function Meds() {
  return (
    <>
      <PageIntro layer="Layer 6 · Layer 7" title="Medicines & follow-up engine">
        A medicine is not a one-time prescription line. The wallet records its life: started, continuing, stopped, changed by the doctor, completed.
      </PageIntro>
      <div className={`${card} min-w-0 p-5`}>
        <div className="divide-y divide-border sm:hidden">
          {meds.map((m) => (
            <section key={m[0]} className="py-4 first:pt-0 last:pb-0">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
                <h2 className="min-w-0 text-sm font-semibold">{m[0]}</h2>
                <Badge tone={m[5]}>{m[4]}</Badge>
              </div>
              <dl className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Dose</dt><dd>{m[1]}</dd>
                <dt className="text-muted-foreground">Purpose</dt><dd>{m[2]}</dd>
                <dt className="text-muted-foreground">Since</dt><dd>{m[3]}</dd>
              </dl>
            </section>
          ))}
        </div>
        <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>{["Medicine", "Dose", "Purpose", "Since", "Status"].map((h) => <th key={h} className="py-2 pr-4 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {meds.map((m) => (
              <tr key={m[0]} className="border-t border-border">
                <td className="py-3 pr-4 font-semibold">{m[0]}</td><td className="pr-4">{m[1]}</td><td className="pr-4 text-muted-foreground">{m[2]}</td><td className="pr-4">{m[3]}</td>
                <td><Badge tone={m[5]}>{m[4]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className={`${card} p-5`}>
          <h2 className="font-bold">Follow-up engine</h2>
          <ul className="mt-4 space-y-3">
            {fu.map(([t, k, s]) => (
              <li key={t} className="rounded-xl border border-border p-3">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2 sm:flex sm:items-center sm:justify-between">
                  <p className="min-w-0 text-sm font-semibold">{t}</p>
                  <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[11px] text-accent-foreground">{k}</span>
                </div>
                <p className={`mt-1 text-xs ${s.includes("overdue") ? "text-destructive" : "text-muted-foreground"}`}>{s}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${card} p-5`}>
          <h2 className="font-bold">Medication reconciliation</h2>
          <p className="mt-1 text-sm text-muted-foreground">When prescriptions come from more than one provider, the wallet flags overlaps for confirmation:</p>
          <div className="mt-4 rounded-xl bg-danger-soft p-4 text-sm text-destructive">
            Two medicines appear to have overlapping purposes (acid suppression). Please confirm with your physician before stopping either.
          </div>
          <p className="mt-4 text-xs text-muted-foreground">The wallet never changes a prescription. It only surfaces what a physician should review.</p>
        </div>
      </div>
    </>
  );
}
