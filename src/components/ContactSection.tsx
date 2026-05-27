import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  selectedImage: string | null;
  selectedImageAlt: string;
  closeImageModal: () => void;
}

const ContactSection = ({ selectedImage, selectedImageAlt, closeImageModal }: ContactSectionProps) => {
  return (
    <>
      <section id="contact" className="py-20 bg-card">
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
            <strong className="text-foreground">Инга Савина — художник-мозаичист</strong>
          </p>
          <p className="mb-1">Тула • Москва • 2025</p>
          <p className="text-sm mt-4">Арт-группа «6/57»</p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
