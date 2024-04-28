import styles from "./Home.module.css";
import { useContext, useState } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { ISkill } from "../../types";
import SkillsList from "../../components/Skills/SkillsList";

const Home = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    const skills: ISkill[] = [
        { name: "HTML", icon: "devicon-html5-plain-wordmark", emphasis: true },
        { name: "CSS", icon: "devicon-css3-plain-wordmark", emphasis: true },
        { name: "Javascript", icon: "devicon-javascript-plain", emphasis: true },
        { name: "MySQL", icon: "devicon-mysql-plain-wordmark", emphasis: true },
        { name: "C#", icon: "devicon-csharp-plain", emphasis: true },
        { name: "Node.js", icon: "devicon-nodejs-plain-wordmark", emphasis: true },
        { name: "NPM", icon: "devicon-npm-original-wordmark", emphasis: true },
        { name: "Typescript", icon: "devicon-typescript-plain", emphasis: true },
        { name: "Express.js", icon: "devicon-express-original-wordmark", emphasis: true },
        { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark", emphasis: true },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain-wordmark", emphasis: true },
        { name: "React.js", icon: "devicon-react-original-wordmark", emphasis: true },
        { name: "Git", icon: "devicon-git-plain-wordmark", emphasis: true },
        { name: "Wordpress", icon: "devicon-wordpress-plain", emphasis: true },

        { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain"},
        { name: "Github", icon: "devicon-github-original-wordmark" },
        { name: "Neo4J", icon: "devicon-neo4j-plain-wordmark" },
        { name: "JQuery", icon: "devicon-jquery-plain-wordmark" },
        { name: "Sass", icon: "devicon-sass-original" },
        { name: "Docker", icon: "devicon-docker-plain-wordmark" },
        { name: "Bash", icon: "devicon-bash-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "XML", icon: "devicon-xml-plain" },
        { name: "Swagger", icon: "devicon-swagger-plain" },
        { name: "Adobe Photoshop", icon: "devicon-photoshop-plain"}
    ]

    const [skill, setSkill] = useState<string>("");

    return (
        <>
            <main className={styles.main}>

                <h1>// {lexicon.about_title}</h1>
                <p>{lexicon.about_description}</p>

                <section className={styles.skills_wrapper}>
                    <p>{lexicon.home_experience}: <span className={styles.skills_description}>{skill}</span></p>
                    <SkillsList skills={skills} setSkill={setSkill} />
                </section>

            </main>
        </>
    )
}

export default Home;