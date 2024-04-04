import { useContext } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./Contact.module.css";

const Contact = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    return (
        <>
            <main className={styles.main}>

                <h1>// Contact</h1>
                <ContactForm/>
                <hr />
                <p className={styles.linkedin}>
                    {lexicon.contact_linkedin} <a href="www.linkedin.com/in/alki-o-ab117b299">LinkedIn</a>.
                </p>

            </main>
        </>
    )
}

export default Contact;