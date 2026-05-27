import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const heroes = [
  { name: 'Константин Циолковский', role: 'Теоретик космонавтики', years: '1857-1935', desc: 'Основоположник теоретической космонавтики. Обосновал использование ракет для космических полётов и вывел формулу ракетного движения.', icon: 'BookOpen', position: { top: '16%', left: '8%' } },
  { name: 'Сергей Королёв', role: 'Главный конструктор', years: '1907-1966', desc: 'Создатель советской ракетно-космической техники. Под его руководством запущен первый спутник и первый человек в космос.', icon: 'Rocket', position: { top: '10%', left: '32%' } },
  { name: 'Юрий Гагарин', role: 'Первый космонавт', years: '1934-1968', desc: '12 апреля 1961 года совершил первый в истории человечества полёт в космос на корабле «Восток-1».', icon: 'Star', position: { top: '18%', left: '50%' } },
  { name: 'Валентин Глушко', role: 'Конструктор двигателей', years: '1908-1989', desc: 'Создатель ракетных двигателей, которые вывели человека в космос. Разработал двигатели для программ «Восток» и «Союз».', icon: 'Fuel', position: { top: '11%', left: '68%' } },
  { name: 'Николай Каманин', role: 'Генерал авиации', years: '1908-1982', desc: 'Руководитель подготовки космонавтов. Отвечал за отбор и обучение первого отряда космонавтов СССР.', icon: 'Users', position: { top: '10%', left: '85%' } },
  { name: 'Герман Титов', role: 'Второй космонавт', years: '1935-2000', desc: 'Второй человек в космосе и первый, кто провёл там более суток (25 часов). Самый молодой космонавт в истории — 25 лет.', icon: 'Clock', position: { top: '42%', left: '50%' } },
];

const quizQuestions = [
  { question: 'Кто вывел формулу ракетного движения?', options: ['Циолковский', 'Королёв', 'Глушко'], correct: 0 },
  { question: 'Кто был главным конструктором советской космической программы?', options: ['Каманин', 'Королёв', 'Титов'], correct: 1 },
  { question: 'Когда Гагарин совершил первый полёт в космос?', options: ['1957', '1961', '1965'], correct: 1 },
  { question: 'Кто создал двигатели для кораблей «Восток»?', options: ['Глушко', 'Циолковский', 'Королёв'], correct: 0 },
  { question: 'Кто был самым молодым космонавтом в истории?', options: ['Гагарин', 'Титов', 'Леонов'], correct: 1 },
];

const ProjectKosmos = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState('');
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const openImage = (src: string, alt: string) => { setSelectedImage(src); setSelectedImageAlt(alt); };
  const closeImage = () => { setSelectedImage(null); setSelectedImageAlt(''); };

  const handleQuizAnswer = (answer: number) => {
    if (answer === quizQuestions[currentQuizQuestion].correct) setQuizScore(q => q + 1);
    if (currentQuizQuestion < quizQuestions.length - 1) setCurrentQuizQuestion(q => q + 1);
    else setQuizFinished(true);
  };

  const resetQuiz = () => { setQuizStarted(false); setCurrentQuizQuestion(0); setQuizScore(0); setQuizFinished(false); };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="text-muted-foreground hover:text-foreground">
            <Icon name="ArrowLeft" size={18} className="mr-2" /> Назад
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Завоевание космоса</span>
        </div>
      </nav>

      {/* Hero проекта */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 z-10 text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-3 text-sm">Монументальная мозаика • Москва • 2025</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Завоевание космоса
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Авторская мозаика в пространстве «Плавильня», деловой квартал «Суперметалл»
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* О панно */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О панно</h2>
              <div className="space-y-4 text-lg">
                <p>Мозаика «Завоевание космоса» размером 2,85 × 1,80 м создана специально для гастрономического проекта «Плавильня» в деловом квартале «Суперметалл».</p>
                <p>Суперметалл — пространство в зданиях эпохи сталинского ампира, бывший институт чёрной металлургии ЦНИИЧермет. Плавильня располагается на первом этаже корпуса «Цех», неподалёку от МГТУ имени Баумана и Лефортовского дворца.</p>
                <p className="font-semibold text-foreground">Задача стояла создать произведение именно в стилистике советской монументальной мозаики — чтобы подчеркнуть связь архитектуры сталинского ампира с космической эпохой.</p>
                <p>Панно должно было выглядеть так, будто оно находилось здесь с момента постройки института — создать эффект «археологической находки», органично вписанной в историческое пространство.</p>
                <p>Работа заняла 2 месяца. Фигуры выполнены из смальты, фон — из керамической мозаики с эффектом состаривания.</p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r">
                <p className="text-sm font-semibold text-primary mb-2">ЗАМЫСЕЛ</p>
                <p className="italic">Связать архитектуру эпохи сталинского ампира с космической темой через стиль советской монументальной мозаики — так, будто панно всегда было частью этого здания</p>
              </div>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImage('https://cdn.poehali.dev/files/5361663505783787581.jpg', 'Мозаика Завоевание космоса в Плавильне')}>
              <img src="https://cdn.poehali.dev/files/5361663505783787581.jpg" alt="Мозаика Завоевание космоса" className="rounded-lg shadow-2xl w-full" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Нажмите для увеличения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Процесс создания</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Материалы и техника</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Смальта', desc: 'Цветное стекло для фигур героев космоса — передаёт глубину и объём образов' },
                  { name: 'Керамическая мозаика', desc: 'Для фона композиции, создаёт динамичную абстрактную структуру' },
                  { name: 'Размер работы', desc: '2,85 × 1,80 метра — идеально вписывается в интерьер «Плавильни»' },
                  { name: 'Эффект состаривания', desc: 'Специальные техники для создания ощущения исторической находки' },
                ].map((m, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{m.name}</p>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Этапы работы</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Изучение референсов', desc: 'Анализ советских мозаик и выбор вдохновляющих образов' },
                  { step: '2', title: 'Разработка композиции', desc: 'Создание эскиза под конкретное пространство «Плавильни»' },
                  { step: '3', title: 'Работа со смальтой', desc: 'Детальная проработка фигур космонавтов и учёных' },
                  { step: '4', title: 'Керамический фон', desc: 'Создание динамичного абстрактного окружения' },
                  { step: '5', title: 'Финальная интеграция', desc: 'Монтаж в пространстве с эффектом давней находки' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">{s.step}</div>
                    <div>
                      <p className="font-semibold text-foreground">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: 'https://cdn.poehali.dev/files/5361663505783787394.jpg', alt: 'Панно на этапе создания', caption: 'Панно в процессе работы' },
              { src: 'https://cdn.poehali.dev/files/5359411705970101583 (1).jpg', alt: 'Фрагмент мозаики крупным планом', caption: 'Фрагменты мозаики — работа над деталями' },
              { src: 'https://cdn.poehali.dev/files/5359411705970101578.jpg', alt: 'Детали композиции', caption: 'Работа над фигурами' },
              { src: 'https://cdn.poehali.dev/files/5359411705970101574.jpg', alt: 'Панно после монтажа', caption: 'Панно сразу после монтажа' },
              { src: 'https://cdn.poehali.dev/files/IMG_4557.JPG', alt: 'Работа над фоном', caption: 'Работа над фоном' },
              { src: 'https://cdn.poehali.dev/files/IMG_4556.JPG', alt: 'Центральная композиция', caption: 'Центральная композиция — детализация фигур' },
            ].map((img, i) => (
              <div key={i} className="hover-scale cursor-pointer" onClick={() => openImage(img.src, img.alt)}>
                <img src={img.src} alt={img.alt} className="rounded-lg shadow-2xl w-full h-64 object-cover" />
                <p className="text-center mt-4 text-sm text-muted-foreground">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Вдохновение */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Источник вдохновения</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Референсом для создания мозаики послужило легендарное панно «Завоевание космоса» Владимира Мишина в Челябинске
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Панно в Челябинске</h3>
              <div className="space-y-3 text-base">
                <p><strong className="text-primary">Автор:</strong> Владимир Герасимович Мишин</p>
                <p><strong className="text-primary">Год:</strong> 1976 (открыто 17 апреля)</p>
                <p><strong className="text-primary">Место:</strong> Политехнический колледж, ул. Гагарина, 17</p>
                <p><strong className="text-primary">Площадь:</strong> 252 квадратных метра</p>
                <p><strong className="text-primary">Техника:</strong> Византийская мозаика прямым набором</p>
                <p><strong className="text-primary">Материалы:</strong> Многоцветная смальта и гранит</p>
                <p><strong className="text-primary">Статус:</strong> Объект культурного наследия регионального значения (с 1985)</p>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 border-l-4 border-secondary rounded-r">
                <p className="text-sm italic">Панно создано к 15-летию полёта Гагарина. Эскиз был дипломной работой художника. Композиция разделена на 396 блоков и создавалась в течение года.</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.poehali.dev/files/панно оригинал.jpg" alt="Оригинальное панно в Челябинске" className="rounded-lg shadow-2xl w-full" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно на стене Политехнического колледжа</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/панно оригинал1.jpg" alt="Полная композиция" className="rounded-lg shadow-xl w-full" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Полная композиция оригинального панно</p>
            </div>
            <div>
              <img src="https://cdn.poehali.dev/files/ноги панно.jpg" alt="Детали мозаики" className="rounded-lg shadow-xl w-full" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Фрагмент византийской мозаики крупным планом</p>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Почему именно это панно?</h3>
            <ul className="space-y-3">
              {[
                { icon: 'Star', text: 'Монументальность и масштаб — 252 м² чистого вдохновения' },
                { icon: 'Palette', text: 'Уникальная техника византийской мозаики прямым набором на блоки' },
                { icon: 'Users', text: 'Герои космоса с портретным сходством — Циолковский, Королёв, Гагарин' },
                { icon: 'Heart', text: 'Символ эпохи — дипломная работа молодого художника стала культурным наследием' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Icon name={item.icon} className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Герои на панно */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Герои на панно</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Шесть ключевых фигур советской космической программы
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {heroes.map((hero, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
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

      {/* Интерактивная карта */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Интерактивная карта панно</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Нажмите на фигуру героя, чтобы узнать о нём больше
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <img src="https://cdn.poehali.dev/files/5362006927073808240.jpg" alt="Панно Завоевание космоса" className="w-full rounded-lg shadow-2xl" />
              {heroes.map((hero, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHero(idx)}
                  className="absolute w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white shadow-lg"
                  style={{ top: hero.position.top, left: hero.position.left }}
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
                    <Button variant="ghost" size="icon" onClick={() => setSelectedHero(null)}>
                      <Icon name="X" size={24} />
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-lg">{heroes[selectedHero].desc}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Квиз */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Квиз о космосе</h2>
          {!quizStarted ? (
            <Card className="bg-card border-border text-center">
              <CardContent className="p-12">
                <Icon name="HelpCircle" size={64} className="mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Проверьте свои знания</h3>
                <p className="text-muted-foreground mb-8">5 вопросов о героях советской космической программы</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setQuizStarted(true)}>
                  Начать квиз <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ) : quizFinished ? (
            <Card className="bg-card border-border text-center">
              <CardContent className="p-12">
                <Icon name="Trophy" size={64} className="mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Результат: {quizScore} из {quizQuestions.length}</h3>
                <p className="text-muted-foreground mb-8">
                  {quizScore === quizQuestions.length ? 'Отлично! Вы настоящий знаток космоса!' : quizScore >= 3 ? 'Хорошо! Вы знаете историю космонавтики.' : 'Есть что изучить о космосе!'}
                </p>
                <Button variant="outline" onClick={resetQuiz}>Пройти ещё раз</Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-muted-foreground">Вопрос {currentQuizQuestion + 1} из {quizQuestions.length}</span>
                  <span className="text-sm text-primary font-semibold">Очки: {quizScore}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 mb-8">
                  <div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${((currentQuizQuestion) / quizQuestions.length) * 100}%` }} />
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">{quizQuestions[currentQuizQuestion].question}</h3>
                <div className="space-y-3">
                  {quizQuestions[currentQuizQuestion].options.map((option, i) => (
                    <Button key={i} variant="outline" className="w-full text-left justify-start py-4 h-auto" onClick={() => handleQuizAnswer(i)}>
                      <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center mr-3 flex-shrink-0">
                        {['А', 'Б', 'В'][i]}
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Как добраться */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Как добраться</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Адрес</p>
                  <p className="text-muted-foreground">Москва, ул. Радио, 24, корпус «Цех», пространство «Плавильня»</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Train" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Метро</p>
                  <p className="text-muted-foreground">Станция «Бауманская» (10 минут пешком) или «Электрозаводская»</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Часы работы</p>
                  <p className="text-muted-foreground">Уточняйте на сайте ресторана «Плавильня»</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.689%2C55.773&z=16&pt=37.689%2C55.773"
                width="100%"
                height="350"
                title="Карта расположения"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-5xl w-full p-0">
          <DialogTitle className="sr-only">{selectedImageAlt}</DialogTitle>
          {selectedImage && (
            <div className="relative">
              <img src={selectedImage} alt={selectedImageAlt} className="w-full h-auto max-h-[90vh] object-contain" />
              <button onClick={closeImage} className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors">
                <Icon name="X" size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2"><strong className="text-foreground">«Завоевание космоса»</strong></p>
          <p className="mb-1">Художник: Инга Савина • 2025 • Москва, пространство «Плавильня»</p>
          <p className="text-sm mt-2">Вдохновлено панно Владимира Мишина (Челябинск, 1976)</p>
          <button onClick={() => navigate('/')} className="mt-4 text-primary hover:underline text-sm">← Вернуться к портфолио</button>
        </div>
      </footer>
    </div>
  );
};

export default ProjectKosmos;
