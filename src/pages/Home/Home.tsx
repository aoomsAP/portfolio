import styles from "./Home.module.css";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

const Home = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    return (
        <>
            <main className={styles.main}>

                <h1>// {lexicon.about_title}</h1>
                <p>{lexicon.about_description}</p>

                <section className={styles.skills_wrapper}>
                    <p>{lexicon.home_experience}:</p>
                    <div className={styles.skills}>
                        <i title="HTML" aria-label="HTML" className={`devicon-html5-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="CSS" aria-label="CSS" className={`devicon-css3-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="Javascript" aria-label="Javascript" className={`devicon-javascript-plain ${styles.emphasis}`}></i>
                        <i title="MySQL" aria-label="MySQL" className={`devicon-mysql-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="C#" aria-label="C#" className={`devicon-csharp-plain ${styles.emphasis}`}></i>
                        <i title="Node.js" aria-label="Node.js" className={`devicon-nodejs-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="NPM" aria-label="NPM" className={`devicon-npm-original-wordmark ${styles.emphasis}`}></i>
                        <i title="Typescript" aria-label="Typescript" className={`devicon-typescript-plain ${styles.emphasis}`}></i>
                        <i title="Express.js" aria-label="Express.js" className={`devicon-express-original-wordmark ${styles.emphasis}`}></i>
                        <i title="MongoDB" aria-label="MongoDB" className={`devicon-mongodb-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="Neo4J" aria-label="Neo4J" className={`devicon-neo4j-plain-wordmark`}></i>
                        <i title="Bootstrap" aria-label="Bootstrap" className={`devicon-bootstrap-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="JQuery" aria-label="JQuery" className={`devicon-jquery-plain-wordmark`}></i>
                        <i title="Sass" aria-label="Sass" className={`devicon-sass-original`}></i>
                        <i title="React.js" aria-label="React.js" className={`devicon-react-original-wordmark ${styles.emphasis}`}></i>
                        <i title="Wordpress" aria-label="Wordpress" className={`devicon-wordpress-plain`}></i>
                        <i title="Docker" aria-label="Docker" className={`devicon-docker-plain-wordmark`}></i>
                        <i title="Bash" aria-label="Bash" className={`devicon-bash-plain`}></i>
                        <i title="Git" aria-label="Git" className={`devicon-git-plain-wordmark ${styles.emphasis}`}></i>
                        <i title="Github" aria-label="Github" className={`devicon-github-original-wordmark ${styles.emphasis}`}></i>
                        <i title="Postman" aria-label="Postman" className={`devicon-postman-plain-wordmark`}></i>
                        <i title="XML" aria-label="XML" className={`devicon-xml-plain`}></i>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home;