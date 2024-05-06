import styles from '@/css/Waves.module.css';

const Waves = () => {
  return (
    <div className={styles.header}>
      <div>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1B9C85" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,250,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#1B9C85" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Waves;
