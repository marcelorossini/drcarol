import { CollapsibleList } from "@/components/ui/collapsible";
import Image from "next/image";
import Page from "@/components/ui/page";

export default function HomeFAQ() {
    const faq = [
        {
            "title": "Como funciona a primeira consulta na clínica?",
            "content": "Na primeira consulta, a Dra. Carolina realiza uma avaliação criteriosa do seu histórico de saúde, hábitos e expectativas do tratamento. Em seguida, ela faz uma análise facial e corporal (se necessário) e explica sobre os tratamentos mais indicados para você. Ela irá tirar todas as suas dúvidas e explicar sobre os cuidados pós procedimentos. Em seguida, irá elaborar seu plano de tratamento personalizado para que você tenha os melhores resultados e alcance seus objetivos."
        },
        {
            "title": "Os procedimentos estéticos são seguros?",
            "content": "Sim! Trabalhamos com tecnologias avançadas, produtos de alta qualidade das melhores marcas do mercado internacional e nacional aprovados pelos principais órgãos de saúde. Além disso, os procedimentos são realizados pela profissional que é altamente qualificada e habilitada, garantindo eficácia, segurança e resultados de excelência para cada paciente."
        },
        {
            "title": "O que é Harmonização Facial?",
            "content": "A Harmonização Facial é um conjunto de procedimentos estéticos que, quando combinados, promovem rejuvenescimento, embelezamento e equilíbrio dos traços faciais. Cada harmonização é personalizada, pois as necessidades e características de cada paciente são únicas. Entre as técnicas utilizadas, estão preenchimento com ácido hialurônico, aplicação de toxina botulínica, bioestimuladores de colágeno, tecnologias avançadas e outros tratamentos específicos, sempre escolhidos de acordo com os objetivos individuais para alcançar resultados harmônicos e naturais."
        },
        {
            "title": "Quanto tempo leva para ver os resultados da Harmonização Facial?",
            "content": "Os resultados variam de acordo com os procedimentos realizados. Alguns efeitos podem ser notados imediatamente, enquanto outros se desenvolvem progressivamente ao longo de semanas ou meses, conforme a resposta do organismo ao tratamento. O resultado final geralmente é observado entre 15 e 90 dias, à medida que ocorre a adaptação dos tecidos e a regeneração natural da pele."
        },
        {
            "title": "Os procedimentos estéticos são doloridos?",
            "content": "A sensibilidade pode variar de acordo com o procedimento e a tolerância de cada paciente, mas nós priorizamos o máximo conforto durante os tratamentos. Para minimizar qualquer desconforto, utilizamos anestésicos, dispositivo de vibração e gelo para analgesia, e um ambiente relaxante com música, garantindo uma experiência mais tranquila e confortável."
        },

        {
            "title": "Quais são os cuidados após os procedimentos?",
            "content": "Os cuidados pós-procedimento são essenciais para garantir uma recuperação tranquila. Embora cada tratamento tenha suas recomendações específicas, algumas orientações gerais incluem: \r\n✅ Evitar exposição solar: use protetor solar diariamente e evite o sol intenso nos primeiros dias para prevenir manchas e irritações. \r\n✅ Manter a hidratação: beba bastante água e utilize cremes hidratantes adequados para potencializar a recuperação da pele. \r\n✅ Evitar atividades físicas intensas: recomenda-se evitar exercícios por 12 a 48 horas para evitar inchaço e deslocamento do produto aplicado. \r\n✅ Seguir as orientações do profissional: use apenas os produtos recomendados e respeite os intervalos entre sessões."
        },
        {
            "title": "Posso combinar diferentes procedimentos estéticos?",
            "content": "Sim! Muitos procedimentos são complementares e podem ser combinados para potencializar os resultados. Durante a consulta, a Dra. Carolina explicará sobre as melhores associações."
        },
        {
            "title": "Como agendar uma consulta?",
            "content": "Você pode agendar sua consulta de forma rápida e prática pelo WhatsApp. Nossa equipe estará pronta para oferecer os melhores dias e horários para você realizar sua consulta, e é claro, esclarecer qualquer dúvida!"
        },
        {
            "title": "Quais formas de pagamento são aceitas?",
            "content": "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, débito, Pix e dinheiro. Para saber mais, entre em contato com nossa equipe."
        }
    ]

    return (
        <Page title={<h1>Perguntas <span className="text-primary">frequentes</span></h1>}>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="hidden md:flex w-1/2 relative justify-end items-end">
                    <div className="w-full max-h-[600px] h-full relative">
                        <Image draggable={false} src={"/assets/images/home-faq.png"} alt="imagem" fill className="object-contain object-bottom" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 pb-8 lg:pb-20">
                    <CollapsibleList items={faq} />
                </div>
            </div>
        </Page>
    )
}