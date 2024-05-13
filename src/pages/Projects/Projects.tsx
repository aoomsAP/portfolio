import styles from "./Projects.module.css";
import { projects } from "../../assets/projects/projects"
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import ToTopButton from "../../components/ToTopButton/ToTopButton";

const Projects = () => {

    const { lexicon } = useContext(SiteSettingsContext);

    return (
        <>
            <main className={styles.main}>

                <h1>// {lexicon.projects}</h1>

                <section className={styles.projects}>
                    {projects
                        .sort((a, b) => (new Date(b.date).getTime()) - (new Date(a.date).getTime()))
                        .map((project, key) => {
                            return <ProjectItem
                                key={key}
                                project={project} />
                        })}
                </section>

                <ToTopButton/>

            </main>
        </>
    )
}

export default Projects;