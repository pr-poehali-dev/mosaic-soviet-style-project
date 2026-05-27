import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/9aa7d768-1225-4198-b8b6-f4b60d9aac6a.jpg',
    alt: 'Мозаика для Канон — готовая работа в интерьере',
    caption: 'Готовая мозаика в интерьере ресторана-пивоварни «Канон»',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/09d916c5-cc81-44ef-83c3-5763c954a6ac.JPG',
    alt: 'Мозаика для Канон — фрагменты перед монтажом',
    caption: 'Фрагменты мозаики перед монтажом',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/cebc5f81-d71b-4ef2-a73a-6a7e45e37fda.jpg',
    alt: 'Детали мозаики крупным планом',
    caption: 'Детали — смальта крупным планом',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/df2f57a6-4a52-4eb2-bc33-d12c93117e21.jpg',
    alt: 'Инга Савина в процессе монтажа мозаики',
    caption: 'Процесс монтажа — Инга Савина за работой',
  },
];

const ProjectKanon = () => {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

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

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 z-10 pt-16 pb-12 text-center relative">
          <p className="text-secondary font-semibold uppercase tracking-widest mb-3 text-sm">Монументальная мозаика • Тула • 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Мозаика для «Канон»
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Авторская мозаика для ресторана-пивоварни «Канон», Тула. Пивоваренный котёл в технике смальты.
          </p>
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Фото галерея */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Фотографии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedPhoto(idx)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-secondary">О проекте</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Мозаика создана специально для ресторана-пивоварни «Канон» в Туле. Центральный образ — пивоваренный котёл, вписанный в динамичную композицию из труб, пара и воды.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Работа выполнена из смальты: яркая цветовая палитра с доминирующими красными и синими тонами создаёт ощущение энергии и тепла производственного процесса.
          </p>
          <Button onClick={() => navigate('/')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="ArrowLeft" size={18} className="mr-2" /> Вернуться к портфолио
          </Button>
        </div>
      </section>

      {/* Лайтбокс */}
      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0">
          <DialogTitle className="sr-only">{selectedPhoto !== null ? photos[selectedPhoto].alt : ''}</DialogTitle>
          {selectedPhoto !== null && (
            <div className="relative">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 text-center">
                <p className="text-sm text-muted-foreground">{photos[selectedPhoto].caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectKanon;
