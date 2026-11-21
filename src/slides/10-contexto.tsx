import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import RelatedGraph from '@/visuals/RelatedGraph'

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
        index="10"
        section="contextualização"
        title="Contexto do alerta"
        lead="Um registro isolado diz pouco. O Radar permite seguir o mesmo favorecido, processo, contrato e o grupo estatístico usado como comparação."
      />

      <div className="mt-6 grid flex-1 grid-cols-[1fr_560px] items-center gap-16">
        <div className="flex h-full items-center">
          <RelatedGraph />
        </div>

        <aside className="flex flex-col gap-6">
          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">caso ilustrativo</p>
            <p className="title-lg mt-2 text-[30px]">Caso 014</p>
            <p className="body-sm mt-2 text-[var(--color-ink-muted)]">
              mesmo favorecido · março de 2025 · 8 registros relacionados · R$ 620 mil acumulados ·
              3 classificados como atípicos.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="title-lg text-[22px]">Agrupamento não implica suspeita</p>
            <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
              Casos analíticos existem para reduzir a fadiga de navegar registro a registro. O rótulo
              é descritivo: reúne o que compartilha favorecido, categoria ou janela temporal.
            </p>
          </div>
        </aside>
      </div>

      <Footnote source="Anteprojeto, arquitetura do artefato">Figura 5. Rede ilustrativa de vínculos, com dados fictícios.</Footnote>
    </Slide>
  )
}
