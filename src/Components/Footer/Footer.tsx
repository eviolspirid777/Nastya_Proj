import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";

import styles from "./styles.module.scss";
import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className={styles["footer-block"]}>
      <div className={styles["footer-block__organization-info"]}>
        <span>ООО «МЕЛИССА И ЛУНА»</span>
        <span>ИНН: 2635263831</span>
        <span>КПП: 263501001</span>
      </div>
      <div className={styles["footer-block__contacts"]}>
        <a href="tel:+7-988-106-00-43">
          <MdPhone size={25} />
        </a>
        <a href="mailto:Lyahovaanastasya@yandex.ru">
          <MdMail size={25} />
        </a>
      </div>
      <div className={styles["footer-block__developer-info"]}>
        <span>© Сайт разработан</span>
        <span>Кирилл Мисюрин</span>
        <span>eviolspirid@gmail.com</span>
      </div>
    </footer>
  );
});
