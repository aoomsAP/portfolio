import styles from "./Project.module.css";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import ToTopButton from "../../components/ToTopButton/ToTopButton";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { projects } from "../../assets/projects/projects"
import { Link, useParams } from "react-router-dom";

const Project = () => {

    const { slug } = useParams();
    const { lexicon } = useContext(SiteSettingsContext);

    const project = projects.find(x => x.slug === slug);

    return (
        <>
            <main className={styles.main}>


                    <p className={styles.back}>
                        <i className="bi bi-caret-left-fill"></i>&nbsp;
                        <Link to="/projects">{lexicon.projects_back}</Link>
                    </p>
                

                {
                    project && <section>
                        <ProjectDetails project={project} />
                    </section>
                }

                {
                    !project && <section>
                        <p><i className="bi bi-x-square"></i> Project not found.</p>
                    </section>
                }

                <ToTopButton />

            </main>
        </>
    )
}

export default Project;