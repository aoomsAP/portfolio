import { Link } from "react-router-dom"
import styles from "./Initials.module.css"
import { useContext } from "react"
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext"

interface InitialsProps {
    size: string,
}

const Initials = ({ size }: InitialsProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    // RETURNS project item

    return (
        <>
            <Link to="/" className={styles.initial}>
                <span style={{ fontSize: size }} aria-label={lexicon.logo_alt}>
                    ao<span className={styles.accent}>.</span>
                </span>
            </Link>
        </>
    )
}

export default Initials