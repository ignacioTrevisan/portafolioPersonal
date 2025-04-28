"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// Importamos los iconos
import { FaFileAlt, FaGithub, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

const SegundoComponente = () => {
  // Estado para controlar si las animaciones están listas
  const [animationsReady, setAnimationsReady] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  // Referencias para las animaciones
  const segundoContenedor = useRef<HTMLDivElement | null>(null);
  const tituloDos = useRef<HTMLHeadingElement>(null);
  const textoRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const botonesRef = useRef<HTMLDivElement>(null);
  const boton1Ref = useRef<HTMLAnchorElement>(null);
  const boton2Ref = useRef<HTMLAnchorElement>(null);
  const boton3Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Inicializar todos los elementos con opacidad 1 por defecto
    if (tituloDos.current) tituloDos.current.style.opacity = "1";
    if (textoRef.current) textoRef.current.style.opacity = "1";
    if (imageRef.current) imageRef.current.style.opacity = "1";
    if (boton1Ref.current) boton1Ref.current.style.opacity = "1";
    if (boton2Ref.current) boton2Ref.current.style.opacity = "1";
    if (boton3Ref.current) boton3Ref.current.style.opacity = "1";

    // Marcar que está listo para animaciones
    setAnimationsReady(true);
  }, []);

  useEffect(() => {
    // Solo ejecutar animaciones cuando estén listas
    if (!animationsReady) return;

    // Detectamos si estamos en móvil para ajustar las animaciones
    const isMobile = window.innerWidth < 768;
    const animationDuration = isMobile ? 0.7 : 1;
    const staggerTime = isMobile ? 0.1 : 0.2;

    // Crear un contexto para estas animaciones
    const ctx = gsap.context(() => {
      // Animación del título
      if (tituloDos.current) {
        gsap.fromTo(
          tituloDos.current,
          {
            y: -50,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: animationDuration,
            ease: "elastic.out(1, 0.5)", // Efecto de gotita
            scrollTrigger: {
              trigger: segundoContenedor.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animación del texto
      if (textoRef.current) {
        gsap.fromTo(
          textoRef.current,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: animationDuration,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: segundoContenedor.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animación de la imagen
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            scale: 0,
            opacity: 0,
            rotation: -10,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: animationDuration * 1.2,
            delay: 0.3,
            ease: "elastic.out(1, 0.5)", // Efecto de gotita más pronunciado
            scrollTrigger: {
              trigger: segundoContenedor.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animación de los botones con stagger (efecto secuencial)
      if (boton1Ref.current && boton2Ref.current && boton3Ref.current) {
        gsap.fromTo(
          [boton1Ref.current, boton2Ref.current, boton3Ref.current],
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: animationDuration,
            stagger: staggerTime,
            delay: 0.5,
            ease: "back.out(1.7)", // Efecto rebote tipo gotita
            scrollTrigger: {
              trigger: segundoContenedor.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Limpieza de animaciones cuando el componente se desmonta
    return () => {
      ctx.revert(); // Limpia todas las animaciones creadas en este contexto
    };
  }, [animationsReady]); // Solo se ejecuta cuando animationsReady cambia a true

  return (
    <div
      ref={segundoContenedor}
      className="relative w-full min-h-screen flex flex-col bg-[#6B107B] items-center px-4 md:px-10 py-16 z-10"
      style={{ position: "relative", zIndex: 10 }} // Asegurarnos que esté por encima del primer componente
    >
      <h1
        ref={tituloDos}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12"
        style={{ opacity: 1 }} // Forzar visibilidad inicial
      >
        Sobre mí
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Contenido y botones */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <h3
            ref={textoRef}
            className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8"
            style={{ opacity: 1 }} // Forzar visibilidad inicial
          >
            Me dicen Nacho, tengo 23 años y viví la mayor parte de mi vida en
            Buenos Aires, aunque ahora vivo en un pueblo de Entre Ríos,
            Villaguay. Empecé conociendo la lógica de la programación desde
            chico, jugando con las netbooks que daba el gobierno en Argentina.
            Gracias a estar probando con estos juegos (Rebeca, por ejemplo) me
            di cuenta que lo que me gustaba era la tecnología, más
            específicamente donde pueda crear cosas. Me la pasaba intentando
            crear juegos. Cuando me mudé para Entre Ríos aproveché a anotarme en
            una escuela técnica, la cual tenía la posibilidad de elegir la
            orientación &rsquo;programación&rsquo;. Esta decisión hizo que me
            adentre más en el rubro y actualmente estoy graduado como técnico
            superior en desarrollo de software, en el Instituto de Santo
            Domingo. Y si bien tengo el título y ahí aprendí mucho, también
            tengo otra gran parte de conocimiento como autodidacta, y cosas
            aprendidas sobre la marcha en el trabajo.
          </h3>

          <div
            ref={botonesRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 md:mt-6"
          >
            <Link
              href={
                "https://drive.google.com/file/d/1bUfDrykPlGRePga_NWsiCaKHK0G69tjH/view?usp=sharing"
              }
              ref={boton1Ref}
              target="_blank"
              className="flex items-center justify-center gap-2 p-3 md:p-4 border-2 border-white rounded-xl w-full sm:w-1/3 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#6B107B] hover:scale-105 hover:shadow-lg"
              style={{ opacity: 1 }} // Forzar visibilidad inicial
            >
              <FaFileAlt className="text-xl" />
              <span>Curriculum</span>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1B7OgYun4A-W_oAfcRNZw0puoBWxcRUpy/view?usp=sharing"
              }
              target="_blank"
              ref={boton2Ref}
              className="flex items-center justify-center gap-2 p-3 md:p-4 border-2 border-white rounded-xl w-full sm:w-1/3 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#6B107B] hover:scale-105 hover:shadow-lg"
              style={{ opacity: 1 }} // Forzar visibilidad inicial
            >
              <FaGraduationCap className="text-xl" />
              <span>Título</span>
            </Link>
            <Link
              href={"https://github.com/ignacioTrevisan"}
              ref={boton3Ref}
              target="_blank"
              className="flex items-center justify-center gap-2 p-3 md:p-4 border-2 border-white rounded-xl w-full sm:w-1/3 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#6B107B] hover:scale-105 hover:shadow-lg"
              style={{ opacity: 1 }} // Forzar visibilidad inicial
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div
          ref={imageRef}
          className="w-full lg:w-2/5 flex justify-center items-center mt-8 lg:mt-0"
          style={{ opacity: 1 }} // Forzar visibilidad inicial
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full border-4 border-white shadow-xl">
            <img
              src="/imagen.jpg"
              alt="Imagen de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegundoComponente;
