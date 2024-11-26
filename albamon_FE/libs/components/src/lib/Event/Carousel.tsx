import styled from 'styled-components';

interface CarouselProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
}

export const Carousel = (props: CarouselProps) => (
  <CarouselWrapper {...props}>carousel</CarouselWrapper>
);

const CarouselWrapper = styled.div<CarouselProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: ${(props) => props.padding || '0'};
`;
