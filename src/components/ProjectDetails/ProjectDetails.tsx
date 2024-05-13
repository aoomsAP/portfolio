import styles from "./ProjectDetails.module.css";
import { useContext } from "react";
import Tag from "../Tag/Tag";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { IProject } from "../../types";
import ImageGallery from "react-image-gallery";

interface ProjectDetailsProps {
    project: IProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
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
                {project.images_en && project.images_nl && (
                    <div className={styles.gallery_container}>
                        <ImageGallery
                            items={language == "en" ? project.images_en : project.images_nl}
                            lazyLoad
                            showThumbnails={false}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showBullets={true}
                            showIndex={false}
                            onErrorImageURL={theme == "dark" ? "../images/image-not-found_light.png" : "../images/image-not-found_dark.png"}
                        />
                    </div>
                )}
                {!project.images_en && !project.video && (
                    <figure className={styles.featured_image}>
                        {language == "en"
                            ? <img src={`../${project.featured_image_en.original}`} alt={project.featured_image_en.originalAlt} title={project.featured_image_en.originalTitle} />
                            : <img src={`../${project.featured_image_nl.original}`} alt={project.featured_image_nl.originalAlt} title={project.featured_image_nl.originalTitle} />}
                    </figure>
                )}

                <h1 className={styles.title}>{language == "en" ? project.title_en : project.title_nl}</h1>

                <p className={styles.date}>{project.date.toLocaleDateString(lexicon.locale_string, { month: "long", year: "numeric" })}</p>

                {
                    project.description_en
                        ? <p>{language == "en" ? project.description_en : project.description_nl}</p>
                        : <p>{language == "en" ? project.summary_en : project.summary_nl}</p>
                }

                {project.challenges_en && project.challenges_nl &&
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
                }

                {project.todo_en && project.todo_nl &&
                    <div className={styles.todo}>{lexicon.projects_todo}:
                        {language == "en"
                            ? <ul>{project.todo_en.map((challenge, key) => {
                                return <li key={key}>{challenge}</li>
                            })}</ul>
                            : <ul>{project.todo_nl.map((challenge, key) => {
                                return <li key={key}>{challenge}</li>
                            })}</ul>
                        }
                    </div>
                }

                {(project.demo || project.github) && <ul className={styles.links}>
                    {project.demo &&
                        <li>
                            <i className="bi bi-search" title="Demo link" aria-label="Demo link"></i>
                            <a href={project.demo} target="_blank" className={styles.link_demo}>
                                {`live demo${project.demo.includes("render") ? ` (${lexicon.loads_slowly})` : ""}`}
                            </a>
                        </li>
                    }
                    {project.github &&
                        <li>
                            <i className="devicon-github-original" title="Github link" aria-label="Github link"></i>
                            <a href={project.github} target="_blank" className={styles.link_github}>
                                {`github`}
                            </a>
                        </li>
                    }
                </ul>}

                <div className={styles.taglist}>
                    {language == "en"
                        ? project.tags_en.map((tag, key) => {
                            return <Tag
                                key={key}
                                // onClick={function () { }}
                                label={tag}
                                accent={tag.includes("project") ? true : false} />
                        })
                        : project.tags_nl.map((tag, key) => {
                            return <Tag
                                key={key}
                                // onClick={function () { }}
                                label={tag}
                                accent={tag.includes("project") ? true : false} />
                        })
                    }
                </div>

            </article>
        </>
    )
}

export default ProjectDetails