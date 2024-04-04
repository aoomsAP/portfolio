import { useContext } from "react";
import Tag from "../Tag/Tag";
import styles from "./ProjectItem.module.css"
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { Project } from "../../types";

interface ProjectItemProps {
    project: Project;
    lastproject: boolean;
}

const ProjectItem = ({ project, lastproject }: ProjectItemProps) => {
    const { lexicon, language } = useContext(SiteSettingsContext);

    // RETURNS project item

    return (
        <>
            <article className={styles.project}>
                {/* <img src={img} alt={title} /> */}
                <h2>{language == "en" ? project.title_en : project.title_nl}</h2>
                <p className={styles.date}>{project.date.toLocaleDateString(lexicon.locale_string,{month: "long",year: "numeric"})}</p>
                <p>{language == "en" ? project.description_en : project.description_nl}</p>
                {(project.demo || project.github) && <p className={styles.links}>
                    <i className="bi bi-search"></i>
                    {project.demo && <a href={project.demo}>{`live demo`}</a>}
                    {project.demo && project.github && <>{` || `}</>}
                    {project.github && <a href={project.github}>{`github`}</a>}
                </p>}
                <div className={styles.taglist}>
                {project.tags.map((tag,key) => {
                    return <Tag
                    key={key}
                    onClick={function(){}}
                    label={tag}
                    accent={tag.includes("project") ? true : false} />
                })}
                </div>
                {!lastproject && <hr/>}
            </article>
        </>
    )
}

export default ProjectItem