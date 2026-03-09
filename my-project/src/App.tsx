import "./App.css";

import BodyCarrossel from "./components/BodyCarrossel.tsx";

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
    <>
      <Head logo="CELEBRE" titleHead={titleHead} />
      <body className=" font-serif">
        <VideoHead />
        <BodyCarrossel />
        <BodyGalery />
      </body>
    </>
  );
}

export default App;
