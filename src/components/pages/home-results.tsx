import AfterBefore from "@/components/ui/after-before";
import Page from "@/components/ui/page";

export default function HomeResults() {
    const results = [
        {
            before: "https://gardeniapalomino.com.br/wp-content/uploads/2022/06/woman-with-a-doctor-in-cosmetology-studio.jpg",
            after: "https://placehold.co/400",
            title: "Resultado 1"
        },
        {
            before: "https://gardeniapalomino.com.br/wp-content/uploads/2022/06/woman-with-a-doctor-in-cosmetology-studio.jpg",
            after: "https://placehold.co/400",
            title: "Resultado 2"
        },
        {
            before: "https://gardeniapalomino.com.br/wp-content/uploads/2022/06/woman-with-a-doctor-in-cosmetology-studio.jpg",
            after: "https://placehold.co/400",
            title: "Resultado 3"
        },
    ]

    return (
        <Page title={<h1 className="text-white">Resultados naturais <strong>que te valorizam!</strong></h1>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <AfterBefore images={result} />
                        <h3 className="text-lg font-bold">{result.title}</h3>
                    </div>
                ))}
            </div>
        </Page>
    )
}