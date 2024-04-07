import styles from "./MenuItem.module.css"

interface MenuItemProps {
    title: string,
    mobile?: boolean,
}

const MenuItem = ({ title, mobile }: MenuItemProps) => {

    return (
        <>
            <li className={`${styles.item} ${mobile ? styles.mobile : ""}`}>
                {title}
            </li>
        </>
    )
}

export default MenuItem