import { useState } from 'react';
import ArtistHero from '@/components/ArtistHero';
import QuizAndLocation from '@/components/QuizAndLocation';
import ContactSection from '@/components/ContactSection';

const quizQuestions = [
  {
    question: 'Кто вывел формулу ракетного движения?',
    options: ['Циолковский', 'Королёв', 'Глушко'],
    correct: 0
  },
  {
    question: 'Кто был главным конструктором советской космической программы?',
    options: ['Каманин', 'Королёв', 'Титов'],
    correct: 1
  },
  {
    question: 'Когда Гагарин совершил первый полёт в космос?',
    options: ['1957', '1961', '1965'],
    correct: 1
  },
  {
    question: 'Кто создал двигатели для кораблей «Восток»?',
    options: ['Глушко', 'Циолковский', 'Королёв'],
    correct: 0
  },
  {
    question: 'Кто был самым молодым космонавтом в истории?',
    options: ['Гагарин', 'Титов', 'Леонов'],
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