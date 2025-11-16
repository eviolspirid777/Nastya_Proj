import styles from "./styles.module.scss";

export const Product = () => {
  return (
    <div className={styles["product-information-block"]}>
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
};
