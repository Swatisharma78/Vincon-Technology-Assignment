import React from 'react'
import {useState} from 'react';

const Slider = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isHovers, setIsHovers] = useState(false);
    const [isHoveres, setIsHoveres] = useState(false);
    const [isHov, setIsHov] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
};
const handleMouseOve = () => {
  setIsHover(true);
};
const handleMouseOu = () => {
  setIsHover(false);
};
const handleMouseMin = () => {
  setIsHovers(true);
};
const handleMouseMax = () => {
  setIsHovers(false);
};
const handleMouseData = () => {
  setIsHoveres(true);
};
const handleMouseItem = () => {
  setIsHoveres(false);
};
const handleMousePin = () => {
  setIsHov(true);
};
const handleMousePins = () => {
  setIsHov(false);
};
  return (
    <>
    {/* ************************************************************Navbar***************************************************** */}
   <body class="bg-blue-800 antialiased font-sans  shadow-lg shadow-blue-800/50 ...">
   <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <a class="text-black hover:text-orange md:hidden" href="#"> <i class="fa fa-2x fa-bars"></i> </a>
  </div><nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
     <a class="block text-white no-underline hover:underline py-2 text-grey-darkest hover:text-white md:border-none md:p-0" href="#">Products </a>
      </li>
      <li class="md:ml-4">
 <a class="border-t text-white block no-underline hover:underline py-2 text-grey-darkest hover:text-white md:border-none md:p-0" href="#">About</a>
      </li>
      <li class="md:ml-4">
        <a class="border-t text-white block no-underline hover:underline py-2 text-grey-darkest hover:text-white md:border-none md:p-0" href="#">Contact</a> </li> </ul>
  </nav>
</header>
</body>
{/* *************************************************************Products*************************************************************************** */}
    <div  class="h-400 gap-5 grid grid-cols-2 mt-5 md:grid-cols-5  justify-around">                                                 
       <div>
        <div class=" shadow-lg shadow-green-800/50 ..." onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img style={{height:"270px", width:"460px"}} src='https://media.istockphoto.com/id/641790052/photo/ayurveda-leaves-green-circular.jpg?s=612x612&w=0&k=20&c=OQalGJtfzWPano6xxTHEi1j2JY1wfxV0fOWz-iCRa44='/></div>
        <h1 class="bg-green-600 mt-5 text-white font-black ">AYURVEDA</h1>    
       <div > {isHovering && <h1 class="font-black text-green-600 text-9xl " >A</h1>}</div> 
      </div>
      <div>
        <div class=" shadow-lg shadow-red-800/50 ..."onMouseOver={handleMouseOve} onMouseOut={handleMouseOu}><img style={{height:"270px", width:"460px"}} src='https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
        <h1  class="bg-orange-500 mt-5 text-white font-black ">YOGA</h1>   
        {isHover && <h2 class="font-black text-9xl text-orange-500" >y</h2>}
      </div>
      <div>
        <div class=" shadow-lg shadow-blue-800/50 ..." onMouseOver={handleMouseMin} onMouseOut={handleMouseMax}><img  style={{height:"270px", width:"460px"}}  src='https://t3.ftcdn.net/jpg/01/76/04/40/240_F_176044024_0vkh5T39P0nlBmqws0wobGdXChOZzsRp.jpg'/></div>
        <h1  class="bg-blue-500 mt-5 text-white font-black  ">UNANI</h1> 
        {isHovers && <h2 class="font-black text-9xl text-blue-500 " >U</h2>}         
      </div>
      <div>
        <div class=" shadow-lg shadow-red-800/50 ..." onMouseOver={handleMouseData} onMouseOut={handleMouseItem}><img  style={{height:"270px", width:"460px"}}  src='https://media.istockphoto.com/id/1249500401/photo/indian-herbal-drink-for-against-coronavirus-it-use-for-prevention-immunization-and-treatment.jpg?s=612x612&w=0&k=20&c=QdpzOtPq6axwZzrO0h4tDVKPOZ8NPAVrNLyH8jhyLS0='/></div>
        <h1  class="bg-orange-500 mt-5 text-white font-black ">SIDDHA</h1> 
        {isHoveres && <h2 class="font-black text-9xl text-orange-500  " >S</h2>}     
      </div>
      <div>
        <div class=" shadow-lg shadow-green-800/50 ..." onMouseOver={handleMousePin} onMouseOut={handleMousePins}><img  style={{height:"270px", width:"460px"}} src='https://media.istockphoto.com/id/814351018/photo/bottles-of-homeopathic-globules-thuja-plantain-healthy-infusion-mortar-and-basket-of-herbs.jpg?s=612x612&w=0&k=20&c=lpqzIiWXgp4sZXV4mopzx4Inij1Kn3NmGEQRsdOFHnI='/></div>
        <h1  class="bg-green-600 mt-5  text-white font-black">HOMIEOPATHY</h1>  
        {isHov && <h2 class="font-black text-9xl text-green-600 " >H</h2>}
      </div>
    </div>
    </>
  )
}
export default Slider