import { useContext } from "react"
import styles from "./SiteSettings.module.css"
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import ToggleButton from "../ToggleButton/ToggleButton"

const SiteSettings = () => {
    const {theme, setTheme, language, setLanguage,lexicon} = useContext(SiteSettingsContext);

    // RETURNS the site settings:
    // - a toggle button for the language settings of the site
    // - a toggle button for the theme settings of the site

    return (
        <>
            <div className={styles.settings}>
                <ToggleButton
                    onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
                    condition={language === "en"}
                    option1={<><strong className={styles.language}>en</strong>&nbsp;|&nbsp;<span className={styles.language}>nl</span></>}
                    option2={<><span className={styles.language}>en</span>&nbsp;|&nbsp;<strong className={styles.language}>nl</strong></>}
                    title={lexicon.language_toggle}
                />
                <ToggleButton
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    condition={theme === "light"}
                    option1={<i className="bi bi-sun"></i>}
                    option2={<i className="bi bi-moon"></i>}
                    title={theme === "dark" ? lexicon.theme_golight : lexicon.theme_godark}
                />
            </div>
        </>
    )
}

export default SiteSettings