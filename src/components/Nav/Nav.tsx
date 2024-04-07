import styles from "./Nav.module.css"
import Menu from "../Menu/Menu/Menu"
import { IMenuItem } from "../../types"

interface NavProps {
    navItems: IMenuItem[],
    mobile?: boolean,
}

const Nav = ({navItems, mobile}: NavProps) => {

    // RETURNS nav, with:
    // - a menu, with the given amount of links

    return (
        <>
            <nav className={styles.nav} >
                <Menu items={navItems} mobile={mobile ? true : false}/>
            </nav>
        </>
    )
}

export default Nav