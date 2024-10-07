"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaPinterest, FaSnapchat, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite size={21} />;
    case "TWITTER":
      return <FaXTwitter size={21} />;
    case "YOUTUBE":
      return <AiFillYoutube size={21} />;
    case "DISCORD":
      return <FaDiscord size={21} />;
    case "FACEBOOK":
      return <FaFacebookF size={21} />;
    case "INSTAGRAM":
      return <FaInstagram size={21} />;
    case "LINKEDIN":
      return <FaLinkedinIn size={21} />;
    case "TIKTOK":
      return <FaTiktok size={21} />;
    case 'PINTEREST':
      return <FaPinterest size={21} />;
    case 'SNAPCHAT':
      return <FaSnapchat size={21} />;
    default:
      return null;
  }
}

function RenderSocialLink({ link }: { link: FooterLink }) {
  const { social } = link;
  let bgColorClass = '';
  switch (social) {
    case "YOUTUBE":
      bgColorClass = 'bg-yt-red';
      break;
    case "DISCORD":
      bgColorClass = 'bg-fb-blue';
      break;
    case "FACEBOOK":
      bgColorClass = 'bg-fb-blue';
      break;
    case "INSTAGRAM":
      bgColorClass = 'bg-ig-red';
      break;
    case "LINKEDIN":
      bgColorClass = 'bg-li-blue';
      break;
    case 'PINTEREST':
      bgColorClass = 'bg-pt-red';
      break;
    case 'SNAPCHAT':
      bgColorClass = 'bg-sc-yel';
      break;
    case "TWITTER":
    case "TIKTOK":
    case "WEBSITE":
    default:
      bgColorClass = 'bg-black';
      break;
  }
  return (
    <a
      key={link.id}
      rel="noopener noreferrer"
      href={link.url}
      title={link.text}
      target={link.newTab ? "_blank" : "_self"}
      className={`flex items-center justify-center w-8 h-8 m:w-10 m:h-10 rounded-full ${bgColorClass}`}
    >
      <RenderSocialIcon social={social} />
    </a>
  );
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
  socialLinks,
  businessHours,
  phoneNumber,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  businessHours: any;
  phoneNumber: string;
}) {

  return (
    <footer className="py-6 bg-mec-dark-blue text-white">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-3">
            <Logo src={logoUrl}>
              {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
            </Logo>
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-2">
            <p className="pb-1 sm:text-md text-lg font-medium">Menu</p>
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-4">
            <p className="pb-1 sm:text-md text-lg font-medium">Phone Number: { phoneNumber }</p>
            <p className="pb-1 sm:text-md text-lg font-medium">Licensed and insured in the state of GA</p>
            <div className="flex gap-3">
              <FaCcVisa size={51} />
              <FaCcMastercard size={51} />
              <FaCcAmex size={51} />
              <BsCashStack size={51} />
            </div>
          </div>

          <div className="col-span-12 text-center md:text-left md:col-span-3">
            <p className="pb-1 sm:text-md text-lg font-medium">Business Hours</p>
              {businessHours &&
                <ul>
                  <li>Monday: {businessHours.Monday}</li>
                  <li>Tuesday: {businessHours.Tuesday}</li>
                  <li>Wednesday: {businessHours.Wednesday}</li>
                  <li>Thursday: {businessHours.Thursday}</li>
                  <li>Friday: {businessHours.Friday}</li>
                  <li>Saturday: {businessHours.Saturday}</li>
                  <li>Sunday: {businessHours.Sunday}</li>
                </ul>
              }
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <span className="mr-2 text-center">
              ©{new Date().getFullYear()} All rights reserved
            </span>
            <ul className="flex">
              {legalLinks.map((link: FooterLink) => (
                <Link
                  href={link.url}
                  className="text-gray-400 hover:text-gray-300 mr-2"
                  key={link.id}
                >
                  {link.text}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            {socialLinks.map((link: FooterLink) => {
              return <RenderSocialLink link={link} key={link.id} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
