import styles from "./current-position.module.scss";
import Head from "next/head";

let technologies = [
  {
    title: "HTML",
    icon: require("simple-icons/icons/HTML5"),
  },
  {
    title: "CSS",
    icon: require("simple-icons/icons/CSS3"),
  },
  {
    title: "SASS",
    icon: require("simple-icons/icons/Sass"),
  },
  {
    title: "Javascript",
    icon: require("simple-icons/icons/JavaScript"),
  },
  {
    title: "React Native",
    icon: require("simple-icons/icons/React"),
  },
  {
    title: "Angular",
    icon: require("simple-icons/icons/Angular"),
  },
];

function technology(icon, title, index) {
  return (
    <div className={styles.technology} key={index}>
      <div
        data-icon={icon}
        style={{
          fill: `#${icon.hex}`,
          display: "inline-block",
          width: "32px",
          margin: "0 auto",
        }}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <span className={styles.technologyName}>{title}</span>
    </div>
  );
}

function jobInformations() {
  return (
    <div className={styles.job}>
      <span className={styles.company}>Eight Information Tech.</span>
      <span className={styles.jobTitle}>Frontend Developer (Remote)</span>
      <span className={styles.jobDate}>Aralık 2018 - Şu Anda</span>
    </div>
  );
}

function CurrentPosition({ children }) {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.currentJobHeader}>Current Position</h3>
        <div className={styles.content}>
          {jobInformations()}
          <div className={styles.companyTechnologies}>
            <span className={styles.technologiesHeader}>
              Using Technologies
            </span>
            <div className={styles.technologies}>
              {technologies.map((tech, index) =>
                technology(tech.icon, tech.title, index)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentPosition;
