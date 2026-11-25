import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart3() {
  return (
    <Slide
      id="parte-3"
      tone="green">
      <SectionDivider
        index="3"
        kicker="como avaliar"
        title="Avaliação e viabilidade"
        note="A proposta será analisada para entender se os alertas são claros, verificáveis e úteis como ponto de partida."
      />
    </Slide>
  )
}
