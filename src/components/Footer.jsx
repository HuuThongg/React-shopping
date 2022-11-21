import { footerLinks, followUs } from "../constants";

const Footer = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto">
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

      {/* Footer- bottom */}
      <div className="text-xs border-t-2 border-neutral-900 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <ol className="flex justify-center basis-1/2 md:basis-auto flex-wrap py-3 ">
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 md:w-auto">
              <a>Data settings</a>
            </li>
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 md:w-auto">
              <a>Do not sell my personal information</a>
            </li>
            <li className="my-[9px] px-[15px] text-center md:border-r-2 w-1/2 md:w-auto">
              <a> Privacy</a>
            </li>
            <li className="my-[9px] px-[15px] text-center w-1/2 md:w-auto">
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
