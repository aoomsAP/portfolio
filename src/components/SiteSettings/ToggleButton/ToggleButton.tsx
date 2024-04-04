import styles from "./ToggleButton.module.css"

interface ToggleButtonProps {
    onClick: () => void;
    condition: boolean;
    option1: JSX.Element;
    option2: JSX.Element;
    title: string;
    ariaLabel: string,
}

const ToggleButton = ({ onClick, condition, option1, option2, title, ariaLabel }: ToggleButtonProps) => {

    // RETURNS button that toggles between two options

    return (
        <>
            <button
                className={styles.toggle_button}
                title={title}
                aria-label={ariaLabel}
                onClick={onClick}>
                {condition
                    ? option1
                    : option2}
            </button>
        </>
    )
}

export default ToggleButton