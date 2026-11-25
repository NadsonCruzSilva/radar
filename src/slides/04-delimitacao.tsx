import { useCallback, type CSSProperties } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'

const SCOPE = [
  'Um exercício financeiro encerrado',
  'Uma unidade gestora estadual ou federal',
  'Registros de despesas publicados em dados abertos',
  'A fonte preferencial é o SIGEFES, com o Portal da Transparência federal como alternativa.',
]

const OBJECTIVES = [
  'Organizar os registros em alertas fáceis de explorar',
  'Mostrar por que cada despesa chamou atenção',
  'Avaliar se os alertas ajudam a orientar a conferência',
]

export function SlideScope() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-col-scope]'), {
      opacity: 0,
      x: -24,
      duration: 0.6,
    })
      .from(
        root.querySelectorAll('[data-item-scope]'),
        { opacity: 0, x: -16, duration: 0.35, stagger: 0.07 },
        '-=0.3',
      )
      .from(
        root.querySelector('[data-col-objectives]'),
        { opacity: 0, x: 24, duration: 0.6 },
        '-=0.4',
      )
      .from(
        root.querySelectorAll('[data-item-objective]'),
        { opacity: 0, x: 16, duration: 0.35, stagger: 0.07 },
        '-=0.3',
      )
    return tl
  }, [])

  return (
    <Slide
      id="delimitacao"
      tone="white"
      animate={build}>
      <SlideHeader
        index="04"
        section="delimitação"
        title="O que o projeto pretende fazer"
        lead="O recorte de uma unidade gestora e um ano de dados torna viável a conferência dos registros."
      />

      <div className="my-10 grid grid-cols-2 gap-6">
        <div
          className="panel flex flex-col px-10 py-8"
          data-col-scope
          style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}
        >
          <span className="panel-line" aria-hidden="true" />
          <h3 className="panel-text-accent title-lg text-[30px]" data-badge>Recorte da pesquisa</h3>
          <ul className="mt-8 space-y-4">
            {SCOPE.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-[var(--color-border)]/60 pt-4" data-item-scope>
                <span className="mono-label text-[12px] text-[var(--color-ifverde)] font-bold">+</span>
                <span className="body-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="panel flex flex-col px-10 py-8"
          data-col-objectives
          style={{ '--accent': 'var(--color-ifvermelho)' } as CSSProperties}
        >
          <span className="panel-line" aria-hidden="true" />
          <h3 className="panel-text-accent title-lg text-[30px]" data-badge>Objetivo da proposta</h3>
          <ul className="mt-8 space-y-4">
            {OBJECTIVES.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-[var(--color-border)]/60 pt-4" data-item-objective>
                <span className="mono-label text-[12px] text-[var(--color-ifvermelho)] font-bold">—</span>
                <span className="body-sm text-[var(--color-ink-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footnote source="Anteprojeto, Introdução e Objetivos" />
    </Slide>
  )
}
