import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'

import { ResearchIcon } from '@/visuals/ResearchIcon'

const SIGNALS = [
  { icon: 'valor' as const, label: 'valor acima do comparável', detail: 'muito maior que a mediana da categoria' },
  { icon: 'concentracao' as const, label: 'concentração no favorecido', detail: 'muitas despesas para poucos recebedores' },
  { icon: 'repeticao' as const, label: 'repetição em curto intervalo', detail: 'valores semelhantes em poucos dias' },
  { icon: 'historico' as const, label: 'comportamento incomum no histórico', detail: 'desvio em relação à própria categoria' },
]

export function SlideProblem() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-quote]'), { opacity: 0, y: 20, duration: 0.8 })
      .from(
        root.querySelectorAll('[data-signal]'),
        { opacity: 0, x: -20, duration: 0.55, stagger: 0.1 },
        '-=0.3',
      )
      .from(root.querySelector('[data-mark]'), { scaleX: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.6')
    return tl
  }, [])

  return (
    <Slide
      id="problema"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="03"
        section="problema de pesquisa"
        title="Pergunta de pesquisa"
        lead="Em grandes bases de execução orçamentária, um registro atípico pode resultar de valor muito superior ao comparável, concentração em um favorecido, repetição de valores ou comportamento incomum no histórico."
      />

      <div className="mt-14 grid flex-1 grid-cols-[1.35fr_1fr] gap-20">
        <div className="flex flex-col">
          <div className="relative border-l-4 border-[var(--color-ifverde)] pl-8" data-quote>
            <p className="title-lg text-[40px] leading-[1.2]">
              Como um Sistema de Informação pode combinar características financeiras,
              temporais e relacionais para identificar, priorizar e explicar padrões
              atípicos, apresentando evidências que auxiliem a análise humana?
            </p>
            <span className="mono-label mt-6 block text-[var(--color-ink-muted)]">
              questão de pesquisa
            </span>
          </div>
        </div>

        <ul className="space-y-5" data-mark>
          {SIGNALS.map((s) => (
            <li key={s.label} className="flex items-start gap-5 border-t border-[var(--color-border)] pt-4" data-signal>
              <ResearchIcon name={s.icon} className="h-8 w-8 shrink-0 text-[var(--slide-accent)]" />
              <div className="flex flex-col">
                <span className="title-lg text-[22px]">{s.label}</span>
                <span className="body-sm mt-1 text-[var(--color-ink-muted)]">{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footnote source="Anteprojeto, seções 3 e 5" />
    </Slide>
  )
}
