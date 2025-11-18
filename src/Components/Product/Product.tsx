import { memo, useEffect, type FC } from "react";
import styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";

export const Product: FC<{
  changeHeaderColor: (color: string) => void;
}> = memo(({ changeHeaderColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      changeHeaderColor("white");
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles["product-information-block"]}>
      <div className={styles["product-information-block__image-block"]}>
        <img
          className={styles["product-information-block__image-block__image"]}
          src="/images/bottle.png"
        />
        <img
          className={styles["product-information-block__image-block__splashes"]}
          src="/images/splashes.png"
        />
      </div>
      <strong className={styles["product-information-block__undertile"]}>
        Мелисса и Луна – выбор тех, кто хочет почувствовать настоящий вкус
        природы, без добавленного сахара!
      </strong>
    </div>
  );
});
