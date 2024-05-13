import styles from "./SkillsList.module.css";
import { ISkill } from "../../types";
import Skill from "./Skill";

interface SkillsListProps {
    skills: ISkill[],
    setSkill: (skill: string) => void,
    // setSkillLevel: (level: string | undefined) => void;
}

const SkillsList = ({ skills, setSkill }: SkillsListProps) => {

    return (
        <div className={styles.skills}
             onMouseLeave={() => {
                setSkill("");
                // setSkillLevel(undefined);
             }}>
            {skills.map((skill, key) => {
                return <Skill
                    key={key}
                    name={skill.name}
                    icon={skill.icon}
                    setSkill={setSkill}
                    // setSkillLevel={setSkillLevel}
                    emphasis={skill.emphasis ? true : false} />
            })}
        </div>
    )
}

export default SkillsList