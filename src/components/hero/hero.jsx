import styles from "./hero.module.css";
import { HeroArrow } from "../../assets/svgs/hero-arrow";
import { GradientElement } from "../shared/gradient-element";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.left__side}>
        <img src="https://marcelo-llerena.netlify.app/pictures/my-self/yo.png" />
        <div className={styles.words}>
          <HeroArrow top={-20} right={-10} />
          <p>
            Hello! I Am <span>Marcelo Llerena</span>
          </p>
        </div>

        <GradientElement />
      </div>

      <div className={styles.right__side}>
        <p>A Developer who</p>

        <p>
          Judges a book by it's <span>cover</span> ...
        </p>

        <p>Because if the cover does not impress you what else can?</p>
      </div>
    </section>
  );
}
