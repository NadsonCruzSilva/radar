import type { CSSProperties } from 'react'

const CARDS = [
  {
    title: 'Dados incompletos',
    detail: 'Informações ausentes ou pouco detalhadas podem limitar o que será possível conferir.',
    accent: 'var(--color-iflima)',
  },
  {
    title: 'Diferença não é prova',
    detail: 'Uma despesa fora do padrão pode ter uma explicação administrativa legítima.',
    accent: 'var(--color-ifvermelho)',
  },
  {
    title: 'Análise humana',
    detail: 'O Radar organiza informações para a triagem; a interpretação e a apuração ficam com as pessoas.',
    accent: 'var(--color-ifverde)',
  },
]

export default function RiskList() {
  return (
    <div className="grid w-full grid-cols-3 gap-6">
      {CARDS.map(({ title, detail, accent }) => (
        <article
          key={title}
          className="panel px-8 py-8"
          style={{ '--accent': accent } as CSSProperties}
          data-card
        >
          <span className="panel-line" aria-hidden="true" />
          <h3 className="panel-text-accent title-lg text-[30px]">{title}</h3>
          <p className="body-sm mt-5 text-[var(--color-ink-muted)]">{detail}</p>
        </article>
      ))}
    </div>
  )
}
