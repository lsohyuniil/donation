import Image from "next/image";
import github from "@/assets/images/github.svg";

const Footer = () => {
  return (
    <footer className="border-t border-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-5 px-6 py-4 text-center text-xs lg:h-[160px] lg:flex-row lg:gap-10 lg:text-sm">
        <span className="text-zik-text/50">
          Copyright © 2025 GiveLink | All Rights Reserved
        </span>

        <div className="flex items-center space-x-4 md:gap-4">
          <a
            href="https://github.com/lsohyuniil"
            target="_blank"
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-lg bg-white">
              <Image src={github} alt="sohyun's github" className="block" />
            </div>
            <span className="text-zik-text hidden font-medium md:inline">
              LSH
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
