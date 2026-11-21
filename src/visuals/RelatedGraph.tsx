type Related = {
  label: string
  count: string
  angle: number
  color: string
}

const CENTER = { x: 380, y: 340 }
const RADIUS = 220

const RELATIONS: Related[] = [
  { label: 'mesmo favorecido', count: '8 registros', angle: -90, color: 'var(--color-ifverde)' },
  { label: 'mesmo processo', count: '3 registros', angle: 30, color: 'var(--color-iflima)' },
  { label: 'mesmo contrato', count: '5 registros', angle: 150, color: 'var(--color-ifvermelho)' },
]

const COMPARABLE = { label: 'registros comparáveis', count: '1.284 na categoria', angle: 210 }

function polar(angleDeg: number, radius = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: CENTER.x + Math.cos(rad) * radius,
    y: CENTER.y + Math.sin(rad) * radius,
  }
}

/**
 * Grafo que ilustra a exploração contextual do anteprojeto: a partir do alerta,
 * chega-se a registros do mesmo favorecido, processo, contrato e aos pares
 * estatisticamente comparáveis.
 */
export default function RelatedGraph() {
  return (
    <svg viewBox="0 0 760 680" className="max-h-[620px] w-full" role="img" aria-label="Grafo de registros relacionados a um alerta">
      <g data-anim>
        {RELATIONS.map((relation, i) => {
          const p = polar(relation.angle)
          return (
            <g key={relation.label}>
              <line
                x1={CENTER.x}
                y1={CENTER.y}
                x2={p.x}
                y2={p.y}
                stroke="var(--color-line)"
                strokeOpacity={0.45}
                strokeDasharray="4 6"
                data-edge
                data-order={i}
              />
              <circle cx={p.x} cy={p.y} r={64} fill="none" stroke={relation.color} strokeOpacity={0.7} data-node />
              <text
                x={p.x}
                y={p.y - 4}
                textAnchor="middle"
                className="fill-[var(--color-ink)] font-[Space_Grotesk] text-[22px] font-medium"
              >
                {relation.label}
              </text>
              <text
                x={p.x}
                y={p.y + 22}
                textAnchor="middle"
                className="fill-[var(--color-ink-muted)] font-[IBM_Plex_Mono] text-[13px] uppercase tracking-[0.14em]"
              >
                {relation.count}
              </text>
            </g>
          )
        })}

        {(() => {
          const p = polar(COMPARABLE.angle)
          return (
            <g data-edge data-order={3}>
              <line
                x1={CENTER.x}
                y1={CENTER.y}
                x2={p.x}
                y2={p.y}
                stroke="var(--color-line)"
                strokeOpacity={0.3}
                strokeDasharray="4 6"
              />
              <circle cx={p.x} cy={p.y} r={64} fill="none" stroke="var(--color-line)" strokeOpacity={0.5} data-node />
              <text
                x={p.x}
                y={p.y - 4}
                textAnchor="middle"
                className="fill-[var(--color-ink)] font-[Space_Grotesk] text-[22px] font-medium"
              >
                {COMPARABLE.label}
              </text>
              <text
                x={p.x}
                y={p.y + 22}
                textAnchor="middle"
                className="fill-[var(--color-ink-muted)] font-[IBM_Plex_Mono] text-[13px] uppercase tracking-[0.14em]"
              >
                {COMPARABLE.count}
              </text>
            </g>
          )
        })()}

        <circle cx={CENTER.x} cy={CENTER.y} r={74} fill="var(--color-ink)" data-center />
        <text
          x={CENTER.x}
          y={CENTER.y - 6}
          textAnchor="middle"
          className="fill-[var(--color-paper)] font-[Space_Grotesk] text-[24px] font-semibold"
        >
          alerta
        </text>
        <text
          x={CENTER.x}
          y={CENTER.y + 22}
          textAnchor="middle"
          className="fill-[var(--color-iflima)] font-[IBM_Plex_Mono] text-[13px] uppercase tracking-[0.16em]"
        >
          ALT-2 391
        </text>
      </g>
    </svg>
  )
}
