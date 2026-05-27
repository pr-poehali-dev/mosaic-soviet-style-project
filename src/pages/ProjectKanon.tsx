import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import ProjectLayout from '@/components/ProjectLayout';

const photos = [
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/4345624c-31cd-4c88-a9fd-33864d72cff0.jpg',
    alt: 'Готовая мозаика «Канон» в интерьере — вид целиком',
    caption: 'Готовая мозаика в интерьере ресторана-пивоварни «Канон», 2,10 × 1,82 м',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/212a3d20-4722-4e32-affb-7cce0c5953d5.jpg',
    alt: 'Мерч для сотрудников «Канон» — принт мозаики на футболках',
    caption: 'Мерч для сотрудников ресторана — принт мозаики на корпоративных футболках',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/ae6386d3-565d-4e0e-a46e-552fe9485800.jpg',
    alt: 'Фрагмент мозаики «Канон» — синяя плитка крупным планом',
    caption: 'Фрагмент — синяя и красная стеклянная плитка крупным планом',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/dcafbf37-4cb1-4b08-bfa1-9e1159ca6d32.jpg',
    alt: 'Фрагмент мозаики — детали котла и арки',
    caption: 'Детали котла и арки — яркие красные и синие оттенки',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/3258ee83-398a-4ca2-b91b-6608cd2b9266.jpg',
    alt: 'Инга Савина — автор мозаики «Канон»',
    caption: 'Инга Савина — автор мозаики, в процессе финальной работы',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/0f5dc470-3b29-4406-9937-ca86961c1b37.jpg',
    alt: 'Монтаж мозаики «Канон» на стену — нанесение клея',
    caption: 'Монтаж на стену — нанесение клея перед укладкой фрагментов',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/46ce0f12-74bf-4cd0-ad1c-c63ec2e5d780.jpg',
    alt: 'Авторы мозаики за монтажом — вид сзади',
    caption: 'Работа в мастерской — укладка плитки на сетку перед монтажом',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/1c7d577e-b748-4def-b4ba-715e125260d4.jpg',
    alt: 'Инга за столом в мастерской — сборка мозаики',
    caption: 'Команда в процессе монтажа — укладка фрагментов мозаики на стену',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/1db233fd-92e3-479f-be65-09052141c486.jpg',
    alt: 'Сборка мозаики крупным планом — укладка плитки вручную',
    caption: 'Ручная укладка — каждый кусочек плитки размещается вручную',
  },
  {
    src: 'https://cdn.poehali.dev/projects/601949fe-ecc7-4bc0-87a0-c67acf8aa954/bucket/6d517591-5c5c-41ea-8713-5740213fdd00.jpg',
    alt: 'Мозаика «Канон» в арке ресторана — вид через проём',
    caption: 'Вид через кирпичную арку — мозаика в процессе монтажа в интерьере',
  },
];

const ProjectKanon = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <>
      <ProjectLayout
        title="Мозаика для «Канон»"
        subtitle="Монументальная мозаика • Тула • 2026"
        heroImage={photos[0].src}
        heroImageAlt={photos[0].alt}
        stats={[
          { value: '8 000', label: 'элементов' },
          { value: '30+', label: 'оттенков' },
          { value: '300+', label: 'часов работы' },
          { value: '2026', label: 'год создания' },
        ]}
        description={
          <>
            <p>Мозаика создана специально для ресторана-пивоварни «Канон» в Туле. Центральный образ — пивоваренный котёл, вписанный в динамичную композицию из труб, пара и воды.</p>
            <p>Работа выполнена из стеклянной плитки: более 30 оттенков, 8 000 элементов и свыше 300 часов ручного труда. Каждый фрагмент уложен вручную — с разноцветной затиркой, которая подчёркивает живость и фактуру мозаичной поверхности.</p>
            <p>Яркая палитра с доминирующими красными и синими тонами передаёт энергию пивоваренного процесса — жар котлов, клубы пара, движение воды.</p>
          </>
        }
        address="Тула, ул. Металлистов, 13 (Музейный квартал)"
      >
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
      </ProjectLayout>

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
    </>
  );
};

export default ProjectKanon;
