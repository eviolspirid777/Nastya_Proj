import styles from "./styles.module.scss";

export const Contacts = () => {
  return (
    <div className={styles["contacts-block"]}>
      <h2>Наши контакты</h2>
      <strong>
        Напишите нам или заполните свои данные и мы свяжемся с вами
      </strong>
      <div className={styles["contacts-block__content"]}>
        <div className={styles["contacts-block__content__card"]}>
          <span className={styles["contacts-block__content__card__telephone"]}>
            +7 968 268 34 58
          </span>
          <span className={styles["contacts-block__content__card__email"]}>
            YLYA950705@yandex.ru
          </span>
          <span className={styles["contacts-block__content__card__address"]}>
            Юридический адрес: Россия, г. Ставрополь, ул. 50 лет ВЛКСМ, д.111,
            кв. 45
          </span>
          <div className={styles["contacts-block__content__card__contacts"]}>
            <i />
            <i />
          </div>
        </div>
        <div className={styles["contacts-block__content__form"]}>
          <input type="text" placeholder="Ваш email" />
          <input type="text" placeholder="Ваше Ф.И.О." />
          <input type="text" placeholder="Ваш телефон" />
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};
