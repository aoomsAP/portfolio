import { useContext } from "react"
import styles from "./ToTopButton.module.css"
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext"

const ToTopButton = () => {
    const {lexicon} = useContext(SiteSettingsContext);

    // RETURNS element that leads user back to the top of the page

    return (
        <>
            <a href="#top" aria-label={lexicon.to_top_button}
                className={styles.to_top_button}>
                <i className="bi bi-chevron-double-up"></i>
            </a>
        </>
    )
}

export default ToTopButton