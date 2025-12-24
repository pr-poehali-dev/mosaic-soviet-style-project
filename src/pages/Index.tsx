import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Космос • Челябинск</h1>
          <div className="hidden md:flex gap-6">
            {['История', 'Герои', 'Процесс', 'Галерея', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['history', 'heroes', 'process', 'gallery', 'contact'][idx])}
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
            Завоевание космоса<br />Челябинск, 1976
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Монументальное панно площадью 252 м² на стене Политехнического колледжа. Объект культурного наследия
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection('history')}
          >
            Узнать историю <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="history" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-4xl font-bold mb-6 text-primary">История создания</h3>
              <div className="space-y-4 text-lg">
                <p>
                  Панно «Завоевание космоса» открыто 17 апреля 1976 года к 15-летию полёта Гагарина на стене Политехнического колледжа на ул. Гагарина, 17 в Челябинске.
                </p>
                <p>
                  Автор — художник Владимир Герасимович Мишин. Эскиз панно был его дипломной работой. Масштабное произведение площадью 252 м² занимает торец трёхэтажного корпуса.
                </p>
                <p>
                  Мишин разделил картину на 396 квадратных блоков (12 в высоту, 33 в ширину), каждый фрагмент перерисовал на отдельный лист картона в натуральную величину. Работа заняла ровно год, а подготовка — ещё 4 года.
                </p>
                <p className="text-sm text-muted-foreground">
                  Решением Челябинского облисполкома №396 от 16.09.1985 панно внесено в реестр объектов культурного наследия регионального значения.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r">
                <p className="text-sm font-semibold text-primary mb-2">ЗАМЫСЕЛ АВТОРА</p>
                <p className="italic">
                  «Завоевание космоса — это не только полёт к звёздам, но и огромная подготовительная работа учёных, инженеров, конструкторов»
                </p>
              </div>
            </div>
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/панно оригинал.jpg"
                alt="Панно Завоевание космоса в Челябинске"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="heroes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Герои панно</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Прототипы героев панно — великие люди, открывшие человечеству дорогу в космос. Художник внимательно изучал фотографии, добиваясь портретного сходства
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Юрий Гагарин',
                desc: 'Первый человек в космосе. 12 апреля 1961 года совершил орбитальный полёт на корабле «Восток-1». Центральная фигура композиции.',
                icon: 'Rocket',
              },
              {
                title: 'Константин Циолковский',
                desc: 'Отец теоретической космонавтики. Обосновал возможность космических полётов, вывел формулу ракеты.',
                icon: 'BookOpen',
              },
              {
                title: 'Сергей Королёв',
                desc: 'Главный конструктор космических кораблей. Под его руководством создан «Восток-1» и первые спутники.',
                icon: 'Cog',
              },
            ].map((hero, idx) => (
              <Card key={idx} className="hover-scale bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={hero.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-foreground">{hero.title}</h4>
                  <p className="text-muted-foreground">{hero.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary">Техника и материалы</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-secondary">Византийская мозаика</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Техника', desc: 'Прямой набор на блоки — византийская мозаика, один из древнейших методов' },
                  { name: 'Смальта', desc: 'Многоцветное стекло десятков оттенков, заказанное на заводе по эскизам художника' },
                  { name: 'Гранит', desc: 'Охристый, розовый, светло- и тёмно-серый — природный камень для фона и деталей' },
                  { name: 'Площадь', desc: '252 квадратных метра — размер всей композиции на торце здания' },
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
              <h4 className="text-2xl font-semibold mb-6 text-secondary">Этапы работы</h4>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Эскиз и разметка', desc: 'Картина разделена на 396 блоков: 12 в высоту, 33 в ширину' },
                  { step: '2', title: 'Подготовка картонов', desc: 'Каждый фрагмент перерисован на картон в натуральную величину' },
                  { step: '3', title: 'Подбор материалов', desc: 'По эскизам подобран гранит и заказана смальта нужных оттенков' },
                  { step: '4', title: 'Набор мозаики', desc: 'Прямой набор на блоки — каждый элемент установлен вручную' },
                  { step: '5', title: 'Монтаж', desc: 'Блоки смонтированы на гладкой поверхности торца трёхэтажного здания' },
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
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-center text-muted-foreground">
              <strong className="text-primary">Сроки:</strong> Подготовка — 4 года, реализация — 1 год. 
              <strong className="text-primary ml-4">Открытие:</strong> 17 апреля 1976 года
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Галерея</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/панно оригинал1.jpg"
                alt="Общий вид панно"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Общий вид панно на стене колледжа</p>
            </div>
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/files/ноги панно.jpg"
                alt="Фрагмент мозаики — деталь"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Детали византийской мозаики</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h4 className="text-2xl font-bold mb-6 text-foreground">Реинтерпретация в пространстве «Плавильня»</h4>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              На основе челябинского панно создана авторская мозаика размером 2,85 × 1,80 м для пространства «Плавильня» в Москве. Работа сохраняет дух оригинала
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="hover-scale">
                <img
                  src="https://cdn.poehali.dev/files/5359411705970101581.jpg"
                  alt="Процесс создания новой мозаики"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <p className="text-center mt-4 text-sm text-muted-foreground">Создание новой мозаики — фрагменты на полу</p>
              </div>
              <div className="hover-scale">
                <img
                  src="https://cdn.poehali.dev/files/5359411705970101582.jpg"
                  alt="Детали новой мозаики"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <p className="text-center mt-4 text-sm text-muted-foreground">Работа над деталями — смальта и гранит</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Свяжитесь с нами</h3>
          <Card className="bg-background border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" className="bg-card border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Расскажите о вашем интересе к проекту..."
                    className="bg-card border-border"
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
              { icon: 'MapPin', label: 'Оригинал', value: 'Челябинск, ул. Гагарина, 17' },
              { icon: 'Building', label: 'Новая мозаика', value: 'Москва, Суперметалл' },
              { icon: 'Mail', label: 'Email', value: 'info@plavil.art' },
            ].map((contact, idx) => (
              <div key={idx} className="p-4">
                <Icon name={contact.icon} size={32} className="mx-auto mb-3 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                <p className="font-semibold text-foreground">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            <strong>Оригинал:</strong> Владимир Герасимович Мишин, 1976, Челябинск
          </p>
          <p>
            <strong>Реинтерпретация:</strong> Пространство «Плавильня», 2024, Москва
          </p>
          <p className="mt-4 text-sm">Объект культурного наследия регионального значения</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
