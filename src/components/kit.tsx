import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  HeartPulse, LayoutGrid, CalendarClock, Activity, FlaskConical, Pill, Users, IdCard, FileText,
} from "lucide-react";

export const card = "rounded-2xl border border-border bg-card shadow-soft";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutGrid },
  { to: "/timeline", label: "Health journey", icon: CalendarClock },
  { to: "/vitals", label: "Vitals", icon: Activity },
  { to: "/metabolic", label: "Metabolic", icon: FlaskConical },
  { to: "/medications", label: "Medicines", icon: Pill },
  { to: "/family", label: "Family", icon: Users },
  { to: "/emergency", label: "Emergency card", icon: IdCard },
  { to: "/concept", label: "Concept outline", icon: FileText },
] as const;

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold">Digital Health Wallet</p>
            <p className="text-[11px] text-muted-foreground">ABHA shivkumar@abdm</p>
          </div>
        </Link>
        <nav className="flex gap-1 overflow-x-auto text-sm">
          {nav.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: true }}
              className="flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-accent font-medium !text-accent-foreground" }}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function PageIntro({ layer, title, children }: { layer: string; title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{layer}</p>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

export type Tone = "warn" | "ok" | "bad" | "info";
const tones: Record<Tone, string> = {
  warn: "bg-warning text-warning-foreground",
  ok: "bg-success text-success-foreground",
  bad: "bg-danger-soft text-destructive",
  info: "bg-accent text-accent-foreground",
};

export function Badge({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function Bars({ values }: { values: number[] }) {
  const min = Math.min(...values) * 0.9;
  const max = Math.max(...values);
  return (
    <div className="mt-4 flex h-20 items-end gap-2">
      {values.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-primary/70" style={{ height: `${((v - min) / (max - min || 1)) * 80 + 20}%` }} />
      ))}
    </div>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title: `${title} · Digital Health Wallet` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Digital Health Wallet` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
