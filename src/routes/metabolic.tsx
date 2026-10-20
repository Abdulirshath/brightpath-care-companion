import { createFileRoute } from "@tanstack/react-router";
import { Badge, Bars, card, PageIntro, seo, type Tone } from "@/components/kit";

export const Route = createFileRoute("/metabolic")({
  head: () => seo("Metabolic health", "Lab results read against your own previous results."),
  component: Metabolic,
});

const tests: { name: string; ref: string; unit: string; tone: Tone; tag: string; vals: number[]; delta: string }[] = [
  { name: "HbA1c", ref: "< 6.5%", unit: "%", tone: "warn", tag: "Needs attention", vals: [7.8, 7.2, 6.9], delta: "▼ 0.3" },
  { name: "Fasting glucose", ref: "70 – 100 mg/dL", unit: "mg/dL", tone: "bad", tag: "Follow-up recommended", vals: [148, 132, 126], delta: "▼ 6" },
  { name: "LDL cholesterol", ref: "< 100 mg/dL", unit: "mg/dL", tone: "bad", tag: "Discuss with physician", vals: [142, 138, 134], delta: "▼ 4" },
  { name: "HDL cholesterol", ref: "> 40 mg/dL", unit: "mg/dL", tone: "ok", tag: "Stable", vals: [42, 44, 46], delta: "▲ 2" },
  { name: "Creatinine", ref: "0.7 – 1.3 mg/dL", unit: "mg/dL", tone: "ok", tag: "Stable", vals: [0.9, 0.95, 0.92], delta: "▼ 0.03" },
  { name: "Haemoglobin", ref: "13 – 17 g/dL", unit: "g/dL", tone: "ok", tag: "Stable", vals: [13.8, 14.1, 14], delta: "▼ 0.1" },
];
const months = ["Jan 26", "Apr 26", "Aug 26"];

function Metabolic() {
  return (
    <>
      <PageIntro layer="Layer 3 · Layer 5" title="Metabolic health dashboard">
        Each investigation becomes a structured record, so every result is read against your own previous results. The wallet flags status only — it never diagnoses or prescribes.
      </PageIntro>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t) => (
          <div key={t.name} className={`${card} p-5`}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-bold">{t.name}</h2>
                <p className="text-xs text-muted-foreground">Reference {t.ref}</p>
              </div>
              <Badge tone={t.tone}>{t.tag}</Badge>
            </div>
            <p className="mt-4 text-3xl font-bold">{t.vals[2]}<span className="ml-1 text-sm font-medium text-muted-foreground">{t.unit}</span></p>
            <p className="text-xs text-muted-foreground">{t.delta} since Apr 26</p>
            <Bars values={t.vals} />
            <p className="mt-2 text-[11px] text-muted-foreground">{t.vals.map((v, i) => `${months[i]}: ${v}`).join(" → ")}</p>
          </div>
        ))}
      </div>
      <div className={`${card} mt-6 p-5`}>
        <h2 className="font-bold">Investigation wallet</h2>
        <p className="mt-1 text-sm text-muted-foreground">Reports arriving as PDFs, camp printouts or lab uploads are converted into structured values and appended to the same series — so you see previous result → current result → trend.</p>
      </div>
    </>
  );
}
