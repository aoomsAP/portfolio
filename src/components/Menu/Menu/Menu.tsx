import React from "react"
import { IMenuItem } from "../../../types"
import styles from "./Menu.module.css"

// reusable menu components
import MenuItem from "../MenuItem/MenuItem"
import MenuLink from "../MenuLink/MenuLink"
import MenuNavLink from "../MenuNavLink/MenuNavLink"

interface MenuProps {
    items: IMenuItem[],
    mobile?: boolean,
}

const Menu = ({ items, mobile }: MenuProps) => {

    // RETURNS a menu
    // requires array of menu items of the type IMenuItem (type, text, and optional url)
    // depending on the type, the menu will include a MenuItem, MenuLink or MenuNavLink

    return (
        <>
            <menu className={`${styles.menu} ${mobile ? styles.mobile : ""}`}>
                {items.map((item, i) => {
                    return <React.Fragment key={i}>

                        {item.type === "item" &&
                            <MenuItem title={item.text} mobile={mobile ? true : false}/>}
                        {item.type === "link" &&
                            <MenuLink link={item.url} title={item.text} mobile={mobile ? true : false}/>}
                        {item.type === "navlink" &&
                            <MenuNavLink link={item.url} title={item.text} mobile={mobile ? true : false}/>}

                    </React.Fragment>
                })}
            </menu>
        </>
    )
}

export default Menu