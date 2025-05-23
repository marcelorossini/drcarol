import AfterBefore from "@/components/ui/after-before";
import Page from "@/components/ui/page";

export default function HomeResults() {
    const results = [
        {
            before: "./assets/content/antes-depois/1-antes.webp",
            after: "./assets/content/antes-depois/1-depois.webp",
            title: "Resultado 1"
        },
        {
            before: "./assets/content/antes-depois/2-antes.webp",
            after: "./assets/content/antes-depois/2-depois.webp",
            title: "Resultado 2"
        },
        {
            before: "./assets/content/antes-depois/3-antes.webp",
            after: "./assets/content/antes-depois/3-depois.webp",
            title: "Resultado 3"
        },
        {
            before: "./assets/content/antes-depois/4-antes.webp",
            after: "./assets/content/antes-depois/4-depois.webp",
            title: "Resultado 4"
        },
        {
            before: "./assets/content/antes-depois/7-antes.webp",
            after: "./assets/content/antes-depois/7-depois.webp",
            title: "Resultado 7"
        },
        {
            before: "./assets/content/antes-depois/6-antes.webp",
            after: "./assets/content/antes-depois/6-depois.webp",
            title: "Resultado 5"
        },
    ]

    return (
        <Page title={<h1 className="text-white">Resultados naturais <strong>que te valorizam!</strong></h1>}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {results.map((result, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <AfterBefore images={result} index={index} />
                        {/*<h3 className="text-lg font-bold">{result.title}</h3>*/}
                    </div>
                ))}
            </div>
        </Page>
    )
}