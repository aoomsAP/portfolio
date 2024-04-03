import { Link } from "react-router-dom"
import styles from "./Initials.module.css"

interface InitialsProps {
    size: string,
}

const Initials = ({ size }: InitialsProps) => {

    // RETURNS project item

    return (
        <>
            <Link to="/" className={styles.initial}>
                <span style={{ fontSize: size }}>
                    a<span className={styles.dot}>o</span><span className={styles.accent}>.</span>
                </span>
            </Link>
        </>
    )
}

export default Initials