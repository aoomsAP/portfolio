import { NavLink } from "react-router-dom"
import styles from "./MenuNavLink.module.css"

interface MenuNavLinkProps {
    link: string | undefined,
    title: string,
    mobile?: boolean,
}

const MenuNavLink = ({ link, title, mobile }: MenuNavLinkProps) => {

    return (
        <>
            <li className={`${styles.link} ${mobile ? styles.mobile : ""}`}>
                <NavLink to={link ?? ""} className={({ isActive }) => isActive ? "active" : "notactive"}>
                    {title}
                </NavLink>
            </li>
        </>
    )
}

export default MenuNavLink