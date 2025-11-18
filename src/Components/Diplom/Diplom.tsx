import { useEffect, type FC } from "react";
import { useInView } from "react-intersection-observer";

export const Diplom: FC<{
  changeHeaderColor: (color: string) => void;
}> = ({ changeHeaderColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useEffect(() => {
    if (inView) {
      changeHeaderColor("white");
    } else {
      changeHeaderColor("black");
    }
  }, [inView]);

  return <img ref={ref} src="/images/diplom.webp" />;
};
