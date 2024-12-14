import { useState, useEffect } from "react";


const App = () => {
  const startDate = new Date(2024, 7, 17, 18, 30).getTime(); // Garantir que seja o timestamp em milissegundos
  const [timeElapsed, setTimeElapsed] = useState<number>(0); // Definir tipo de state como number

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime(); // Também pegando o timestamp em milissegundos
      const elapsed = now - startDate;
      setTimeElapsed(elapsed);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const formatTime = (time: number) => { // Definir tipo de parâmetro 'time' como number
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
        <span className="block mb-2">Tempo passado da minha melhor escolha ❤️</span>
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
          <img className="object-cover w-full h-full rounded-lg"  src="/assets/1.jpg" alt="Imagem 1" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/2.jpg" alt="Imagem 2" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/3.jpg" alt="Imagem 3" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/4.jpg" alt="Imagem 4" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/5.jpg" alt="Imagem 5" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/6.jpg" alt="Imagem 6" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/7.jpg" alt="Imagem 7" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/8.jpg" alt="Imagem 8" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/9.jpg" alt="Imagem 9" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/10.jpg" alt="Imagem 10" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/11.jpg" alt="Imagem 11" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/12.jpg" alt="Imagem 12" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/13.jpg" alt="Imagem 13" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/14.jpg" alt="Imagem 14" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/15.jpg" alt="Imagem 15" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/16.jpg" alt="Imagem 16" />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3">
          <img className="object-cover w-full h-full rounded-lg" src="/assets/17.jpg" alt="Imagem 17" />
        </div>
      </div>
    </section>
  );
};

export default App;
