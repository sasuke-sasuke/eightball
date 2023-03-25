import {useState} from 'react';
import answers from './answers.js';
import './EightBall.css';

const EightBall = () => {
    const setUp = {msg: 'Think of a Question', color: 'black'}
    const chooseRandom = () => {
        const random = Math.floor(Math.random() * answers.length);
        setAnswer(answers[random]);
    }
    const [answer, setAnswer] = useState(setUp)
    return (
        <div className='EightBall'>
            <div className={`EightBall-${answer.color}`}>
                <p className='EightBall-answer' onClick={()=> chooseRandom()}>
                    {answer.msg}
                </p>
            </div>
            
        </div>
    )
}

export default EightBall;