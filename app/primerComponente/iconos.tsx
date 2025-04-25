import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaComputerMouse } from 'react-icons/fa6'
import { IoCodeOutline } from 'react-icons/io5'

interface Props {
  box1Ref: any;
  box2Ref: any;
  box3Ref: any;
}

const Iconos = ({box1Ref, box2Ref, box3Ref}: Props) => {
  // State to track screen size
  const [iconSize, setIconSize] = useState(24);
  
  useEffect(() => {
    const handleResize = () => {
      // Adjust icon size based on screen width
      if (window.innerWidth < 640) {
        setIconSize(16);
      } else if (window.innerWidth < 1024) {
        setIconSize(20);
      } else {
        setIconSize(24);
      }
    };
    
    // Set on initial load
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
   
  useEffect(() => {
    if (box1Ref.current && box2Ref.current && box3Ref.current) {
      gsap.from([box1Ref.current, box2Ref.current, box3Ref.current], {
        y: -20,
        x: 40,
        rotate: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Añade 0.2 segundos de retraso entre cada animación
        ease: "power3.out"
      });
    }
  }, []); 
  
  return (
    <div className='flex gap-2 sm:gap-3 z-30'>
      <div className="p-1 sm:p-2 rounded-sm border" ref={box1Ref}
        style={{background:'rgba(255,255,255,0.3)', backdropFilter:'blur(10px)'}}
      >
        <IoCodeOutline size={iconSize} />
      </div>
      <div className="p-1 sm:p-2 rounded-sm border" ref={box2Ref}
        style={{background:'rgba(255,255,255,0.3)', backdropFilter:'blur(10px)'}}
      >
        <FaComputerMouse size={iconSize} />
      </div>
      <div className="p-1 sm:p-2 rounded-sm border" ref={box3Ref}
        style={{background:'rgba(255,255,255,0.3)', backdropFilter:'blur(10px)'}}
      >
        <FaMobileAlt size={iconSize} />
      </div>
    </div>
  )
}

export default Iconos