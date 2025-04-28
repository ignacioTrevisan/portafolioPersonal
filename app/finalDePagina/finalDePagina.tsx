"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const ContactoComponente = () => {
  // Estado para controlar si las animaciones están listas
  const [animationsReady, setAnimationsReady] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  // Referencias para las animaciones
  const contactoContainer = useRef<HTMLDivElement | null>(null);
  const tituloRef = useRef<HTMLHeadingElement | null>(null);
  const subtituloRef = useRef<HTMLHeadingElement | null>(null);
  const redesRef = useRef<HTMLDivElement | null>(null);
  const botonRef = useRef<HTMLAnchorElement | null>(null);
  const iconosRefs = [
    useRef<HTMLAnchorElement | null>(null),
    useRef<HTMLAnchorElement | null>(null),
    useRef<HTMLAnchorElement | null>(null),
    useRef<HTMLAnchorElement | null>(null),
  ];

  // Primero, aseguramos que todos los elementos sean visibles
  useEffect(() => {
    // Inicializar todos los elementos con opacidad 1 por defecto
    if (tituloRef.current) tituloRef.current.style.opacity = "1";
    if (subtituloRef.current) subtituloRef.current.style.opacity = "1";
    if (redesRef.current) redesRef.current.style.opacity = "1";
    if (botonRef.current) botonRef.current.style.opacity = "1";
    iconosRefs.forEach((ref) => {
      if (ref.current) ref.current.style.opacity = "1";
    });

    // Marcar que está listo para animaciones
    setAnimationsReady(true);
  }, []);

  // Después, configuramos las animaciones
  useEffect(() => {
    // Solo ejecutar animaciones cuando estén listas
    if (!animationsReady) return;

    // Detectamos si estamos en móvil para ajustar las animaciones
    const isMobile = window.innerWidth < 768;
    const animationDuration = isMobile ? 0.7 : 1;
    const staggerTime = isMobile ? 0.15 : 0.2;

    // Crear un contexto para estas animaciones
    const ctx = gsap.context(() => {
      // Animación del título y subtítulo
      gsap.fromTo(
        [tituloRef.current, subtituloRef.current],
        {
          y: -40,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: animationDuration,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: contactoContainer.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación de las redes sociales
      gsap.fromTo(
        iconosRefs.map((ref) => ref.current),
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
          rotation: -10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: animationDuration,
          stagger: staggerTime,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: contactoContainer.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación del botón
      gsap.fromTo(
        botonRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: animationDuration,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contactoContainer.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Limpieza de animaciones cuando el componente se desmonta
    return () => {
      ctx.revert(); // Limpia todas las animaciones creadas en este contexto
    };
  }, [animationsReady]);

  // Datos de redes sociales
  const redes = [
    {
      id: 1,
      nombre: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:nachotizii988@gmail.com",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      id: 2,
      nombre: "LinkedIn",
      icon: <FaLinkedinIn className="text-2xl" />,
      url: "https://www.linkedin.com/in/ignacio-trevisan-799992240/",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      id: 3,
      nombre: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/nacho.trevisan/",
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
    },
    {
      id: 4,
      nombre: "WhatsApp",
      icon: <FaWhatsapp className="text-2xl" />,
      url: "https://wa.me/543455404390",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
  ];

  return (
    <div
      ref={contactoContainer}
      className="relative w-full min-h-[80vh] flex flex-col bg-[#6B107B] items-center justify-center px-4 md:px-10 py-20 z-10"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="w-full max-w-4xl text-center">
        <h1
          ref={tituloRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
          style={{ opacity: 1 }}
        >
          ¿Tienes algún proyecto en mente?
        </h1>

        <h2
          ref={subtituloRef}
          className="text-xl md:text-2xl lg:text-3xl mb-10 md:mb-16"
          style={{ opacity: 1 }}
        >
          ¡Contáctame y trabajemos juntos!
        </h2>

        {/* Redes sociales */}
        <div
          ref={redesRef}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16"
          style={{ opacity: 1 }}
        >
          {redes.map((red, index) => (
            <a
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={iconosRefs[index]}
              className={`${red.color} ${red.hoverColor} h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group`}
              style={{ opacity: 1 }}
              title={red.nombre}
            >
              <div className="group-hover:animate-pulse">{red.icon}</div>
              <span className="sr-only">{red.nombre}</span>
            </a>
          ))}
        </div>

        {/* Botón de contacto */}
        <a
          href="mailto:nachotizii988@gmail.com"
          ref={botonRef}
          className="inline-flex items-center justify-center gap-3 py-4 px-8 md:px-10 text-lg md:text-xl bg-white text-[#6B107B] font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-opacity-90"
          style={{ opacity: 1 }}
        >
          Envíame un mensaje
          <FaArrowRight className="text-lg" />
        </a>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-sm text-white opacity-70 text-center mt-12">
        &copy; {new Date().getFullYear()} Ignacio Trevisan | Desarrollador Full
        Stack
      </div>
    </div>
  );
};

export default ContactoComponente;
