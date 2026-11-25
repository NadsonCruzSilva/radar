import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'

import { ResearchIcon } from '@/visuals/ResearchIcon'

const SIGNALS = [
  { icon: 'coleta' as const, label: 'Dados abertos', detail: 'Os portais de transparência disponibilizam registros de execução orçamentária.' },
  { icon: 'historico' as const, label: 'Triagem manual', detail: 'O volume de registros dificulta a análise individual.' },
  { icon: 'valor' as const, label: 'Análise por categoria', detail: 'Totais agregados podem ocultar desvios em categorias específicas.' },
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
      />

      <div className="mt-14 grid flex-1 grid-cols-[1.35fr_1fr] gap-20">
        <div className="flex flex-col">
          <div className="relative border-l-4 border-[var(--color-ifverde)] pl-8" data-quote>
            <p className="title-lg text-[40px] leading-[1.2]">
              Como identificar, priorizar e explicar despesas públicas atípicas a partir de dados abertos,
              de modo que cidadãos e analistas possam conferir as evidências de cada alerta?
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

      <Footnote source="Anteprojeto, Introdução. Lei de Acesso à Informação (2011) e Dutra et al. (2026)." />
    </Slide>
  )
}
