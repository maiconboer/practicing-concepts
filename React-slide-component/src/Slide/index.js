import React from 'react';

import { Container, Content, Navigation, Item } from './styles';

const Slide = ({slides}) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active))
  },[active])

  const slidePrev = React.useCallback(() => {
    if(active > 0) return setActive(active - 1)

  },[active])

 const slideNext = React.useCallback(() => {
   if(active < slides.length -1) setActive(active + 1)
  },[active, slides.length])

  return (
    <Container>
      <Content 
        ref={contentRef}
        style={{transform: `translateX(${position}px)`}}>
        {slides.map(slide => 
          <Item key={slide.id}><img src={slide.image} alt=""/></Item>
        )}
      </Content>

      <Navigation>
        <button 
          onClick={slidePrev}
          disabled={active === 0 ? true : false}
          >
            Anterior
          </button>

        <button 
          onClick={slideNext}
          disabled={(active + 1 === slides.length) ? true : false}
        >
          Próximo
        </button>
      </Navigation>
    </Container>
  )
}

export default Slide;
