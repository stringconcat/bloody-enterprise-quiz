import Question from "./Question";
import MultiQuestion from "./MultiQuestion";
import {questions} from "../Questions";

export default class Questionnaire {

    _currentQuestionIndex = 0
    questions = []

    constructor(questionnaireStruct) {
        this.questions = questionnaireStruct
            .map((question, index) => this.createQuestion(question, index))
    }

    createQuestion=(question, index)=> {
        if (question.type === "single") {
            return new Question(question, index)
        } else {
            return new MultiQuestion(question, index)
        }
    }

    nextQuestion = () => {
        this._currentQuestionIndex++
        return this.questions[this._currentQuestionIndex]
    }

    switchToQuestion(questionIndex) {
        this._currentQuestionIndex = questionIndex
        return this.currentQuestion()
    }

    nextQuestionIndex= ()=> {
        return this._currentQuestionIndex + 1
    }

    currentQuestion = () => this.questions[this._currentQuestionIndex]

    totalQuestions= () => this.questions.length

    score = () => this.questions
        .map(question => question.score())
        .reduce((a, b) => a+b);

    isTheLastQuestion = () => this._currentQuestionIndex + 1 === this.questions.length;

    reset=()=> {
        this.questions.forEach(question => question.resetAnswer())
    }
}