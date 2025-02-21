"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quais tipos de vidros vocês trabalham?",
    answer:
      "Trabalhamos com diversos tipos de vidros, incluindo: vidro temperado, laminado, duplo, serigrafado, acidado e espelhos. Cada tipo possui características específicas e é recomendado para diferentes aplicações, sempre visando a segurança e qualidade.",
  },
  {
    question: "Qual o prazo médio de entrega e instalação?",
    answer:
      "O prazo varia de acordo com o projeto, mas geralmente:\n• Box para banheiro: 5 a 7 dias úteis\n• Janelas: 7 a 10 dias úteis\n• Fachadas: 15 a 20 dias úteis\nApós a aprovação do orçamento, agendamos uma visita técnica para medição precisa.",
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim, oferecemos garantia em todos os nossos serviços e produtos. A garantia é de 5 anos para vidros temperados e laminados, cobrindo defeitos de fabricação e instalação. Para ferragens e acessórios, a garantia é de 1 ano.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer:
      "O processo é simples e sem compromisso:\n1. Entre em contato via telefone ou WhatsApp\n2. Envie as medidas aproximadas e fotos do local\n3. Receba um orçamento inicial\n4. Agendamos uma visita técnica para medição precisa\n5. Confirmação do orçamento final",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos diversas formas de pagamento para sua comodidade:\n• Cartão de crédito (até 12x)\n• Cartão de débito\n• PIX\n• Transferência bancária\n• Dinheiro\nOferecemos condições especiais para pagamentos à vista.",
  },
  {
    question: "Como devo fazer a manutenção dos vidros?",
    answer:
      "Para manter seus vidros sempre em ótimo estado, recomendamos:\n• Limpeza regular com água e detergente neutro\n• Evitar produtos abrasivos\n• Secar com pano macio que não solte fiapos\n• Verificar as ferragens a cada 6 meses\n• Em caso de vidros temperados, evitar impactos nas bordas",
  },
  {
    question: "Vocês atendem projetos comerciais?",
    answer:
      "Sim, atendemos tanto projetos residenciais quanto comerciais. Temos vasta experiência em:\n• Fachadas comerciais\n• Divisórias para escritórios\n• Vitrines\n• Fechamento de áreas\n• Projetos personalizados para empresas",
  },
  {
    question: "O que é vidro temperado e por que ele é mais seguro?",
    answer:
      "O vidro temperado é um vidro de segurança que passa por um processo térmico especial, tornando-o até 5 vezes mais resistente que o vidro comum. Em caso de quebra, ele se fragmenta em pequenos pedaços arredondados, minimizando o risco de acidentes graves.",
  },
];

const FAQSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 px-6 bg-[#F8FAFC]"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#0077B6] mb-8"
        >
          Perguntas Frequentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 text-center mb-12"
        >
          Tire suas dúvidas sobre nossos produtos e serviços. Não encontrou o
          que procura? Entre em contato conosco.
        </motion.p>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-[#0077B6]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default FAQSection;
