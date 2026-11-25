import { Fragment, type ReactElement } from 'react'
import { Deck } from './deck/Deck'
import { Progress } from './deck/Progress'

import { SlideHero } from './slides/01-hero'
import { SlidePart1 } from './slides/02-parte-1'
import { SlideProblem } from './slides/03-problema'
import { SlideScope } from './slides/04-delimitacao'
import { SlidePart2 } from './slides/05-parte-2'
import { SlidePipeline } from './slides/06-pipeline'
import { SlideExplanation } from './slides/09-explicacao'
import { SlideContext } from './slides/10-contexto'
import { SlideDashboard } from './slides/11-interface'
import { SlidePart3 } from './slides/12-parte-3'
import { SlideEvaluation } from './slides/13-avaliacao'
import { SlideLimits } from './slides/14-limites'
import { SlideSchedule } from './slides/15-cronograma'
import { SlideClosing } from './slides/16-encerramento'

const SLIDES: { id: string; render: () => ReactElement }[] = [
  { id: 'capa', render: () => <SlideHero /> },
  { id: 'parte-1', render: () => <SlidePart1 /> },
  { id: 'problema', render: () => <SlideProblem /> },
  { id: 'delimitacao', render: () => <SlideScope /> },
  { id: 'parte-2', render: () => <SlidePart2 /> },
  { id: 'pipeline', render: () => <SlidePipeline /> },
  { id: 'explicacao', render: () => <SlideExplanation /> },
  { id: 'contexto', render: () => <SlideContext /> },
  { id: 'interface', render: () => <SlideDashboard /> },
  { id: 'parte-3', render: () => <SlidePart3 /> },
  { id: 'avaliacao', render: () => <SlideEvaluation /> },
  { id: 'limites', render: () => <SlideLimits /> },
  { id: 'cronograma', render: () => <SlideSchedule /> },
  { id: 'obrigado', render: () => <SlideClosing /> },
]

const SLIDE_IDS = SLIDES.map((slide) => slide.id)

export function App() {
  return (
    <>
      <Deck ids={SLIDE_IDS} chrome={<Progress />}>
        {SLIDES.map((slide) => (
          <Fragment key={slide.id}>{slide.render()}</Fragment>
        ))}
      </Deck>
    </>
  )
}
