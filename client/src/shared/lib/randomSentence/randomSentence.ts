const funQuestions = [
    'Как ваше настроение?',
    'Какой сегодня план по завоеванию мира?',
    'Помните, кофе сам себя не выпьет',
    'Белки жрут снег. А что делаете Вы, чтобы зима быстрее закончилась?',
    'Все хотят хорошо провести время, но его не проведешь.',
    'Что б вам такого пожелать, чтобы потом не завидовать?',
    'Никогда с деньгами не бывает так хорошо, как плохо бывает без них.',
    'Деньги приходят и уходят, и уходят, и уходят…',
    'Вы, как я вижу, бескорыстно любите деньги?',
    'Шокирующий факт — шотландские гопники заправляют юбку в носки.',
    'Жить нужно так, чтобы депрессия была у других!',
    'В каждом из нас спит гений. И с каждым днем все крепче и крепче…'
]

const randomNumber = Math.floor(Math.random() * funQuestions.length)
const randomSentence = funQuestions[randomNumber]
export default randomSentence
