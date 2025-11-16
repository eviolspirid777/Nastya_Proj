import Balatro from "../../shared/components/BalatroBackground/BalatroBackground";
import BlurText from "../../shared/components/BlurText/BlurText";
import styles from "./Benefits.module.scss";

export const Benefits = () => {
  const renderBlurText = (textContent: string) => {
    return (
      <BlurText
        text={textContent}
        delay={150}
        animateBy="words"
        direction="top"
      />
    );
  };

  return (
    <div className={styles["benefits-wrapper"]}>
      <Balatro
        isRotate={false}
        mouseInteraction={true}
        pixelFilter={2000}
        color1="#ba3bde"
        color2="#6e6868"
        color3="black"
      />
      <div className={styles["benefits-block"]}>
        <h3>Преимущества</h3>
        <div className={styles["benefits-block__data"]}>
          <div
            className={styles["benefits-block__data__information-item"]}
            style={{
              justifySelf: "end",
            }}
          >
            <span>{renderBlurText("Удобная упаковка")}</span>
            <span>
              {renderBlurText("Уникальность содержащегося компонента")}
            </span>
            <span>{renderBlurText("Отсутствие газации")}</span>
          </div>
          <img
            src="/images/bottle.png"
            style={{
              width: "400px",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
          <div className={styles["benefits-block__data__information-item"]}>
            <span>{renderBlurText("Отсутствие сахара")}</span>
            <span>{renderBlurText("Натуральность состава")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
