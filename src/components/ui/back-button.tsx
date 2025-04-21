'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`flex items-center gap-2 ${className}`}
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-4 w-4" />
      Voltar
    </Button>
  );
} 