import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQuestions } from "@/constants";

import { inter_bold, inter_light, inter_medium } from "@/utils/fonts";

export default function FAQ() {
  return (
    <main className="p-4 lg:p-6 mt-[3rem] bg-white">
      <h2 className={`header-style ${inter_bold.className} text-[#000618]`}>
        FAQs
      </h2>
      <p className={`paragraph-style ${inter_medium.className} text-gray-400`}>
        {" "}
        Got Questions for us?
      </p>
      <section>
        <Accordion
          type="single"
          collapsible
          className="w-[90%] md:w-1/3 lg:w-1/3 mx-auto mt-[1rem]">
          {FAQuestions.map((que) => (
            <AccordionItem
              value={`item-${que.id}`}
              className="bg-[#000618] rounded-md px-2 mb-[1rem]">
              <AccordionTrigger
                className={`text-white !text-sm ${inter_medium.className}`}>
                {que.question}
              </AccordionTrigger>
              <AccordionContent
                className={`!text-xs text-white ${inter_light.className}`}>
                {que.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
