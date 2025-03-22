import Page from "@/components/ui/page"

interface CosmeticProceduresProps {
    title: string
    procedures: {
        title: string
        description: string
        image: string
    }[]
}

export default function CosmeticProcedures({ title }: CosmeticProceduresProps) {
    return (
        <Page title={<h1 className="text-3xl">{title}</h1>} className="p-8">
            <div className="">
                
            </div>
        </Page>
    )
}