import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import DashboardWire from '@/visuals/DashboardWire'

export function SlideDashboard() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-anim]'), {
      opacity: 0,
      y: 24,
      duration: 0.6,
    })
      .from(
        root.querySelectorAll('[data-kpi]'),
        { opacity: 0, scale: 0.92, duration: 0.45, stagger: 0.08, transformOrigin: 'top' },
        '-=0.25',
      )
      .from(
        root.querySelectorAll('aside li'),
        { opacity: 0, x: -12, duration: 0.3, stagger: 0.06 },
        '-=0.3',
      )
      .from(
        root.querySelectorAll('[data-row]'),
        { opacity: 0, x: 20, duration: 0.4, stagger: 0.08 },
        '-=0.3',
      )
      .from(
        root.querySelector('[data-ficha]'),
        { opacity: 0, y: 15, duration: 0.45 },
        '-=0.2',
      )
    return tl
  }, [])

  return (
    <Slide
      id="interface"
      tone="white"
      animate={build}>
      <div className="grid h-full grid-cols-[520px_1fr] gap-12">
        <div className="flex flex-col justify-center">
          <SlideHeader
            index="11"
            section="interface"
            title="Painel de análise"
            lead="O painel em Streamlit reunirá o ranking de alertas, filtros e fichas com justificativas verificáveis."
          />

          <div className="mt-14 space-y-4">
            <p className="body-sm text-[var(--color-ink-muted)]">
              Filtros por órgão, período, categoria, favorecido e valor.
            </p>
            <p className="body-sm text-[var(--color-ink-muted)]">
              A ordem dos alertas combina atipicidade e valor da despesa.
            </p>
            <p className="body-sm text-[var(--color-ink-muted)]">
              Cada ficha vincula a justificativa aos dados do registro.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <DashboardWire />
        </div>
      </div>

      <Footnote source="Anteprojeto, Metodologia">Figura 6. Protótipo conceitual do painel, com dados fictícios.</Footnote>
    </Slide>
  )
}
