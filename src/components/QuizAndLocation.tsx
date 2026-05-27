import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const quizQuestions = [
  {
    question: 'Какая техника мозаики была главной в Древней Византии?',
    options: ['Прямой набор смальтой', 'Обратный набор на бумагу', 'Наливная эмаль'],
    correct: 0,
    fact: 'Византийские мастера укладывали смальту прямо в сырую штукатурку — этот метод называется «прямой набор». Именно он давал характерное мерцание: каждый кусочек наклоняли под нужным углом к свету.',
  },
  {
    question: 'Что такое смальта?',
    options: ['Натуральный камень', 'Цветное непрозрачное стекло', 'Керамическая глазурь'],
    correct: 1,
    fact: 'Смальта — это сплав стекла с металлическими оксидами. Добавляли кобальт для синего, медь для зелёного, золото для жёлтого. Её делали ещё в Древнем Египте, но расцвет пришёл в Византии.',
  },
  {
    question: 'В каком советском городе находится знаменитое панно «Завоевание космоса» площадью 252 м²?',
    options: ['Москва', 'Новосибирск', 'Челябинск'],
    correct: 2,
    fact: 'Панно Владимира Мишина украшает стену Политехнического колледжа в Челябинске. Художник создавал его 4 года в мастерской, ещё год ушёл на монтаж. Эскиз был его дипломной работой.',
  },
  {
    question: 'В какую эпоху советская монументальная мозаика переживала расцвет?',
    options: ['1920-е, эпоха авангарда', '1960–80-е, эпоха оттепели и застоя', '1990-е, постсоветский период'],
    correct: 1,
    fact: 'После постановления 1955 года «Об устранении излишеств» лепнину и скульптуры запретили, но мозаику — нет. Она стала главным способом украсить здание. Так родился советский монументализм.',
  },
  {
    question: 'Что такое «обратный набор» в мозаике?',
    options: ['Укладка плитки тыльной стороной на бумагу для переноса', 'Укладка мозаики снизу вверх', 'Специальный клей для плитки'],
    correct: 0,
    fact: 'При обратном наборе фрагменты собираются лицом вниз на бумагу, а затем переносятся целым блоком на стену. Именно так работала Инга при создании мозаики «Канон» — удобно для детальной проработки композиции.',
  },
  {
    question: 'Из какого материала выполнены фигуры героев в мозаике «Завоевание космоса» Инги Савиной?',
    options: ['Керамическая плитка', 'Смальта', 'Натуральный мрамор'],
    correct: 1,
    fact: 'Фигуры Циолковского, Королёва, Гагарина и других героев набраны из смальты — она передаёт живость и объём портретов. Фон сделан из керамики с эффектом состаривания, чтобы панно выглядело как историческая находка.',
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
