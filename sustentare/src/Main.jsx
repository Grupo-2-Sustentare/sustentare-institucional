import Header from "./sections/header/Header";
import Landing from "./sections/landing/Landing";
import Skills from "./sections/skills/Skills"
import Team from "./sections/team/Team";
import Values from "./sections/values/Values"
import Footer from "./sections/footer/Footer";

export default function Main(){
    return (
        <>
            <Header />
            <Landing />
            <Skills />
            <Team />
            <Values />
            <Footer />
        </>
    )
}