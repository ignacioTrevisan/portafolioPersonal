"use client"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

const SegundoComponente = () => {
   gsap.registerPlugin(ScrollTrigger);
  const segundoContenedor = useRef<HTMLDivElement>(null)
  const tituloDos = useRef<HTMLHeadingElement>(null)
  useEffect(()=>{
    if (segundoContenedor && segundoContenedor.current && tituloDos && tituloDos.current){
       gsap.fromTo(tituloDos.current, {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: 'power3.out'
        },{
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
    }
  },[])


  return (
    <div className='h-full flex'>
      <h1 ref={tituloDos}>Experiencia</h1>
      
    </div>
  )
}

export default SegundoComponente
