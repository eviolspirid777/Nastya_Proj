import { memo } from "react";
import styles from "./styles.module.scss";

export const Sponsors = memo(() => {
  return (
    <div className={styles["sponsors-block"]}>
      <h3>Нас поддерживают</h3>
      <div className={styles["sponsors-block__cards"]}>
        <div className={styles["sponsors-block__cards__card"]}>
          <img src="/images/agrarian_university.png" />
          <span>Ставропольский Государственный Аграрный Университет</span>
        </div>
        <div className={styles["sponsors-block__cards__card"]}>
          <img src="/images/fond_innovation.png" />
          <span>Фонд Содействия Инновациям</span>
        </div>
        <div className={styles["sponsors-block__cards__card"]}>
          <img src="/images/predprenimatel_logo.png" />
          <span>
            Платформа Университетского Технологического Предпринимательства
          </span>
        </div>
      </div>
      <div className={styles["sponsors-block__innovation-fond"]}>
        <span>
          Проект создан при поддержке Федерального государственного бюджетного
          учреждения "Фонд содействия развитию малых форм предприятий в
          научно-технической сфере" в рамках программы "Студенческий стартап"
          федерального проекта "Платформа университетского технологического
          предпринимательства"
        </span>
        <img src="/images/fond_innovation.png" alt="" />
      </div>
    </div>
  );
});
