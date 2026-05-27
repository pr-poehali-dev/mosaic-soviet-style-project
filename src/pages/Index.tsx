import { useState } from 'react';
import ArtistHero from '@/components/ArtistHero';
import QuizAndLocation from '@/components/QuizAndLocation';
import ContactSection from '@/components/ContactSection';

const quizQuestions = [
  {
    question: 'Какая техника мозаики была главной в Древней Византии?',
    options: ['Прямой набор смальтой', 'Обратный набор на бумагу', 'Наливная эмаль'],
    correct: 0
  },
  {
    question: 'Что такое смальта?',
    options: ['Натуральный камень', 'Цветное непрозрачное стекло', 'Керамическая глазурь'],
    correct: 1
  },
  {
    question: 'В каком советском городе находится знаменитое панно «Завоевание космоса» площадью 252 м²?',
    options: ['Москва', 'Новосибирск', 'Челябинск'],
    correct: 2
  },
  {
    question: 'В какую эпоху советская монументальная мозаика переживала расцвет?',
    options: ['1920-е, эпоха авангарда', '1960–80-е, эпоха оттепели и застоя', '1990-е, постсоветский период'],
    correct: 1
  },
  {
    question: 'Что такое «обратный набор» в мозаике?',
    options: ['Укладка плитки тыльной стороной на бумагу для переноса', 'Укладка мозаики снизу вверх', 'Специальный клей для плитки'],
    correct: 0
  },
  {
    question: 'Из какого материала выполнены фигуры героев в мозаике «Завоевание космоса» Инги Савиной?',
    options: ['Керамическая плитка', 'Смальта', 'Натуральный мрамор'],
    correct: 1
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedImageAlt(alt);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleQuizAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuizQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuizQuestion(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArtistHero scrollToSection={scrollToSection} />

      <QuizAndLocation
        quizQuestions={quizQuestions}
        quizStarted={quizStarted}
        setQuizStarted={setQuizStarted}
        currentQuizQuestion={currentQuizQuestion}
        quizScore={quizScore}
        quizFinished={quizFinished}
        handleQuizAnswer={handleQuizAnswer}
        resetQuiz={resetQuiz}
      />

      <ContactSection
        selectedImage={selectedImage}
        selectedImageAlt={selectedImageAlt}
        closeImageModal={closeImageModal}
      />
    </div>
  );
};

export default Index;