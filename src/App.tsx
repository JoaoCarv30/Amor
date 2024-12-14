import { useState, useEffect } from "react";

// Imagens importadas
import image1 from '../../us/src/assets/1.jpg';
import image2 from '../../us/src/assets/2.jpg';
import image3 from '../../us/src/assets/3.jpg';
import image4 from '../../us/src/assets/4.jpg';
import image5 from '../../us/src/assets/5.jpg';
import image6 from '../../us/src/assets/6.jpg';
import image7 from '../../us/src/assets/7.jpg';
import image8 from '../../us/src/assets/8.jpg';
import image9 from '../../us/src/assets/9.jpg';
import image10 from '../../us/src/assets/10.jpg';
import image11 from '../../us/src/assets/11.jpg';
import image12 from '../../us/src/assets/12.jpg';
import image13 from '../../us/src/assets/13.jpg';
import image14 from '../../us/src/assets/14.jpg';
import image15 from '../../us/src/assets/15.jpg';
import image16 from '../../us/src/assets/16.jpg';
import image17 from '../../us/src/assets/17.jpg';

const App = () => {
  const startDate = new Date(2024, 7, 17, 18, 30); // 17 de agosto de 2024, 18:30
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = now - startDate;
      setTimeElapsed(elapsed);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeElapsed);

  return (
    <section className="w-screen h-screen  text-white flex flex-col items-center justify-start p-6">
      {/* Texto com contagem de tempo estilizada */}
      <h1 className="font-bold text-5xl sm:text-6xl text-center mb-8">
        <span className="block mb-2">Dias passados da minha melhor escolha ❤️</span>
        <div className="flex justify-center items-center space-x-6">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold">{days}</div>
            <div className="text-lg">Dias</div>
          </div>
          <span className="text-3xl">:</span>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold">{hours}</div>
            <div className="text-lg">Horas</div>
          </div>
          <span className="text-3xl">:</span>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold">{minutes}</div>
            <div className="text-lg">Minutos</div>
          </div>
          <span className="text-3xl">:</span>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold">{seconds}</div>
            <div className="text-lg">Segundos</div>
          </div>
        </div>
      </h1>

      {/* Galeria de imagens responsiva */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image1} alt="Imagem 1" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image2} alt="Imagem 2" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image3} alt="Imagem 3" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image4} alt="Imagem 4" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image5} alt="Imagem 5" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image6} alt="Imagem 6" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image7} alt="Imagem 7" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image8} alt="Imagem 8" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image9} alt="Imagem 9" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image10} alt="Imagem 10" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image11} alt="Imagem 11" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image12} alt="Imagem 12" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image13} alt="Imagem 13" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image14} alt="Imagem 14" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image15} alt="Imagem 15" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image16} alt="Imagem 16" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src={image17} alt="Imagem 17" />
        </div>
      </div>
    </section>
  );
};

export default App;
