import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import RadarScene from '@/visuals/RadarScene'

export function SlideHero() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelectorAll('[data-line] > span'), {
      yPercent: 115,
      duration: 1,
      stagger: 0.1,
    })
      .from(
        root.querySelectorAll('[data-fade]'),
        { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 },
        '-=0.5',
      )
      .from(root.querySelector('[data-radar]'), { opacity: 0, duration: 1.4, scale: 0.96 }, 0)
    return tl
  }, [])

  return (
    <Slide
      id="capa"
      tone="paper"
      animate={build} pad>
      <div className="relative flex h-full flex-col justify-end overflow-hidden pb-5">
        <div className="pointer-events-none absolute -right-12 top-16 h-[710px] w-[710px] opacity-45" data-radar>
          <RadarScene className="absolute inset-0" accent="#247C37" base="#53655A" />
        </div>
        <span className="pointer-events-none absolute left-0 top-[180px] font-[var(--font-mono)] text-[16px] tracking-[0.25em] text-[var(--slide-muted)]" data-fade>01 — PROJETO DE PESQUISA</span>

        <div className="relative z-10">
          <p className="eyebrow flex items-center gap-3 text-[var(--slide-accent)]" data-fade>
            <span className="h-2 w-2 rounded-full bg-[var(--color-iflima)]" aria-hidden="true" />
            ANTEPROJETO DE TCC · SISTEMAS DE INFORMAÇÃO
          </p>

          <h1 className="title-xl mt-7 max-w-[1550px] text-[136px] uppercase">
            <span className="block overflow-hidden" data-line>
              <span className="block">Radar</span>
            </span>
            <span className="block overflow-hidden" data-line>
              <span className="block">de Anomalias</span>
            </span>
            <span className="block overflow-hidden" data-line>
              <span className="block">de Despesas <span className="text-[var(--slide-accent)]">Públicas.</span></span>
            </span>
          </h1>

          <p className="lead muted mt-8 max-w-[1000px]" data-fade>
            Uma proposta para encontrar despesas que merecem atenção e facilitar a conferência dos dados públicos.
          </p>

          <div className="mt-12 flex items-end justify-between border-t border-[var(--slide-line)] pt-7" data-fade>
            <div>
              <p className="mono-label text-[var(--slide-muted)]">autor</p>
              <p className="mt-2 text-[24px]">Nadson da Cruz Silva</p>
            </div>
            <div className="text-right">
              <p className="mono-label text-[var(--slide-muted)]">instituição</p>
              <p className="mt-2 text-[24px]">IFES · Cachoeiro de Itapemirim</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
