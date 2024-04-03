import styles from "./Home.module.css";
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

const Home = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    return (
        <>
            <main className={styles.main}>

                <h1>// {lexicon.about_title}</h1>
                <p>{lexicon.about_description}</p>

            </main>
        </>
    )
}

export default Home;