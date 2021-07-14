export default class Question {

    _struct
    _givenAnswerIndex
    questionIndex

    constructor(questionStructure, questionIndex) {
        this._struct = questionStructure
        this.questionIndex = questionIndex
    }

    questionText = () => {
        return this._struct.questionText
    }

    description = () => {
        return this._struct.description
    }

    giveAnswer = (index) => {
        this._givenAnswerIndex = index
    }

    score = () => this._struct['answerOptions'][this._givenAnswerIndex].score

    currentQuestionNumber = () => this.questionIndex + 1

    answers = () =>
        this._struct.answerOptions
            .map(answer => ({
                answerText: answer.answerText,
                correct: answer.score() > 0
            }))
}