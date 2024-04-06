import styles from "./SkillsList.module.css";
import { ISkill } from "../../types";
import Skill from "./Skill";

interface SkillsListProps {
    skills: ISkill[],
    setSkill: (skill: string) => void,
}

const SkillsList = ({ skills, setSkill }: SkillsListProps) => {

    return (
        <div className={styles.skills}
             onMouseLeave={() => setSkill("")}>
            {skills.map((skill, key) => {
                return <Skill
                    key={key}
                    name={skill.name}
                    icon={skill.icon}
                    setSkill={setSkill}
                    emphasis={skill.emphasis ? true : false} />
            })}
        </div>
    )
}

export default SkillsList