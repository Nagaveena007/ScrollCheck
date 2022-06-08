import React, { useState, useRef, useMemo } from 'react'
//import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import useScrollPosition from './useScrollPosition'
import FakeData from '../components/fake-data'

import { Content, Position, Wrapper } from '../styles'

const ScrollCheck = () => {
  const scrollPosition = useScrollPosition();

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
    getViewportX: () => getPos(scrollPosition, 'x'),
    getViewportY: () => getPos(scrollPosition, 'y'),

    setElementPosition: (pos) => setPos(elementPosition, pos),
    setViewportPosition: (pos) => setPos(viewportPosition, pos)
    /* renderCount */
  }
}

export default () => {
  const positionsStore = ScrollCheck()
  const viewportRef = useRef()

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  // Viewport scroll position
  useScrollPosition(
    () => {
      positionsStore.setViewportPosition(scrollPosition)
      const { style } = viewportRef.current
      style.top = `${150 + scrollPosition}px`
      style.left = `${15 }px`
    },
    [positionsStore],
    null,
    true
  ) 
  // Element scroll position
  useScrollPosition(() => positionsStore.setElementPosition(scrollPosition), [], false, 300)
  return useMemo(
    () => (
      <Wrapper>
        <Position ref={viewportRef}>
          <div>
            Viewport Scroll:
            <span>
              Y: {scrollPosition}
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
