import styles from "./triangle-spinner.module.scss";

function TriangleSpinner({ color, size }) {
  return (
    <div className={styles.spinnerContent}>
      <svg width={size + "px"} height={size + "px"} viewBox="-4 -1 38 28">
        <polygon
          className={styles.polygon}
          fill="transparent"
          stroke={color}
          stroke-width="2"
          points="15,0 30,30 0,30"
        ></polygon>
      </svg>
    </div>
  );
}

export default TriangleSpinner;
