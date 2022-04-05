import styled from 'styled-components';
import useIntersection from '../../services/hooks/useIntersection';

interface Props {
  src: string;
  alt: string;
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
  visibility: hidden;
`;

function LazyImage({ src, alt }: Props) {
  const ref = useIntersection({
    callback: (
      entries: IntersectionObserverEntry[],
      io: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLElement;
          lazyImage.setAttribute('src', src);
          lazyImage.setAttribute('alt', alt);
          lazyImage.style.visibility = 'visible';

          io.unobserve(entry.target);
        }
      });
    },
    threshold: 0.5,
  });

  return <Img ref={ref} />;
}

export default LazyImage;
