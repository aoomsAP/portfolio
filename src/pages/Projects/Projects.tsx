import styles from "./Projects.module.css"
import { projects } from "../../assets/projects/projects"
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ToTopButton from "../../components/ToTopButton/ToTopButton";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

const Projects = () => {
    const {lexicon} = useContext(SiteSettingsContext);

    return (
        <>
            <main className={styles.main}>

                <h1>// {lexicon.projects}</h1>

                <section>
                    {projects
                        .sort((a, b) => (new Date(b.date).getTime()) - (new Date(a.date).getTime()))
                        .map((project, key) => {
                            return <ProjectItem
                                key={key}
                                project={project}
                                lastproject={key == projects.length - 1} />
                        })}
                </section>

                <ToTopButton />

            </main>
        </>
    )
}

export default Projects;