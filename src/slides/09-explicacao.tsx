import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import AlertSheet from '@/visuals/AlertSheet'

export function SlideExplanation() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-anim]'), { opacity: 0, x: 40, duration: 0.7 })
      .from(root.querySelectorAll('[data-field]'), { opacity: 0, y: 12, duration: 0.45, stagger: 0.1 }, '-=0.3')
      .from(root.querySelectorAll('[data-reason]'), { opacity: 0, x: 18, duration: 0.45, stagger: 0.14 }, '-=0.2')
      .from(root.querySelectorAll('[data-bar]'), { scaleX: 0, transformOrigin: 'left', duration: 0.6, stagger: 0.12 }, '-=0.5')
    return tl
  }, [])

  return (
    <Slide
      id="explicacao"
      tone="white"
      animate={build}>
      <div className="grid h-full grid-cols-[520px_1fr] gap-14">
        <div className="flex flex-col justify-center">
          <SlideHeader
            index="09"
            section="explicação do alerta"
            title="Explicação do alerta"
            lead="Cada ficha declara os fatores que elevaram o registro e reúne o que for necessário para checar a evidência na fonte."
          />

          <ul className="mt-14 space-y-5">
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">severidade e tipologia</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                baixa, média ou alta, com a natureza do desvio.
              </p>
            </li>
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">resumo determinístico</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                texto gerado por regras a partir dos valores do registro.
              </p>
            </li>
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">evidências auditáveis</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                valores, período e referências que podem ser conferidos.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <AlertSheet />
        </div>
      </div>

      <Footnote source="Anteprojeto, camada de explicação">Figura 4. Ficha ilustrativa de um alerta.</Footnote>
    </Slide>
  )
}
