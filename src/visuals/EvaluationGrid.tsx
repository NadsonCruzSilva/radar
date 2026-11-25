const CRITERIA = [
  {
    key: 'evidencia',
    title: 'É possível conferir?',
    detail: 'As informações do alerta podem ser verificadas na fonte?',
  },
  {
    key: 'fidelidade',
    title: 'A explicação faz sentido?',
    detail: 'O motivo apresentado corresponde ao que aparece no registro?',
  },
  {
    key: 'acionabilidade',
    title: 'Ajuda a começar a análise?',
    detail: 'O alerta mostra por onde o usuário pode iniciar a conferência?',
  },
  {
    key: 'ruido',
    title: 'Há explicações legítimas?',
    detail: 'Algumas diferenças podem decorrer de rotinas administrativas normais.',
  },
]

export default function EvaluationGrid() {
  return (
    <div className="grid w-full grid-cols-[1fr_460px] gap-20" data-anim>
      <div className="flex flex-col justify-center border-l-4 border-[var(--color-ifverde)] pl-8">
        <p className="title-lg text-[34px] leading-tight">O que será examinado?</p>
        <ul className="body-sm mt-5 max-w-[740px] list-disc space-y-3 pl-7 text-[var(--color-ink-muted)]">
          <li>Alertas no topo da lista de prioridades.</li>
          <li>Despesas selecionadas fora desse grupo.</li>
          <li>Informações que podem ser confirmadas no registro oficial.</li>
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
