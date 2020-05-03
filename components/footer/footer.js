import styles from "./footer.module.scss";
import { projectUrl } from "../../assets/textvars.json";
// import simpleIcons from "simple-icons";

function Footer({ children }) {
  let socialLinks = [
    {
      name: "Email",
      icon: "Mail.Ru",
      link: "mailto:kocagozcem@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "LinkedIn",
      link: "https://www.linkedin.com/in/cemkocagoz/",
    },
    {
      name: "Github",
      icon: "Github",
      link: "https://github.com/kocagozcem",
    },
  ];

  function socialLink(social, index) {
    // const icon = simpleIcons.get(social.icon);
    return (
      <a
        key={index}
        rel="noopener"
        alt={social.name + " profile"}
        title={social.name + " profile"}
        name={social.name + " profile"}
        className={styles.link}
        href={social.link}
        target="_blank"
      ></a>
    );
  }

  return (
    <footer className={styles.container}>
      <p className={styles.sourceCodeText}>
        Projenin açık kaynak kodlarına
        <a
          rel="noopener"
          alt="cem kocagoz blog github repo"
          className={styles.repoLink}
          href={projectUrl}
          target="_blank"
        >
          {" buradan "}
        </a>
        ulaşabilirsiniz
      </p>
      <div className={styles.socialLinks}>
        {socialLinks.map((social, index) => socialLink(social, index))}
      </div>
    </footer>
  );
}

export default Footer;
