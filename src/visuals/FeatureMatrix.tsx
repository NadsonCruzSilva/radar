import type { CSSProperties } from 'react'
import { ResearchIcon } from './ResearchIcon'

type Dimension = {
  label: string
  accent: string
  icon: 'valor' | 'historico' | 'concentracao'
  features: string[]
}

const DIMENSIONS: Dimension[] = [
  {
    label: 'Financeira',
    icon: 'valor',
    accent: 'var(--color-ifverde)',
    features: [
      'Valor da despesa',
      'Razão entre o valor do registro e a mediana do elemento de despesa',
    ],
  },
  {
    label: 'Temporal',
    icon: 'historico',
    accent: 'var(--color-iflima)',
    features: [
      'Frequência mensal de despesas por favorecido',
    ],
  },
  {
    label: 'Favorecido',
    icon: 'concentracao',
    accent: 'var(--color-verde)',
    features: [
      'Participação de cada favorecido no total de gastos do órgão',
    ],
  },
]

export default function FeatureMatrix() {
  return (
    <div className="grid w-full grid-cols-3 gap-5" data-anim>
      {DIMENSIONS.map((dim) => (
        <article
          key={dim.label}
          className="panel flex flex-col px-8 py-8"
          data-column
          style={{ '--accent': dim.accent } as CSSProperties}
        >
          <span className="panel-line" aria-hidden="true" />
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-[var(--radius-lg)] bg-[var(--color-white)] text-[var(--color-verde)]">
              <ResearchIcon name={dim.icon} className="h-7 w-7" />
            </div>
            <h3 className="panel-text-accent title-lg text-[30px]">{dim.label}</h3>
          </div>
          <ul className="mt-7 space-y-4">
            {dim.features.map((feature) => (
              <li key={feature} className="flex items-baseline gap-3 border-t border-[var(--color-border)]/50 pt-4" data-feature>
                <span className="mono-label text-[11px]" style={{ color: dim.accent }} aria-hidden="true">
                  •
                </span>
                <span className="body-sm text-[var(--color-ink-muted)]">{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
