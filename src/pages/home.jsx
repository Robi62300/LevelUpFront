import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MdCastForEducation, MdPsychology, MdSchool, MdSentimentVerySatisfied  } from "react-icons/md";
import  CercleGauche  from "../components/cercleGauche";
import HoverEntreprise from "../components/HoverEntreprise";
import HoverParticulier from "../components/HoverParticulier";
import Image3 from "../img/image3.jpg";
import ImageCertif from "../img/certificat.jpg";
import BarreDeRecherche from "../components/BarreDeRecherche";
import ImageClient from "../img/photo2.jpg";
import CercleDroite from "../components/cercleDroite";



// Function pour l'animation de " view "

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.333s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }


function Home(){

// Animation Compteur pour l'année d'expérience
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 46, { duration: 3 });
    return animation.stop;
  }, );

// Animation pour le nombre de personnes formées 
    const count2 = useMotionValue(0);
    const rounded2 = useTransform(count2, Math.round);

  useEffect(() => {
    const animation2 = animate(count2, 1800, { duration: 3 });
    return animation2.stop;
  }, );

// Animation pour le nombre de consultants
    const count3 = useMotionValue(0);
    const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    const animation3 = animate(count3, 50, { duration: 3 });
    return animation3.stop;
  }, );

// Animation pour le % de clients satisfaits
    const count4 = useMotionValue(0);
    const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    const animation4 = animate(count4, 91, { duration: 3 });
    return animation4.stop;
  }, );

  //Hover pour Entreprise
  const [isDropDownVisibleHomeEntreprise, setDropdownVisibleHomeEntreprise] = useState(false);
  const handleMouseEnterHomeEntreprise = () => {
      setDropdownVisibleHomeEntreprise(true);
  };
  const handleMouseLeaveHomeEntreprise = () => {
      setDropdownVisibleHomeEntreprise(false);
  };

  //Hover pour Particulier
  const [isDropDownVisibleHomeParticulier, setDropdownVisibleHomeParticulier] = useState(false);
  const handleMouseEnterHomeParticulier = () => {
      setDropdownVisibleHomeParticulier(true);
  };
  const handleMouseLeaveHomeParticulier = () => {
      setDropdownVisibleHomeParticulier(false);
  };
  
  //Le onclick pour la recherche

useEffect(() => {
    const container = document.querySelector(".search-bar");
    const searchIcons = document.querySelectorAll(".search-bar i");
   
    const handleClick = () => {
      container.classList.toggle("change");
    };
   
    searchIcons.forEach(searchIcon => {
      searchIcon.addEventListener("click", handleClick);
    });
   
    return () => {
      searchIcons.forEach(searchIcon => {
        searchIcon.removeEventListener("click", handleClick);
      });
    };
  },);


    return(
        <main className="home">
            <div className="testimage">
                <img src={Image3} alt="Truc" className="image3" />
            </div>
            <div className="levelup">
                <h1 className="h1level ">
                    LEVEL'UP! FORMATION
                </h1>
                <p className="margin-top p1">Développez vos compétences avec nos formations ludiques et sur-mesure !</p>
                <div className="truc">
                    <div className="search-bar">
                        <BarreDeRecherche/>
                    </div>
                    <p className="text-recherche">
                        Je recherche une formation     
                    </p>
                </div>
            </div>
            <Section className="fermer">
            <section className="choose">
                <div className="hover-particulier border15" onMouseEnter={handleMouseEnterHomeParticulier} onMouseLeave={handleMouseLeaveHomeParticulier}>
                    {isDropDownVisibleHomeParticulier && <HoverParticulier />}
                     <p className="Choix">Je suis un particulier</p>
                </div>
                
                <div className="hover-entreprise border15" onMouseEnter={handleMouseEnterHomeEntreprise} onMouseLeave={handleMouseLeaveHomeEntreprise}>
                    {isDropDownVisibleHomeEntreprise && <HoverEntreprise />}
                    <p className="Choix">Je suis une entreprise</p>
                </div>
                
            </section>
            </Section>
            
            <Section className="fermer">
                <section className="satinne chiffre">
                    <div className="cercle-gauche-deux">
                        <CercleGauche />
                    </div>
                    <div className="margin-top">
                        <h2>
                            Level'up bilan de compétence en chiffres
                        </h2>
                    </div>
                    <div className="block-icon">
                        <div className="menu-icon">
                            <MdPsychology className="titi"/>
                            <motion.div>{rounded}</motion.div>
                            <p>ans d'expérience</p>
                        </div>
                        <div className="menu-icon">
                            <MdSchool className="titi"  />
                            <motion.div>{rounded2}</motion.div>
                            <p>
                                personnes formées en 2022
                            </p>
                        </div>
                        <div className="menu-icon">
                            <MdCastForEducation className="titi" />
                            <motion.div>{rounded3}</motion.div>
                        <p>
                            consultants
                        </p>
                        </div>
                        <div className="menu-icon">
                            <MdSentimentVerySatisfied className="titi" />
                            <motion.div>
                                {rounded4}
                            </motion.div>
                            <p>
                                % de clients satisfaits
                            </p>
                        </div>
                    </div>
                </section>
            </Section>
            
            <section className="FinDePage">
                
                    <h2 className="margin-top margin-bot">
                        <Section>
                            Des clients heureux !
                        </Section>
                    </h2>
                <Section className="fermer"> 
                        <div className="test8">
                            <img src={ImageClient} className="image2" alt="" />
                            <div className="cercle-droit">
                                <CercleDroite />
                            </div>
                        </div>
                </Section> 
                <p className="margin-top">"Satinne c'est la meilleure"</p>
                <p className="margin-top">Robi</p>
                <div className="cercle-gauche-deux">
                    <CercleGauche />
                </div>
                <h2 className="margin-top">
                    Qui est Level'up ?
                </h2>
                <p className="margin-top">Level'up,conseil et bilan de compètences,</p>
                <p>adaptées à vos besoins</p>
                <div className="atout">
                    <h2>Notre gage de qualité ?</h2>
                    <p className="margin-top text">Level'up certifié depuis le 21 Août 2023</p>
                </div>
                <img src={ImageCertif} alt="" className="ImageCertif" />
            </section>
            
        </main>  
    );
}

export default Home;