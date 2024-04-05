import styles from "./ProjectItem.module.css";
import { useContext } from "react";
import Tag from "../Tag/Tag";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { Project } from "../../types";
import ImageGallery from "react-image-gallery";

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
                {project.images.length > 1 && (
                    <ImageGallery 
                    items={project.images}
                    lazyLoad
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showBullets={true}
                    showIndex={false}
                    onErrorImageURL=""
                />
                )}
                
                <h2>{language == "en" ? project.title_en : project.title_nl}</h2>
                
                <p className={styles.date}>{project.date.toLocaleDateString(lexicon.locale_string,{month: "long",year: "numeric"})}</p>
                
                <p>{language == "en" ? project.description_en : project.description_nl}</p>

                <ul>{project.challenges.map((challenge,key) => {
                    return <li key={key}>{challenge}</li>
                })}</ul>
                
                {(project.demo || project.github) && <p aria-label={lexicon.projects_links} className={styles.links}>
                    <i className="bi bi-search" aria-hidden></i>
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

                {!lastproject && <hr aria-hidden/>}

            </article>
        </>
    )
}

export default ProjectItem