import { createFileRoute } from "@tanstack/react-router";
import { card, PageIntro, seo } from "@/components/kit";

export const Route = createFileRoute("/timeline")({
  head: () => seo("My health journey", "Every consultation, test and hospital visit in one timeline."),
  component: Timeline,
});

type Ev = { type: string; title: string; where: string; date: string; rows: [string, string][] };
const years: [string, Ev[]][] = [
  ["2026", [
    { type: "Consultation", title: "Diabetology review", where: "Dr. Anita Rao · Endocrinology · Apollo, Bengaluru", date: "18 Aug 2026", rows: [
      ["Complaint", "Fatigue in the afternoons, occasional giddiness"],
      ["Clinical findings", "BP 136/88, weight 78 kg, no pedal oedema"],
      ["Diagnosis (recorded by physician)", "T2DM – partially controlled; Stage 1 hypertension"],
      ["Follow-up", "20 Nov 2026"],
      ["Prescription", "Metformin 1000 mg – BD · Telmisartan 40 mg – OD · Atorvastatin 10 mg – HS"],
      ["Investigations advised", "HbA1c, Lipid profile, Serum creatinine"],
      ["Outcome", "HbA1c improved 7.2% → 6.9%"],
    ] },
    { type: "Investigation", title: "Lipid profile + HbA1c", where: "Metropolis Diagnostics", date: "12 Aug 2026", rows: [["Outcome", "HbA1c 6.9% · LDL 134 mg/dL · HDL 46 mg/dL"]] },
    { type: "Consultation", title: "Quarterly review", where: "Dr. Anita Rao · Endocrinology", date: "02 Apr 2026", rows: [
      ["Complaint", "Routine review"], ["Clinical findings", "BP 134/86, weight 76 kg"],
      ["Diagnosis (recorded by physician)", "T2DM – improving"], ["Follow-up", "18 Aug 2026"],
      ["Prescription", "Metformin 500 mg – BD · Telmisartan 40 mg – OD"],
      ["Investigations advised", "HbA1c, Fasting glucose"], ["Outcome", "Dose escalation advised"],
    ] },
  ]],
  ["2025", [
    { type: "Hospitalisation", title: "Day-care admission – dehydration", where: "Sparsh Hospital, Bengaluru", date: "14 Nov 2025", rows: [
      ["Diagnosis (recorded by physician)", "Acute gastroenteritis with dehydration"], ["Outcome", "Discharged after 1 day, recovered fully"]] },
    { type: "Vaccination", title: "Influenza vaccine (annual)", where: "Urban PHC, Indiranagar", date: "20 Jun 2025", rows: [["Outcome", "No adverse event"]] },
  ]],
  ["2024", [
    { type: "Health check", title: "Employer annual health camp", where: "CSR Health Camp · Industrial Park", date: "09 Feb 2024", rows: [["Outcome", "Pre-diabetes flagged, referred to physician"]] },
  ]],
];

function Timeline() {
  return (
    <>
      <PageIntro layer="Layer 4" title="My health journey">
        Every consultation generates a structured event: complaint, findings, diagnosis, prescription, investigations advised, follow-up and outcome.
      </PageIntro>
      {years.map(([y, evs]) => (
        <section key={y} className="mb-8">
          <h2 className="mb-4 text-xl font-bold">{y}</h2>
          <ol className="space-y-4 border-l-2 border-accent pl-6">
            {evs.map((e) => (
              <li key={e.title} className={`${card} relative p-5`}>
                <span className="absolute -left-[33px] top-6 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">{e.type}</span>
                    <h3 className="mt-2 font-bold">{e.title}</h3>
                    <p className="text-xs text-muted-foreground">{e.where}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                </div>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {e.rows.map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-muted p-3">
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                      <dd className="mt-1 text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  );
}
