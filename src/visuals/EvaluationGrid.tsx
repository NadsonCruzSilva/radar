const CRITERIA = [
  {
    key: 'evidencia',
    title: 'Verificabilidade',
    detail: 'cada dado apontado é conferido diretamente na fonte oficial.',
  },
  {
    key: 'fidelidade',
    title: 'Fidelidade explicativa',
    detail: 'nenhuma assertiva fictícia ou sem respaldo nos dados.',
  },
  {
    key: 'acionabilidade',
    title: 'Acionabilidade',
    detail: 'o alerta orienta uma análise preliminar fundamentada.',
  },
  {
    key: 'ruido',
    title: 'Ruído benigno',
    detail: 'mede falsos positivos de rotinas legítimas (ex.: folha de pagamento).',
  },
]

/**
 * Protocolo de avaliação por estudo de caso (metodologia.tex): 40 registros,
 * 30 do topo do ranking e 10 de controle, analisados sob quatro critérios.
 */
export default function EvaluationGrid() {
  return (
    <div className="grid w-full grid-cols-[1fr_460px] gap-20" data-anim>
      <div>
        <div className="flex items-end justify-between">
          <p className="mono-label text-[16px] text-[var(--color-ink-muted)]">amostra intencional</p>
          <p className="mono-label text-[16px] text-[var(--color-ink-muted)]">40 registros</p>
        </div>
        <div className="mt-4 grid gap-1.5">
          {[
            { key: 'ranking', count: 30, className: 'bg-[var(--color-ifverde)]' },
            { key: 'controle', count: 10, className: 'border border-[var(--color-border)] bg-[var(--color-surface)]' },
          ].map(({ key, count, className }) => (
            <div key={key} data-sample={key} className="grid grid-cols-10 gap-1.5" aria-hidden="true">
              {Array.from({ length: count }, (_, i) => (
                <span key={i} className={`aspect-square ${className}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-8">
          <span className="mono-label flex items-center gap-3 text-[16px] text-[var(--color-ink-muted)]">
            <span className="h-3 w-3 bg-[var(--color-ifverde)]" /> 30 alertas do topo
          </span>
          <span className="mono-label flex items-center gap-3 text-[16px] text-[var(--color-ink-muted)]">
            <span className="h-3 w-3 border border-[var(--color-border)] bg-[var(--color-surface)]" /> 10 de controle
          </span>
        </div>
      </div>

      <ol className="space-y-6">
        {CRITERIA.map((c, i) => (
          <li key={c.key} className="border-t border-[var(--color-border)] pt-4" data-criterion data-order={i}>
            <div className="flex items-baseline gap-4">
              <span className="mono-label text-[16px] text-[var(--color-line)]">0{i + 1}</span>
              <div>
                <p className="title-lg text-[24px]">{c.title}</p>
                <p className="body-sm mt-1 text-[var(--color-ink-muted)]">{c.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
