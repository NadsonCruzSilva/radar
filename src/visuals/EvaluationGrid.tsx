const CRITERIA = [
  {
    key: 'evidencia',
    title: 'Evidências verificáveis',
    detail: 'Os dados da ficha correspondem ao registro oficial?',
  },
  {
    key: 'fidelidade',
    title: 'Fidelidade da explicação',
    detail: 'A justificativa reflete os indicadores calculados?',
  },
  {
    key: 'acionabilidade',
    title: 'Utilidade para triagem',
    detail: 'O alerta indica o que conferir primeiro?',
  },
  {
    key: 'ruido',
    title: 'Contexto administrativo',
    detail: 'Qual proporção dos alertas prioritários é explicada por rotinas legítimas?',
  },
]

export default function EvaluationGrid() {
  return (
    <div className="grid w-full grid-cols-[1fr_460px] gap-20" data-anim>
      <div className="flex flex-col justify-center border-l-4 border-[var(--color-ifverde)] pl-8">
        <p className="title-lg text-[34px] leading-tight">Amostra</p>
        <ul className="body-sm mt-5 max-w-[740px] list-disc space-y-3 pl-7 text-[var(--color-ink-muted)]">
          <li>30 registros no topo do ranking.</li>
          <li>10 registros de controle sorteados fora desse grupo.</li>
        </ul>
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
