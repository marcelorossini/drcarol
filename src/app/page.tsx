import Section from "@/components/ui/section";
import HomeHero from "@/components/pages/home-hero";
import HomeTreatments from "@/components/pages/home-treatments";
import HomeResults from "@/components/pages/home-results";
import HomeAboutClinic from "@/components/pages/home-about-clinic";
import HomeFAQ from "@/components/pages/home-faq";
import HomeAboutDoctor from "@/components/pages/home-about";
import HomeTestimonials from "@/components/pages/home-testimonials";
import HomeContact from "@/components/pages/home-contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Section id="home" className="min-h-[100vh] relative bg-gradient-to-b from-[#d2b9a5] via-[#d2b9a5] via-35% to-[#a9856d]">
        <HomeHero />
      </Section>
      <Section id="tratamentos" className="bg-[#eee9e3]" hideOverflowX={false}>
        <HomeTreatments />
      </Section>
      <Section id="resultados" className="bg-[#957665]">
        <HomeResults />
      </Section>
      <Section id="about" className="" defaultPadding={false}>
        <HomeAboutDoctor />
      </Section>
      <Section id="about-clinic" className="bg-[#eee9e3]">
        <HomeAboutClinic />
      </Section>
      <Section id="faq" className="bg-white p-8 !pb-0">
        <HomeFAQ />
      </Section>
      <Section id="depoimentos" className="">
        <HomeTestimonials />
      </Section>
      <Section id="contato" className="bg-[#eee9e3]">
        <HomeContact />
      </Section>
    </div>
  );
}
