import Questionnaire from "./Questionnaire";

const questionnarieFixture = [
    {
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
    },
    {
        questionText: 'second question',
        answerOptions: [
            { answerText: 'Задачи обсуждаются с Dev, QA или BA', score: 2 },
            { answerText: 'Зачем их прорабатывать, взял и сделал', score: 0 }
        ],
        description: 'another long description'
    },
    {
        questionText: '3rd question',
        answerOptions: [
            { answerText: 'Задачи обсуждаются с Dev, QA или BA', score: 2 },
            { answerText: 'Зачем их прорабатывать, взял и сделал', score: 0 }
        ],
        description: 'another long description'
    },
]

test("if we call current question first time then the first question should be given", () => {
    let questionnaire = new Questionnaire(questionnarieFixture)
    expect(questionnaire.currentQuestion().questionText()).toBe('Do you overtime?')
})

test("if we call next question first time then second question should be given", () => {
    let questionnaire = new Questionnaire(questionnarieFixture)
    expect(questionnaire.nextQuestion().questionText()).toBe('second question')
})

test("if we call next question second time then 3rd question should be given", () => {
    let questionnaire = new Questionnaire(questionnarieFixture)
    questionnaire.nextQuestion()
    expect(questionnaire.nextQuestion().questionText()).toBe('3rd question')
})

test(
    "if nextQuestion has not been called then it is not the last question", () => {
        let questionnaire = new Questionnaire(questionnarieFixture)
        expect(questionnaire.isTheLastQuestion()).toBeFalsy()
    }
)

test(
    "if the second question displayed then it is the last question", () => {
        let questionnaire = new Questionnaire(questionnarieFixture)
        questionnaire.nextQuestion()
        questionnaire.nextQuestion()
        expect(questionnaire.isTheLastQuestion()).toBeTruthy()
    }
)

test(
    "if all the answers are correct then score should be 4", () => {
        let questionnaire = new Questionnaire(questionnarieFixture)
        questionnaire.currentQuestion().giveAnswer(3)
        questionnaire.nextQuestion().giveAnswer(0)
        expect(questionnaire.score()).toBe(4)
    }
)

test(
    "if only second answer is correct then score should be 2", () => {
        let questionnaire = new Questionnaire(questionnarieFixture)
        questionnaire.currentQuestion().giveAnswer(2)
        questionnaire.nextQuestion().giveAnswer(0)
        expect(questionnaire.score()).toBe(2)
    }
)

test(
    "answers are memorized", () => {
        let questionnaire = new Questionnaire(questionnarieFixture)
        questionnaire.currentQuestion().giveAnswer(2)
        questionnaire.nextQuestion().giveAnswer(0)
        expect(questionnaire.questions[0].givenAnswerIndex).toBe(2)
    }
)