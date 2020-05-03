import styles from "./current-position.module.scss";
import Head from "next/head";
// import simpleIcons from "simple-icons";

let technologies = [
  {
    title: "HTML",
    icon: "HTML5",
  },
  {
    title: "CSS",
    icon: "CSS3",
  },
  {
    title: "SASS",
    icon: "Sass",
  },
  {
    title: "Javascript",
    icon: "JavaScript",
  },
  {
    title: "React Native",
    icon: "React",
  },
  {
    title: "Angular",
    icon: "Angular",
  },
];

function technology(icon, title, index) {
  // const stackIcon = simpleIcons.get(icon);
  return <div className={styles.technology} key={index}></div>;
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
