import Section from "@/components/ui/section";
import HomeHero from "@/components/pages/home-hero";
import dynamic from 'next/dynamic';
import Menu from '@/components/ui/menu';

// Carregar componentes não críticos de forma lazy
const HomeTreatments = dynamic(() => import('@/components/pages/home-treatments'));
const HomeResults = dynamic(() => import('@/components/pages/home-results'));
const HomeAboutClinic = dynamic(() => import('@/components/pages/home-about-clinic'));
const HomeFAQ = dynamic(() => import('@/components/pages/home-faq'));
const HomeAboutDoctor = dynamic(() => import('@/components/pages/home-about'));
const HomeTestimonials = dynamic(() => import('@/components/pages/home-testimonials'));
const HomeContact = dynamic(() => import('@/components/pages/home-contact'));

export default function Home() {
  return (
    <>
      <Menu isSticky={true} />
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
    </>
  );
}
