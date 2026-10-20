import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity, Pill, Scale, Heart, Droplet, Sparkles, CalendarCheck, ArrowRight,
} from "lucide-react";
import { card } from "@/components/kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard · Digital Health Wallet" },
      { name: "description", content: "See your vitals, health insights, follow-ups and medicines in one place." },
      { property: "og:title", content: "Dashboard · Digital Health Wallet" },
      { property: "og:description", content: "See your vitals, health insights, follow-ups and medicines in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const vitals = [
  { label: "Weight", icon: Scale, value: "78 kg", note: "BMI 26.4 · rising" },
  { label: "Blood pressure", icon: Heart, value: "136/88", note: "Stage 1 range" },
  { label: "HbA1c", icon: Droplet, value: "6.9%", note: "improved from 7.8%" },
  { label: "SpO₂ · Pulse", icon: Activity, value: "98% · 81", note: "within normal" },
];

const insights = [
  { title: "Weight trend", tag: "Needs attention", tone: "bg-warning text-warning-foreground", text: "Weight has risen 72 kg → 78 kg over six months while BP has drifted upward. Worth discussing at your next consultation." },
  { title: "Glycaemic control improving", tag: "Stable", tone: "bg-success text-success-foreground", text: "HbA1c has fallen 7.8% → 6.9% across three tests since January 2026. Current regimen appears to be working." },
  { title: "Medication reconciliation", tag: "Discuss with physician", tone: "bg-danger-soft text-destructive", text: "Two prescriptions from different providers contain overlapping antacids. Please confirm with your physician." },
];

const followUps = [
  { title: "Diabetology review", sub: "Dr. Anita Rao – carry latest HbA1c", date: "20 Nov 2026" },
  { title: "Repeat HbA1c", sub: "Advised at last consultation", date: "10 Nov 2026" },
  { title: "Annual eye screening", sub: "Diabetic retinopathy screening due", date: "28 Sep 2026" },
  { title: "Refill Telmisartan", sub: "Stock likely exhausted", date: "Overdue", overdue: true },
];

const journey = [
  { title: "Diabetology review", date: "18 Aug 2026", sub: "Dr. Anita Rao · Endocrinology · Apollo, Bengaluru" },
  { title: "Lipid profile + HbA1c", date: "12 Aug 2026", sub: "Metropolis Diagnostics" },
  { title: "Quarterly review", date: "02 Apr 2026", sub: "Dr. Anita Rao · Endocrinology" },
];

const meds = ["Metformin 1000 mg · BD", "Telmisartan 40 mg · OD", "Atorvastatin 10 mg · HS"];


function Index() {
  return (
    <div className="space-y-6">
        <section className="rounded-3xl bg-hero p-8 text-primary-foreground md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">Your health passport for life</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">Namaste, Shivkumar — here is your health status today.</h1>
          <p className="mt-3 text-sm opacity-85">48 yrs · Male · Blood group B+ · ABHA 91-4721-8830-5566</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/timeline" className="flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary">View my health journey <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/emergency" className="rounded-full border border-primary-foreground/50 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/10">Emergency card</Link>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {vitals.map(({ label, icon: Icon, value, note }) => (
            <div key={label} className={`${card} p-5`}>
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground"><Icon className="h-4 w-4" />{label}</p>
              <p className="mt-3 text-2xl font-bold">{value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className={`${card} p-6 lg:col-span-2`}>
            <h2 className="flex items-center gap-2 text-lg font-bold"><Sparkles className="h-5 w-5 text-primary" />Health intelligence</h2>
            <p className="mt-1 text-xs text-muted-foreground">Observations from your longitudinal record. For discussion with your physician — not a diagnosis.</p>
            <ul className="mt-4 space-y-3">
              {insights.map((i) => (
                <li key={i.title} className="rounded-xl border border-border bg-muted p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">{i.title}</h3>
                    <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${i.tone}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{i.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${card} p-6`}>
            <h2 className="flex items-center gap-2 text-lg font-bold"><CalendarCheck className="h-5 w-5 text-primary" />Follow-up engine</h2>
            <ul className="mt-4 space-y-3">
              {followUps.map((f) => (
                <li key={f.title} className="rounded-xl border border-border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold">{f.title}</p>
                    <span className={`shrink-0 text-[11px] ${f.overdue ? "rounded-full bg-danger-soft px-2 py-0.5 font-medium text-destructive" : "text-muted-foreground"}`}>{f.date}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{f.sub}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Next appointment: 25 Aug 2026</p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className={`${card} p-6`}>
            <h2 className="text-lg font-bold">Recent journey</h2>
            <ol className="mt-4 space-y-4 border-l-2 border-accent pl-5">
              {journey.map((j) => (
                <li key={j.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-card bg-primary" />
                  <p className="text-sm font-semibold">{j.title} <span className="font-normal text-muted-foreground">· {j.date}</span></p>
                  <p className="text-xs text-muted-foreground">{j.sub}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className={`${card} p-6`}>
            <h2 className="text-lg font-bold">Active medicines</h2>
            <ul className="mt-4 space-y-2">
              {meds.map((m) => (
                <li key={m} className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground"><Pill className="h-4 w-4" />{m}</li>
              ))}
            </ul>
          </div>
        </section>
    </div>
  );
}
