import styles from "./footer.module.scss";
import { projectUrl } from "../../assets/textvars.json";

function Footer({ children }) {
  let socialLinks = [
    {
      name: "Email",
      icon: require("simple-icons/icons/HTML5"),
      link: "mailto:kocagozcem@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: require("simple-icons/icons/LinkedIn"),
      link: "https://www.linkedin.com/in/cemkocagoz/",
    },
    {
      name: "Github",
      icon: require("simple-icons/icons/Github"),
      link: "https://github.com/kocagozcem",
    },
  ];

  function socialLink(social, index) {
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
      >
        <div
          data-icon={social.icon}
          style={{
            fill: `#fff`,
            display: "inline-block",
            width: "26px",
            margin: "0 auto",
          }}
          dangerouslySetInnerHTML={{ __html: social.icon.svg }}
        />
      </a>
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
