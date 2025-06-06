"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import type { EmblaPluginType } from "embla-carousel"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageWithMark } from "./image"
import Image from "next/image"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>[0]

interface CarouselProps {
  opts?: UseCarouselParameters
  plugins?: EmblaPluginType[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("select", onSelect)
      api.on("reInit", onSelect)

      return () => {
        api?.off("select", onSelect)
        api?.off("reInit", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="w-full">
      <div
        ref={ref}
        className={cn(
          "flex relative",
          orientation === "horizontal" ? "" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 transition-opacity duration-300",
        orientation === "horizontal" ? "" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-16 w-16 opacity-20  opacity-20 hover:opacity-100 transition-all duration-300 focus:opacity-100 transition-all duration-300",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-8 w-8" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-16 w-16 opacity-20  opacity-20 hover:opacity-100 transition-all duration-300 focus:opacity-100 transition-all duration-300",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-8 w-8" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

interface CarouselImage {
  url: string;
  alt: string;
}

const CarouselDefault = ({ 
  images, 
  maxSize, 
  imageClassName,
  useImageWithMark = false 
}: { 
  images: CarouselImage[]; 
  maxSize?: string; 
  imageClassName?: string;
  useImageWithMark?: boolean;
}) => {
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  }

  const ImageComponent = useImageWithMark ? ImageWithMark : Image;

  return (
    <Carousel
      opts={{
        align: "center",
        containScroll: "trimSnaps",
        loop: true,
        dragFree: false
      }}
      plugins={[
        Autoplay(autoplayOptions)
      ]}
      onContextMenu={(e) => e.preventDefault()}
    >
      <CarouselContent className="overflow-visible">
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-[70%] md:basis-1/3" style={{ maxHeight: maxSize, maxWidth: maxSize }}>
            <div className="p-0.5">
              <div className="flex aspect-square items-center justify-center p-2 relative">
                {useImageWithMark ? (
                  <ImageWithMark
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className={cn(
                      "w-full h-full object-cover rounded-4xl",
                      imageClassName
                    )}
                  />
                ) : (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className={cn(
                      "w-full h-full object-cover rounded-4xl",
                      imageClassName
                    )}
                  />
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const CarouselHighlight = ({
  images,
  enableBlur = true,
  useImageWithMark = false
}: {
  images: CarouselImage[];
  enableBlur?: boolean;
  useImageWithMark?: boolean;
}) => {
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  }

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  return (
    <Carousel
      opts={{
        align: "center",
        containScroll: "trimSnaps",
        loop: true,
        dragFree: false
      }}
      plugins={[
        Autoplay(autoplayOptions)
      ]}
      setApi={(api) => {
        if (!api) return
        api.on("select", onSelect)
      }}
    >
      <CarouselContent className="overflow-visible">
        {images.map((image, index) => (
          <CarouselItem key={index} className={`basis-[70%] md:basis-1/3 ${selectedIndex === index ? "z-10" : "z-0"}`}>
            <div className="p-0.5">
              <div className={cn(
                "flex aspect-square items-center justify-center p-2 transition-transform duration-300 relative",
                selectedIndex === index
                  ? "scale-140 z-10"
                  : "scale-100 z-0 opacity-50",
                enableBlur && selectedIndex !== index && "blur-xs"
              )}>
                {useImageWithMark ? (
                  <ImageWithMark
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    loading="lazy"
                    height={800}
                    className={cn(
                      "w-full h-full object-cover rounded-4xl transition-all duration-300"
                    )}
                  />
                ) : (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    loading="lazy"
                    height={800}
                    className={cn(
                      "w-full h-full object-cover rounded-4xl transition-all duration-300"
                    )}
                  />
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDefault,
  CarouselHighlight
}
