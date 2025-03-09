import { inter_bold, inter_light } from "@/utils/fonts";
interface CarouselTextProps {
  id: string;
  name: string;
  paragraph: string;
  title: string;
  country: string;
}
export default function CarouselText({
  paragraph,
  title,
  id,
  name,
  country,
}: CarouselTextProps) {
  return (
    <main className="bg-white text-black w-[90%] md:w-[50%] lg:w-[50%] mx-auto p-6 rounded-md">
      <h2
        className={`paragraph-style font-semibold text-base !text-center mb-[1rem] ${inter_bold.className} uppercase`}>
        {title}
      </h2>
      <p
        className={`text-center font-semibold ${inter_light.className} italic w-[60%]
        mx-auto`}>
        {paragraph}
      </p>
      <div className="mt-[1rem]">
        <p className={`font-semibold ${inter_light.className}`}>{name}</p>
        <p className={`text-sm font-normal ${inter_light.className}`}>
          {" "}
          {country}
        </p>
      </div>
    </main>
  );
}
