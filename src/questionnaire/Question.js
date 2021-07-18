export default class Question {

    _struct
    givenAnswerIndex=null
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
        return {...this, givenAnswerIndex: index}
    }

    answerHasBeenGiven= this.givenAnswerIndex !== null

    score = () => {
        if (this.givenAnswerIndex === null) return 0
        return this._struct['answerOptions'][this.givenAnswerIndex].score
    }

    currentQuestionNumber = () => this.questionIndex + 1

    answers = () =>
        this._struct.answerOptions
            .map(answer => ({
                answerText: answer.answerText,
                correct: answer.score > 0
            }))
}