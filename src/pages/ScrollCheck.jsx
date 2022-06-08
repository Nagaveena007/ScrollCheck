import React, { useState, useRef, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import FakeData from '../components/fake-data'

import { Content, Position, Wrapper } from '../styles'

const ScrollCheck = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef({ x: 10, y: 150 })
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),

    setElementPosition: (pos) => setPos(elementPosition, pos),
    setViewportPosition: (pos) => setPos(viewportPosition, pos)
    /* renderCount */
  }
}

export default () => {
  const positionsStore = ScrollCheck()
  const viewportRef = useRef()

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      const { style } = viewportRef.current
      style.top = `${150 + currPos.y}px`
      style.left = `${10 + currPos.x}px`
    },
    [positionsStore],
    null,
    true
  )

  // Element scroll position
  useScrollPosition(({ currPos }) => positionsStore.setElementPosition(currPos), [], false, 300)
  return useMemo(
    () => (
      <Wrapper>
        <Position ref={viewportRef}>
          <div>
            Viewport Scroll:
            <span>
              X: {positionsStore.getViewportX()} Y: {positionsStore.getViewportY()}
            </span>
          </div>
        </Position>
        <Content mt="45">
          <FakeData />
        </Content>
      </Wrapper>
    ),
    [positionsStore]
  )
}
