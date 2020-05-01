import styles from './current-position.module.scss';
import Head from 'next/head';

var classNames = require('classnames');
// https://github.com/JedWatson/classnames

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
    icon: "fab fa-js",
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

function technology(icon, title){
  return(
    <div className={styles.technology}>
      <span className={styles.technologyIcon}>
        <i className={icon}></i>
      </span>
      <h5 className={styles.technologyName}>{title}</h5>
    </div>
  )
}

function jobInformations(){
  return(
    <div className={styles.job}>
      <h3 className={styles.company}>Eight Information Tech.</h3>
      <h4 className={styles.jobTitle}>Frontend Developer (Remote)</h4>
      <h5 className={styles.jobDate}>Aralık 2018 - Şu Anda</h5>
    </div>
  )
}

function CurrentPosition({ children }) {
  return (
    <>
    <Head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
    </Head>
    <div className={styles.container}>
      <h3 className={styles.currentJobHeader}>Current Position</h3>
      <div className={styles.content}>
        {jobInformations()}
        <div className={styles.companyTechnologies}>
          <h4 className={styles.technologiesHeader}>
            Using Technologies
          </h4>
          <div className={styles.technologies}>
            {technologies.map(tech => technology(tech.icon, tech.title))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
  
export default CurrentPosition