"use client";
import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const ClientComponent = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  if (!isLoaded) {
    return (
      <div className="w-full absolute flex justify-center items-center h-full ">
        Cargando...
      </div>
    );
  }
  return <>{children}</>;
};

export default ClientComponent;
