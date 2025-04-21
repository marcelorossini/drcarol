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

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      <div className="text-center space-y-4 w-full flex justify-center">
        <a
          href="https://www.google.com/search?q=Cl%C3%ADnica+de+Est%C3%A9tica+Avan%C3%A7ada+Carolina+Macedo&sca_esv=2c9839946796c83c&rlz=1C5CHFA_enBR1096BR1096&sxsrf=AHTn8zolDlbTOy10uy42xpI_pZEsdEv8gA%3A1745256973370&ei=DYIGaKWeFtS05OUPqa2A0Q8&ved=0ahUKEwjl2MHv1OmMAxVUGrkGHakWIPoQ4dUDCBA&uact=5&oq=Cl%C3%ADnica+de+Est%C3%A9tica+Avan%C3%A7ada+Carolina+Macedo&gs_lp=Egxnd3Mtd2l6LXNlcnAiL0Nsw61uaWNhIGRlIEVzdMOpdGljYSBBdmFuw6dhZGEgQ2Fyb2xpbmEgTWFjZWRvMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUikCFCbBFibBHABeACQAQCYAbsBoAGpAqoBAzAuMrgBA8gBAPgBAvgBAZgCAqACxQHCAgsQABiABBiwAxiiBMICCBAAGLADGO8FwgILEAAYsAMYogQYiQWYAwCIBgGQBgWSBwMxLjGgB80IsgcDMC4xuAfAAQ&sclient=gws-wiz-serp#lrd=0x94ce5b0bff046591:0x860df1209a40a93b,1,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-6 py-3 bg-primary text-xl text-white rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium flex items-center gap-2"
        >
          <span>Veja mais avaliações e porque somos uma clínica 5 estrelas</span>
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