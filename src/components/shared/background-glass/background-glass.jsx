import styles from "./background-glass.module.css";

export const BackgroundGlass = ({ content }) => {
  return (
    <div className={styles.container}>
      <p>{content}</p>
    </div>
  );
};
