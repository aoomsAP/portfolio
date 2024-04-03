import styles from "./Tag.module.css"

interface TagProps {
    onClick: () => void;
    label: string,
    accent: boolean,
}

const Tag = ({ label, onClick, accent }: TagProps) => {

    return (
        <>
            <button className={accent ? styles.accent : styles.tag}
                onClick={onClick}
                value={label}>
                # {label}
            </button>
        </>
    )
}

export default Tag