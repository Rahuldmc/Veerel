import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import C1 from '../../Assets/APTDC_Logo (1).png';
import C2 from '../../Assets/Asianet_logo.jpg';
import C3 from '../../Assets/NPCIL_Logo.svg.png';
import c4 from '../../Assets/NicePng_tv-png_22701.png';
import C5 from '../../Assets/Star_Vijay_logo_2017.png';
import C6 from '../../Assets/Telangana_Tourism(1).jpg';
import C7 from '../../Assets/Tourism_department_WB.png';
import C8 from '../../Assets/airforce-ind.png';
import C9 from '../../Assets/indian army.png';
import C10 from '../../Assets/indiannavy.png';
import C11 from '../../Assets/kairali logo.png';
import C12 from '../../Assets/logo--Taj.png';
import C13 from '../../Assets/tn logo.png';
import C14 from '../../Assets/wbfc.png';
import C15 from '../../Assets/zeetv.png';
import bgvideo from "../../Assets/moon_-_116594 (Original).mp4";
import "./Clients.css"


const clientData = [
  { name: "APTDC", logo: C1 },
  { name: "Asianet", logo: C2 },
  { name: "NPCIL", logo: C3 },
  { name: "NicePng", logo: c4 },
  { name: "Star Vijay", logo: C5 },
  { name: "Telangana Tourism", logo: C6 },
  { name: "Tourism WB", logo: C7 },
  { name: "Airforce", logo: C8 },
  { name: "Indian Army", logo: C9 },
  { name: "Indian Navy", logo: C10 },
  { name: "Kairali", logo: C11 },
  { name: "Taj", logo: C12 },
  { name: "TN", logo: C13 },
  { name: "WBFC", logo: C14 },
  { name: "Zee TV", logo: C15 },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='clients-container'>
      {/* Background Video */}
      <div className="bgvid-parallax">
        <video src={bgvideo} autoPlay loop muted/>
      </div>

      <h1 className="clients-header">OUR CLIENTS</h1>

      <div className="clients-grid">
        {clientData.map((client, index) => (
          <div
            key={index}
            className="client-logo"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={client.logo} alt={client.name} />
            <div className="client-name">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
