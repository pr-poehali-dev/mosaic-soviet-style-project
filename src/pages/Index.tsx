import { useState } from 'react';
import ArtistHero from '@/components/ArtistHero';
import QuizAndLocation from '@/components/QuizAndLocation';
import ContactSection from '@/components/ContactSection';

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
      <ArtistHero scrollToSection={scrollToSection} />
      <QuizAndLocation />
      <ContactSection
        selectedImage={selectedImage}
        selectedImageAlt={selectedImageAlt}
        closeImageModal={closeImageModal}
      />
    </div>
  );
};

export default Index;
