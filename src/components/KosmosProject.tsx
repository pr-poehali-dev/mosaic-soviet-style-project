import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Hero {
  name: string;
  role: string;
  years: string;
  desc: string;
  icon: string;
  position: { top: string; left: string };
}

interface KosmosProjectProps {
  heroes: Hero[];
  selectedHero: number | null;
  setSelectedHero: (idx: number | null) => void;
  openImageModal: (src: string, alt: string) => void;
}

const KosmosProject = ({ heroes, selectedHero, setSelectedHero, openImageModal }: KosmosProjectProps) => {
  return (
    <>
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
              <img src="https://cdn.poehali.dev/files/5361663505783787394.jpg" alt="Панно на этапе создания" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно в процессе работы</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101583 (1).jpg', 'Фрагмент мозаики крупным планом')}>
              <img src="https://cdn.poehali.dev/files/5359411705970101583 (1).jpg" alt="Фрагмент мозаики крупным планом" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Фрагменты мозаики — работа над деталями</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101578.jpg', 'Детали композиции')}>
              <img src="https://cdn.poehali.dev/files/5359411705970101578.jpg" alt="Детали композиции" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Работа над фигурами</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101574.jpg', 'Панно после монтажа')}>
              <img src="https://cdn.poehali.dev/files/5359411705970101574.jpg" alt="Панно после монтажа" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Панно сразу после монтажа</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/IMG_4557.JPG', 'Детали лица героя')}>
              <img src="https://cdn.poehali.dev/files/IMG_4557.JPG" alt="Детали лица героя" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
              <p className="text-center mt-4 text-sm text-muted-foreground">Работа над фоном</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/IMG_4556.JPG', 'Фрагмент с фигурами героев')}>
              <img src="https://cdn.poehali.dev/files/IMG_4556.JPG" alt="Фрагмент с фигурами героев" className="rounded-lg shadow-2xl w-full h-64 object-cover" />
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
                  Композиция разделена на 396 блоков — 4 года создавалась в мастерской и ещё год монтировалась на месте.
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
    </>
  );
};

export default KosmosProject;