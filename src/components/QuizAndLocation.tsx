import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

interface QuizAndLocationProps {
  quizQuestions: QuizQuestion[];
  quizStarted: boolean;
  setQuizStarted: (v: boolean) => void;
  currentQuizQuestion: number;
  quizScore: number;
  quizFinished: boolean;
  handleQuizAnswer: (idx: number) => void;
  resetQuiz: () => void;
}

const QuizAndLocation = ({
  quizQuestions,
  quizStarted,
  setQuizStarted,
  currentQuizQuestion,
  quizScore,
  quizFinished,
  handleQuizAnswer,
  resetQuiz,
}: QuizAndLocationProps) => {
  return (
    <>
      <section id="quiz" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-primary">Квиз: История мозаики</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            От Византии до советского монументализма — проверьте свои знания
          </p>

          {!quizStarted && !quizFinished && (
            <Card className="bg-background border-border">
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

          {quizStarted && !quizFinished && (
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Вопрос {currentQuizQuestion + 1} из {quizQuestions.length}</span>
                    <span>Правильных ответов: {quizScore}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-6 text-foreground">
                  {quizQuestions[currentQuizQuestion].question}
                </h4>

                <div className="space-y-3">
                  {quizQuestions[currentQuizQuestion].options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-primary/10 hover:border-primary"
                      onClick={() => handleQuizAnswer(idx)}
                    >
                      <span className="font-semibold text-lg">{option}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {quizFinished && (
            <Card className="bg-background border-border">
              <CardContent className="p-12 text-center">
                <Icon name="Trophy" size={64} className="text-secondary mx-auto mb-6" />
                <h4 className="text-3xl font-bold mb-4 text-foreground">Квиз завершён!</h4>
                <p className="text-2xl text-primary mb-8">
                  Ваш результат: {quizScore} из {quizQuestions.length}
                </p>
                <p className="text-muted-foreground mb-8">
                  {quizScore === quizQuestions.length && "Превосходно! Вы настоящий знаток мозаичного искусства!"}
                  {quizScore >= quizQuestions.length * 0.7 && quizScore < quizQuestions.length && "Хороший результат! Вы хорошо знаете историю мозаики."}
                  {quizScore < quizQuestions.length * 0.7 && "Есть что изучить — мозаика скрывает много тайн!"}
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={resetQuiz}
                >
                  Пройти снова <Icon name="RotateCcw" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>


    </>
  );
};

export default QuizAndLocation;