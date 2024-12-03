import NavBar from '../Components/Navbar'; 
import Footer from '../Components/Footer';

const Service = () => {
  return (
    <div>
        
      <NavBar />
      <div className='about_sect2'>
        <p className='txt_abo'>Service</p>
      </div>



         <div className='sec2_main'>
            <p className='txt2_ser'>-- 𝓞𝓾𝓻 𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼 --</p>
            <p className='txt2_exp'>Explore Our Services</p>
            <div className='section2'>
          <div className='sec21'>
              <div className='imgsec2'>
              <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
              </div>
              <br />
              <p className='txt21'> Master Chefs</p>
              
              <p className='txt22'>A master chef is a highly trained and skilled professional cook proficient in all aspects of food preparation, cooking, and presentation.</p>
          </div>
          <div className='sec21'>
              <div className='imgsec2'>
                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
              </div> <br />
              <p className='txt21'>Quality Food</p>
              <p className='txt22'>Every ingredient that is used to create a menu itemhas to be verified for its quality to ensure the final dish is up to mark</p>
          </div>
          <div className='sec21'> 
              <div className='imgsec2'>
                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
               </div> <br />
             <p className='txt21'>Online Order</p>
             <p className='txt22'>Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more.</p>
          </div>
          <div className='sec21'>
              <div className='imgsec2'>
                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
              </div> <br />
             <p className='txt21'>24/7 Service</p>
             <p className='txt22'> Round-the-clock service can boost revenue and cater to diverse schedules.</p>
          </div>

          <br /> 
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Service