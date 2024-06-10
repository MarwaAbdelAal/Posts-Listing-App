import styles from "@/styles/spinner.module.scss";

export default function Spinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}
