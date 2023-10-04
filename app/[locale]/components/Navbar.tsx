import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import UK from "../../../public/english.png";
import FR from "../../../public/french.png";
import SP from "../../../public/Flag_of_Spain_Flat_Round.png";
import Image from "next/image";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <header className="bg-slate-400 font-bold">
      <nav className="p-5">
        <div className="flex justify-end">
          <Link href="/" locale="en">
            <Image
              src={UK}
              alt="united kingdom flag icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href="/" locale="sp" className="ml-6">
            <Image src={SP} alt="spanish flag icon" width={20} height={20} />
          </Link>
          <Link href="/" locale="fr" className="ml-6">
            <Image src={FR} alt="spanish flag icon" width={20} height={20} />
          </Link>
        </div>
        <div className="flex justify-start uppercase">
            <div className="mr-4">
                <Link href={'/'}>{t('home')}</Link>
            </div>
            <div className="mr-4">
            <Link href={'/about'}>{t('about')}</Link>
            </div>
            <div className="mr-4">
            <Link href={'/contact'}>{t('contact')}</Link>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
