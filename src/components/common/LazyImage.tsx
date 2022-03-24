import useIntersection from '../../services/hooks/useIntersection';
import loading from '../../assets/icons/loading.gif';

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
          const lazyImage = entry.target;
          lazyImage.setAttribute('src', src);
          io.unobserve(entry.target);
        }
      });
    },
    threshold: 0.5,
  });

  return <img ref={ref} src={loading} alt={alt} />;
}

export default LazyImage;
