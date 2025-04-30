import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithMarkProps extends Omit<ImageProps, 'className'> {
  className?: string;
  draggable?: boolean;
}

export function ImageWithMark({
  className,
  draggable = false,
  ...props
}: ImageWithMarkProps) {
  return (
    <Image
      className={cn(className)}
      draggable={draggable}
      {...props}
    />
  );
} 