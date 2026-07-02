import ContactHero from "./contact_components/ContactHero";
import ContactSection from "./contact_components/ContactSection";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-[100px] pb-xl px-gutter max-w-container-max mx-auto w-full">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
