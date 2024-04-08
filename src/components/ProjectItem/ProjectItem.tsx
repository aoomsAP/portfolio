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
    const { theme, lexicon, language } = useContext(SiteSettingsContext);

    return (
        <>
            <article className={styles.project}>
                {project.video && <iframe
                    className={styles.video}
                    src={project.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
                }
                {project.images && (
                    <ImageGallery
                        items={project.images}
                        lazyLoad
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        showIndex={false}
                        onErrorImageURL={theme == "dark" ? "images/image-not-found_light.png" : "images/image-not-found_dark.png"}
                    />
                )}

                <h2>{language == "en" ? project.title_en : project.title_nl}</h2>

                <p className={styles.date}>{project.date.toLocaleDateString(lexicon.locale_string, { month: "long", year: "numeric" })}</p>

                <p>{language == "en" ? project.description_en : project.description_nl}</p>

                <div className={styles.challenges}>{lexicon.projects_challenges}:
                    {language == "en"
                        ? <ul>{project.challenges_en.map((challenge, key) => {
                            return <li key={key}>{challenge}</li>
                        })}</ul>
                        : <ul>{project.challenges_nl.map((challenge, key) => {
                            return <li key={key}>{challenge}</li>
                        })}</ul>
                    }
                </div>

                {(project.demo || project.github) && <p aria-label={lexicon.projects_links} className={styles.links}>
                    <i className="bi bi-search" aria-hidden></i>
                    {project.demo && <a href={project.demo}>{`live demo${project.demo.includes("render") ? ` (${lexicon.loads_slowly})` : ""}`}</a>}
                    {project.demo && project.github && <>{` || `}</>}
                    {project.github && <a href={project.github}>{`github`}</a>}
                </p>}

                <div className={styles.taglist}>
                    {project.tags.map((tag, key) => {
                        return <Tag
                            key={key}
                            // onClick={function () { }}
                            label={tag}
                            accent={tag.includes("project") ? true : false} />
                    })}
                </div>

                {!lastproject && <hr aria-hidden />}

            </article>
        </>
    )
}

export default ProjectItem