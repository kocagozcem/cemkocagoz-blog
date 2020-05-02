import styles from './current-position.module.scss';
import Head from 'next/head';

let technologies = [
  {
    title: "HTML",
    icon: "fab fa-html5"
  },
  {
    title: "CSS",
    icon: "fab fa-css3",
  },
  {
    title: "SASS",
    icon: "fab fa-sass",
  },
  {
    title: "Javascript",
    icon: "fab fa-js-square",
  },
  {
    title: "React Native",
    icon: "fab fa-react",
  },
  {
    title: "Angular",
    icon: "fab fa-angular",
  },
];

function technology(icon, title, index){
  return(
    <div className={styles.technology} key={index}>
      <span className={styles.technologyIcon}>
        <i className={icon}></i>
      </span>
      <span className={styles.technologyName}>{title}</span>
    </div>
  )
}

function jobInformations(){
  return(
    <div className={styles.job}>
      <span className={styles.company}>Eight Information Tech.</span>
      <span className={styles.jobTitle}>Frontend Developer (Remote)</span>
      <span className={styles.jobDate}>Aralık 2018 - Şu Anda</span>
    </div>
  )
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
            {technologies.map((tech, index) => technology(tech.icon, tech.title, index))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
  
export default CurrentPosition