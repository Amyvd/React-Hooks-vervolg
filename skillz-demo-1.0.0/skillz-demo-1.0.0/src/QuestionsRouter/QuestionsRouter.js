import Question from "../Question/Question";
import questionsFromData from "../data/questions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionsRouter = (props) => {
    const [questions, setQuestions] = useState([]);
    const [questionToBeRendered, setQuestionToBeRendered] = useState(null);

    useEffect(() => {
        setQuestions(questionsFromData);

    }, []);

    const numberFromURL = useParams();

    const onRate = (rating, number) => {
        let oldState = questions;
        let newState = oldState.map(question => {
            if (question.number === number) {
                question.rating = rating;
                return question;
            }
            return question;
        });

        setQuestions(newState);
    };

    let questionSearch = questions.map(questionObject => {
        if (questionObject.number == numberFromURL.number) {
            return <Question onLast={() => props.onLast(questions)} 
            last={questionObject.last} 
            onRate={onRate} 
            previous={questionObject.previous} 
            next={questionObject.next} 
            number={questionObject.number} 
            key={questionObject.number} 
            question={questionObject.question} 
            rating={questionObject.rating} />;
        }
    });

   


    return (
        <>
            {questionSearch}
        </>
    )
}

export default QuestionsRouter;