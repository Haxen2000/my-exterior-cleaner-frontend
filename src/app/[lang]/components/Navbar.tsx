"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, Button, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Key, useState } from "react";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  page: { data: { attributes: { slug: string } } };
}

interface StrapiObject extends NavLink {
  __component: string;
  title?: string;
  links?: Array<NavLink>;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
  className?: string;
}

function NavLink({ url, text, page }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={page.data?.attributes.slug !== undefined && page.data?.attributes.slug !== 'home' ? page.data?.attributes.slug : (url || "")}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url ? "dark:text-violet-400 dark:border-violet-400" : ''
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu, className='' }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`${className}-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900 ${
          path === url ? "dark:text-violet-400 dark:border-violet-400" : ''
        }`}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<StrapiObject>;
  logoUrl: string | "/";
  logoText: string | null;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="p-4 bg-white text-mec-dark-blue navbar">
      <div className="container flex justify-between mx-auto px-0 sm:px-6">
        <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
        </Logo>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((item: StrapiObject, key: Key) => {
              if (item.__component === 'links.link') {
                var navItem = item;
                return <NavLink key={navItem.id} {...navItem} />
              }
              else {
                return (
                  <div className="relative inline-block text-left" key={key} >
                    <Button className="peer inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50">
                      {item.title}
                    </Button>

                    <div className="hidden peer-hover:flex hover:flex group- absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                      <div className="py-1">
                        {item.links?.map((link, itemKey:Key) => (
                          <div key={itemKey}>
                            <a
                              href={link.page.data?.attributes.slug !== undefined && link.page.data?.attributes.slug !== 'home' ? link.page.data?.attributes.slug : (link.url || "")}
                              className="block px-4 py-2 text-sm hover:text-mec-dark-blue data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                              {link.text}
                            </a>
                          </div>  
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
            }
            )}
          </ul>
        </div>

        <Dialog
          as="div"
          className="lg:hidden text-white mobile-nav"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />{" "}
          {/* Overlay */}
          <DialogPanel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Strapi</span>
                {logoUrl && <img className="h-8 w-auto" src={logoUrl} alt="" />}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6 text-white">
                  {links.map((item: StrapiObject, key: Key) => {
                    if (item.__component === 'links.link') {
                      var navItem = item;
                      return <MobileNavLink key={navItem.id} closeMenu={closeMenu} {...navItem} />
                    }
                    else {
                      return (
                        <div key={key}>
                          <div className='border-b leading-7 pt-2 !mt-0 mb-2 w-2/5 font-semibold'>{item.title}</div>
                          {item.links?.map((link, itemKey:Key) => (
                            <MobileNavLink
                              key={itemKey}
                              closeMenu={closeMenu}
                              className="ml-2 "
                              {...link}
                            />
                          ))}
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <button
          className="p-4 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
