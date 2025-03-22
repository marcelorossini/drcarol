import { CarouselDefault } from "@/components/ui/carousel";
import { loadImagesFromDirectory } from "@/utils/image-loader";

export default function HomeAbout() {
    const images = loadImagesFromDirectory('/assets/images/home-about-clinic', 'Clínica Dr. Carolina Macedo');

    return (
        <div className="flex flex-col gap-8">
            <CarouselDefault images={images} />
        </div>
    )
}