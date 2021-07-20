import MultiQuestion from "./MultiQuestion";
import Question from "./Question";

const questionFixture = {
    questionText: 'При каких условиях свалится локальный билд?',
    type: 'multi',
    answerOptions: [
        {answerText: 'Зафейлился один из тестов', score: 0.5},
        {answerText: 'Неиспользуемый импорт', score: 0.5},
        {answerText: 'Код не соответствует стандарту кодирования', score: 0.5},
        {answerText: 'Есть потенциальный баг', score: 0.5},
    ],
    description: 'long description'
}

test(
    "if all the answers given then 2 should be returned", () => {
        let question = new MultiQuestion(questionFixture, 0)
        question.giveAnswer([true, true, true, true])
        expect(question.score()).toBe(2)
    }
)

test(
    "if none the answers given then 0 should be returned", () => {
        let question = new MultiQuestion(questionFixture, 0)
        expect(question.score()).toBe(0)
    }
)

test(
    "if only two the answers given then 1 should be returned", () => {
        let question = new MultiQuestion(questionFixture, 0)
        question.giveAnswer([true, true, false, false])
        expect(question.score()).toBe(1)
    }
)

test(
    "when reset answer triggered there is no answer selected", ()=>{
        let question = new MultiQuestion(questionFixture, 0)
        question.giveAnswer([true, true])
        question.resetAnswer()
        expect(question.givenAnswerIndex()).toStrictEqual([false, false, false, false])
        expect(question.score()).toBe(0)
    }
)