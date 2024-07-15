import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'

const formatNumber = (num) => {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B'
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M'
  return num.toLocaleString()
}

const parseNumber = (str) => {
  if (str.includes('B')) return parseFloat(str) * 1e9
  if (str.includes('M')) return parseFloat(str) * 1e6
  return parseFloat(str.replace(/,/g, ''))
}

const Counting = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const numsRef = useRef([])

  useEffect(() => {
    if (inView) {
      numsRef.current.forEach((numEl, index) => {
        const endValue = parseNumber(numEl.innerText)
        anime({
          targets: numEl,
          innerHTML: [0, endValue],
          round: 1,
          easing: 'easeInOutQuad',
          duration: 2000,
          update: function (anim) {
            numEl.innerText = formatNumber(Math.round(anim.animations[0].currentValue))
          },
        })
      })
    }
  }, [inView])

  return (
    <div className='counter' ref={ref}  data-aos="fade-up">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="main-counter">
              <div className="coins">
                <div className="num" ref={(el) => (numsRef.current[0] = el)}>1119</div>
                <div className="text">Coins</div>
              </div>
              <div className="coins">
                <div className="num" ref={(el) => (numsRef.current[1] = el)}>1630</div>
                <div className="text">Markets</div>
              </div>
              <div className="coins">
                <div className="num" ref={(el) => (numsRef.current[2] = el)}>886.24M</div>
                <div className="text">24H Value(USD)</div>
              </div>
              <div className="coins text-end">
                <div className="num" ref={(el) => (numsRef.current[3] = el)}>22.24B</div>
                <div className="text">30-Day Value(USD)</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Counting
