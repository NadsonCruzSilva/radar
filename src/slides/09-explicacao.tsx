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
            index="07"
            section="o alerta"
            title="O que aparece em um alerta?"
            lead="A ficha resume o que se destacou e oferece informações para que a pessoa possa conferir o registro."
          />

          <ul className="mt-14 space-y-5">
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">Por que apareceu?</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                A ficha compara a despesa com registros semelhantes e aponta diferenças relevantes.
              </p>
            </li>
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">O que conferir?</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                Valor, favorecido, período e outras informações disponíveis na fonte.
              </p>
            </li>
            <li className="border-t border-[var(--color-border)] pt-4">
              <p className="title-lg text-[22px]">O que o alerta não diz?</p>
              <p className="body-sm mt-1 text-[var(--color-ink-muted)]">
                Ele não confirma uma irregularidade. É um ponto de partida para análise humana.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <AlertSheet />
        </div>
      </div>

      <Footnote source="Anteprojeto, seção Detecção, prioridade e explicação">Figura 4. Ficha ilustrativa de um alerta, com dados fictícios.</Footnote>
    </Slide>
  )
}
