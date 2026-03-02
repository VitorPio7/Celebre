import './App.css'
import Head from "./components/Head.tsx"
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
      <Head logo="CELEBRE"  titleHead={titleHead} />
    </div>
  );
}

export default App
