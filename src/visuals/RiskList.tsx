import type { CSSProperties } from 'react'

const ROWS = [
  {
    tag: 'risco',
    title: 'qualidade dos dados publicados',
    detail: 'campos ausentes, formatos inconsistentes e correções retroativas na fonte.',
    severity: 'alto',
  },
  {
    tag: 'risco',
    title: 'vínculo entre processo, contrato e despesa',
    detail: 'o relacionamento nem sempre existe de forma limpa na base pública.',
    severity: 'alto',
  },
  {
    tag: 'limitação',
    title: 'atipicidade não é irregularidade',
    detail: 'o produto entrega alertas analíticos, nunca conclusões de auditoria.',
    severity: 'médio',
  },
  {
    tag: 'decisão',
    title: 'um único Isolation Forest, em CPU',
    detail: 'sem comparação extensa de algoritmos; foco no artefato integrado.',
    severity: 'médio',
  },
  {
    tag: 'limitação',
    title: 'ausência de rótulos de irregularidade',
    detail: 'a avaliação é qualitativa: fidelidade e utilidade da explicação.',
    severity: 'médio',
  },
]

const TAG_COLOR: Record<string, string> = {
  risco: 'var(--color-ifvermelho)',
  limitação: 'var(--color-iflima)',
  decisão: 'var(--color-verde)',
}

const SEVERITY_COLOR: Record<string, string> = {
  alto: 'var(--color-ifvermelho)',
  médio: 'var(--color-iflima)',
}

export default function RiskList() {
  return (
    <div className="grid w-full grid-cols-5 gap-5" data-anim>
      {ROWS.map((row, i) => (
        <article
          key={row.title}
          className="panel flex flex-col px-6 py-7"
          data-card
          data-order={i}
          style={
            {
              '--accent': TAG_COLOR[row.tag],
            } as CSSProperties
          }
        >
          <span className="panel-line" aria-hidden="true" />
          <span
            className="tech-pill"
            style={
              {
                '--pill-accent': TAG_COLOR[row.tag],
              } as CSSProperties
            }
          >
            <span className="tech-dot" aria-hidden="true" />
            {row.tag}
          </span>
          <h3 className="panel-text-accent title-lg mt-5 text-[23px] leading-tight">{row.title}</h3>
          <p className="body-sm mb-6 mt-4 text-[17px] text-[var(--color-ink-muted)]">{row.detail}</p>
          <span className="mt-auto flex items-center gap-2 border-t border-[var(--color-border)]/60 pt-3">
            <span className="mono-label text-[10px] text-[var(--color-ink-muted)]">impacto</span>
            <span
              className="h-1 w-6 rounded-full"
              style={{ background: SEVERITY_COLOR[row.severity] }}
              aria-hidden="true"
            />
            <span className="panel-text-accent mono-label text-[10px] font-semibold"
              style={{ '--accent': SEVERITY_COLOR[row.severity] } as CSSProperties}
            >
              {row.severity}
            </span>
          </span>
        </article>
      ))}
    </div>
  )
}
