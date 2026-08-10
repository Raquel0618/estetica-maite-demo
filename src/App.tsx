import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamSection } from './components/TeamSection';
import { RatesSection } from './components/RatesSection';
import { ContactSocialSection } from './components/ContactSocialSection';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProId, setBookingProId] = useState<string | undefined>(undefined);
  const [bookingServiceName, setBookingServiceName] = useState<string | undefined>(undefined);

  const handleOpenBooking = (professionalId?: string, serviceName?: string) => {
    setBookingProId(professionalId);
    setBookingServiceName(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFE] flex flex-col font-sans text-slate-800 antialiased selection:bg-pink-200 selection:text-pink-900">
      {/* Header & Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Team & Services Section */}
        <TeamSection onOpenBooking={handleOpenBooking} />

        {/* Pricing & Rates Section */}
        <RatesSection onOpenBooking={handleOpenBooking} />

        {/* Contact, Location & Official Social Media */}
        <ContactSocialSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Speed Dial Contact Button */}
      <FloatingContact onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultProfessionalId={bookingProId}
        defaultServiceName={bookingServiceName}
      />
    </div>
  );
}

