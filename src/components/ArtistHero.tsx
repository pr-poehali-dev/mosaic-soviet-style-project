import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ArtistHeroProps {
  scrollToSection: (id: string) => void;
}

const ArtistHero = ({ scrollToSection }: ArtistHeroProps) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Инга Савина</h1>
          <div className="hidden md:flex gap-6">
            {['Обо мне', 'Проекты', 'Художник', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['artist-hero', 'projects', 'contact', 'contact'][idx])}
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

      {/* HERO — художник */}
      <section
        id="artist-hero"
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in order-2 md:order-1">
              <p className="text-primary font-semibold uppercase tracking-widest mb-3 text-sm">Художник-мозаичист</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Инга Савина
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Создаю монументальные мозаики в технике советского авангарда и византийской традиции. Мои работы — это диалог между историей и современностью, вписанный в архитектурное пространство.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Монументальная мозаика', 'Смальта', 'Керамика', 'Арт-группа 6/57', 'Обучение мозаике'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                Смотреть проекты <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-xl" />
                <img
                  src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/d99a5260-2c03-4d15-9fe1-338a5d4578bb.jpg"
                  alt="Инга Савина — художник-мозаичист"
                  className="relative w-72 md:w-96 h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Образование и биография */}
      <section id="bio" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-primary text-center">Образование</h3>
          <div className="space-y-6">
            {[
              { year: '2001', text: 'ТГПУ им. Л.Н. Толстого — русская и английская филология' },
              { year: '2020–2023', text: 'Курсы по масляной и акриловой живописи Юлии Кошелевой (Нижний Новгород)' },
              { year: '2022', text: 'Курс Radiopaint Татьяны Иванковой (БВШД, Москва)' },
              { year: '2024', text: '«Лаборатория современного искусства» Евгении Войнар — Резидент 7 сезона Открытых студий ЦСИ Винзавод' },
              { year: '2024', text: 'Сооснователь и руководитель арт-группы «6/57», г. Тула' },
              { year: '2025', text: 'Член Товарищества Тульских художников' },
              { year: '2025', text: 'Резидент ремесленного пространства «Точка» (Тула) — провожу обучение и интенсивы по мозаике' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-primary font-bold text-sm">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-border self-stretch mt-1" />
                <p className="text-foreground text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4 text-primary text-center">Проекты</h3>
          <p className="text-muted-foreground text-center mb-12 text-lg">Монументальные работы</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card
              className="bg-card border-border overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => navigate('/project/kosmos')}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/2b27919c-cc6b-470b-8832-c8b379fff7c6.jpg"
                  alt="Завоевание космоса"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded font-medium uppercase tracking-wide">Москва • 2025</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-foreground">«Завоевание космоса»</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Монументальная мозаика 2,85 × 1,80 м для гастрономического пространства «Плавильня» в деловом квартале «Суперметалл». Смальта и керамика, стилистика советского монументализма.
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-card border-border overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => navigate('/project/kanon')}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/4345624c-31cd-4c88-a9fd-33864d72cff0.jpg"
                  alt="Мозаика для Канон"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded font-medium uppercase tracking-wide">Тула • 2026</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-foreground">Мозаика для «Канон»</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Современная мозаика для ресторана-пивоварни «Канон» в Туле. Авторская работа, органично вписанная в концепцию заведения. Май 2026.
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistHero;