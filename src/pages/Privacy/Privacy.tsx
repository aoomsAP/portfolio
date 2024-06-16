import styles from "./Privacy.module.css";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    let navigate = useNavigate();

    return (
        <>
            <main className={`${styles.notfound} ${styles.main}`}>

                <h1>// {lexicon.privacy_title}</h1>

                <p>[{lexicon.privacy_date} 17/06/2024]</p>
                <p>{lexicon.privacy_owner}</p>
                <p>{lexicon.privacy_data}</p>
                <p>{lexicon.privacy_preferences}</p>

                <button onClick={() => navigate("/contact")}>
                    Contact
                </button>

            </main>
        </>
    )
}

export default NotFound;