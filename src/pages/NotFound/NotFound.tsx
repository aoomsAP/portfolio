import styles from "./NotFound.module.css";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    let navigate = useNavigate();

    return (
        <>
            <main className={`${styles.notfound} ${styles.main}`}>

                <h1>// {lexicon.notfound}</h1>

                <p><i className="bi bi-x-square-fill"></i> {lexicon.notfound_paragraph}</p>
                <button onClick={() => navigate("")}>
                    {lexicon.notfound_backhome}
                </button>

            </main>
        </>
    )
}

export default NotFound;