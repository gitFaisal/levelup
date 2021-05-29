import React from 'react';
import Button from 'react-bootstrap/Button';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skill = ({ text, level, skills, skill, setSkills, percent }) => {

    const levelUpHandler = () => {

        setSkills(skills.map((item) => {
            if (item.id === skill.id) {
                if (skill.percent == 90) {
                    return { ...item, percent:0, level:level+1}
                } else {
                    return {
                        ...item, percent:percent+10
                    }
                }
                
            }
            return item
        }))
    }

    const levelDownHandler = () => {
        setSkills(skills.map((item) => {
            if (item.id === skill.id) {
                if (skill.percent == 0 && skill.level > 1) {
                    return { ...item, percent:90, level:level-1}
                } else if (skill.percent == 0 && skill.level == 1) {
                    return item
                } else {
                        return {
                            ...item, percent:percent-10
                        }
                    
                }
                
            }
            return item
        }))
    }

    return (
        <div className='skill'>
            <Button onClick={levelDownHandler} className='bar-btn'>
                    <i className='fas fa-minus'></i>
            </Button>
            <div>
                
                <div className='saved-skill'>
                    { text }
                    
                </div>
                <div className="progressBar" style={{ width:400}}>
                    <ProgressBar now={percent} label={`${percent}%`}/>
                    { level }
                </div>
                
            </div>
            <Button onClick={levelUpHandler} className='bar-btn'>
                    <i className='fas fa-plus'></i>
            </Button>
            
        </div>
    );
}


export default Skill;