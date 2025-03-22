'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from 'next/image';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  time: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aqui você precisará implementar a chamada à API do Google Places
    // Por enquanto, vamos usar dados mockados
    const mockReviews: Review[] = [
      {
        author_name: "João Silva",
        rating: 5,
        text: "Excelente atendimento! Profissionais muito competentes e dedicados.",
        profile_photo_url: "https://placehold.co/600x400",
        time: "2 semanas atrás"
      },
      {
        author_name: "Maria Santos",
        rating: 5,
        text: "Melhor experiência que já tive com atendimento ao cliente.",
        profile_photo_url: "https://placehold.co/600x400",
        time: "1 mês atrás"
      },
      {
        author_name: "Pedro Oliveira",
        rating: 5,
        text: "Serviço de alta qualidade e preço justo.",
        profile_photo_url: "https://placehold.co/600x400",
        time: "3 dias atrás"
      }
    ];

    setReviews(mockReviews);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-10">Carregando depoimentos...</div>;
  }

  return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.text}</p>
              <p className="text-sm text-gray-500">{review.time}</p>
            </CardContent>
          </Card>
        ))}
      </div>
  );
} 