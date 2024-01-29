
import { Routes, Route } from 'react-router-dom';
import Menu from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import DejaConsultant from './pages/dejaconsultant';
import Contacter from './pages/contacter';
import Accompagnement from './pages/accompagnementvae';
import Bilandecompetences from './pages/bilandecompetences';
import Coaching from './pages/coaching';
import Devenirconsultant from './pages/devenirconsultant';
import Savoirplus from './pages/ensavoirplus';
import Entreprise from './pages/entreprise';
import Entretienannuel from './pages/entretienannuel';
import Noscentres from './pages/noscentres';
import Nosconseiller from './pages/nosconseiller';
import Recrutement from './pages/recrutement';
import Formations from './pages/formations';
import Particulier from './pages/particulier';
import Rejoindre from './pages/rejoindre';
import './css/app.css';
import { Children } from 'react';
import Protected from './components/protected';

function App() {
  return (
    <>
    <Protected>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacter" element={<Contacter />} />
      <Route path="/dejaconsultant" element={<DejaConsultant />} />
      <Route path="/accompagnementvae" element={<Accompagnement />} />
      <Route path="/bilandecompetences" element={<Bilandecompetences />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/devenirconsultant" element={<Devenirconsultant />} />
      <Route path="/ensavoirplus" element={<Savoirplus />} />
      <Route path="/entreprise" element={<Entreprise />} />
      <Route path="/entrerienannuel" element={<Entretienannuel />} />
      <Route path="/noscentres" element={<Noscentres />} />
      <Route path="/nosconseiller" element={<Nosconseiller />} />
      <Route path="/recrutement" element={<Recrutement />} />
      <Route path="/accompagnementvae" element={<Accompagnement />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/particulier" element={<Particulier />} />
      <Route path="/rejoindre" element={<Rejoindre />} />
    </Routes>
    <Footer />
    </Protected>
    </>
    );
}

export default App;
