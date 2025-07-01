import { useEffect, useState } from "react";

export default function Greeting({ name }) {
  const [currentName, setCurrentName] = useState(null);

  useEffect(() => {
    setCurrentName(name);
    const timer = setTimeout(() => {
      setCurrentName("Alfonsina");
    }, 3000);
    return () => clearTimeout(timer);
  }, [name]);

  return currentName && <p>Hola {currentName}</p>;
}