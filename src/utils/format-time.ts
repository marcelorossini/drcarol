export function formatTimeAgo(timeString: string): string {
  // Converte a string de data para o formato correto (DD/MM/YYYY)
  const [day, month, year] = timeString.split('/');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const now = new Date();
  
  // Calcula a diferença em milissegundos
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  
  const intervals = {
    ano: 31536000,
    mês: 2592000,
    semana: 604800,
    dia: 86400,
    hora: 3600,
    minuto: 60,
    segundo: 1
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / secondsInUnit);
    
    if (interval >= 1) {
      if (unit === 'mês' && interval > 1) {
        return `${interval} meses atrás`;
      }
      const plural = interval > 1 ? 's' : '';
      return `${interval} ${unit}${plural} atrás`;
    }
  }

  return 'agora mesmo';
} 