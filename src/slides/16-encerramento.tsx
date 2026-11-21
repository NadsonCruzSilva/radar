import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import RadarScene from '@/visuals/RadarScene'

const REFERENCES = [
  'CHANDOLA, V.; BANERJEE, A.; KUMAR, V. Anomaly detection: a survey. ACM Computing Surveys, 41(3), art. 15, 2009.',
  'DUTRA, M. T. et al. Detecting and analyzing anomalies in city expenditure time series. Journal on Interactive Systems, 17(1), p. 456–472, 2026.',
  'HEVNER, A. R. et al. Design science in information systems research. MIS Quarterly, 28(1), p. 75–105, 2004.',
  'LIU, F. T.; TING, K. M.; ZHOU, Z.-H. Isolation Forest. IEEE International Conference on Data Mining, p. 413–422, 2008.',
  'PEDREGOSA, F. et al. Scikit-learn: machine learning in Python. Journal of Machine Learning Research, 12, p. 2825–2830, 2011.',
  'PEFFERS, K. et al. A design science research methodology for information systems research. Journal of Management Information Systems, 24(3), p. 45–77, 2007.',
]

export function SlideClosing() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelector('[data-summary]'), { opacity: 0, x: -24, duration: 0.5 })
      .from(root.querySelector('[data-references]'), { opacity: 0, y: 12, duration: 0.45 }, '-=0.15')
    return tl
  }, [])

  return (
    <Slide
      id="obrigado"
      tone="paper"
      animate={build} pad>
      <div className="relative flex h-full flex-col justify-end pb-5">
        <div className="pointer-events-none absolute right-0 top-32 h-[650px] w-[650px] opacity-30">
          <RadarScene className="absolute inset-0" intensity={0.6} points={10} />
        </div>
        <div className="relative z-10">
          <div data-summary>
            <p className="eyebrow flex items-center gap-3 text-[var(--slide-accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-ifverde)]" aria-hidden="true" />
              ENCERRAMENTO · RADAR DE ANOMALIAS
            </p>

            <h2 className="title-xl mt-8 max-w-[1500px] text-[94px] uppercase">
              <span className="block">De dado público</span>
              <span className="block text-[var(--slide-accent)]">à decisão informada.</span>
            </h2>

            <p className="lead muted mt-10 max-w-[900px]">
              O Radar propõe uma fila priorizada de despesas atípicas, com evidências verificáveis para orientar a análise humana.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--slide-line)] pt-5" data-references>
            <h3 className="mb-4 text-[22px] font-semibold">Referências principais</h3>
            <ul className="grid grid-cols-2 gap-x-16 gap-y-3 text-[19px] leading-snug text-[var(--slide-muted)]">
              {REFERENCES.map((reference) => <li key={reference}>{reference}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  )
}
