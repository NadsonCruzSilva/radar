import type { CSSProperties } from 'react'

const CARDS = [
  {
    title: 'Dados incompletos',
    detail: 'Descrições genéricas dificultam identificar o que foi pago.',
    accent: 'var(--color-iflima)',
  },
  {
    title: 'Contexto da despesa',
    detail: 'Mudanças de volume, prazo ou escopo podem explicar valores atípicos.',
    accent: 'var(--color-ifvermelho)',
  },
  {
    title: 'Alcance da avaliação',
    detail: 'O estudo de caso cobre uma unidade gestora e um exercício financeiro.',
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
