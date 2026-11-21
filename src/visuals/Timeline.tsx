const MONTHS_TCC1 = ['Set', 'Out', 'Nov', 'Dez']

const MONTHS_TCC2 = ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov']

const MONTHS = [...MONTHS_TCC1, ...MONTHS_TCC2]
const TOTAL = MONTHS.length
const TCC1_END = MONTHS_TCC1.length

const FIRST_TCC2_MONTH = TCC1_END

const ACTIVITIES: { id: string; label: string; month: number }[] = [
  { id: 'A1', label: 'fundamentação teórica', month: 0 },
  { id: 'A2', label: 'coleta e limpeza', month: 1 },
  { id: 'A3', label: 'atributos e detecção', month: 2 },
  { id: 'A4', label: 'relatório parcial', month: 3 },
  { id: 'A5', label: 'explicação e fichas', month: FIRST_TCC2_MONTH + 0 },
  { id: 'A6', label: 'estudo de caso (40 fichas)', month: FIRST_TCC2_MONTH + 1 },
  { id: 'A7', label: 'redação dos resultados', month: FIRST_TCC2_MONTH + 2 },
  { id: 'A8', label: 'revisão e repositório', month: FIRST_TCC2_MONTH + 3 },
  { id: 'A9', label: 'depósito e defesa', month: TOTAL - 1 },
]

/**
 * Cronograma A1–A9 em TCC I (4 meses de 2026) e TCC II (9 meses de 2027),
 * extraído de cronograma.tex: cada atividade ocupa um mês do eixo contínuo
 * de 13 posições, que mantém o alinhamento entre rótulos e barras.
 */
export default function Timeline() {
  return (
    <div className="w-full" data-anim>
      <div className="grid grid-cols-[280px_1fr] items-end gap-6">
        <span className="mono-label text-[11px] text-[var(--color-ink-muted)]">meses</span>
        <div
          className="grid gap-px bg-[var(--color-border)]"
          style={{ gridTemplateColumns: `repeat(${TOTAL}, minmax(0, 1fr))` }}
        >
          {MONTHS.map((m, i) => (
            <div
              key={`${m}-${i}`}
              className={`py-1.5 text-center ${i < TCC1_END ? 'bg-[var(--color-bg)]' : 'bg-[var(--color-surface)]'}`}
            >
              <span className="mono-label text-[10px] text-[var(--color-ink)]">{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-[280px_1fr] gap-6">
        <div className="mono-label text-[10px] text-[var(--color-ink-muted)]">semestres</div>
        <div className="relative h-3">
          <div className="absolute inset-y-0 left-0 rounded-sm bg-[var(--color-ifverde)]/80" style={{ width: `${(TCC1_END / TOTAL) * 100}%` }} />
          <div className="absolute inset-y-0 right-0 rounded-sm bg-[var(--color-verde)]/70" style={{ width: `${(MONTHS_TCC2.length / TOTAL) * 100}%` }} />
        </div>
      </div>

      <div className="mt-6 space-y-1.5">
        {ACTIVITIES.map((act, i) => {
          const left = (act.month / TOTAL) * 100
          const width = (1 / TOTAL) * 100
          const inTcc1 = act.month < TCC1_END
          return (
            <div key={act.id} className="grid grid-cols-[280px_1fr] items-center gap-6" data-row>
              <div className="flex items-baseline gap-3">
                <span className="mono-label text-[11px] text-[var(--color-line)]">{act.id}</span>
                <span className="body-sm text-[16px]">{act.label}</span>
              </div>
              <div className="relative h-6">
                <div
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: `repeat(${TOTAL}, minmax(0, 1fr))` }}
                >
                  {Array.from({ length: TOTAL }).map((_, k) => (
                    <span key={k} className="border-r border-[var(--color-border)]/30 last:border-r-0" />
                  ))}
                </div>
                <div
                  data-bar
                  data-order={i}
                  className="absolute inset-y-1 rounded-sm"
                  style={{
                    left: `${left}%`,
                    width: `calc(${width}% - 3px)`,
                    background: inTcc1 ? 'var(--color-ifverde)' : 'var(--color-verde)',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mono-label mt-6 text-[10px] text-[var(--color-ink-muted)]">
        dedicação de 5 a 8 h por semana · infraestrutura em CPU comum · datas sujeitas ao calendário oficial do IFES
      </p>
    </div>
  )
}
