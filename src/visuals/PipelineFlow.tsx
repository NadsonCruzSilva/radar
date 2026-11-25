import type { CSSProperties } from 'react'
import { ResearchIcon } from './ResearchIcon'

const STEPS = [
  { key: 'coleta', label: 'Preparar dados', detail: 'Tratar duplicidades e valores ausentes nos registros oficiais.' },
  { key: 'historico', label: 'Calcular indicadores', detail: 'Comparar o valor com a mediana do elemento de despesa e medir frequência mensal e concentração por favorecido.' },
  { key: 'valor', label: 'Detectar atipicidades', detail: 'Usar Isolation Forest para estimar o grau de atipicidade de cada registro.' },
  { key: 'exploracao', label: 'Priorizar e explicar', detail: 'Combinar atipicidade e valor financeiro no ranking. Gerar explicações por regras.' },
] as const

export default function PipelineFlow() {
  return (
    <div className="grid w-full grid-cols-4 gap-5" data-flow>
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
            className="panel mt-4 flex flex-1 flex-col px-7 py-7"
            style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}
          >
            <span className="panel-line" aria-hidden="true" />
            <ResearchIcon name={step.key} className="mb-4 h-11 w-11 text-[var(--slide-accent)]" />
            <p className="panel-text-accent title-lg text-[24px] leading-tight">{step.label}</p>
            <p className="body-sm mt-4 text-[var(--color-ink-muted)]">
              {step.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
