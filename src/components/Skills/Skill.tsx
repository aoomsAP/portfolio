import styles from "./Skill.module.css"

interface SkillProps {
    name: string,
    icon: string,
    setSkill: (skill: string) => void,
    // setSkillLevel: (level: string | undefined) => void;
    emphasis: boolean
}

const Skill = ({ name, icon, setSkill, emphasis }: SkillProps) => {

    return (
        <i
            className={`${styles.skill} ${icon} ${emphasis ? styles.emphasis : ""}`}
            title={name}
            aria-label={name}
            onMouseOver={() => {
                setSkill(name);
                // setSkillLevel(emphasis ? lexicon.skill_intermediate : lexicon.skill_minimal);
            }}
        >
        </i>
    )
}

export default Skill