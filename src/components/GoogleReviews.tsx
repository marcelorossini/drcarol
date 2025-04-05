import { getTestimonials } from '@/lib/get-testimonials';
import { ReviewCard } from './ReviewCard';

export async function GoogleReviews() {
  const reviews = await getTestimonials();

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10 text-red-500">
        Não foi possível carregar os depoimentos. Por favor, tente novamente mais tarde.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
} 