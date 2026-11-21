import type { CSSProperties } from 'react'
import { ALERT_REASONS, ALERT_SAMPLE } from './alert-sample'

const SEVERITY_COLOR: Record<string, string> = {
  alta: 'var(--color-ifvermelho)',
  média: 'var(--color-iflima)',
  baixa: 'var(--color-ifverde)',
}

const severityAccent = SEVERITY_COLOR[ALERT_SAMPLE.severidade] ?? 'var(--color-ifvermelho)'

export default function AlertSheet() {
  return (
    <div
      className="panel ml-auto flex w-[1040px] flex-col overflow-hidden"
      data-anim
      style={{ '--accent': severityAccent } as CSSProperties}
    >
      <span className="panel-line" aria-hidden="true" />
      <header className="flex items-start justify-between border-b border-[var(--color-border)]/50 px-10 py-7">
        <div>
          <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">alerta</p>
          <p className="panel-text-accent title-lg mt-2 text-[34px]">{ALERT_SAMPLE.id}</p>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <span className="tech-pill" style={{ '--pill-accent': severityAccent } as CSSProperties}>
            <span className="tech-dot tech-dot--live" aria-hidden="true" />
            severidade {ALERT_SAMPLE.severidade}
          </span>
          <span className="tech-pill tech-pill--muted">no topo da fila</span>
        </div>
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
        <div className="flex items-center justify-between">
          <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">motivos do alerta</p>
          <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">contribuição relativa</p>
        </div>
        <ul className="mt-5 space-y-5">
          {ALERT_REASONS.map((reason) => (
            <li key={reason.label} className="grid grid-cols-[1fr_240px] items-center gap-6" data-reason>
              <div>
                <p className="title-lg text-[22px]">{reason.label}</p>
                <p className="body-sm mt-1 text-[var(--color-ink-muted)]">{reason.detail}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="tech-bar flex-1" style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}>
                  <span
                    data-bar
                    className="tech-bar-fill"
                    style={{ width: `${reason.weight * 100}%` }}
                  />
                </div>
                <span className="mono-label w-9 text-right text-[11px] text-[var(--color-ink-muted)]">
                  {Math.round(reason.weight * 100)}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer className="border-t border-[var(--color-border)]/50 px-10 py-5">
        <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">
          registro atípico em relação ao padrão estatístico do recorte — não constitui indício de irregularidade
        </p>
      </footer>
    </div>
  )
}
