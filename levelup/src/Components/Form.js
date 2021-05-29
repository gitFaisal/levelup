import React from 'react';
import Button from 'react-bootstrap/Button';

function Form({inputText, setInputText, skills, setSkills}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText != "") {
            setSkills([
                ...skills, {text: inputText, level:1, percent:10, id:Math.random() * 1000}
            ]);
        }
        
        // Reset inputText
        setInputText("");
    
    }

    return(
        <div className='input-form'>
            <div>
                <input 
                    onChange={inputTextHandler}
                    type='text'
                    className='input-field'

                />
                <Button onClick={submitHandler} variant="primary" type='submit'><i className="fas fa-plus"></i></Button>{' '}
                
            </div>
        </div>
    )
}


export default Form;
