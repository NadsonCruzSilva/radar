import type { CSSProperties } from 'react'

const VIEWS = [
  { label: 'registros analisados', value: '18.402', accent: 'var(--color-verde)' },
  { label: 'alertas para conferir', value: '50', accent: 'var(--color-ifverde)' },
  { label: 'atenção alta', value: '12', accent: 'var(--color-ifvermelho)' },
  { label: 'atenção média', value: '23', accent: 'var(--color-iflima)' },
]

const FILTERS = ['órgão', 'período', 'categoria', 'favorecido', 'valor']

const ROWS = [
  { id: 'ALT-2 391', category: 'Manutenção predial', value: 'R$ 182.400', level: 'alto' },
  { id: 'ALT-1 845', category: 'Locação de veículos', value: 'R$ 96.900', level: 'alto' },
  { id: 'ALT-3 102', category: 'Material de consumo', value: 'R$ 71.250', level: 'médio' },
  { id: 'ALT-0 774', category: 'Serviços de TI', value: 'R$ 58.800', level: 'médio' },
]

const LEVEL_COLOR: Record<string, string> = {
  alto: 'var(--color-ifvermelho)',
  médio: 'var(--color-iflima)',
}

/**
 * Wireframe da interface proposta no anteprojeto: tela inicial com
 * métricas, filtros, ranking e acesso à ficha do alerta.
 */
export default function DashboardWire() {
  return (
    <div className="panel flex h-[560px] w-full flex-col overflow-hidden" data-anim>
      <span className="panel-line" aria-hidden="true" />
      <div className="flex items-center justify-between border-b border-[var(--color-border)]/50 px-6 py-3">
        <span className="mono-label text-[12px]">painel · radar de despesas</span>
        <span className="mono-label text-[10px] text-[var(--color-ink-muted)]">recorte · 2025 · unidade gestora A</span>
      </div>

      <div className="grid grid-cols-4 gap-3 border-b border-[var(--color-border)]/50 px-4 py-4">
        {VIEWS.map((v, i) => (
          <div
            key={v.label}
            className="panel-surface flex flex-col rounded-sm border border-[var(--color-border)]/40 px-5 py-4"
            style={{ '--accent': v.accent } as CSSProperties}
            data-kpi
            data-order={i}
          >
            <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">{v.label}</p>
            <p className="panel-text-accent title-lg mt-1 text-[30px]">{v.value}</p>
          </div>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-[200px_1fr] divide-x divide-[var(--color-border)]/50">
        <aside className="px-5 py-5">
          <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">filtros</p>
          <ul className="mt-4 space-y-2">
            {FILTERS.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-full border border-[var(--color-border)]/60 bg-[var(--color-bg)] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-line)]/50" />
                <span className="mono-label text-[10px] text-[var(--color-ink-muted)]">{f}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <p className="mono-label text-[10px] text-[var(--color-ink-muted)]">despesas em destaque</p>
            <span className="mono-label text-[10px] text-[var(--color-ink-muted)]">organizadas para conferência</span>
          </div>
          <div className="mt-4 divide-y divide-[var(--color-border)]/40">
            {ROWS.map((row, i) => (
              <div key={row.id} className="grid grid-cols-[110px_1fr_140px_100px] items-center gap-4 py-3" data-row data-order={i}>
                <span className="mono-label text-[11px]">{row.id}</span>
                <span className="body-sm text-[16px] text-[var(--color-ink-muted)]">{row.category}</span>
                <span className="body-sm text-right text-[16px]">{row.value}</span>
                <span
                  className="tech-pill justify-self-end"
                  style={{ '--pill-accent': LEVEL_COLOR[row.level], fontSize: 9 } as CSSProperties}
                >
                  <span className="tech-dot" aria-hidden="true" />
                  {row.level}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-[var(--color-border)]/50 pt-4" data-ficha>
            <span className="mono-label text-[10px] text-[var(--color-ink-muted)]">selecionar despesa →</span>
            <span className="h-6 flex-1 border-l border-[var(--color-border)]/50" />
            <span className="mono-label rounded-full bg-[var(--color-ink)] px-3 py-1 text-[10px] text-[var(--color-white)]">
              abrir ficha
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
