import { footerLinks, followUs, footerLinks_mobile } from "@/constants/uiData";
import { HiChevronUp } from "react-icons/hi2";
import { v4 as uuidv4 } from 'uuid';
const Footer = () => {
  return (
    <section>
      {/* Footer interactive */}
      <div className="block  text-xs screen960:hidden">
        <div className="bg-slate-100 p-5 text-left">
          <h5 className="mb-3 text-lg font-semibold">Your opinion counts</h5>
          <p className="mb-3 ">
            We strive to serve you better and appreciate your feedback
          </p>
        </div>
        <button className="flex h-12 w-full items-center justify-center text-[15px] uppercase tracking-tighter">
          <a href="#" className="flex items-center justify-center">
            <HiChevronUp className="mr-3 text-xl" />
            back to top
          </a>
        </button>
        <div className="flex justify-center bg-black p-3 text-sm uppercase text-white">
          <a href="#" className="w-1/2">
            my account
          </a>
          <a href="#" className="">
            your bag
          </a>
        </div>
      </div>
      {/* Footer-top */}
      <div>
        {/* For desktop */}
        <div className="mx-auto hidden max-w-5xl screen960:block">
          <div className="flex  pt-5  ">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="my-5 ml-4 mr-7 basis-full">
                <h4 className="text-xl font-bold">{footerlink.title}</h4>
                <ul className="list-none">
                  {footerlink.links.map((link, index) => (
                    <li key={uuidv4()} className="">
                      <a href={link.link} className="text-[13px] leading-6">
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {followUs.map((company) => (
              <div key={company.title} className="my-5 ml-4 mr-7 basis-full">
                <h4 className="mb-4 text-xl font-bold">{company.title}</h4>
                <ul className="list-none space-y-3">
                  {company.links.map((link) => (
                    <li
                      key={uuidv4()}
                      className=""
                    >
                      <a href={link.link} className="">
                        <img src={link.logo} alt="icon companies" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* For mobile */}
        <div className="block  text-xs screen960:hidden">
          <div className="bg-black py-4 text-white">
            {footerLinks_mobile.map((ftlink) => (
              <ul
                key={uuidv4()}
                className="flex w-full list-none flex-wrap"
              >
                {ftlink.links.map((link) => (
                  <li
                    key={uuidv4()}
                    className="w-1/2 py-[9px] px-[15px]"
                  >
                    <a href={link.link} className="block text-center">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Footer- bottom */}
      <div className="border-t-2 border-neutral-900 bg-gray-800 text-xs text-white screen950:w-full">
        <div className="mx-auto max-w-5xl">
          <ol className="flex basis-1/2 flex-wrap justify-center py-3 screen950:basis-auto ">
            <li className="my-[9px] w-1/2 px-[15px] text-center screen960:w-auto md:border-r-2">
              <a>Data settings</a>
            </li>
            <li className="my-[9px] w-1/2 px-[15px] text-center screen960:w-auto md:border-r-2">
              <a>Do not sell my personal information</a>
            </li>
            <li className="my-[9px] w-1/2 px-[15px] text-center screen960:w-auto md:border-r-2">
              <a> Privacy</a>
            </li>
            <li className="my-[9px] w-1/2 px-[15px] text-center screen960:w-auto">
              <a> Terms and Conditions</a>
            </li>
          </ol>
          <div className="py-5 px-4">© 2022 adidas America, Inc.</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
