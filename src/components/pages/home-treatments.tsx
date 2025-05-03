import Image from "next/image";
import Page from "@/components/ui/page";
import HomeTypeProcedures from "./home-type-procedures";

export default function HomeTreatments() {
    return (
        <Page title={<h1 className="text-3xl font-caladea">Conheça nossos<br /><span className="text-primary">tratamentos</span></h1>}>
            <Image draggable={false} src="/assets/2.svg" alt="teste" width={500} height={500} className="absolute -top-40 -right-55 z-10 w-80 lg:w-128 lg:-top-60" loading="lazy" />
            <div className="relative w-full h-full z-15">
                <HomeTypeProcedures />
            </div>
        </Page>
    )
} 