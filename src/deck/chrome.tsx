import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow muted">{children}</p>
}

export function Rule({ className = '' }: { className?: string }) {
  return <span className={`rule block ${className}`} aria-hidden="true" />
}

export function SlideHeader({
  index,
  section,
  title,
  lead,
}: {
  index: string
  section: string
  title: ReactNode
  lead?: ReactNode
}) {
  return (
    <header className="shrink-0 editorial-header">
      <div className="flex items-center gap-5">
        <span className="editorial-index">{index}</span>
        <span className="mono-label muted">{section}</span>
        <span className="h-px flex-1 bg-[var(--slide-line)]" aria-hidden="true" />
      </div>
      <h2 className="title-lg mt-5 text-[60px] text-balance">{title}</h2>
      {lead ? <p className="lead muted mt-4 max-w-[1340px]">{lead}</p> : null}
    </header>
  )
}

export function Footnote({ children, source }: { children?: ReactNode; source: string }) {
  return (
    <footer className="mt-auto border-t border-[var(--slide-line)] pt-3 text-[18px] leading-snug">
      {children ? <p className="font-medium text-[var(--slide-ink)]">{children}</p> : null}
      <p className="muted">Fonte: {source}</p>
    </footer>
  )
}
