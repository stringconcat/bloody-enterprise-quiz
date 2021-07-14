import Question from "./Question";

const questionFixture =             {
    questionText: 'Do you overtime?',
    answerOptions: [
        {
            answerText: 'Применяем водопадную модель. Аналитики анализируют весь проект наперед ',
            score: -1
        },
        {
            answerText: 'Аналитики со стейкхолдерами — клиентами и бизнесом — прорабатывают требования на 2–3 спринта, формализуют их в ТЗ и отдают разработчикам',
            score: 2
        },
        {
            answerText: 'Аналитики запираются в комнате без окон, прорабатывают требования на 2–3 спринта и кидают в разработчиков ТЗ',
            score: 0
        },
        {
            answerText: 'Аналитики и разработчики сообща работают в спринте над реализацией. Постановки не высечены в камне и изменяются после обсуждения с инженерами',
            score: 2
        },
    ],
    description: 'long long description'
}

test(
    "first question should have index 1", () => {
        expect(new Question(questionFixture, 0).currentQuestionNumber()).toBe(1)
    }
)

test(
    "description should be given", () => {
        expect(new Question(questionFixture, 0).description()).toBe('long long description')
    }
)

test(
    "question text should be given", () => {
        expect(new Question(questionFixture, 0).questionText()).toBe('Do you overtime?')
    }
)

test(
    "if given answer score is zero then 0 should be returned", () => {
                let question = new Question(questionFixture, 0)
                question.giveAnswer(2)
                expect(question.score()).toBe(0)
    }
)

test(
    "if given answer score is 2 then 2 should be returned", () => {
        let question = new Question(questionFixture, 0)
        question.giveAnswer(3)
        expect(question.score()).toBe(2)
    }
)