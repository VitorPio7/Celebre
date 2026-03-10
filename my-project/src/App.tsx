import "./App.css";

import BodyCarousel from "./components/BodyCarousel.tsx";

import BodyGalery from "./components/BodyGalery.tsx";

import Head from "./components/Head.tsx";

import VideoHead from "./components/VideoHead.tsx";

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
      <body className=" font-serif">
        <VideoHead />
        <BodyCarousel />
        <BodyGalery />
      </body>
    </div>
  );
}

export default App;
