import type { Plugin } from 'vite'
import { posix } from 'node:path'

/**
 * O dist precisa abrir por duplo clique (file://), onde o navegador bloqueia
 * módulos ES e folhas de estilo externas por CORS. Inlinar o CSS e carregar o
 * bundle como script clássico remove essas duas requisições.
 */
export function inlineForFileProtocol(): Plugin {
  return {
    name: 'deck-inline-for-file-protocol',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        const cssTags = html.match(/<link rel="stylesheet" crossorigin href="\.\/([^"]+\.css)">/g) ?? []
        for (const tag of cssTags) {
          const href = tag.match(/href="\.\/([^"]+\.css)"/)?.[1]
          if (!href) continue
          const css = bundle[href]?.type === 'asset' ? String(bundle[href].source) : null
          if (css === null) continue
          const relocatedCss = css.replace(
            /url\(\s*["']?(\.{1,2}\/[^"')]+)["']?\s*\)/g,
            (_, assetPath: string) => `url("./${posix.join(posix.dirname(href), assetPath)}")`,
          )
          html = html.replace(tag, () => `<style>${relocatedCss}</style>`)
        }

        return html.replace(
          /<script type="module" crossorigin src="\.\/([^"]+\.js)"><\/script>/,
          '<script defer src="./$1"></script>',
        )
      },
    },
  }
}
