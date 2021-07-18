import Question from "./Question";

export default class Questionnaire {

    _currentQuestionIndex = 0
    questions = []

    constructor(questionnaireStruct) {
        this.questions = questionnaireStruct
            .map((question, index) => new Question(question, index))
    }

    nextQuestion = () => {
        this._currentQuestionIndex++
        return this.questions[this._currentQuestionIndex]
    }

    currentQuestion = () => this.questions[this._currentQuestionIndex]

    totalQuestions= () => this.questions.length

    score = () => this.questions
        .map(question => question.score())
        .reduce((a, b) => a+b)

    isTheLastQuestion = () => this._currentQuestionIndex + 1 === this.questions.length
}