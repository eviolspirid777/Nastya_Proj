import type { FC } from "react";
import styles from "./styles.module.scss";

export const Header: FC<{
  headerColor: string;
}> = ({ headerColor }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles["navigation-block"]}>
          <li
            className={`${styles["navigation-block__item"]} ${
              headerColor === "black" ? styles["black-color"] : null
            }`}
          >
            <a href="#about">О продукте</a>
            <a href="#benefits">Преимущества</a>
          </li>
          <img src="/images/logo_melissa.webp" />
          <li
            className={`${styles["navigation-block__item"]} ${
              headerColor === "black" ? styles["black-color"] : null
            }`}
          >
            <a href="#history">История</a>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
