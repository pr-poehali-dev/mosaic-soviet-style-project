import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Завоевание космоса</h1>
          <div className="hidden md:flex gap-6">
            {['О панно', 'Процесс', 'Карта', 'Квиз', 'Как добраться', 'Художник'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['about', 'process', 'interactive', 'quiz', 'location', 'contact'][idx])}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button variant="outline" className="md:hidden" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 z-10 text-center fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Завоевание космоса
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Авторская мозаика в пространстве «Плавильня», Москва
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Художник: Инга Савина
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection('about')}
          >
            Узнать больше <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-4xl font-bold mb-6 text-primary">О панно</h3>
              <div className="space-y-4 text-lg">
                <p>
                  Мозаика «Завоевание космоса» размером 2,85 × 1,80 м создана специально для гастрономического проекта «Плавильня» в деловом квартале «Суперметалл».
                </p>
                <p>
                  Суперметалл — пространство в зданиях эпохи сталинского ампира, бывший институт чёрной металлургии ЦНИИЧермет. Плавильня располагается на первом этаже корпуса «Цех», неподалёку от МГТУ имени Баумана и Лефортовского дворца.
                </p>
                <p className="font-semibold text-foreground">
                  Задача стояла создать произведение именно в стилистике советской монументальной мозаики — чтобы подчеркнуть связь архитектуры сталинского ампира с космической эпохой, когда эти здания строились.
                </p>
                <p>
                  Панно должно было выглядеть так, будто оно находилось здесь с момента постройки института и было обнаружено при реконструкции — создать эффект «археологической находки», органично вписанной в историческое пространство.
                </p>
                <p>
                  Художник Инга Савина реализовала этот замысел, объединив героическую эстетику советской эпохи, византийскую технику мозаики и монументальность, характерную для сталинского ампира.
                </p>
                <p>
                  Работа заняла 2 месяца. Фигуры выполнены из смальты, фон — из керамической мозаики с эффектом состаривания.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r">
                <p className="text-sm font-semibold text-primary mb-2">ЗАМЫСЕЛ</p>
                <p className="italic">
                  Связать архитектуру эпохи сталинского ампира с космической темой через стиль советской монументальной мозаики — так, будто панно всегда было частью этого здания
                </p>
              </div>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5361663505783787581.jpg', 'Мозаика Завоевание космоса в Плавильне')}>
              <img
                src="https://cdn.poehali.dev/files/5361663505783787581.jpg"
                alt="Мозаика Завоевание космоса в Плавильне"
                className="rounded-lg shadow-2xl w-full"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Нажмите для увеличения</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Процесс создания</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-primary">Материалы и техника</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Смальта', desc: 'Цветное стекло для фигур героев космоса — передаёт глубину и объём образов' },
                  { name: 'Керамическая мозаика', desc: 'Для фона композиции, создаёт динамичную абстрактную структуру' },
                  { name: 'Размер работы', desc: '2,85 × 1,80 метра — идеально вписывается в интерьер «Плавильни»' },
                  { name: 'Эффект состаривания', desc: 'Специальные техники для создания ощущения исторической находки' },
                ].map((material, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{material.name}</p>
                      <p className="text-sm text-muted-foreground">{material.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-primary">Этапы работы</h4>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Изучение референсов', desc: 'Анализ советских мозаик и выбор вдохновляющих образов' },
                  { step: '2', title: 'Разработка композиции', desc: 'Создание эскиза под конкретное пространство «Плавильни»' },
                  { step: '3', title: 'Работа со смальтой', desc: 'Детальная проработка фигур космонавтов и учёных' },
                  { step: '4', title: 'Керамический фон', desc: 'Создание динамичного абстрактного окружения' },
                  { step: '5', title: 'Финальная интеграция', desc: 'Монтаж в пространстве с эффектом давней находки' },
                ].map((stage, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {stage.step}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{stage.title}</p>
                      <p className="text-sm text-muted-foreground">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5361663505783787394.jpg', 'Панно на этапе создания')}>
              <img
                src="https://cdn.poehali.dev/files/5361663505783787394.jpg"
                alt="Панно на этапе создания"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно в процессе работы</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101583 (1).jpg', 'Фрагмент мозаики крупным планом')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101583 (1).jpg"
                alt="Фрагмент мозаики крупным планом"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Фрагменты мозаики — работа над деталями</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101578.jpg', 'Детали композиции')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101578.jpg"
                alt="Детали композиции"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Работа над фигурами</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101574.jpg', 'Панно после монтажа')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101574.jpg"
                alt="Панно после монтажа"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно сразу после монтажа</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/IMG_4557.JPG', 'Детали лица героя')}>
              <img
                src="https://cdn.poehali.dev/files/IMG_4557.JPG"
                alt="Детали лица героя"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Работа над фоном</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/IMG_4556.JPG', 'Фрагмент с фигурами героев')}>
              <img
                src="https://cdn.poehali.dev/files/IMG_4556.JPG"
                alt="Фрагмент с фигурами героев"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Центральная композиция — детализация фигур</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inspiration" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center text-primary">Источник вдохновения</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Референсом для создания мозаики послужило легендарное панно «Завоевание космоса» Владимира Мишина в Челябинске
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-secondary">Панно в Челябинске</h4>
              <div className="space-y-3 text-base">
                <p><strong className="text-primary">Автор:</strong> Владимир Герасимович Мишин</p>
                <p><strong className="text-primary">Год:</strong> 1976 (открыто 17 апреля)</p>
                <p><strong className="text-primary">Место:</strong> Политехнический колледж, ул. Гагарина, 17</p>
                <p><strong className="text-primary">Площадь:</strong> 252 квадратных метра</p>
                <p><strong className="text-primary">Техника:</strong> Византийская мозаика прямым набором</p>
                <p><strong className="text-primary">Материалы:</strong> Многоцветная смальта и гранит (охристый, розовый, серый)</p>
                <p><strong className="text-primary">Статус:</strong> Объект культурного наследия регионального значения (с 1985)</p>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 border-l-4 border-secondary rounded-r">
                <p className="text-sm italic">
                  Панно создано к 15-летию полёта Гагарина. Эскиз был дипломной работой художника. 
                  Композиция разделена на 396 блоков и создавалась в течение года.
                </p>
              </div>
            </div>
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/панно оригинал.jpg"
                alt="Оригинальное панно в Челябинске"
                className="rounded-lg shadow-2xl w-full"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно на стене Политехнического колледжа</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/панно оригинал1.jpg"
                alt="Общий вид челябинского панно"
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Полная композиция оригинального панно</p>
            </div>
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/ноги панно.jpg"
                alt="Детали византийской мозаики"
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Фрагмент византийской мозаики крупным планом</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Почему именно это панно?</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Icon name="Star" className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>Монументальность и масштаб — 252 м² чистого вдохновения</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Palette" className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>Уникальная техника византийской мозаики прямым набором на блоки</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>Герои космоса с портретным сходством — Циолковский, Королёв, Гагарин</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Heart" className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>Символ эпохи — дипломная работа молодого художника стала культурным наследием</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center text-primary">Герои на панно</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Шесть ключевых фигур советской космической программы — от мечтателя до первого космонавта
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {heroes.map((hero, idx) => (
              <Card key={idx} className="bg-background border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={hero.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{hero.name}</h4>
                      <p className="text-xs text-primary font-semibold">{hero.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{hero.years}</p>
                  <p className="text-sm text-muted-foreground">{hero.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="interactive" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center text-secondary">Интерактивная карта панно</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Нажмите на фигуру героя, чтобы узнать о нём больше
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/5362006927073808240.jpg"
                alt="Панно Завоевание космоса"
                className="w-full rounded-lg shadow-2xl"
              />
              {heroes.map((hero, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHero(idx)}
                  className="absolute w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white shadow-lg"
                  style={{ top: hero.position.top, left: hero.position.left }}
                  aria-label={`Узнать о ${hero.name}`}
                >
                  <Icon name={hero.icon} size={24} className="text-white" />
                </button>
              ))}
            </div>

            {selectedHero !== null && (
              <Card className="mt-8 bg-card border-primary/50 border-2">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name={heroes[selectedHero].icon} size={32} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground">{heroes[selectedHero].name}</h4>
                        <p className="text-primary font-semibold">{heroes[selectedHero].role}</p>
                        <p className="text-sm text-muted-foreground">{heroes[selectedHero].years}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedHero(null)}
                    >
                      <Icon name="X" size={24} />
                    </Button>
                  </div>
                  <p className="text-lg text-muted-foreground">{heroes[selectedHero].desc}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section id="quiz" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-primary">Квиз: Узнай героя космоса</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Проверьте свои знания о покорителях космоса
          </p>

          {!quizStarted && !quizFinished && (
            <Card className="bg-background border-border">
              <CardContent className="p-12 text-center">
                <Icon name="Sparkles" size={64} className="text-primary mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-4 text-foreground">Готовы начать?</h4>
                <p className="text-muted-foreground mb-8">
                  Вас ждёт {quizQuestions.length} вопросов о героях космической эры
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
                  {quizScore === quizQuestions.length && "Отлично! Вы знаток космической истории!"}
                  {quizScore >= quizQuestions.length * 0.7 && quizScore < quizQuestions.length && "Хороший результат! Продолжайте изучать историю космоса."}
                  {quizScore < quizQuestions.length * 0.7 && "Есть куда расти! Попробуйте ещё раз."}
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

      <section id="location" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-center text-secondary">Как добраться</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Посетите Плавильню в деловом квартале Суперметалл и увидите панно своими глазами
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Адрес</h4>
                      <p className="text-muted-foreground">
                        Деловой квартал «Суперметалл»<br />
                        Корпус «Цех», первый этаж<br />
                        Москва, ул. 2-я Бауманская
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Train" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Метро</h4>
                      <p className="text-muted-foreground mb-3">
                        <strong>Бауманская</strong> — 7 минут пешком<br />
                        <strong>Электрозаводская</strong> — 10 минут пешком
                      </p>
                      <p className="text-sm text-muted-foreground">
                        От метро «Бауманская» идите по ул. Бауманская в сторону центра, 
                        поверните на 2-ю Бауманскую улицу.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Car" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Парковка</h4>
                      <p className="text-muted-foreground">
                        На территории делового квартала есть гостевая парковка.<br />
                        Въезд с 2-й Бауманской улицы.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Landmark" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">Ориентиры</h4>
                      <p className="text-muted-foreground">
                        Рядом с МГТУ имени Баумана<br />
                        Неподалёку от Лефортовского дворца<br />
                        Здание бывшего института ЦНИИЧермет
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="hover-scale">
              <div className="rounded-lg overflow-hidden shadow-2xl h-full min-h-[600px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.684444%2C55.771111&z=16&pt=37.684444,55.771111,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="min-h-[600px]"
                  title="Карта проезда к Плавильне"
                ></iframe>
              </div>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Интерактивная карта Яндекс.Карты
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold mb-8 text-center text-secondary">Художник</h3>
          
          <Card className="bg-card border-border mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={64} className="text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-3 text-foreground">Инга Савина</h4>
                  <p className="text-lg text-muted-foreground">
                    Художник
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h4 className="text-2xl font-bold mb-6 text-center text-foreground">Свяжитесь с художником</h4>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" className="bg-background border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Расскажите о вашем проекте или интересе к работам..."
                    className="bg-background border-border"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: 'MapPin', label: 'Местоположение', value: 'Москва, Суперметалл', link: null },
              { icon: 'Phone', label: 'Телефон', value: '+7 (920) 751-75-15', link: 'tel:+79207517515' },
              { icon: 'Send', label: 'Telegram', value: '@sav_ingart', link: 'https://t.me/sav_ingart' },
            ].map((contact, idx) => (
              <div key={idx} className="p-4">
                <Icon name={contact.icon} size={32} className="mx-auto mb-3 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground">{contact.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-5xl w-full p-0">
          <DialogTitle className="sr-only">{selectedImageAlt}</DialogTitle>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt={selectedImageAlt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            <strong className="text-foreground">Мозаика «Завоевание космоса»</strong>
          </p>
          <p className="mb-1">Художник: Инга Савина • 2024 • Москва, пространство «Плавильня»</p>
          <p className="text-sm mt-4">Вдохновлено панно Владимира Мишина (Челябинск, 1976)</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;