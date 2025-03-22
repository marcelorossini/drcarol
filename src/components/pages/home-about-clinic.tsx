import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectoryAlt } from "@/utils/image-loader";

export default function HomeAbout() {
    const images = loadImagesFromDirectoryAlt('/assets/images/home-about-clinic', 'Clínica Dra. Carolina Macedo');

    return (
        <div className="flex flex-col gap-8">
            <CarouselDefault images={images} />
        </div>
    )
}