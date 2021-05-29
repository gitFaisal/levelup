import React from 'react';
import Skill from './Skill';


const SkillsList = ( { skills, setSkills }) => {

    return (
        <div className='skills-container'> 
           
            <div className='skills-list'>
                {skills.map( skill => (
                    <Skill 
                        key={skill.id}
                        text={skill.text}
                        level={skill.level}
                        percent={skill.percent}
                        skills={skills}
                        skill={skill}
                        setSkills={setSkills}
                    />
                

                ))}
            </div>
        </div>
    );
};






export default SkillsList;
