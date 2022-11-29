import { footerLinks, followUs, footerLinks_mobile } from "../constants";
import { HiChevronUp } from "react-icons/hi2";
const Footer = () => {
  return (
    <section>
      {/* Footer interactive */}
      <div className="text-xs  block screen960:hidden">
        <div className="bg-slate-100 p-5 text-left">
          <h5 className="font-semibold text-lg mb-3">Your opinion counts</h5>
          <p className="mb-3 ">
            We strive to serve you better and appreciate your feedback
          </p>
        </div>
        <button className="flex h-12 justify-center items-center w-full text-[15px] uppercase tracking-tighter">
          <HiChevronUp className="mr-3 text-xl" />
          back to top
        </button>
        <div className="uppercase flex justify-center text-white bg-black text-sm p-3">
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
        <div className="max-w-5xl mx-auto hidden screen960:block">
          <div className="flex  pt-5  ">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="basis-full my-5 ml-4 mr-7">
                <h4 className="text-xl font-bold">{footerlink.title}</h4>
                <ul className="list-none">
                  {footerlink.links.map((link) => (
                    <li key={link.name} className="">
                      <a href={link.link} className="text-[13px] leading-6">
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {followUs.map((company) => (
              <div key={company.title} className="basis-full my-5 ml-4 mr-7">
                <h4 className="text-xl font-bold mb-4">{company.title}</h4>
                <ul className="list-none space-y-3">
                  {company.links.map((link) => (
                    <li key={link.name} className="">
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
        <div className="text-xs  block screen960:hidden">
          <div className="bg-black py-4 text-white">
            {footerLinks_mobile.map((ftlink) => (
              <ul className="flex list-none flex-wrap w-full">
                {ftlink.links.map((link) => (
                  <li
                    key={link.link}
                    className="w-1/2 py-[9px] px-[15px]"
                  >
                    <a href={link.link} className="text-center block">
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
      <div className="text-xs screen950:w-full border-t-2 border-neutral-900 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <ol className="flex justify-center basis-1/2 screen950:basis-auto flex-wrap py-3 ">
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 screen960:w-auto">
              <a>Data settings</a>
            </li>
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 screen960:w-auto">
              <a>Do not sell my personal information</a>
            </li>
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 screen960:w-auto">
              <a> Privacy</a>
            </li>
            <li className="my-[9px] px-[15px] text-center w-1/2 screen960:w-auto">
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
