import { inter_bold } from "@/utils/fonts";

export default function ContactUs() {
  return (
    <main className="flex flex-col-reverse md:flex-row lg:flex-row justify-between">
      <section className={`md:w-[50%] lg:w-[50%] py-8 px-4 md:px-0 lg:px-0`}>
        <h2 className={`header-style ${inter_bold.className}`}>ANY QUERY?</h2>
        <p className={`paragraph-style`}>
          We are always available, send us a{" "}
          <span className="text-[#0284E2]">message</span> on +1(281) 861-3763
        </p>
      </section>
      <section
        className={`flex-1 paragraph-style bg-white py-8 px-4 md:px-0 lg:px-0`}>
        <h2 className={`header-style text-[#000618] ${inter_bold.className}`}>
          CONTACT SUPPORT
        </h2>
        <p className={`text-[#000618]`}>
          Would you want to send us a mail?, send us a{" "}
          <span className="text-[#0284E2]">mail</span> on <br /> [email address]
        </p>
      </section>
    </main>
  );
}
