const MONTHS = ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

type Activity = {
  label: string
  start: number
  span: number
  milestone?: boolean
}

const ACTIVITIES: Activity[] = [
  { label: 'Recorte e revisão bibliográfica', start: 0, span: 1 },
  { label: 'Coleta, limpeza e preparação', start: 1, span: 2 },
  { label: 'Atributos, detecção e priorização', start: 3, span: 2 },
  { label: 'Explicações e painel', start: 5, span: 1 },
  { label: 'Estudo de caso e ajustes', start: 6, span: 1 },
  { label: 'Análise preliminar e preparação para a JACITEC', start: 7, span: 1 },
  { label: 'Apresentação na JACITEC', start: 8, span: 1, milestone: true },
  { label: 'Contribuições da JACITEC e revisão da monografia', start: 9, span: 1 },
  { label: 'Entrega da versão final e defesa do TCC', start: 10, span: 1, milestone: true },
]

const monthGrid = { gridTemplateColumns: `repeat(${MONTHS.length}, minmax(0, 1fr))` }

export default function Timeline() {
  return (
    <div className="w-full" data-anim>
      <div className="grid grid-cols-[540px_1fr] items-center gap-6">
        <span className="mono-label text-[14px] text-[var(--color-ink-muted)]">Atividades</span>
        <div className="grid gap-px bg-[var(--color-border)]" style={monthGrid} aria-hidden="true">
          {MONTHS.map((month) => (
            <div key={month} className="bg-[var(--color-surface)] py-2 text-center">
              <span className="mono-label text-[14px] text-[var(--color-ink)]">{month}</span>
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-3 space-y-1">
        {ACTIVITIES.map(({ label, start, span, milestone }) => {
          const period = MONTHS.slice(start, start + span).join(' a ')
          return (
            <li key={label} className="grid grid-cols-[540px_1fr] items-center gap-6 border-t border-[var(--color-border)]/40" data-row>
              <span className={milestone ? 'text-[23px] font-semibold text-[var(--color-vermelho)]' : 'text-[23px]'}>
                {label}
                <span className="sr-only">, {period} de 2027</span>
              </span>
              <div className="relative grid h-8 items-center" style={monthGrid} aria-hidden="true">
                <div className="absolute inset-0 grid" style={monthGrid}>
                  {MONTHS.map((month) => (
                    <span key={month} className="border-r border-[var(--color-border)]/35 last:border-r-0" />
                  ))}
                </div>
                <span
                  data-bar
                  className={`relative mx-1 h-4 rounded-sm ${milestone ? 'bg-[var(--color-ifvermelho)]' : 'bg-[var(--color-ifverde)]'}`}
                  style={{ gridColumn: `${start + 1} / span ${span}` }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
