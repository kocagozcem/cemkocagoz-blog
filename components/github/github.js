import styles from './github.module.scss'
import { useEffect, useState } from 'react';

var classNames = require('classnames');

var githubAttributes = [
  {
    title: "Public Repos",
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

  function githubAttribute(header, value, url){
    return(
        <div className={styles.col}>
          <a className={styles.link} href={url} target="_blank">
            <h4 className={styles.githubAttributeHeader}>{header}</h4>
            <h3 className={styles.githubAttribute}>{value}</h3>
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
              <h2 className={styles.githubName}>
                <a className={styles.link} href={user.html_url} target="_blank">
                  {user.login}
                </a>
              </h2>
            </div>
            <div className={styles.row}>
              {githubAttributes.map(attribute =>
                githubAttribute(attribute.title, user[attribute.type], user.html_url + "?tab=" + attribute.url)
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