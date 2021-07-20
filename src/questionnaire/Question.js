export default class Question {

    _struct
    _givenAnswerIndex=null
    questionIndex

    constructor(questionStructure, questionIndex) {
        this._struct = questionStructure
        this.questionIndex = questionIndex
    }

    questionText = () => {
        return this._struct.questionText
    }

    type= ()=> {
        return this._struct.type
    }

    description = () => {
        return this._struct.description
    }

    giveAnswer = (index) => {
        this._givenAnswerIndex = index
    }

    givenAnswerIndex= ()=>  {
        return this._givenAnswerIndex
    }

    answerHasBeenGiven= this._givenAnswerIndex !== null

    score = () => {
        if (this._givenAnswerIndex === null) return 0
        return this._struct['answerOptions'][this._givenAnswerIndex].score
    }

    currentQuestionNumber = () => this.questionIndex + 1

    answers = () =>
        this._struct.answerOptions
            .map(answer => ({
                answerText: answer.answerText,
                correct: answer.score > 0
            }))

    resetAnswer=()=>{
        this._givenAnswerIndex=null;
    }
}