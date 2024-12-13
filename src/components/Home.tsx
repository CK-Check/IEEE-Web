import React from 'react';
import { useNavigate } from 'react-router-dom';
//Gradient text - #5899E2 to #FFFFFF
//#1e90ff to # 99BADD
//#4169e1 to #89CFF0
 
const Home = (props: { src: string }) => {
  const navigate = useNavigate()
  const src = props.src;
  return (
    <>
    <div className='main-bg min-h-screen text-white pl-10 flex-col '>

        <section className='flex justify-start items-center h-screen'>
         <div className='flex-col justify-start items-center xl:w-1/2'>
            <h1 className=' text-5xl md:text-8xl font-montserrat font-bold bg-gradient-to-tr from-[#5899E2] to-[#FFFFFF] bg-clip-text text-transparent text-nowrap'>IEEE VIIT</h1>
            <h2 className=' text-2xl md:text-6xl mt-1 font-light text-nowrap'>Student Branch</h2>
            <div className='flex mt-2'>
              <p className='font-montserrat px-1 cursor-default md:text-lg hover:border-b-2 ' onClick={()=>navigate('/about')}>About us</p>
              <img src='/right-arrow.png' height={25} width={40} className=' w-7 md:w-11 pl-2 hover:translate-x-1 ease-in duration-100' onClick={()=>navigate('/about')}></img>
            </div>
         </div>
         <div className='hidden xl:flex justify-center items-center w-3/4 h-full object-cover'>
            <img src='/electricalTempLogo.jpg' className='w-full h-full block gradient-mask-l-0'></img>
         </div>
        </section>

        <section className='mt-0 min-h-screen w-full md:mt-10'>
          <h1 className='text-2xl md:text-7xl font-icona mb-'> "Advancing Technology </h1>
          <div className='ml-2 w-24 bg-blue-500 h-1 md:{ml-7 mt-1 h-2}'></div>
          <h2 className=' text-2xl translate-x-8 md:translate-x-[330px] mt-1 md:mt-3  md:text-7xl font-icona'> For Humanity"</h2>
          <div className='text-lg md:text-2xl mt-10 md:mt-24 leading-2 ml-5 w-[52%] md:leading-9 font-montserrat '>
          <p>At IEEE Student Branch, we harness the potential of technology to create a vibrant community focused on electronics, electrical, and computer engineering.</p>
          </div>
          
        </section>


    </div>
    {/* <div className='relative'>
      <div className='absolute inset-0 place-self-center content-center'>
        <p className='font-montserrat font-black text-center text-white text-base md:text-5xl lg:text-6xl'>IEEE VIIT Student Branch</p>
      </div>
      <img src={src} alt='ieee-bg' />
    </div>
    <div className='container mt-20 md:mt-28 w-auto text-wrap mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      <p className='text-base md:text-4xl font-black text-sky-500'>Welcome to IEEE Student Branch</p>
    </div>
    <div className='container my-7 w-auto text-center text-xs md:text-sm mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      Empowering students through technology and innovation
    </div>
    <div className='flex justify-evenly mb-16 h-1 mx-auto w-44 bg-sky-500'/>
    <div className='container my-7 w-auto text-xs text-wrap md:text-sm mx-8 md:mx-28 lg:mx-54 flex justify-center'>
      At IEEE Student Branch, we harness the potential of technology to create a vibrant community focused on electronics, electrical, and computer engineering. Our dedicated team is passionate about fostering collaboration and innovation among students. We provide numerous opportunities for hands-on learning, networking, and professional development, ensuring that every member can explore their interests and talents in the tech field.
    </div>
    <div className='container my-4 w-auto text-xs text-wrap md:text-sm mx-8 md:mx-28 lg:mx-54 flex justify-center'>      
      Whether youre looking to enhance your skill, participate in exciting projects, or connect withlike-minded peers, IEEE Student Branch is your gateway to a world of possibilities. Join us in shaping the future of technology and engineering.
    </div>
    <div className='flex justify-evenly mb-4 h-0.5 mx-auto w-40 md:w-96 bg-gradient-to-r from-white via-slate-500 to-white'/>
    <div className="container my-4 w-auto text-xs text-wrap md:text-sm mx-8 md:mx-28 lg:mx-54 flex justify-center">
      Thank you for choosing Company LLC ("Company." "we""us,;" or "our'"). We are commited to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice with regard to your personal information, please contact us at privacy@company.com. The purpose of this privacy notice is to explain to you what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
    </div>
    <div className='container mt-20 md:mt-28 w-auto text-wrap mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      <p className='text-base md:text-4xl font-black text-sky-500'>Programs and activities we offer</p>
    </div>
    <div className='container w-auto text-wrap mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      <p className='text-base md:text-4xl font-black text-sky-500'>(EVENTS)</p>
    </div>
    <div className='container my-4 w-auto text-xs text-wrap text-center md:text-sm mx-8 md:mx-28 lg:mx-54 flex justify-center'>      
      From workshops to competitions, we work alongside you to create enriching experiences that align with your academics and professional goals. Discover a community where every initiative reflects your passion for technology.
    </div>
    <div className="container m-12 w-auto md:mt-20 text-xs md:grid md:grid-cols-2 md:gap-4 md:text-sm mx-8 md:mx-28 lg:mx-54">
      <div>
      <div className="container mt-4 w-auto h-56 mx-5 rounded-t-md bg-cover bg-center flex justify-center bg-[url('tech-events.jpg')]">
      </div>
      <div className="container mb-4 w-auto m-5 p-4 rounded-b-md shadow-md flex justify-center justify-items-center place-items-center">
        Our Technical Workshops are designed to provide hands-on experience in various areas of electronics and computer technologies. Wheather you're a beginner or an advanced student, our expert will guide you through essential skills and knowledge.
      </div>
      </div>
      <div>
      <div className="container mt-4 w-auto h-56 mx-5 rounded-t-md bg-cover bg-center flex justify-center bg-[url('hackthons.jpg')]">
      </div>
      <div className="container mb-4 w-auto m-5 p-4 rounded-b-md shadow-md flex justify-center justify-items-center place-items-center">
        Participate in our Hackathons, where you can collaborate with the fellow students to solve real-world problems. These foster creativity and innovation, allowing you to showcase your skills and learn from other in a competitive yet supportive environment.
      </div>
      </div>
      <div>
      <div className="container mt-4 w-auto h-56 mx-5 rounded-t-md bg-cover bg-center flex justify-center bg-[url('network-events.jpg')]">
      </div>
      <div className="container mb-4 w-auto m-5 p-4 rounded-b-md shadow-md flex justify-center justify-items-center place-items-center">
        Engage with our Networking Events, designed to connect students with industry professtionals. Gain insights into latest trends in technology and engineering and build relationship that can help you in future career.
      </div>
      </div>
      <div>
      <div className="container mt-4 w-auto h-56 mx-5 rounded-t-md bg-cover bg-center flex justify-center bg-[url('atmosphere.jpg')]">
      </div>
      <div className="container mb-4 w-auto m-5 p-4 text-center rounded-b-md shadow-md flex justify-center justify-items-center place-items-center">
        At our cafe everthing is done to help you feel like at home and at the same time give you the opportunity to do your job outside your house. The tidy tables are at your disposal. You may bring your own devices or borrow our ones. Our packs include Wi-Fi and assures you the fastest internet. To make the cafe even more complete, we have a library which includes e-books.
      </div>
      </div>
    </div>
    <div className='container mt-20 md:mt-28 w-auto text-wrap mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      <p className='text-base md:text-4xl font-black text-black'>Acheivements</p>
    </div>
    <div className="container mx-8 my-4 md:mx-28 lg:mx-54 w-auto text-sm h-3/6">
      <div className='container my-4 h-10 p-5 md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>1</div>
      <div className='container my-4 h-10 p-5 md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>2</div>
      <div className='container my-4 h-10 p-5 md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>3</div>
      <div className='container my-4 h-10 p-5 md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>4</div>
      <div className='container my-4 h-10 p-5 md:h-14 rounded-lg shadow-md hover:shadow-lg flex items-center'>5</div>
      <div className='container text-center my-4 h-10 md:h-14 rounded-lg shadow-md hover:shadow-lg flex justify-center items-center'>
        <a href='google.com'>Show More</a>
      </div>
    </div>
    <div className='container mt-20 md:mt-28 w-auto text-wrap mx-8 md:mx-12 lg:mx-54 flex justify-center'>
      <p className='text-base md:text-4xl font-black text-black'>Events</p>
    </div>
    <div className='container my-4 w-auto text-xs text-wrap text-center md:text-sm mx-8 md:mx-28 lg:mx-48 xl:mx-52 flex justify-center'>
      Mark your calendars and join us for a series of engaging events, workshops, and activities designed to expand your knowledge, hone your skills, and connect you with like-minded individuals
    </div>
    <div className='container mt-2 md:mt-16 w-auto h-96 text-wrap mx-8 md:mx-28 lg:mx-54 flex justify-center bg-slate-200'/>
    <div className='container mt-20 md:mt-28 w-auto mx-8 md:mx-12 lg:mx-54'>
      <div className='text-center text-3xl font-bold'>
        Welcome to the IEEE VIIT Student Branch
        <p className='text-xs text-slate-400 mt-5 mx-8 md:mx-28 xl:mx-52'>Discover a community of passionate students, dedicated to pushing the boundaries of innovation and making a positive impact on the world</p>
      </div>
      <div className='text-center text-3xl font-semibold mt-9'>
        Empowering the Next Generation
        <p className='text-xs text-slate-400 mt-5 mx-8 md:mx-28 xl:mx-52'>At the IEEE Student Branch, we believe in nurturing the next generation of engineering leaders. Through our diverse initiatives, we provide our members with hands-on learning opportunities, industry exposure, and the chance to make a tangible difference in their communities.</p>
      </div>
      <div className='flex justify-center'>
        <button className='m-6 top-16 md:top-40 bg-gradient-to-r from-sky-300 to-sky-500 text-white text-xs md:text-sm md:w-40 w-36 md:h-9 h-10 rounded-md'>Join Membership!!!</button>
      </div>
    </div> */}
    </>
  )
}

export default Home