import type { ReactNode } from 'react'

export function SectionDivider({
  index,
  kicker,
  title,
  note,
}: {
  index: string
  kicker: string
  title: ReactNode
  note?: ReactNode
}) {
  return (
    <div className="relative flex h-full min-h-full flex-col justify-between gap-10 py-2">
      <span aria-hidden="true" className="pointer-events-none absolute -right-6 top-16 font-[var(--font-display)] text-[400px] font-bold leading-none tracking-[-0.12em] text-[var(--slide-ink)] opacity-[0.07]">0{index}</span>

      <div className="flex items-center gap-5" data-kicker>
        <span className="mono-label flex h-12 w-12 items-center justify-center rounded-full border border-[var(--slide-accent)] text-[var(--slide-accent)]">0{index}</span>
        <span className="mono-label text-[var(--slide-ink)]">parte {index} <span className="mx-4 text-[var(--slide-accent)]">/</span> {kicker}</span>
      </div>

      <div className="relative my-auto max-w-[1500px] border-l-4 border-[var(--slide-accent)] pl-14" data-divider-content>
        <h2 className="title-xl text-[114px]" data-title>
          {title}
        </h2>
        {note ? (
          <p className="lead muted mt-10 max-w-[950px]" data-note>
            {note}
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-5 border-t border-[var(--slide-line)] pt-7" data-footer>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-1 w-16 bg-[var(--slide-accent)] origin-left" data-bar />
          <span className="h-1 w-16 bg-[var(--slide-accent)]/50 origin-left" data-bar />
          <span className="h-1 w-16 bg-[var(--slide-accent)]/25 origin-left" data-bar />
        </span>
        <span className="mono-label muted" data-progress>{index} de 3</span>
      </div>
    </div>
  )
}
