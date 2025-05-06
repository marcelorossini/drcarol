import { getTestimonials } from '@/lib/get-testimonials';
import { ReviewCard } from './ReviewCard';
import { FaStar } from 'react-icons/fa';

export async function GoogleReviews() {
  const reviews = await getTestimonials();

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10 text-red-500">
        Não foi possível carregar os depoimentos. Por favor, tente novamente mais tarde.
      </div>
    );
  }

  // Ordena as avaliações do mais novo para o mais antigo
  const sortedReviews = [...reviews].sort((a, b) => {
    // Converte as strings de data no formato DD/MM/YYYY para objetos Date
    const [dayA, monthA, yearA] = a.time.split('/');
    const [dayB, monthB, yearB] = b.time.split('/');
    
    const dateA = new Date(Number(yearA), Number(monthA) - 1, Number(dayA));
    const dateB = new Date(Number(yearB), Number(monthB) - 1, Number(dayB));
    
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {sortedReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      <div className="text-center space-y-4 w-full flex justify-center">
        <a
          href="https://g.co/kgs/YFCaC5G"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-8 py-5 bg-primary text-xl text-white rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium flex items-center gap-2 flex-col lg:flex-row shadow-lg"
        >
          <span>Veja mais avaliações, e porque somos uma clínica 5 estrelas</span>
          <div className="flex justify-center items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-6 h-6" />
            ))}
          </div>
        </a>
      </div>
    </div>
  );
} 