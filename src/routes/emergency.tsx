import { createFileRoute } from "@tanstack/react-router";
import { Phone, QrCode } from "lucide-react";
import { card, PageIntro, seo } from "@/components/kit";

export const Route = createFileRoute("/emergency")({
  head: () => seo("Emergency card", "A scannable card with only what a first responder needs."),
  component: Emergency,
});

const fields = [
  ["Known allergies", "Penicillin, Sulfa drugs"],
  ["Existing conditions", "Type 2 Diabetes (2021) · Hypertension (2023)"],
  ["Current medicines", "Metformin, Telmisartan, Atorvastatin"],
  ["Emergency contact", "Lakshmi C P (Spouse) · +91 98450 11223"],
  ["Insurance", "Ayushman Bharat PM-JAY + Group Mediclaim"],
];

function Emergency() {
  return (
    <>
      <PageIntro layer="Layer 9" title="Emergency health card">
        A scannable card that shows only what a first responder needs — nothing more. The full record stays behind consent.
      </PageIntro>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:col-span-2">
          <div className="bg-hero p-6 text-primary-foreground">
            <p className="grid min-w-0 gap-2 text-xs font-semibold uppercase tracking-widest opacity-85 sm:grid-cols-[minmax(0,1fr)_auto]"><span>Emergency card</span><span className="min-w-0 break-words">ABHA 91-4721-8830-5566</span></p>
            <h2 className="mt-3 text-2xl font-bold">Shivkumar C P</h2>
            <p className="text-sm opacity-85">48 yrs · Male · Bengaluru Urban, Karnataka</p>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            <div className="rounded-xl bg-danger-soft p-4 text-destructive">
              <p className="text-[11px] font-semibold uppercase tracking-wide">Blood group</p>
              <p className="text-3xl font-bold">B+</p>
            </div>
            {fields.map(([k, v]) => (
              <div key={k} className="rounded-xl bg-muted p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{k}</p>
                <p className="mt-1 text-sm font-medium">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${card} flex flex-col items-center p-6 text-center`}>
          <QrCode className="h-40 w-40 text-foreground" strokeWidth={1} />
          <h3 className="mt-3 font-bold">Scan at any hospital or ambulance</h3>
          <p className="mt-1 text-xs text-muted-foreground">The QR opens a read-only emergency view. Full history requires a consent request.</p>
          <a href="tel:+919845011223" className="mt-5 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" />Call emergency contact
          </a>
        </div>
      </div>
      <p className="mt-6 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
        Privacy control: you choose which fields appear on the public emergency view. Everything else — the timeline, reports and prescriptions — remains locked behind consent.
      </p>
    </>
  );
}
