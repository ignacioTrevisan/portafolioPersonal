"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Titulo from "./titulo";
import Iconos from "./iconos";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Presentacion from "./presentacion";
// Importamos los custom hooks
import {
  useMousePosition,
  useScrollPosition,
  useDeviceDetect,
} from "../hook/useWindowSize";

const PrimerComponente = () => {
  // Estado para controlar la visibilidad inicial
  const [isLoaded, setIsLoaded] = useState(false);

  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  // Estos ref son del archivo titulo
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const titleRef4 = useRef<HTMLHeadingElement>(null);

  // Estos ref son de el archivo Presentacion

  const box1Ref2 = useRef<HTMLDivElement>(null);
  const box2Ref2 = useRef<HTMLDivElement>(null);
  const recuadro1ref = useRef<HTMLDivElement>(null);
  const recuadro2ref = useRef<HTMLDivElement>(null);
  const recuadro3ref = useRef<HTMLDivElement>(null);
  const recuadro4ref = useRef<HTMLDivElement>(null);
  const recuadro5ref = useRef<HTMLDivElement>(null);
  const recuadro6ref = useRef<HTMLDivElement>(null);
  const recuadro7ref = useRef<HTMLDivElement>(null);

  const primerTitulo = useRef<HTMLHeadingElement>(null);
  const segundoTitulo = useRef<HTMLHeadingElement>(null);
  const tercerTitulo = useRef<HTMLHeadingElement>(null);
  const cuartoTitulo = useRef<HTMLHeadingElement>(null);
  const tituloDos = useRef<HTMLHeadingElement>(null);

  const primerExperiencia = useRef<HTMLDivElement>(null);
  const segundaExperiencia = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // Usamos los custom hooks en lugar de las funciones internas
  const scrollPosition = useScrollPosition();
  const { x, y } = useMousePosition();
  const { isMobile, isTablet } = useDeviceDetect();

  const nombre = useRef(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const contenedor = useRef<HTMLDivElement>(null);

  // Variable para controlar la opacidad del fondo y cursor
  const backgroundOpacityRef = useRef(1);

  // Effect para el mouse y background - ahora condicionado por isLoaded
  useEffect(() => {
    if (!isLoaded) return;

    if (backgroundRef.current && contenedor.current) {
      const width = window.innerWidth;

      const hue = Math.floor((x / width) * 360);

      // Ajuste del gradiente según el dispositivo
      const gradientSize = isMobile ? "300px" : isTablet ? "500px" : "700px";

      // Aplicamos la opacidad usando la variable de referencia
      const currentOpacity = backgroundOpacityRef.current;

      backgroundRef.current.style.background = `radial-gradient(
          circle ${gradientSize} at ${x}px ${y}px,
          hsla(${hue}, 0%, 100%, ${0.4 * currentOpacity}),
          hsla(${hue + 60}, 0%, 100%, ${0.1 * currentOpacity})
        )`;
    }

    // Solo aplicamos efectos de cursor en dispositivos no móviles
    if (!isMobile && cursorBorderRef.current && cursorRef.current) {
      // Aplicamos la opacidad también al cursor
      const currentOpacity = backgroundOpacityRef.current;

      gsap.to([cursorBorderRef.current, cursorRef.current], {
        duration: (index) => (index === 0 ? 1 : 0),
        left: (index) => (index === 0 ? x : x + 8),
        top: (index) => (index === 0 ? y : y + 10),
        opacity: (index) => (index === 0 ? currentOpacity : currentOpacity),
        ease: "power3.out",
      });

      gsap.fromTo(
        cursorBorderRef.current,
        {
          duration: 1,
          scale: 1,
          opacity: currentOpacity,
          ease: "power3.out",
        },
        {
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [x, y, scrollPosition, isMobile, isTablet, isLoaded]);

  // Effect para asegurar que el DOM está cargado antes de mostrar los elementos
  useEffect(() => {
    // Establecemos un pequeño timeout para asegurar que el DOM está listo
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // 300ms debería ser suficiente para que el DOM esté completamente cargado

    return () => clearTimeout(loadTimer);
  }, []);

  // Este effect solo se ejecuta una vez al montar el componente y cuando isLoaded cambia a true
  useEffect(() => {
    if (!isLoaded) return; // No ejecutar animaciones hasta que isLoaded sea true

    // Guardamos todas las instancias de ScrollTrigger para limpiarlas después
    const scrollTriggers: (globalThis.ScrollTrigger | undefined)[] = [];

    // Configuración de animaciones basada en el tamaño de pantalla
    const animationDuration = isMobile ? 0.7 : 1;
    const staggerTime = isMobile ? 0.1 : 0.2;
    const duration = isMobile ? 0.7 : 1;
    const stagger = isMobile ? 0.1 : 0.2;

    if (nombre.current) {
      gsap.from(nombre.current, {
        y: 20,
        opacity: 0,
        duration,
        delay: 0.6,
        ease: "power3.out",
      });
    }

    // Nombre
    const nombreAnim = gsap.fromTo(
      nombre.current,
      {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
      },
      {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.5,
        scrollTrigger: {
          trigger: contenedor.current,
          start: "top top",
          end: "10% top",
          scrub: true,
          toggleActions: "restart none none reverse",
        },
      }
    );
    scrollTriggers.push(nombreAnim.scrollTrigger);

    // Iconos
    const iconosAnim = gsap.fromTo(
      [box1Ref.current, box2Ref.current, box3Ref.current],
      {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
      },
      {
        y: -20,
        x: isMobile ? -20 : -40,
        rotate: -40,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contenedor.current,
          start: "top top",
          end: "10% top",
          scrub: true,
          toggleActions: "restart none none reverse",
        },
      }
    );
    scrollTriggers.push(iconosAnim.scrollTrigger);

    // Títulos
    const titulosAnim = gsap.fromTo(
      [
        titleRef1.current,
        titleRef2.current,
        titleRef3.current,
        titleRef4.current,
      ],
      {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
      },
      {
        x: isMobile ? -50 : -100,
        y: -20,
        rotate: 40,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contenedor.current,
          start: "top top",
          end: "10% top",
          scrub: true,
          toggleActions: "restart none none reverse",
        },
      }
    );
    scrollTriggers.push(titulosAnim.scrollTrigger);

    // Cursor
    if (!isMobile && cursorBorderRef.current) {
      const cursorAnim = gsap.fromTo(
        cursorBorderRef.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration,
          scrollTrigger: {
            trigger: contenedor.current,
            start: "top top",
            end: "10% top",
            scrub: true,
            toggleActions: "restart none none reverse",
          },
        }
      );
      scrollTriggers.push(cursorAnim.scrollTrigger);
    }

    // NUEVO: Efecto de desvanecimiento del fondo y cursor mucho antes del final
    // para evitar ver el borde de terminación
    const backgroundFadeEffect = ScrollTrigger.create({
      trigger: contenedor.current,
      start: "70% top", // Comenzamos mucho antes, al 70% del contenedor
      end: "85% top", // Terminamos al 85% del contenedor para que esté completamente desvanecido antes del final
      scrub: true,
      onUpdate: (self) => {
        // Actualizamos la opacidad en función del progreso del scroll
        backgroundOpacityRef.current = 1 - self.progress;
      },
    });
    scrollTriggers.push(backgroundFadeEffect);

    // SOLUCIÓN MEJORADA PARA recuadro5ref, recuadro6ref, recuadro7ref
    // Usamos la opción scrub con ScrollTrigger para que la opacidad cambie gradualmente según el scroll

    // Primera fila de iconos - visible entre 30% y 55%
    gsap.fromTo(
      recuadro5ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: (_i, target) => {
          // Creamos dos ScrollTriggers, uno para aparecer y otro para desaparecer
          ScrollTrigger.create({
            trigger: contenedor.current,
            start: "20% top",
            end: "35% top",
            scrub: true,
            onUpdate: (self) => {
              // Aparece gradualmente
              target.style.opacity = self.progress;
              target.style.transform = `translateY(${
                50 * (1 - self.progress)
              }px)`;
            },
          });

          const disappearTrigger = ScrollTrigger.create({
            trigger: contenedor.current,
            start: "55% top",
            end: "60% top",
            scrub: true,
            onUpdate: (self) => {
              // Desaparece gradualmente
              target.style.transform = `translateY(-${50 * self.progress}px)`;
              target.style.opacity = 1 - self.progress;
            },
          });

          scrollTriggers.push(disappearTrigger);
          return 0; // El valor inicial es 0, las actualizaciones se manejan con onUpdate
        },
        duration: 0, // No necesitamos duración ya que controlamos todo con scrub
      }
    );

    // Segunda fila de iconos - visible entre 35% y 57%
    gsap.fromTo(
      recuadro6ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: (_i, target) => {
          ScrollTrigger.create({
            trigger: contenedor.current,
            start: "25% top",
            end: "40% top",
            scrub: true,
            onUpdate: (self) => {
              target.style.opacity = self.progress;
              target.style.transform = `translateY(${
                50 * (1 - self.progress)
              }px)`;
            },
          });

          const disappearTrigger = ScrollTrigger.create({
            trigger: contenedor.current,
            start: "57% top",
            end: "62% top",
            scrub: true,
            onUpdate: (self) => {
              target.style.transform = `translateY(-${50 * self.progress}px)`;
              target.style.opacity = 1 - self.progress;
            },
          });

          scrollTriggers.push(disappearTrigger);
          return 0;
        },
        duration: 0,
      }
    );

    // Tercera fila de iconos - visible entre 40% y 59%
    gsap.fromTo(
      recuadro7ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: (_i, target) => {
          ScrollTrigger.create({
            trigger: contenedor.current,
            start: "30% top",
            end: "45% top",
            scrub: true,
            onUpdate: (self) => {
              target.style.opacity = self.progress;
              target.style.transform = `translateY(-${50 * self.progress}px)`;
              target.style.transform = `translateY(${
                50 * (1 - self.progress)
              }px)`;
            },
          });

          const disappearTrigger = ScrollTrigger.create({
            trigger: contenedor.current,
            start: "59% top",
            end: "64% top",
            scrub: true,
            onUpdate: (self) => {
              target.style.opacity = 1 - self.progress;
            },
          });

          scrollTriggers.push(disappearTrigger);
          return 0;
        },
        duration: 0,
      }
    );

    // Animación para el box1Ref2
    const box1Anim = gsap.fromTo(
      box1Ref2.current,
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: isMobile ? -50 : -100, // Ajustamos para móviles
        duration: animationDuration,
        scrollTrigger: {
          trigger: contenedor.current,
          start: "25% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(box1Anim.scrollTrigger);

    // Asegurarnos de que box2Ref2 tenga una animación si existe
    if (box2Ref2 && box2Ref2.current) {
      const box2Anim = gsap.fromTo(
        box2Ref2.current,
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: isMobile ? -50 : -100,
          duration: animationDuration,
          scrollTrigger: {
            trigger: contenedor.current,
            start: "25% bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
      scrollTriggers.push(box2Anim.scrollTrigger);
    }

    // Animaciones para títulos - más eficientes y adaptadas a móviles
    const titleAnimations = [
      {
        ref: primerTitulo.current,
        startPosition: isMobile ? "55%" : "60%",
        appearPosition: isMobile ? "23%" : "27%",
      },
      {
        ref: segundoTitulo.current,
        startPosition: isMobile ? "57%" : "62%",
        appearPosition: isMobile ? "25%" : "29%",
      },
      {
        ref: tercerTitulo.current,
        startPosition: isMobile ? "59%" : "64%",
        appearPosition: isMobile ? "27%" : "31%",
      },
      {
        ref: cuartoTitulo.current,
        startPosition: isMobile ? "61%" : "66%",
        appearPosition: isMobile ? "29%" : "33%",
      },
    ];

    titleAnimations.forEach(({ ref, startPosition, appearPosition }) => {
      // Fade out animation
      const fadeOutAnim = gsap.fromTo(
        ref,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: isMobile ? -50 : -100, // Ajustamos para móviles
          duration: animationDuration,
          scrollTrigger: {
            trigger: contenedor.current,
            start: `${startPosition} bottom`,
            toggleActions: "play none none reverse", // Changed to only play once and reverse
          },
        }
      );
      scrollTriggers.push(fadeOutAnim.scrollTrigger);

      const experienciaOut = gsap.fromTo(
        [
          tituloDos.current,
          primerExperiencia.current,
          segundaExperiencia.current,
        ],
        {
          opacity: 1,
          x: 0,
        },
        {
          opacity: 0,
          duration: animationDuration,
          delay: isMobile ? 0.5 : 1,
          scrollTrigger: {
            trigger: contenedor.current,
            start: isMobile ? "92% bottom" : "96% bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
      scrollTriggers.push(experienciaOut.scrollTrigger);

      // Fade in animation
      const fadeInAnim = gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: isMobile ? 50 : 100, // Ajustamos para móviles
        },
        {
          opacity: 1,
          y: 0,
          duration: animationDuration,
          stagger: staggerTime,
          scrollTrigger: {
            trigger: contenedor.current,
            start: `${appearPosition} bottom`,
            toggleActions: "play none none reverse", // Changed to only play once and reverse
          },
        }
      );
      scrollTriggers.push(fadeInAnim.scrollTrigger);
    });

    // Recuadros fade out - ajustados para móviles
    const recuadrosFadeOut = gsap.fromTo(
      [
        recuadro1ref.current,
        recuadro2ref.current,
        recuadro3ref.current,
        recuadro4ref.current,
      ],
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: isMobile ? -50 : -100,
        duration: animationDuration,
        scrollTrigger: {
          trigger: contenedor.current,
          start: isMobile ? "66% bottom" : "70% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(recuadrosFadeOut.scrollTrigger);

    // Recuadros 1-4 fade in - ajustados para móviles
    const recuadrosFadeIn = gsap.fromTo(
      [
        recuadro1ref.current,
        recuadro2ref.current,
        recuadro3ref.current,
        recuadro4ref.current,
      ],
      {
        opacity: 0,
        y: isMobile ? 50 : 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        stagger: staggerTime,
        scrollTrigger: {
          trigger: contenedor.current,
          start: isMobile ? "31% bottom" : "35% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(recuadrosFadeIn.scrollTrigger);

    // ENTRADA DE LA SECCION EXPERIENCIAS - ajustada para móviles
    const tituloExp = gsap.fromTo(
      tituloDos.current,
      {
        opacity: 0,
        y: isMobile ? 50 : 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        delay: isMobile ? 0.5 : 1,
        scrollTrigger: {
          trigger: contenedor.current,
          start: isMobile ? "73% bottom" : "77% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(tituloExp.scrollTrigger);

    // Experiencias - adaptadas para móviles
    const primerExpFadeIn = gsap.fromTo(
      primerExperiencia.current,
      {
        opacity: 0,
        x: isMobile ? -50 : -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: animationDuration,
        delay: isMobile ? 0.5 : 1,
        scrollTrigger: {
          trigger: contenedor.current,
          start: isMobile ? "74% bottom" : "78% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(primerExpFadeIn.scrollTrigger);

    const segundaExp = gsap.fromTo(
      segundaExperiencia.current,
      {
        opacity: 0,
        x: isMobile ? 50 : 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: animationDuration,
        delay: isMobile ? 0.5 : 1,
        scrollTrigger: {
          trigger: contenedor.current,
          start: isMobile ? "75% bottom" : "79% bottom",
          toggleActions: "play none none reverse", // Changed to only play once and reverse
        },
      }
    );
    scrollTriggers.push(segundaExp.scrollTrigger);

    // Limpieza de las animaciones cuando el componente se desmonta
    return () => {
      // Limpiar todas las instancias de ScrollTrigger
      scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill();
      });

      // Limpiar cualquier animación GSAP en curso
      gsap.killTweensOf([
        nombre.current,
        box1Ref.current,
        box2Ref.current,
        box3Ref.current,
        titleRef1.current,
        titleRef2.current,
        titleRef3.current,
        titleRef4.current,
        box1Ref2.current,
        box2Ref2.current,
        recuadro1ref.current,
        recuadro2ref.current,
        recuadro3ref.current,
        recuadro4ref.current,
        recuadro5ref.current,
        recuadro6ref.current,
        recuadro7ref.current,
        primerTitulo.current,
        segundoTitulo.current,
        tercerTitulo.current,
        cuartoTitulo.current,
        tituloDos.current,
        primerExperiencia.current,
        segundaExperiencia.current,
        cursorRef.current,
        cursorBorderRef.current,
      ]);

      // También podemos limpiar todos los ScrollTriggers de este contexto
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isMobile, isTablet, isLoaded]); // Añadimos isLoaded como dependencia

  return (
    <div className="h-[750vh] bg-[#6B107B] w-full" ref={contenedor}>
      {/* Aplicamos una clase de visibilidad condicionada por isLoaded */}
      <div
        className={`w-full flex flex-col justify-center items-center h-[100vh] fixed top-0 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        ref={backgroundRef}
        style={{ cursor: isMobile ? "default" : "none" }}
      >
        {/* Custom cursor solo para dispositivos no móviles */}
        {!isMobile && isLoaded && (
          <>
            <div
              ref={cursorRef}
              className="fixed rounded-full z-50 w-[20px] h-[20px]"
              style={{
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            ></div>

            <div
              ref={cursorBorderRef}
              className="fixed rounded-full z-40 pointer-events-none"
              style={{
                border: "2px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 15px rgba(255,255,255,0.3)",
                transform: "translate(-50%, -50%)",
                width: "50px",
                height: "50px",
              }}
            ></div>
          </>
        )}

        <Iconos box1Ref={box1Ref} box2Ref={box2Ref} box3Ref={box3Ref} />
        <Titulo
          titleRef1={titleRef1}
          titleRef2={titleRef2}
          titleRef3={titleRef3}
          titleRef4={titleRef4}
        />
        <h1
          className="text-xs sm:text-sm md:text-1xl tituloEscrito mt-2"
          ref={nombre}
        >
          Trevisan Ignacio
        </h1>
        <Presentacion
          box1Ref={box1Ref2}
          box2Ref={box2Ref2}
          recuadro1ref={recuadro1ref}
          recuadro2ref={recuadro2ref}
          recuadro3ref={recuadro3ref}
          recuadro4ref={recuadro4ref}
          recuadro5ref={recuadro5ref}
          recuadro6ref={recuadro6ref}
          recuadro7ref={recuadro7ref}
          primerTitulo={primerTitulo}
          segundoTitulo={segundoTitulo}
          tercerTitulo={tercerTitulo}
          cuartoTitulo={cuartoTitulo}
        />

        <div className="absolute w-full h-full flex flex-col items-center px-4 md:px-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 md:mt-10 text-center"
            ref={tituloDos}
          >
            Experiencia
          </h1>

          {/* Tarjetas de experiencia responsivas */}
          <div
            className="grid mt-4 sm:mt-6 md:mt-10 self-center w-full max-w-full md:w-[90%] lg:w-[75%] px-4 md:px-6"
            ref={primerExperiencia}
          >
            <h1 className="font-bold self-center text-center md:text-left text-xl md:text-2xl">
              Recursiva Soluciones Tecnologias SL.
            </h1>
            <h3 className="text-center md:text-left text-lg mt-1">
              Desarrollador Front-End
            </h3>
            <p className="text-sm md:text-base mt-2">
              Formé parte de un equipo de 3 desarrolladores, donde colaboramos
              en el desarrollo de soluciones web para clientes particulares.
              Nuestra experiencia incluyó: Integraciones entre sistemas ERP y
              plataformas de e-commerce. Desarrollo de tiendas en línea
              utilizando WordPress. Creación de soluciones personalizadas
              utilizando el stack MERN
            </p>
            <div className="flex flex-col md:flex-row text-center md:text-left mt-2">
              <p className="font-bold mr-1">Tecnologias más usadas: </p>
              <p>React y Wordpres</p>
            </div>
            <h3 className="text-center md:text-left mt-1">
              Ago 2023 - Dic 2024
            </h3>
          </div>

          <div
            className="grid mt-4 sm:mt-6 md:mt-10 self-center w-full max-w-full md:w-[90%] lg:w-[75%] px-4 md:px-6"
            ref={segundaExperiencia}
          >
            <h1 className="font-bold self-center text-center md:text-left text-xl md:text-2xl">
              PiramideSoft.{" "}
            </h1>
            <h3 className="text-center md:text-left text-lg mt-1">
              Desarrollador full stack
            </h3>
            <p className="text-sm md:text-base mt-2">
              Formo parte de un equipo de desarrolladores que se dedican a
              brindar servicios de desarrollo a empresas y negocios locales de
              Entre Rios. En este equipo, he tenido la oportunidad de trabajar
              en una variedad de proyectos, incluyendo: Aplicacion de rastreo
              completa para empresa de reparto. Web app para manejar ofertas de
              productos y herramientas para la modificacion en tiempo real de la
              misma. Teniendo a la vez, la oportunidad de configurar desde cero,
              levantar y supervisar servidores completos por mi cuenta
            </p>
            <div className="flex flex-col md:flex-row text-center md:text-left mt-2">
              <p className="font-bold mr-1">Tecnologias más usadas: </p>
              <p>Next,Java y Php</p>
            </div>
            <h3 className="text-center md:text-left mt-1">
              Mar 2025 - Actualmente trabajo aquí
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimerComponente;
