import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Stat {
  value: string;
  label: string;
}

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  stats: Stat[];
  description: React.ReactNode;
  address?: string;
  children?: React.ReactNode;
}

const ProjectLayout = ({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  stats,
  description,
  address,
  children,
}: ProjectLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="text-muted-foreground hover:text-foreground">
            <Icon name="ArrowLeft" size={18} className="mr-2" /> Назад
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 z-10 pt-16 pb-12 text-center relative">
          <p className="text-secondary font-semibold uppercase tracking-widest mb-3 text-sm">{subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">{title}</h1>
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Цифры */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-10 text-secondary text-center">О проекте</h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            {description}
          </div>
          {address && (
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-lg px-6 py-4 mt-10">
              <Icon name="MapPin" size={20} className="text-primary flex-shrink-0" />
              <p className="text-foreground text-base">{address}</p>
            </div>
          )}
        </div>
      </section>

      {/* Дополнительный контент */}
      {children}

      {/* Кнопка назад */}
      <section className="py-12 bg-background text-center">
        <Button onClick={() => navigate('/')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="ArrowLeft" size={18} className="mr-2" /> Вернуться к портфолио
        </Button>
      </section>
    </div>
  );
};

export default ProjectLayout;
