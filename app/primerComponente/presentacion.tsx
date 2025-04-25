import React, { RefObject } from "react";
import {
  LayoutGrid,
  Monitor,
  Smartphone,
  Server,
  Code,
  Database,
  FileJson,
  Coffee,
  Cpu,
  Globe,
  PenTool,
  GitBranch,
  PaintBucket,
  Figma,
  Cloud,
} from "lucide-react";

interface Props {
  box1Ref: RefObject<HTMLDivElement | null>;
  box2Ref: RefObject<HTMLDivElement | null>;
  recuadro1ref: RefObject<HTMLDivElement | null>;
  recuadro2ref: RefObject<HTMLDivElement | null>;
  recuadro3ref: RefObject<HTMLDivElement | null>;
  recuadro4ref: RefObject<HTMLDivElement | null>;
  recuadro5ref: RefObject<HTMLDivElement | null>;
  recuadro6ref: RefObject<HTMLDivElement | null>;
  recuadro7ref: RefObject<HTMLDivElement | null>;
  primerTitulo: RefObject<HTMLHeadElement | null>;
  segundoTitulo: RefObject<HTMLHeadElement | null>;
  tercerTitulo: RefObject<HTMLHeadElement | null>;
  cuartoTitulo: RefObject<HTMLHeadElement | null>;
}

const Presentacion = ({
  box1Ref,
  box2Ref,
  recuadro1ref,
  recuadro2ref,
  recuadro3ref,
  recuadro4ref,
  primerTitulo,
  segundoTitulo,
  tercerTitulo,
  cuartoTitulo,
  recuadro5ref,
  recuadro6ref,
  recuadro7ref,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10 absolute gap-8 md:gap-0">
      <div
        className="rounded-sm flex flex-col w-full md:w-[450px] opacity-0"
        ref={box1Ref}
      >
        <span className="text-4xl md:text-6xl" ref={primerTitulo}>
          Desarrollador
        </span>
        <span
          className="text-4xl md:text-6xl text-[#d833f5]"
          ref={segundoTitulo}
        >
          Front-end
        </span>
        <span
          className="text-4xl md:text-6xl text-[#a023b6]"
          ref={tercerTitulo}
        >
          Android
        </span>
        <span
          className="text-4xl md:text-6xl text-[#6B107B]"
          ref={cuartoTitulo}
        >
          Backend
        </span>
        <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
          <div
            className="rounded-xl p-2"
            style={{ background: "#d656ec", backdropFilter: "blur(10px)" }}
            ref={recuadro1ref}
          >
            Nexjs
          </div>
          <div
            className="rounded-xl p-2"
            style={{ background: "#d833f5", backdropFilter: "blur(10px)" }}
            ref={recuadro2ref}
          >
            React Native
          </div>
          <div
            className="rounded-xl p-2"
            style={{ background: "#a023b6", backdropFilter: "blur(10px)" }}
            ref={recuadro3ref}
          >
            Node
          </div>
          <div
            className="rounded-xl p-2"
            style={{ background: "#6B107B", backdropFilter: "blur(10px)" }}
            ref={recuadro4ref}
          >
            Java
          </div>
        </div>
      </div>
      <div className="tech-icons-container w-full md:w-auto" ref={box2Ref}>
        {/* Primera fila de iconos - recuadro5ref */}
        <div
          className="tech-icons-row flex flex-wrap justify-center gap-2 md:gap-4 opacity-0 mb-4"
          ref={recuadro5ref}
        >
          <div className="tech-icon flex flex-col items-center">
            <LayoutGrid size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">React</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Monitor size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Next.js</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Smartphone size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">React Native</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Server size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Node.js</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Database size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">SQL</span>
          </div>
        </div>

        {/* Segunda fila de iconos - recuadro6ref */}
        <div
          className="tech-icons-row flex flex-wrap justify-center gap-2 md:gap-4 opacity-0 mb-4"
          ref={recuadro6ref}
        >
          <div className="tech-icon flex flex-col items-center">
            <Code size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">JavaScript</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <FileJson size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">TypeScript</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Coffee size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Java</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Cpu size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Express</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Globe size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">REST API</span>
          </div>
        </div>

        {/* Tercera fila de iconos - recuadro7ref */}
        <div
          className="tech-icons-row flex flex-wrap justify-center gap-2 md:gap-4 opacity-0"
          ref={recuadro7ref}
        >
          <div className="tech-icon flex flex-col items-center">
            <GitBranch size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Git</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <PenTool size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Tailwind</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <PaintBucket size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">CSS</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Figma size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Figma</span>
          </div>
          <div className="tech-icon flex flex-col items-center">
            <Cloud size={36} className="md:w-12 md:h-12" />
            <span className="text-sm md:text-base">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
