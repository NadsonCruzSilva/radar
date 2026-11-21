import type { CSSProperties } from 'react'
import { ResearchIcon } from './ResearchIcon'

const STEPS = [
  { key: 'coleta', label: 'Coleta', detail: 'fonte pública' },
  { key: 'tratamento', label: 'Tratamento', detail: 'limpeza e padronização' },
  { key: 'atributos', label: 'Atributos', detail: 'multissinal' },
  { key: 'deteccao', label: 'Detecção', detail: 'Isolation Forest' },
  { key: 'contexto', label: 'Contexto', detail: 'registros relacionados' },
  { key: 'exploracao', label: 'Exploração', detail: 'dashboard' },
] as const

/**
 * Pipeline de 6 etapas em fluxo horizontal, inspirado no item
 * "Coleta → Tratamento → Construção de atributos → Detecção → Contextualização → Exploração".
 */
export default function PipelineFlow() {
  return (
    <div className="grid w-full grid-cols-6 gap-4" data-flow>
      {STEPS.map((step, i) => (
        <div key={step.key} className="relative flex flex-col" data-step>
          <div className="flex items-center gap-3">
            <span className="mono-label text-[13px] text-[var(--color-ifverde)]" data-step-num>
              0{i + 1}
            </span>
            {i < STEPS.length - 1 ? (
              <span className="relative h-px flex-1 overflow-hidden bg-[var(--color-border)]/60">
                <span
                  data-pulse
                  className="absolute inset-y-0 left-0 h-full w-full bg-[var(--color-ifverde)] origin-left"
                />
              </span>
            ) : (
              <span className="flex-1" />
            )}
          </div>
          <div
            data-card
            className="panel mt-4 flex flex-1 flex-col px-4 py-5"
            style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}
          >
            <span className="panel-line" aria-hidden="true" />
            <ResearchIcon name={step.key} className="mb-4 h-11 w-11 text-[var(--slide-accent)]" />
            <p className="panel-text-accent title-lg text-[24px] leading-tight">{step.label}</p>
            <p className="mono-label mt-3 text-[11px] text-[var(--color-ink-muted)]">
              {step.detail}
            </p>
            <span className="mt-auto flex items-center gap-1.5 pt-5" aria-hidden="true">
              {STEPS.map((_, dot) => (
                <span
                  key={dot}
                  className="h-1 w-1 rounded-full"
                  style={{ background: dot <= i ? 'var(--color-ifverde)' : 'var(--color-border)' }}
                />
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
