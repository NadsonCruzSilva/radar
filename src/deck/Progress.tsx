import { useDeck } from './context'

function step(direction: 'next' | 'prev') {
  const key = direction === 'next' ? 'ArrowRight' : 'ArrowLeft'
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      key,
      code: key,
      keyCode: direction === 'next' ? 39 : 37,
      which: direction === 'next' ? 39 : 37,
      bubbles: true,
    }),
  )
}

export function Progress() {
  const { index, total } = useDeck()
  const current = String(index + 1).padStart(2, '0')
  const all = String(total).padStart(2, '0')
  const pct = total > 1 ? (index / (total - 1)) * 100 : 0

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="flex items-end justify-between px-8 pb-4">
        <div className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}ifes-horizontal-cor.png`}
            alt="Instituto Federal do Espírito Santo"
            className="ifes-logo-progress h-[72px] w-auto object-contain transition-[filter] duration-300"
          />
        </div>

        <nav aria-label="Navegação dos slides" className="deck-nav pointer-events-auto flex items-center gap-2">
          <button type="button" aria-label="Slide anterior" onClick={() => step('prev')} disabled={index === 0} className="deck-nav-button">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m14.5 5-7 7 7 7" /></svg>
          </button>
          <span className="min-w-[72px] text-center font-[var(--font-mono)] text-[12px] font-medium tracking-[0.08em] tabular-nums">
            {current}<span className="deck-nav-separator mx-2">/</span>{all}
          </span>
          <button type="button" aria-label="Próximo slide" onClick={() => step('next')} disabled={index === total - 1} className="deck-nav-button">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9.5 5 7 7-7 7" /></svg>
          </button>
        </nav>
      </div>

      <div className="h-[2px] w-full bg-[var(--color-border)]/30" role="progressbar" aria-label="Progresso da apresentação" aria-valuemin={1} aria-valuemax={total} aria-valuenow={index + 1}>
        <div
          className="deck-progress-fill h-full transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
