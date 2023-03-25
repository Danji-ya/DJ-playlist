import Styled from './LazyImage.style';
import useIntersection from '../../../services/hooks/useIntersection';

interface Props {
  src: string;
  rounded?: boolean;
  alt: string;
}

function LazyImage({ src, rounded = false, alt }: Props) {
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

  return <Styled.Img rounded={rounded} ref={ref} />;
}

export default LazyImage;
