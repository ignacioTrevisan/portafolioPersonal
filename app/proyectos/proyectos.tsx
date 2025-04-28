"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { DiJava, DiMysql } from "react-icons/di";

const ProyectosComponente = () => {
  // Estado para controlar si las animaciones están listas
  const [animationsReady, setAnimationsReady] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  // Referencias para las animaciones
  const proyectosContainer = useRef<HTMLDivElement | null>(null);
  const tituloRef = useRef<HTMLHeadingElement | null>(null);
  const proyecto1Ref = useRef<HTMLDivElement | null>(null);
  const proyecto2Ref = useRef<HTMLDivElement | null>(null);
  const proyecto3Ref = useRef<HTMLDivElement | null>(null);

  // Datos de proyectos
  const proyectos = [
    {
      id: 1,
      titulo: "Organica Distribuidora",
      descripcion:
        "Web app para una distribuidora de productos orgánicos de mi provincia. Permite al dueño gestionar productos, ofertas y cualquier aspecto visual de la pagina. Esta hecha completamente con Nextjs para garantizar un buen rendimiento y optimización SEO.",
      imagen:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1745602553/WhatsApp_Image_2025-04-12_at_12.36.50_PM_meddie.jpg",
      tecnologias: [
        { nombre: "React", icon: <FaReact /> },
        { nombre: "Next.js", icon: <SiNextdotjs /> },
        { nombre: "TypeScript", icon: <SiTypescript /> },
        { nombre: "TailwindCSS", icon: <SiTailwindcss /> },
        { nombre: "Mysql", icon: <DiMysql /> },
      ],
      demo: "https://www.distribuidoraorganica.com.ar/",
      repo: "https://github.com/username/portfolio",
    },
    {
      id: 2,
      titulo: "Aplicación de Rastreo",
      descripcion:
        "Aplicación completa para empresa de reparto que permite rastrear vendedores en tiempo real. La web del admin Implementada con stack MERN y TypeScript. y la aplicación móvil que es la encargada de enviar la ubicación esta hecha con Java. Se utilizo tecnologia MQT conectada con Sockets asegurando la conexión en tiempo real.",
      imagen:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1745603136/Sin_t%C3%ADtulo_sfwl43.png",
      tecnologias: [
        { nombre: "React", icon: <FaReact /> },
        { nombre: "Node.js", icon: <FaNodeJs /> },
        { nombre: "TypeScript", icon: <SiTypescript /> },
        { nombre: "MongoDB", icon: <SiMongodb /> },
        { nombre: "Java", icon: <DiJava /> },
      ],
      demo: "https://www.youtube.com/watch?v=fcuxkP_P4gg",
      repo: "https://github.com/username/tracking-app",
    },
    {
      id: 3,
      titulo: "Viacertatur",
      descripcion:
        "Web app para administrar ofertas de viajes con modificación en tiempo real. Permite al dueño actualizar sus promociones y distribución de ella en distintas partes de la pagina, con casi total libertad.",
      imagen:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1745603288/Sin_t%C3%ADtulo_tcypol.png",
      tecnologias: [
        { nombre: "Next.js", icon: <SiNextdotjs /> },
        { nombre: "Node.js", icon: <FaNodeJs /> },
        { nombre: "TailwindCSS", icon: <SiTailwindcss /> },
        { nombre: "TypeScript", icon: <SiTypescript /> },
        { nombre: "MongoDB", icon: <SiMongodb /> },
      ],
      demo: "https://www.viacertatur.com/",
      repo: "https://github.com/username/offers-manager",
    },
  ];

  // Primero, aseguramos que todos los elementos sean visibles
  useEffect(() => {
    // Inicializar todos los elementos con opacidad 1 por defecto
    if (tituloRef.current) tituloRef.current.style.opacity = "1";
    if (proyecto1Ref.current) proyecto1Ref.current.style.opacity = "1";
    if (proyecto2Ref.current) proyecto2Ref.current.style.opacity = "1";
    if (proyecto3Ref.current) proyecto3Ref.current.style.opacity = "1";

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
    const staggerTime = isMobile ? 0.2 : 0.3;

    // Crear un contexto para estas animaciones
    const ctx = gsap.context(() => {
      // Animación del título
      if (tituloRef.current) {
        gsap.fromTo(
          tituloRef.current,
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
              trigger: proyectosContainer.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animación de las tarjetas de proyectos con stagger
      if (
        proyecto1Ref.current &&
        proyecto2Ref.current &&
        proyecto3Ref.current
      ) {
        gsap.fromTo(
          [proyecto1Ref.current, proyecto2Ref.current, proyecto3Ref.current],
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: animationDuration * 1.2,
            stagger: staggerTime,
            ease: "back.out(1.7)", // Efecto rebote tipo gotita
            scrollTrigger: {
              trigger: proyectosContainer.current,
              start: "top 60%",
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
  }, [animationsReady]);

  // Referencias para cada proyecto
  const proyectoRefs = [proyecto1Ref, proyecto2Ref, proyecto3Ref];

  return (
    <div
      ref={proyectosContainer}
      className="relative w-full min-h-screen flex flex-col bg-[#6B107B] items-center px-4 md:px-10 py-16 z-10"
      style={{ position: "relative", zIndex: 10 }} // Asegurarnos que esté por encima del primer componente
    >
      <h1
        ref={tituloRef}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16"
        style={{ opacity: 1 }} // Forzar visibilidad inicial
      >
        Mis Proyectos más recientes
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {proyectos.map((proyecto, index) => (
          <div
            key={proyecto.id}
            ref={proyectoRefs[index]}
            className="bg-[#7c2489] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
            style={{ opacity: 1 }} // Forzar visibilidad inicial
          >
            {/* Imagen del proyecto */}
            <div className="h-52 overflow-hidden">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  // Placeholder en caso de que la imagen no exista
                  e.currentTarget.src = `https://via.placeholder.com/600x300/8e44ad/ffffff?text=${proyecto.titulo}`;
                }}
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {proyecto.titulo}
              </h3>
              <p className="text-sm md:text-base flex-grow mb-4">
                {proyecto.descripcion}
              </p>

              {/* Tecnologías */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Tecnologías:</h4>
                <div className="flex flex-wrap gap-3">
                  {proyecto.tecnologias.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-[#5d1b6a] px-3 py-1 rounded-full text-xs"
                      title={tech.nombre}
                    >
                      <span className="text-base">{tech.icon}</span>
                      <span>{tech.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2 md:p-3 border-2 border-white rounded-xl flex-1 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#6B107B] hover:scale-105 hover:shadow-lg text-sm md:text-base"
                >
                  <FaExternalLinkAlt />
                  <span>Ver</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosComponente;
