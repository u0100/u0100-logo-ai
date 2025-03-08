
import GithubSVG from "../../public/Github.svg";
import Image from "next/image";
import telegram from '@/public/telegram.svg'


const Footer = () => (
  <div className="flex flex-col items-center justify-between bg-[#141414] px-4 py-4 md:flex-row">
    <div className="mb-2 flex-grow pl-0 text-center md:mb-0 md:pl-0 lg:pl-48">
      <span className="text-sm text-[#6F6F6F]">
        Company Logo Generator By {" "}
        <a href="https://github.com/u0100" className="underline" target="_blank">
        u0100
        </a>{" "}
      </span>
    </div>
    <div className="mb-2 flex space-x-3 md:mb-0">
      <a
        href="https://github.com/Nutlope/logocreator"
        className="flex items-center rounded border border-[#6F6F6F] px-2 py-1 text-sm text-[#6F6F6F]"
      >
        <Image src={GithubSVG} alt="GitHub" className="mr-1 h-4 w-4 brightness-0 invert" />
        Github
      </a>
      <a
        href="https://t.me/u00110"
        className="flex items-center rounded border border-[#6F6F6F] px-2 py-1 text-sm text-[#6F6F6F]"
      >
        <Image src={telegram} alt="Telegram" className="mr-1 h-4 w-4 invert" />
        Telegram
      </a>
    </div>
  </div>
);

export default Footer;
