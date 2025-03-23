import Page from "@/components/ui/page";
import HomeFAQ from "./home-faq";

export default function HomeFAQSection() {
    return (
        <Page title={<h1>Perguntas <span className="text-primary">frequentes</span></h1>}>
            <HomeFAQ />
        </Page>
    )
} 