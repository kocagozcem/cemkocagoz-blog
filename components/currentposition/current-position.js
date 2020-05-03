import styles from "./current-position.module.scss";
import {} from "simple-icons/icons/angular";

const html = require("simple-icons/icons/HTML5");
const css = require("simple-icons/icons/CSS3");
const sass = require("simple-icons/icons/Sass");
const javascript = require("simple-icons/icons/JavaScript");
const react = require("simple-icons/icons/React");
const angular = require("simple-icons/icons/Angular");

let technologies = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "SASS",
    icon: sass,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "React Native",
    icon: react,
  },
  {
    title: "Angular",
    icon: angular,
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
