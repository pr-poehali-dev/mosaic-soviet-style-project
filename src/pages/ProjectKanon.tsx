import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ProjectKanon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="text-muted-foreground hover:text-foreground">
            <Icon name="ArrowLeft" size={18} className="mr-2" /> Назад
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Мозаика для «Канон»</span>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 z-10 text-center">
          <p className="text-secondary font-semibold uppercase tracking-widest mb-3 text-sm">Монументальная мозаика • Тула • 2024</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Мозаика для «Канон»
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Авторская мозаика для ресторана-пивоварни «Канон», Тула
          </p>
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 text-muted-foreground">
            <Icon name="Clock" size={20} className="text-secondary" />
            <span>Страница проекта в разработке — скоро здесь появятся фото и описание</span>
          </div>
          <div className="mt-12">
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={18} className="mr-2" /> Вернуться к портфолио
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectKanon;
