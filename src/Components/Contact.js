import "./Contact.css";
import NavBar from '../Components/Navbar'; 
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
        <NavBar />

        <div className='about_sect2'>
                <p className='txt_abo'>Contact us</p>
        </div>


        <div className="Contact_section1">
            <p className="txt_se1">-- 𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓤𝓼 --</p>
            <p className="txt_se2">Contact For Any Query</p>
            <div className="cont2_sec1">
                <div>
                    <p className="head_se1">𝓑𝓸𝓸𝓴𝓲𝓷𝓰 --</p>
                    <p className='txt_mail'><div className='icon_se1_book'><i class="fa-solid fa-envelope-open-text"></i></div>booking@example.com</p>
                </div>
                <div>
                    <p className="head_se1">𝓖𝓮𝓷𝓮𝓻𝓪𝓵 --</p>
                    <p className='txt_mail'><div className='icon_se1_book'><i class="fa-solid fa-envelope-open-text"></i></div>general@example.com</p>
                </div>
                <div>
                    <p className="head_se1">𝓣𝓮𝓬𝓱𝓷𝓲𝓬𝓪𝓵 --</p>
                    <p className='txt_mail'><div className='icon_se1_book'><i class="fa-solid fa-envelope-open-text"></i></div>techsupport@example.com</p>
                </div>
            </div>

        </div>

        <div className="contact_section2">
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995535.8166283085!2d76.42986777812497!3d12.919815500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14816836c07d%3A0x8e8654c748196bbe!2sAG%20Restaurant!5e0!3m2!1sen!2sin!4v1707322862938!5m2!1sen!2sin" width="620" height="380"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
            </div>
            <div className="contact_sec2_sub">
                <form>
                  <div className="space_sec2">
                  <input type="text" placeholder="Name" className="inp_sec2" />
                  <input type="email"  placeholder="Email" className="inp_sec2"/>
                  </div>
                  <input type="textarea" placeholder="Subject" className="txtarea_sec2" /> <br/>
                  <textarea placeholder="Message" className="txtarea2_sec2"></textarea><br/>
                  <button className="butt_sec2_last">Send Message</button>
                </form>
            </div>
            
        </div>
        <br/> <br/> <br/>
        <Footer />

    </div>
  )
}

export default Contact