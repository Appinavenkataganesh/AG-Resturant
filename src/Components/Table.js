import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import NavBar from '../Components/Navbar'; 
import Footer from '../Components/Footer';

const Table = () => {
  
  const date = useRef();
  const people = useRef();
  const time = useRef();
  const seat = useRef();
  const request = useRef();

  const handleSubmit = () =>
  {
    console.log(date.current.value,people.current.value,time.current.value,seat.current.value,request.current.value)
  }

  const navigate = useNavigate();
  function handleClick(e) {
    navigate('/register ');
  }
  return (
    <div>
      <NavBar />
      <div className='about_sect2'>
        <p className='txt_abo'>Booking</p>
      </div>
      <br /> <br /><br /> <br />


      <div className='section5'>
          <div>
            <img src='https://www.expatchoice.asia/sites/default/files/u503/Awadh%20GIF%20%282%29.gif' className='img_sec5' alt=''></img>
          </div>

          <div className='sec5'>
            <p className='txt_sec5'>𝓡𝓮𝓼𝓮𝓻𝓿𝓪𝓽𝓲𝓸𝓷 --</p>
            <p className='txt_sec51'>Book A Table Online</p>
            <form onSubmit={handleClick} >
            {/* <div>
              <input type='text'  placeholder='Your Name'  className='inp_sec5'/>
              <input type='email'  placeholder='Your Email' className='inp_sec51'/>
            </div> */}
            <div>
              <input type='date' className='inp_date_sec5' ref={date}/>
              <select className='dropdown_sec5'  ref={people}>
                <option disabled selected hidden>No of People</option>
                <option>People 1</option>
                <option>People 2</option>
                <option>People 3</option>
                <option>People 4</option>
                <option>People 5</option>
                <option>People 6</option>
              </select>
            </div>
            <div>
              <select className='dropdown_time_sec5'  ref={time}>
                <option disabled selected hidden>What time?</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
                <option>22:30</option>
                <option>23:00</option>
                <option>23:30</option>
                
              </select>
              
              <select className='dropdown_seat_sec5' ref={seat} >
                <option disabled selected hidden>Seating prefernce...</option>
                <option>Main Restaurant</option>
                <option>side by side-view point</option>
                <option>side by side-chef table</option>
              </select>
            </div>

            <input type='textarea ' className='textarea_sec5' placeholder='Special Request' ref={request} />
            <button className='butt_sec5' onClick={handleSubmit}>BOOK NOW</button>
            </form>
          </div>

      </div>
      <br /><br /> <br /> <br/>
      <Footer />

            
    </div>
  )
}

export default Table;