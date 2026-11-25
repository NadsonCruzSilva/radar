import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import RelatedGraph from '@/visuals/RelatedGraph'

const CHECK_STEPS = [
  'Localize o registro na fonte oficial.',
  'Confirme valor, categoria e favorecido.',
  'Confira quais despesas foram usadas na comparação.',
]

export function SlideContext() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelector('[data-center]'), { scale: 0.6, opacity: 0, duration: 0.5, transformOrigin: '50% 50%' })
      .from(root.querySelectorAll('[data-edge]'), { opacity: 0, duration: 0.4, stagger: 0.12 }, '-=0.2')
      .from(root.querySelectorAll('[data-node]'), { opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
    return tl
  }, [])

  return (
    <Slide
      id="contexto"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="08"
        section="conferência"
        title="Como conferir um alerta"
      />

      <div className="mt-6 grid flex-1 grid-cols-[1fr_560px] items-center gap-16">
        <div className="flex h-full items-center">
          <RelatedGraph />
        </div>

        <aside className="flex flex-col gap-6">
          <div className="border-t border-[var(--color-border)] pt-5">
            <ol className="body-sm list-decimal space-y-4 pl-7 text-[var(--color-ink-muted)]">
              {CHECK_STEPS.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </aside>
      </div>

      <Footnote source="Anteprojeto, Metodologia" />
    </Slide>
  )
}
