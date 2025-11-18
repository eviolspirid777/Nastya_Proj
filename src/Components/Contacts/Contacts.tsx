import { MdMail, MdPhone } from "react-icons/md";
import styles from "./styles.module.scss";
import { memo } from "react";

export const Contacts = memo(() => {
  return (
    <div id="contacts" className={styles["contacts-block"]}>
      <h2>Наши контакты</h2>
      <strong>
        Напишите нам или заполните свои данные и мы свяжемся с вами
      </strong>
      <div className={styles["contacts-block__content"]}>
        <div className={styles["contacts-block__content__card"]}>
          <span className={styles["contacts-block__content__card__telephone"]}>
            +7 988 106 00 43
          </span>
          <span className={styles["contacts-block__content__card__email"]}>
            Lyahovaanastasya@yandex.ru
          </span>
          <span className={styles["contacts-block__content__card__address"]}>
            Юридический адрес: Россия, Ставропольский край, г. Ставрополь,
            ул.Пирогова, д. 15/2
          </span>
          <div className={styles["contacts-block__content__card__contacts"]}>
            <a href="tel:+7-988-106-00-43">
              <MdPhone size={25} />
            </a>
            <a href="mailto:Lyahovaanastasya@yandex.ru">
              <MdMail size={25} />
            </a>
          </div>
        </div>
        <div className={styles["contacts-block__content__form"]}>
          <input type="text" placeholder="Ваш email" />
          <input type="text" placeholder="Ваше Ф.И.О." />
          <input type="text" placeholder="Ваш телефон" />
          <a className={styles["btn-epic"]}>
            <div>
              <span>Отправить</span>
              <span>Отправить</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});
