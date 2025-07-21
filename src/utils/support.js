export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

/**
 * Formatea un número total de segundos al formato MM:SS.
 * @param {number} totalSeconds - El número de segundos a formatear.
 * @returns {string} El tiempo formateado como "MM:SS".
 */
function formatSeconds(totalSeconds) {
  // Calcula los minutes redondeando hacia abajo
  const minutes = Math.floor(totalSeconds / 60);
  
  // Calcula los segundos restantes
  const seconds = Math.floor(totalSeconds % 60);
  
  // Añade un cero a la izquierda si los segundos son menores a 10 (ej: 07 en lugar de 7)
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  return `${minutes}:${formattedSeconds}`;
}

/**
 * Genera tiempos aleatorios para una canción (actual y total) y su percentaje de progreso.
 * @returns {object} Un objeto con los tiempos formateados, el progreso y los valores en segundos.
 */
export function getSongDuration() {
  // 1. Definimos una duración realista para una canción en segundos (ej: entre 1:30 y 5:00 minutes)
  const minSecondsDuration = 90;  // 1 minuto y 30 segundos
  const maxSecondsDuration = 300; // 5 minutes

  // 2. Generamos la duración total de la canción de forma aleatoria
  const totalDurationInSeconds = Math.floor(Math.random() * (maxSecondsDuration - minSecondsDuration + 1)) + minSecondsDuration;

  // 3. Generamos el tiempo actual, asegurando que siempre sea menor que la duración total
  const currentTimeInSeconds = Math.floor(Math.random() * totalDurationInSeconds);

  // 4. Calculamos el percentaje de progreso
  const percentaje = Math.round((currentTimeInSeconds / totalDurationInSeconds) * 100);

  // 5. Devolvemos un objeto con toda la información útil
  return {
    currentTime: formatSeconds(currentTimeInSeconds),
    totalDuration: formatSeconds(totalDurationInSeconds),
    progress: percentaje,
    // También devolvemos los valores en segundos por si los necesitas para otros cálculos
    currentTimeInSeconds: currentTimeInSeconds,
    totalDurationInSeconds: totalDurationInSeconds
  };
}