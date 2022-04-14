import Styled from './LazyImage.style';
import useIntersection from '../../../services/hooks/useIntersection';

interface Props {
  src: string;
  alt: string;
}

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

  return <Styled.Img ref={ref} />;
}

export default LazyImage;
