import { Link } from "react-router-dom"
import styles from "./MenuLink.module.css"

interface MenuLinkProps {
    link: string | undefined,
    title: string,
    mobile?: boolean,
}

const MenuLink = ({ link, title, mobile}: MenuLinkProps) => {

    return (
        <>
            <li className={`${styles.link} ${mobile ? styles.mobile : ""}`}>
                <Link to={link ?? ""} target={"_blank"}>
                    {title}
                </Link>
            </li>
        </>
    )
}

export default MenuLink