import '../Components/About.css'
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Navbar'; 
import Footer from '../Components/Footer';

const About = () => {
    const navigate = useNavigate();
    function submitClick(e) {
        navigate('/');
      }
  return (
    <div>
        <NavBar />
      <div className='about_sect2'>
        <p className='txt_abo'>About</p>
      </div>
        <div className='section3'>
        
        <div className='sec3'>
        <br /><br /><br />
            <div >
                <img src={"https://themewagon.github.io/restoran/img/about-1.jpg"} className='img1_about' alt=''></img>
                <img src={"https://themewagon.github.io/restoran/img/about-2.jpg"} className='img2_about' alt=''></img>
            </div>
            <div className='sec31'>
                <img src={"https://themewagon.github.io/restoran/img/about-3.jpg"} className='img3_about' alt=''></img>
                <img src={"https://themewagon.github.io/restoran/img/about-4.jpg"} className='img4_about' alt=''></img>
            </div>

        <br /><br /><br />
        </div>

            <div className='sec32'>
            <br /><br /><br />
                <p className='text31' >𝓐𝓫𝓸𝓾𝓽 𝓤𝓼  </p>
                <p className='text32'>Welcome to   <div className='icon_32'><i class="fa-solid fa-utensils"></i></div>   AG Restaurant</p>
                <p className='text33'>AG's story began in 2010 with a clear and unique vision of the future of fast food. Recognizing the importance of healthy living, a love for flavour, and authenticity,   AG's creation was by no means accidental.</p>
                <p className='text34'>Since our humble beginnings as a family-run eatery in Toronto, AG has been able to maintain our individuality and creativity, while growing into a unique healthy Indian fast food chain. Our team takes great pride in offering customers a healthy alternative to both traditional fast food and Indian cuisine. We hope you enjoy your AG Experience!</p>

            <div className='sec33'>
                <div className='sec331'>
                    <div className='icon_sec33'><i class="fa-solid fa-1"></i><i class="fa-solid fa-4"></i></div>
                    <div className='sec_par1'>
                        <p className='text332'>Years of</p>
                        <p className='text333'>EXPERIENCE</p>
                    </div>
                </div>

            <div className='sec331'>
                <div className='icon_sec33'><i class="fa-solid fa-4"></i><i class="fa-solid fa-0"></i></div>
                <div className='sec_par1'>
                        <p className='text332'>Popular</p>
                        <p className='text333' >MASTER CHEFS</p>
                </div>
            </div>
            </div>

            <div>
                <form onSubmit={submitClick}>
                    <button className='butt_sec3'>READ MORE</button>
                </form>
                
            </div>
            </div>
        </div>   
        <Footer />     
    </div>
  )
}

export default About