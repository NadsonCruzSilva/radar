import type { CSSProperties } from 'react'

type TreeSpec = {
  depth: number
  split: number
}

const TREES: TreeSpec[] = [
  { depth: 3, split: 0.34 },
  { depth: 4, split: 0.5 },
  { depth: 3, split: 0.62 },
  { depth: 4, split: 0.44 },
]

type Node = { x: number; y: number; depth: number; leaf: boolean; target: boolean; parent?: number }

function buildTree(spec: TreeSpec): Node[] {
  const nodes: Node[] = []
  const maxDepth = spec.depth
  const width = 160
  const stepY = 74

  const recurse = (depth: number, x: number, parent?: number) => {
    const y = depth * stepY
    const leaf = depth === maxDepth
    const target = leaf && Math.abs(x - spec.split * width) < 14
    const index = nodes.length
    nodes.push({ x, y, depth, leaf, target, parent })
    if (!leaf) {
      const spread = width / Math.pow(2, depth + 1)
      recurse(depth + 1, x - spread * (0.55 + spec.split * 0.4), index)
      recurse(depth + 1, x + spread * (0.45 + (1 - spec.split) * 0.6), index)
    }
  }

  recurse(0, width / 2)
  return nodes
}

const CANVAS_W = 160
const CANVAS_H = 74 * 4 + 20

const TREE_ACCENTS = [
  'var(--color-ifverde)',
  'var(--color-verde)',
  'var(--color-iflima)',
  'var(--color-verde-texto)',
]

export function TreeGlyph({ spec }: { spec: TreeSpec }) {
  const nodes = buildTree(spec)
  return (
    <svg
      viewBox={`-10 -10 ${CANVAS_W + 20} ${CANVAS_H}`}
      className="w-full"
      fill="none"
      role="img"
      aria-label={`Árvore de isolamento com ${spec.depth} níveis`}
    >
      {nodes.map((node, i) => {
        if (node.parent === undefined) return null
        const parent = nodes[node.parent]
        return (
          <line
            key={`edge-${i}`}
            x1={parent.x}
            y1={parent.y}
            x2={node.x}
            y2={node.y}
            stroke="var(--color-line)"
            strokeWidth={1}
            opacity={0.4}
            data-tree-edge
            data-depth={node.depth}
          />
        )
      })}
      {nodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.leaf ? 5 : 3.4}
          fill={node.target ? 'var(--color-ifvermelho)' : node.leaf ? 'var(--color-ifverde)' : 'var(--color-ink)'}
          opacity={node.target ? 1 : 0.85}
          data-tree-node
          data-target={node.target ? 'true' : undefined}
        />
      ))}
    </svg>
  )
}

/**
 * Quatro árvores isolamento independentes; o ponto-alvo (cor diferenciada)
 * fica isolado mais rápido — profundidade menor equivale a escore maior.
 */
export default function ForestDiagram() {
  return (
    <div className="grid w-full grid-cols-5 items-center gap-10">
      <div className="col-span-4 grid grid-cols-4 gap-6" data-anim>
        {TREES.map((spec, i) => (
          <div
            key={i}
            className="panel px-4 pb-3 pt-4"
            data-tree-card
            style={{ '--accent': TREE_ACCENTS[i % TREE_ACCENTS.length] } as CSSProperties}
          >
            <span className="panel-line" aria-hidden="true" />
            <div className="mb-2 flex items-center gap-2">
              <span className="tech-dot" aria-hidden="true" />
              <p className="panel-text-accent mono-label text-[10px]">
                árvore {String(i + 1).padStart(2, '0')}
              </p>
            </div>
            <TreeGlyph spec={spec} />
          </div>
        ))}
      </div>

      <aside className="panel col-span-1 flex flex-col self-stretch px-6 py-5" data-tree-card style={{ '--accent': 'var(--color-ifvermelho)' } as CSSProperties}>
        <span className="panel-line" aria-hidden="true" />
        <p className="mono-label text-[11px] text-[var(--color-ink-muted)]">resultado</p>
        <p className="panel-text-accent title-lg mt-3 text-[44px] leading-none">
          1<span className="text-[26px]"> / profundidade</span>
        </p>
        <p className="body-sm mt-5 text-[var(--color-ink-muted)]">
          Cada registro é isolado por divisões aleatórias. Quanto menos divisões forem
          necessárias, mais atípico é o registro.
        </p>
        <ul className="mono-label mt-8 space-y-3 text-[11px] text-[var(--color-ink-muted)]">
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--color-ifvermelho)]" />
            ponto atípico
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--color-ifverde)]" />
            folha
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--color-ink)]/70" />
            nó de divisão
          </li>
        </ul>
      </aside>
    </div>
  )
}
