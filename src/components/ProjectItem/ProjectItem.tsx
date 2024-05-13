import styles from "./ProjectItem.module.css";
import { useContext } from "react";
import Tag from "../Tag/Tag";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { IProject } from "../../types";
import { Link } from "react-router-dom";

interface ProjectItemProps {
    project: IProject;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
    const { lexicon, language } = useContext(SiteSettingsContext);

    return (
        <>

            <article className={styles.project}>

                <Link to={`/projects/${project.slug}`}>
                    <figure className={styles.figure}>
                        {language == "en"
                            ? <img src={project.featured_image_en.original} alt={project.featured_image_en.originalAlt} title={project.featured_image_en.originalTitle} />
                            : <img src={project.featured_image_nl.original} alt={project.featured_image_nl.originalAlt} title={project.featured_image_nl.originalTitle} />}
                    </figure>
                </Link>

                <h2 className={styles.title}>
                    <Link to={`/projects/${project.slug}`}>
                        {language == "en" ? project.title_en : project.title_nl}
                    </Link>
                    &ensp;
                    {project.wip &&
                        <div className={styles.wip}>WIP</div>
                    }
                </h2>

                <p className={styles.date}>{project.date.toLocaleDateString(lexicon.locale_string, { month: "long", year: "numeric" })}</p>

                <div>
                    {project.demo &&
                        <a href={project.demo} target="_blank" className={styles.link_demo}>
                            <i className="bi bi-search" title="Demo link" aria-label="Demo link"></i>
                        </a>
                    }
                    {project.github &&
                        <a href={project.github} target="_blank" className={styles.link_github}>
                            <i className="devicon-github-original" title="Github link" aria-label="Github link"></i>
                        </a>
                    }
                </div>

                <p>
                    {language == "en" ? project.summary_en : project.summary_nl}&nbsp;
                    <Link to={`/projects/${project.slug}`}>{lexicon.projects_readmore}</Link>
                </p>

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

export default ProjectItem