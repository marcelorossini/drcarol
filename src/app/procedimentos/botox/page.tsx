import CosmeticProcedures from "@/components/pages/cosmetic-procedures"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Toxina Botulínica | Carol Estética",
    description: "O botox é um procedimento que utiliza uma toxina bacteriana para reduzir a aparência de rugas e linhas de expressão."
}

export default function Botox() {
    return (
        <CosmeticProcedures 
            title="Toxina Botulínica" 
            description="O botox é um procedimento que utiliza uma toxina bacteriana para reduzir a aparência de rugas e linhas de expressão."
            procedures={[
                {
                    title: "O que é Botox?",
                    description: "O botox é um procedimento que utiliza uma toxina bacteriana para reduzir a aparência de rugas e linhas de expressão.",
                    image: "/images/botox-1.jpg"
                }
            ]}
        />
    )
} 