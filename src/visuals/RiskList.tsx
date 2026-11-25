import type { CSSProperties } from 'react'

const CARDS = [
  {
    title: 'Dados incompletos',
    detail: 'Uma descrição genérica pode dificultar entender quais serviços foram pagos.',
    accent: 'var(--color-iflima)',
  },
  {
    title: 'Contexto da despesa',
    detail: 'Um reparo emergencial, por exemplo, pode explicar um valor acima do habitual.',
    accent: 'var(--color-ifvermelho)',
  },
  {
    title: 'Análise humana',
    detail: 'A pessoa responsável pela análise confere os dados e decide se vale buscar mais informações.',
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
