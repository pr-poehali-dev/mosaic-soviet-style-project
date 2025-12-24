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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Завоевание космоса</h1>
          <div className="hidden md:flex gap-6">
            {['О панно', 'Процесс', 'Вдохновение', 'Художник'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['about', 'process', 'inspiration', 'contact'][idx])}
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
                  Мозаика «Завоевание космоса» размером 2,85 × 1,80 м создана специально для пространства «Плавильня» в старых цехах Суперметалла в Москве.
                </p>
                <p>
                  Задача стояла создать произведение, которое бы органично вписалось в индустриальную атмосферу — так, будто оно находилось здесь давно и было обнаружено при реконструкции.
                </p>
                <p>
                  Художник Инга Савина создала авторскую интерпретацию космической темы, объединив героическую эстетику советской эпохи с современным художественным видением.
                </p>
                <p>
                  Работа заняла 2 месяца. Фигуры выполнены из смальты, фон — из керамической мозаики.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r">
                <p className="text-sm font-semibold text-primary mb-2">ЗАМЫСЕЛ</p>
                <p className="italic">
                  Создать эффект «археологической находки» — панно, которое словно всегда было частью этого пространства
                </p>
              </div>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101574.jpg', 'Мозаика Завоевание космоса в Плавильне')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101574.jpg"
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
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101580.jpg', 'Монтаж мозаики')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101580.jpg"
                alt="Монтаж мозаики"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Процесс монтажа мозаики</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101581.jpg', 'Процесс создания мозаики')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101581.jpg"
                alt="Процесс создания мозаики"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Фрагменты мозаики в процессе работы</p>
            </div>
            <div className="hover-scale cursor-pointer" onClick={() => openImageModal('https://cdn.poehali.dev/files/5359411705970101582.jpg', 'Детали мозаики')}>
              <img
                src="https://cdn.poehali.dev/files/5359411705970101582.jpg"
                alt="Детали мозаики"
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
              />
              <p className="text-center mt-4 text-sm text-muted-foreground">Работа над деталями композиции</p>
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

      <section id="contact" className="py-20 bg-background">
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