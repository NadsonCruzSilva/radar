import type { CSSProperties } from 'react'

const CARDS = [
  {
    title: 'Qualidade da base',
    detail: 'A preparação trata duplicidades, valores ausentes e eventuais identificadores pessoais.',
    accent: 'var(--color-iflima)',
  },
  {
    title: 'Interpretação dos alertas',
    detail: 'Despesas atípicas entram na fila de triagem. A apuração de irregularidades exige análise humana.',
    accent: 'var(--color-ifvermelho)',
  },
  {
    title: 'Viabilidade técnica',
    detail: 'O protótipo usará bibliotecas gratuitas e poderá ser executado em um computador convencional.',
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
