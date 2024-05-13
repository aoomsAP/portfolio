import styles from "./Tag.module.css"

interface TagProps {
    // onClick: () => void;
    label: string,
    accent: boolean,
}

const Tag = ({ label, accent }: TagProps) => {

    return (
        <>
            {/* for filtering */}
            {/* <button className={accent ? styles.accent : styles.tag}
                onClick={onClick}
                value={label}>
                # {label}
            </button> */}

            <div className={accent ? styles.accent : styles.tag}>
                #&nbsp;{label}
            </div>
        </>
    )
}

export default Tag