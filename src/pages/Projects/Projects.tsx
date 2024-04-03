import styles from "./Projects.module.css"
import { projects } from "../../assets/projects/projects"
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const Projects = () => {

    return (
        <>
            <main className={styles.main}>

                <h1>// Projects</h1>

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

            </main>
        </>
    )
}

export default Projects;