import styles from './github.module.scss'
import { useEffect, useState } from 'react';

var classNames = require('classnames');

var githubAttributes = [
  {
    title: "Repos",
    type: "public_repos",
    url: "repositories"
  },
  {
    title: "Followers",
    type: "followers",
    url: "followers"
  },
  {
    title: "Following",
    type: "following",
    url: "following"
  }
];

function Github({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    if(isLoading){
      getGithubProfile("kocagozcem").then(user =>{
        setUser(user);
        setLoading(false);
      });
    }
  }, [isLoading]);

  async function getGithubProfile(username) {
    let response = await fetch("https://api.github.com/users/kocagozcem");
    let user = response.status == 200 ? response.json() : {};
    return user;
  }

  function githubAttribute(header, value, url, index){
    return(
        <div className={styles.col} key={index}>
          <a rel="noopener" alt={"github" + header} className={styles.link} href={url} target="_blank">
            <span className={styles.githubAttributeHeader}>{header}</span>
            <span className={styles.githubAttribute}>{value}</span>
          </a>
        </div>
    )
  };

  if(!isLoading){
    return (
      <div className={styles.container}>
        <h3 className={styles.githubHeader}>Github</h3>
        <div className={styles.context}>
          <div className={styles.logoContainer}>
            <span className={styles.githubLogo}>
              <i className="fab fa-github"></i>
            </span>
          </div>
          <div className={styles.githubContext}>
            <div className={styles.githubNameContainer}>
              <span className={styles.githubName}>
                <a rel="noopener" alt="github profile" className={styles.link} href={user.html_url} target="_blank">
                  {user.login}
                </a>
              </span>
            </div>
            <div className={styles.row}>
              {githubAttributes.map((attribute, index) =>
                githubAttribute(attribute.title, user[attribute.type], user.html_url + "?tab=" + attribute.url, index)
              )}
            </div>
          </div>
        </div>
      </div>
    ) 
  }else{
    <div className={styles.container}>
      <h5>loading</h5>
    </div>
  }

  return(
    <div className={styles.container}>
      <h5>error</h5>
    </div>
  )
}
  
export default Github