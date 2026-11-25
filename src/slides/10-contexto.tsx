import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import { ALERT_SAMPLE } from '@/visuals/alert-sample'
import RelatedGraph from '@/visuals/RelatedGraph'

const CHECK_STEPS = [
  'Encontre o registro da unidade e do período indicados na ficha.',
  'Confirme o valor e a categoria da despesa na fonte oficial.',
  'Compare com outras despesas de manutenção predial no recorte.',
]

export function SlideContext() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelector('[data-center]'), { scale: 0.6, opacity: 0, duration: 0.5, transformOrigin: '50% 50%' })
      .from(root.querySelectorAll('[data-edge] line'), { opacity: 0, duration: 0.4, stagger: 0.12 }, '-=0.2')
      .from(root.querySelectorAll('[data-node], [data-edge] text'), { opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
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
        lead="O usuário pode voltar à fonte, localizar a despesa e verificar a comparação apresentada."
      />

      <div className="mt-6 grid flex-1 grid-cols-[1fr_560px] items-center gap-16">
        <div className="flex h-full items-center">
          <RelatedGraph />
        </div>

        <aside className="flex flex-col gap-6">
          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">caso ilustrativo</p>
            <p className="title-lg mt-2 text-[30px]">{ALERT_SAMPLE.id}</p>
            <p className="body-sm mt-2 text-[var(--color-ink-muted)]">{ALERT_SAMPLE.categoria} · {ALERT_SAMPLE.periodo}</p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="title-lg text-[22px]">Conferência na base oficial</p>
            <ol className="body-sm mt-3 list-decimal space-y-2 pl-7 text-[var(--color-ink-muted)]">
              {CHECK_STEPS.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </aside>
      </div>

      <Footnote source="Anteprojeto, Metodologia">Figura 5. Rastreabilidade da evidência em um exemplo fictício.</Footnote>
    </Slide>
  )
}
