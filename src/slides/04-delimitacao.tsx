import { useCallback, type CSSProperties } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'

const IS = [
  'coletar e tratar dados públicos de despesas',
  'construir atributos financeiros, temporais e relacionais',
  'identificar e priorizar registros estatisticamente atípicos',
  'explicar por que cada alerta foi gerado',
  'navegar por registros relacionados ao mesmo contexto',
  'oferecer um dashboard para exploração dos alertas',
]

const IS_NOT = [
  'determinar se a despesa é ilegal ou fraudulenta',
  'emitir conclusões jurídicas ou de auditoria',
  'realizar fiscalização automatizada',
  'substituir profissionais de controle',
  'ser um sistema completo de auditoria governamental',
]

export function SlideScope() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-col-is]'), {
      opacity: 0,
      x: -24,
      duration: 0.6,
    })
      .from(
        root.querySelectorAll('[data-item-is]'),
        { opacity: 0, x: -16, duration: 0.35, stagger: 0.07 },
        '-=0.3',
      )
      .from(
        root.querySelector('[data-col-isnot]'),
        { opacity: 0, x: 24, duration: 0.6 },
        '-=0.4',
      )
      .from(
        root.querySelectorAll('[data-item-isnot]'),
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
        title="Escopo do Radar"
      />

      <div className="mt-12 grid flex-1 grid-cols-2 gap-6">
        <div
          className="panel flex flex-col px-10 py-8"
          data-col-is
          style={{ '--accent': 'var(--color-ifverde)' } as CSSProperties}
        >
          <span className="panel-line" aria-hidden="true" />
          <h3 className="panel-text-accent title-lg text-[30px]" data-badge>No escopo</h3>
          <ul className="mt-8 space-y-4">
            {IS.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-[var(--color-border)]/60 pt-4" data-item-is>
                <span className="mono-label text-[12px] text-[var(--color-ifverde)] font-bold">+</span>
                <span className="body-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="panel flex flex-col px-10 py-8"
          data-col-isnot
          style={{ '--accent': 'var(--color-ifvermelho)' } as CSSProperties}
        >
          <span className="panel-line" aria-hidden="true" />
          <h3 className="panel-text-accent title-lg text-[30px]" data-badge>Fora do escopo</h3>
          <ul className="mt-8 space-y-4">
            {IS_NOT.map((item) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-[var(--color-border)]/60 pt-4" data-item-isnot>
                <span className="mono-label text-[12px] text-[var(--color-ifvermelho)] font-bold">—</span>
                <span className="body-sm text-[var(--color-ink-muted)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footnote source="Anteprojeto, seção 2" />
    </Slide>
  )
}
