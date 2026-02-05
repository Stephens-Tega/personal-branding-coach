"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import WhoThisIsFor from "../components/WhoThisIsFor";
import SocialProofs from "../components/SocialProofs";
import ClarityBlueprint from "../components/ClarityBlueprint";
import WorkWithMe from "../components/WorkWithMe";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
import ContactForm from "../components/ContactForm";

const waNumber = "2348062501417";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream text-black antialiased flex flex-col">
      {/* Header */}
      <Header waNumber={waNumber} />

      {/* Hero Section */}
      <Hero waNumber={waNumber} />

      {/* My Story Section */}
      <MyStory />

      {/* Who This Is For Section */}
      <WhoThisIsFor />

      {/* Social Proofs Section */}
      <SocialProofs />

      {/* Clarity Blueprint Section */}
      <ClarityBlueprint />

      {/* Ways to Work With Me */}
      <WorkWithMe />

      <ContactForm waNumber={waNumber} />

      {/* Closing CTA Section */}
      <ClosingCTA waNumber={waNumber} />

      {/* Footer & WhatsApp FAB */}
      <Footer />
      <WhatsAppFab waNumber={waNumber} />
    </div>
  );
}
