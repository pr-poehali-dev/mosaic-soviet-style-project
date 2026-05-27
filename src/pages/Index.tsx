import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtistHero from '@/components/ArtistHero';
import KosmosProject from '@/components/KosmosProject';
import QuizAndLocation from '@/components/QuizAndLocation';
import ContactSection from '@/components/ContactSection';

const heroes = [
  {
    name: 'Константин Циолковский',
    role: 'Теоретик космонавтики',
    years: '1857-1935',
    desc: 'Основоположник теоретической космонавтики. Обосновал использование ракет для космических полётов и вывел формулу ракетного движения.',
    icon: 'BookOpen',
    position: { top: '16%', left: '8%' }
  },
  {
    name: 'Сергей Королёв',
    role: 'Главный конструктор',
    years: '1907-1966',
    desc: 'Создатель советской ракетно-космической техники. Под его руководством запущен первый спутник и первый человек в космос.',
    icon: 'Rocket',
    position: { top: '10%', left: '32%' }
  },
  {
    name: 'Юрий Гагарин',
    role: 'Первый космонавт',
    years: '1934-1968',
    desc: '12 апреля 1961 года совершил первый в истории человечества полёт в космос на корабле «Восток-1».',
    icon: 'Star',
    position: { top: '18%', left: '50%' }
  },
  {
    name: 'Валентин Глушко',
    role: 'Конструктор двигателей',
    years: '1908-1989',
    desc: 'Создатель ракетных двигателей, которые вывели человека в космос. Разработал двигатели для программ «Восток» и «Союз».',
    icon: 'Fuel',
    position: { top: '11%', left: '68%' }
  },
  {
    name: 'Николай Каманин',
    role: 'Генерал авиации',
    years: '1908-1982',
    desc: 'Руководитель подготовки космонавтов. Отвечал за отбор и обучение первого отряда космонавтов СССР.',
    icon: 'Users',
    position: { top: '10%', left: '85%' }
  },
  {
    name: 'Герман Титов',
    role: 'Второй космонавт',
    years: '1935-2000',
    desc: 'Второй человек в космосе и первый, кто провёл там более суток (25 часов). Самый молодой космонавт в истории — 25 лет.',
    icon: 'Clock',
    position: { top: '42%', left: '50%' }
  },
];

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
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
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

      <KosmosProject
        heroes={heroes}
        selectedHero={selectedHero}
        setSelectedHero={setSelectedHero}
        openImageModal={openImageModal}
      />

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
