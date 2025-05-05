'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from 'next/image';
import { formatTimeAgo } from '@/utils/format-time';
import { Button } from './ui/button';

interface ReviewCardProps {
  review: {
    author_name: string;
    rating: number;
    profile_photo_url: string;
    time: string;
    textBr: string;
    textEn: string;
    language: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [showOriginal, setShowOriginal] = useState(true);
  const [deviceLanguage, setDeviceLanguage] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    // Detecta o idioma do dispositivo
    const language = navigator.language.toLowerCase();
    setDeviceLanguage(language);
  }, []);

  const isPortuguese = review.language.toLowerCase().includes('br');
  const isDevicePortuguese = deviceLanguage.startsWith('pt');

  const originalText = isPortuguese ? review.textBr : review.textEn;
  const translatedText = isPortuguese ? review.textEn : review.textBr;
  const currentText = showOriginal ? originalText : translatedText;

  // Só mostra o botão se o idioma do review for diferente do idioma do dispositivo
  const shouldShowTranslationButton = !(isPortuguese && isDevicePortuguese);
  const diferentLanguage = isPortuguese !== isDevicePortuguese;

  // Função para truncar o texto
  const truncateText = (text: string, maxChars: number) => {
    if (isExpanded) return text;
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars) + '...';
  };

  const maxChars = 510; 
  const displayText = truncateText(currentText, maxChars);
  const hasMoreText = currentText.length > maxChars;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4 border-b pb-4 relative">
          <div>
            {!!review?.profile_photo_url ? (
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                width={48}
                height={48}
                loading="lazy"
                className="rounded-full mr-4 object-cover"
              />
            ) : (
              <div className="rounded-full mr-4 object-cover bg-gray-200 w-10 h-10 flex items-center justify-center text-gray-500 text-2xl">
                {review.author_name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold lg:text-lg">{review.author_name}</h3>
            <div className="flex items-center">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2 flex-1">
          <div className="text-gray-600 text-justify">
            <span dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, '<br />') }} />
            {hasMoreText && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-blue-600 hover:text-blue-800 inline-block ml-1"
              >
                {isExpanded ? 'Ver menos' : 'Ver mais'}
              </Button>
            )}
          </div>
          {diferentLanguage && !showOriginal && (
            <p className="text-xs text-gray-500 italic">
              {isPortuguese ? '(Translated from portuguese)' : '(Traduzido do inglês)'}
            </p>
          )}
          {shouldShowTranslationButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowOriginal(!showOriginal)}
              className="text-xs"
            >
              {showOriginal ? 'Ver tradução' : 'Ver original'}
            </Button>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-4">{formatTimeAgo(review.time)}</p>
      </CardContent>
    </Card>
  );
} 