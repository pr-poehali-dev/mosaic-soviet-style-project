import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const quizQuestions = [
  {
    question: 'Сколько лет людям известно искусство мозаики?',
    options: ['Около 1 000 лет', 'Около 3 000 лет', 'Не менее 5 000 лет'],
    correct: 2,
    fact: 'Мозаику создают уже не менее 5 000 лет. Первые известные работы — галечные полы в Месопотамии III тысячелетия до н. э. Древние греки и римляне превратили её в изысканное искусство для дворцов и вилл.',
  },
  {
    question: 'Какой итальянский город называют «городом мозаик» и включён в список ЮНЕСКО за них?',
    options: ['Венеция', 'Равенна', 'Флоренция'],
    correct: 1,
    fact: 'Равенна — настоящая столица мозаичного искусства. Восемь её памятников с мозаиками V–VI веков включены в список Всемирного наследия ЮНЕСКО. Именно здесь сохранились лучшие образцы раннехристианской и византийской мозаики в Европе.',
  },
  {
    question: 'Что такое смальта?',
    options: ['Натуральный полудрагоценный камень', 'Цветное непрозрачное стекло с оксидами металлов', 'Обожжённая керамическая глазурь'],
    correct: 1,
    fact: 'Смальта — сплав стекла с оксидами металлов: кобальт даёт синий, медь — зелёный, марганец — фиолетовый, а настоящее золото — тот самый «золотой» фон византийских икон. Кусочки намеренно укладывали чуть под углом, чтобы свет играл и мерцал.',
  },
  {
    question: 'Почему советские мозаики появились на всех фасадах и даже на автобусных остановках?',
    options: ['Это был дешёвый способ декора', 'После 1955 г. запретили лепнину и скульптуры, но не мозаику', 'Так требовали международные стандарты архитектуры'],
    correct: 1,
    fact: 'Постановление 1955 года «Об устранении излишеств» запретило колонны, лепнину, скульптуры. Мозаика в список не попала — и стала единственным законным способом украсить здание. Так монументальная мозаика вышла из метро на фасады школ, больниц, заводов и остановок по всему СССР.',
  },
  {
    question: 'Какой художник создал знаменитые мозаики на станции «Маяковская» московского метро?',
    options: ['Павел Корин', 'Александр Дейнека', 'Владимир Фаворский'],
    correct: 1,
    fact: 'Александр Дейнека создал 34 круглых панно для станции «Маяковская» (1938). Темы — «Сутки советского неба»: утро, день, ночь, праздник. Работа получила Гран-при на Всемирной выставке в Нью-Йорке в 1939 году.',
  },
  {
    question: 'В каком советском городе находится панно «Завоевание космоса» площадью 252 м², вдохновившее Ингу Савину?',
    options: ['Москва', 'Новосибирск', 'Челябинск'],
    correct: 2,
    fact: 'Панно Владимира Мишина украшает стену Политехнического колледжа в Челябинске. Эскиз был дипломной работой художника. 4 года создавалось в мастерской — и ещё год монтировалось на месте. С 1985 года — объект культурного наследия.',
  },
  {
    question: 'Что такое «обратный набор» в технике мозаики?',
    options: ['Укладка тессер лицом вниз на бумагу — для переноса блоком на стену', 'Укладка мозаики от нижнего края к верхнему', 'Специальный способ затирки швов'],
    correct: 0,
    fact: 'При обратном наборе фрагменты собирают лицом вниз на бумагу, потом переносят блоками на стену. Инга при создании «Канона» работала прямым набором — укладывала каждый элемент сразу лицом вверх, видя результат в процессе.',
  },
  {
    question: 'Что общего у мозаик в советском метро и мозаики Инги Савиной «Завоевание космоса»?',
    options: ['Оба используют только натуральный мрамор', 'Оба выполнены из смальты — цветного стекла', 'Оба сделаны по технике флорентийской мозаики'],
    correct: 1,
    fact: 'Смальта — классический материал как для советских монументалистов, так и для современных художников. Именно из неё набраны фигуры героев в мозаике «Завоевание космоса». Фон — из керамики с эффектом состаривания, чтобы панно выглядело как историческая находка в здании сталинской эпохи.',
  },
  {
    question: 'Сколько элементов насчитывает мозаика «Канон» для ресторана-пивоварни в Туле?',
    options: ['Около 2 000', 'Около 8 000', 'Более 30 000'],
    correct: 1,
    fact: 'Мозаика «Канон» включает 8 000 элементов из стеклянной плитки более 30 оттенков. На её создание ушло свыше 300 часов ручного труда. Каждый фрагмент уложен вручную с разноцветной затиркой, которая подчёркивает живость и фактуру поверхности.',
  },
  {
    question: 'В Равенне есть мозаика, которую историки считают возможным первым изображением дьявола в истории искусства. Как выглядит этот персонаж?',
    options: ['Красный демон с рогами', 'Синий ангел слева от Иисуса', 'Чёрная змея у ног Христа'],
    correct: 1,
    fact: 'В базилике Сант-Аполлинаре-Нуово есть мозаика Страшного суда: справа от Христа — красный ангел с овцами, слева — синий ангел с козлами. Некоторые историки считают этого синего ангела первым изображением сатаны в истории искусства.',
  },
  {
    question: 'Сколько времени заняло создание мозаики «Завоевание космоса» Инги Савиной?',
    options: ['2 недели', '2 месяца', '1 год'],
    correct: 1,
    fact: 'Два месяца ушло на создание панно 2,85 × 1,80 м в стилистике советской монументальной мозаики. Задача была особой: сделать так, чтобы работа выглядела как будто она всегда была в этом здании — эффект «исторической находки».',
  },
  {
    question: 'Почему в советских монументальных мозаиках почти нет агрессии и военной темы, хотя СССР был сильно милитаризирован?',
    options: ['Это запрещалось цензурой', 'Художники создавали их после войны — и главной ценностью стал мир', 'Военная тема была слишком дорогой в исполнении'],
    correct: 1,
    fact: 'Большинство великих советских мозаик создавалось страной, пережившей страшную войну. Художники изображали мир, труд, космос, будущее. На плакатах хватало агрессии — в мозаике руки разведены в принимающем жесте. Поэтому советская монументальная мозаика сегодня воспринимается как утопия, а не пропаганда.',
  },
];

const QuizAndLocation = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === quizQuestions[currentQuestion].correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
    setSelectedAnswer(null);
  };

  const q = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === q.correct;

  return (
    <section id="quiz" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-4xl font-bold mb-8 text-center text-primary">Квиз: История мозаики</h3>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          От Византии до советского монументализма — проверьте свои знания
        </p>

        {!quizStarted && !finished && (
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <Icon name="Sparkles" size={64} className="text-primary mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4 text-foreground">Готовы начать?</h4>
              <p className="text-muted-foreground mb-8">
                {quizQuestions.length} вопросов о технике, истории и советской монументальной мозаике
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setQuizStarted(true)}
              >
                Начать квиз <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {quizStarted && !finished && (
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Вопрос {currentQuestion + 1} из {quizQuestions.length}</span>
                  <span>Правильных: {score}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h4 className="text-xl font-bold mb-6 text-foreground">{q.question}</h4>

              <div className="space-y-3 mb-6">
                {q.options.map((option, idx) => {
                  const variant: 'outline' | 'default' = 'outline';
                  let extraClass = 'w-full justify-start text-left h-auto py-4 px-6';

                  if (selectedAnswer !== null) {
                    if (idx === q.correct) {
                      extraClass += ' border-green-500 bg-green-500/10 text-green-700 dark:text-green-400';
                    } else if (idx === selectedAnswer) {
                      extraClass += ' border-red-500 bg-red-500/10 text-red-700 dark:text-red-400';
                    } else {
                      extraClass += ' opacity-50';
                    }
                  } else {
                    extraClass += ' hover:bg-primary/10 hover:border-primary';
                  }

                  return (
                    <Button
                      key={idx}
                      variant={variant}
                      className={extraClass}
                      onClick={() => handleAnswer(idx)}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center mr-3 flex-shrink-0">
                        {['А', 'Б', 'В'][idx]}
                      </span>
                      {option}
                      {selectedAnswer !== null && idx === q.correct && (
                        <Icon name="Check" size={18} className="ml-auto text-green-500" />
                      )}
                      {selectedAnswer !== null && idx === selectedAnswer && idx !== q.correct && (
                        <Icon name="X" size={18} className="ml-auto text-red-500" />
                      )}
                    </Button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className={`rounded-lg p-5 mb-6 border-l-4 ${isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-secondary/10 border-secondary'}`}>
                  <p className="font-semibold mb-1 text-foreground">
                    {isCorrect ? 'Верно!' : `Неверно — правильный ответ: ${q.options[q.correct]}`}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.fact}</p>
                </div>
              )}

              {selectedAnswer !== null && (
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleNext}
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Следующий вопрос' : 'Завершить'}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {finished && (
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <Icon name="Trophy" size={64} className="text-secondary mx-auto mb-6" />
              <h4 className="text-3xl font-bold mb-4 text-foreground">Квиз завершён!</h4>
              <p className="text-2xl text-primary mb-4">
                {score} из {quizQuestions.length}
              </p>
              <p className="text-muted-foreground mb-8">
                {score === quizQuestions.length && 'Превосходно! Вы настоящий знаток мозаичного искусства!'}
                {score >= quizQuestions.length * 0.7 && score < quizQuestions.length && 'Хороший результат! Вы хорошо знаете историю мозаики.'}
                {score < quizQuestions.length * 0.7 && 'Есть что изучить — мозаика скрывает много тайн!'}
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={reset}
              >
                Пройти снова <Icon name="RotateCcw" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default QuizAndLocation;