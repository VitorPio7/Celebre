import "./App.css";

import BodyCarousel from "./components/BodyCarousel.tsx";

import BodyGalery from "./components/BodyGalery.tsx";

import Head from "./components/Heading.tsx";

import FadeInSection from "./components/ui/fadeInSection.tsx";

import VideoHead from "./components/VideoHead.tsx";

import ContacUsSection from "./components/ContactUsSection.tsx";

function App() {
  const titleHead = [
    {
      title: "Sobre nós",
      link: "#sobrenós",
    },
    {
      title: "Galeria",
      link: "#galeria",
    },
    {
      title: "Testemunha",
      link: "#Testemunha",
    },
    {
      title: "Precos",
      link: "#precos",
    },
    {
      title: "Beneficios",
      link: "#Beneficios",
    },
    {
      title: "FAQ",
      link: "#faq",
    },
  ];
  return (
    <div className="no-scrollbar overflow-y-auto">
      <Head logo="CELEBRE" titleHead={titleHead} />
      <FadeInSection>
        <VideoHead />
      </FadeInSection>
      <FadeInSection>
        <BodyCarousel />
      </FadeInSection>
      <FadeInSection>
        <BodyGalery />
      </FadeInSection>
      <FadeInSection>
        <ContacUsSection />
      </FadeInSection>
    </div>
  );
}

export default App;
