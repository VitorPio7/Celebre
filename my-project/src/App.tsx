import "./App.css";
import BodyCarrossel from "./components/BodyCarrossel.tsx";

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
    <div className=" font-sans  text-gray-500">
      <Head logo="CELEBRE" titleHead={titleHead} />
      <VideoHead />
      <BodyCarrossel />
    </div>
  );
}

export default App;
