import { createFileRoute } from "@tanstack/react-router";
import { Badge, Bars, card, PageIntro, seo, type Tone } from "@/components/kit";

export const Route = createFileRoute("/vitals")({
  head: () => seo("Vitals", "Weight, blood pressure, pulse and oxygen shown as trends over time."),
  component: Vitals,
});

const log = [
  ["Mar 2026", 72, "128/84", 78, 98], ["Apr 2026", 74, "132/86", 80, 98], ["May 2026", 75, "136/88", 82, 97],
  ["Jun 2026", 76, "134/86", 79, 98], ["Jul 2026", 77, "138/90", 84, 97], ["Aug 2026", 78, "136/88", 81, 98],
] as const;

const charts: { title: string; tone: Tone; tag: string; note: string; values: number[] }[] = [
  { title: "Weight (kg)", tone: "warn", tag: "Needs attention", note: "72 kg → 78 kg over six months", values: log.map((r) => r[1]) },
  { title: "Blood pressure (mmHg)", tone: "bad", tag: "Follow-up recommended", note: "Systolic trending above 130", values: log.map((r) => Number(r[2].split("/")[0])) },
  { title: "Pulse (bpm)", tone: "ok", tag: "Stable", note: "Within normal range", values: log.map((r) => r[3]) },
  { title: "SpO₂ (%)", tone: "ok", tag: "Stable", note: "97–98% consistently", values: log.map((r) => r[4]) },
];

function Vitals() {
  return (
    <>
      <PageIntro layer="Layer 2" title="Physical health profile">
        Readings are shown as trends rather than isolated numbers, so a drift is visible before it becomes a diagnosis.
      </PageIntro>
      <div className="grid gap-4 md:grid-cols-2">
        {charts.map((c) => (
          <div key={c.title} className={`${card} p-5`}>
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-bold">{c.title}</h2>
              <Badge tone={c.tone}>{c.tag}</Badge>
            </div>
            <Bars values={c.values} />
            <p className="mt-3 text-xs text-muted-foreground">{c.note}</p>
          </div>
        ))}
      </div>
      <div className={`${card} mt-6 overflow-x-auto p-5`}>
        <h2 className="font-bold">Self-recorded log</h2>
        <p className="mt-1 text-xs text-muted-foreground">Citizens can record vitals at home; providers and health camps push readings through ABDM.</p>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>{["Month", "Weight", "BP", "Pulse", "SpO₂"].map((h) => <th key={h} className="py-2 pr-4 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {[...log].reverse().map((r) => (
              <tr key={r[0]} className="border-t border-border">
                <td className="py-2 pr-4 font-medium">{r[0]}</td><td className="pr-4">{r[1]} kg</td><td className="pr-4">{r[2]}</td><td className="pr-4">{r[3]}</td><td>{r[4]}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
