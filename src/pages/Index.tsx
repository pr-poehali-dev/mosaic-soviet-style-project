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
          <h1 className="text-2xl font-bold text-primary">Завоеватели космоса</h1>
          <div className="hidden md:flex gap-6">
            {['История', 'Герои', 'Процесс', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['history', 'heroes', 'process', 'contact'][idx])}
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
            Завоеватели космоса<br />в пространстве «Плавильня»
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Авторская реинтерпретация легендарного панно из Прилук. Суперметалл, Москва
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
                  Оригинальное монументальное панно «Завоеватели космоса» создано Валентиной и Анатолием Зубченко для фасада Дома связи в городе Прилуки.
                  Работы этих художников отличались технической стилистикой, динамичными абстрактными элементами и сложной композицией.
                </p>
                <p>
                  С заказчиками мы выбрали фрагмент из масштабного панно для создания новой мозаики размером 2,85 × 1,80 м в пространстве «Плавильня» (Суперметалл).
                </p>
                <p>
                  Задача стояла стилизовать панно, сохранив дух и вид оригинальной мозаики. Должно было создаваться впечатление, что она находилась здесь давно и была найдена при ремонте старых цехов.
                  Работа заняла 2 месяца.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r">
                <p className="text-sm font-semibold text-primary mb-2">ОРИГИНАЛЬНЫЕ АВТОРЫ</p>
                <p className="italic">
                  Валентина и Анатолий Зубченко — мастера монументального искусства СССР
                </p>
              </div>
            </div>
            <div className="hover-scale">
              <img
                src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/files/74d601e0-cf63-4c91-85c6-bf042b91b1c4.jpg"
                alt="Мозаика в пространстве Плавильня"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="heroes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Герои мозаики — пионеры космоса</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            В центре композиции 6 фигур — люди, без которых не случился бы первый полет человека в космос
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Юрий Гагарин',
                desc: 'Первый человек в космосе. Изображён в скафандре — центральная фигура композиции.',
                icon: 'Rocket',
              },
              {
                title: 'Константин Циолковский',
                desc: 'Отец теоретической космонавтики. Его научные труды заложили основу космических полётов.',
                icon: 'BookOpen',
              },
              {
                title: 'Сергей Королёв',
                desc: 'Главный конструктор. Слева от Гагарина — создатель первых космических кораблей.',
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
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Валентин Глушко',
                desc: 'Конструктор ракетных двигателей. Изображён над центральными фигурами.',
                icon: 'Zap',
              },
              {
                title: 'Николай Каманин',
                desc: 'Руководитель подготовки космонавтов. Справа от центральной группы.',
                icon: 'Award',
              },
              {
                title: 'Герман Титов',
                desc: 'Второй космонавт СССР, дублёр Гагарина. Продолжил освоение космоса.',
                icon: 'Star',
              },
            ].map((hero, idx) => (
              <Card key={idx} className="hover-scale bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={hero.icon} size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-foreground">{hero.title}</h4>
                  <p className="text-muted-foreground">{hero.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/files/0209f95c-f286-44f4-85c3-2d0351228e1c.jpg"
              alt="Фрагмент мозаики с персонажами"
              className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto hover-scale"
            />
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary">Процесс создания</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-secondary">Материалы</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Смальта', desc: 'Для фигур космических первопроходцев. Цветное стекло передаёт глубину и объём.' },
                  { name: 'Керамическая мозаика', desc: 'Для динамичного абстрактного фона, характерного для стиля Зубченко.' },
                  { name: 'Размер работы', desc: '2,85 × 1,80 м — фрагмент оригинального масштабного панно' },
                  { name: 'Стилизация', desc: 'Эффект «археологической находки» для органичного вписывания в старые цеха' },
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
                  { step: '1', title: 'Выбор фрагмента', desc: 'Из масштабного панно выбран центральный фрагмент с 6 фигурами' },
                  { step: '2', title: 'Стилизация композиции', desc: 'Адаптация под пространство с сохранением духа оригинала' },
                  { step: '3', title: 'Работа со смальтой', desc: 'Детальная проработка фигур космических пионеров' },
                  { step: '4', title: 'Создание фона', desc: 'Керамическая мозаика с динамичными абстрактными элементами' },
                  { step: '5', title: 'Финальная интеграция', desc: 'Эффект «давней находки» в интерьере старых цехов' },
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
          <div className="mt-12">
            <img
              src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/files/f4ab0279-863d-478e-8210-c2391c116f28.jpg"
              alt="Процесс создания мозаики"
              className="rounded-lg shadow-2xl w-full hover-scale"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-secondary">Свяжитесь с нами</h3>
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
                    placeholder="Расскажите о вашем интересе к мозаике..."
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
              { icon: 'MapPin', label: 'Адрес', value: 'Суперметалл, Москва' },
              { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
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

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Завоеватели космоса. Реинтерпретация панно В. и А. Зубченко в пространстве «Плавильня».</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
