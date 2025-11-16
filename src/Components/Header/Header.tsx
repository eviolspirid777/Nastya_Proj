import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles["navigation-block"]}>
          <li className={styles["navigation-block__item"]}>
            <a href="">О продукте</a>
            <a href="">Преимущества</a>
          </li>
          <img src="/images/logo_melissa.webp" />
          <li className={styles["navigation-block__item"]}>
            <a href="">История</a>
            <a href="">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
