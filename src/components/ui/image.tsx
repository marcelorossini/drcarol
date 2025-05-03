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
    <>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        className="absolute top-0 left-0 h-full w-full"
      />
      <Image
        className={cn(className)}
        draggable={draggable}
        {...props}
      />
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="h-full w-full flex items-end justify-end p-4">
          <Mark />
        </div>
      </div>
    </>
  );
}


export function Mark() {
  return (
    <div className="bg-black/20 backdrop-blur-xs rounded-lg p-2">
      <Image src="/assets/logo-3.svg" alt="mark" width={100} height={100} />
    </div>
  );
}
