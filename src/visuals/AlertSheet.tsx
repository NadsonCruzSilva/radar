import type { CSSProperties } from 'react'
import { ALERT_REASONS, ALERT_SAMPLE } from './alert-sample'

export default function AlertSheet() {
  return (
    <div
      className="panel ml-auto flex w-[1040px] flex-col overflow-hidden"
      data-anim
      style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}
    >
      <span className="panel-line" aria-hidden="true" />
      <header className="flex items-start justify-between border-b border-[var(--color-border)]/50 px-10 py-7">
        <div>
          <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">alerta</p>
          <p className="panel-text-accent title-lg mt-2 text-[34px]">{ALERT_SAMPLE.id}</p>
          <p className="body-sm mt-1 text-[var(--color-ink-muted)]">{ALERT_SAMPLE.categoria}</p>
        </div>
        <span className="tech-pill tech-pill--muted">exemplo fictício</span>
      </header>

      <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]/50">
        <div className="px-8 py-6" data-field>
          <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">valor</p>
          <p className="panel-text-accent title-lg mt-2 text-[32px]">{ALERT_SAMPLE.valor}</p>
          <p className="body-sm mt-1 text-[var(--color-ink-muted)]">mediana {ALERT_SAMPLE.mediana}</p>
        </div>
        <div className="px-8 py-6" data-field>
          <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">favorecido</p>
          <p className="body-sm mt-2">{ALERT_SAMPLE.favorecido}</p>
        </div>
        <div className="px-8 py-6" data-field>
          <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">órgão / período</p>
          <p className="body-sm mt-2">{ALERT_SAMPLE.orgao}</p>
          <p className="body-sm text-[var(--color-ink-muted)]">{ALERT_SAMPLE.periodo}</p>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]/50 px-10 py-7">
        <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">evidências da ficha</p>
        <ul className="mt-5 space-y-5">
          {ALERT_REASONS.map((reason) => (
            <li key={reason.label} className="border-l-2 border-[var(--color-ifverde)] pl-4" data-reason>
              <p className="title-lg text-[22px]">{reason.label}</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">{reason.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="border-t border-[var(--color-border)]/50 px-10 py-4">
        <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">Consultar registro na fonte oficial →</p>
      </footer>
    </div>
  )
}
