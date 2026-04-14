import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// ui
import LangguageButton from "../ui/langguageButton";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  LanguageIcon,
  LightBulbIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// const { t } = useTranslation();

// const navigation = [
//   { name: t('nav.home'), href: "/", },
//   { name: t('nav.about'), href: "/about" },
//   { name: t('nav.experience'), href: "/experience" },
//   { name: t('nav.myProject'), href: "/myProject" },
//   { name: t('nav.myDesign'), href: "/myDesign" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: "/", },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.experience'), href: "/experience" },
    { name: t('nav.project'), href: "/myProject" },
    { name: t('nav.design'), href: "/myDesign" },
  ];

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 w-full flex flex-col z-50 justify-center px-2 sm:px-4 md:px-6 lg:px-10 pr-2 sm:pr-4 md:pr-6 lg:pr-10 pt-5 bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="w-full">
        <div className="sticky top-0 bg-brand-0 rounded-full px-4 flex h-16 items-center justify-between">
          <div className="flex flex-1 lg:flex-none items-center pr-18 sm:pr-0 md:pr-0 pl-0 md:pl-8 lg:pl-0 justify-start lg:items-stretch lg:justify-between">
            <div className="flex shrink-0 items-center gap-1">
              <img
                alt="Pradima_Creative"
                src="../images/logo-nobg2_3.webp"
                className="h-12 w-auto"
              />
              <h2 className="text-sm font-semibold text-brand-900">
                Pradima_Creative Porto
              </h2>
            </div>
          </div>

          <div className="hidden sm:ml-6 content-center lg:block">
            <div className="flex gap-1">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isCurrent
                        ? "bg-brand-500/50 text-white px-5"
                        : "text-brand-1000/50 hover:bg-brand-200/50 hover:px-5 hover:text-brand-300",
                      "rounded-full px-3 py-2 text-sm font-medium duration-300",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden w-fit inset-y-0 right-0 items-center pr-5 gap-2 sm:ml-6 sm:pr-0 lg:flex">
            
            <Link
              to="/contact"              
              className="flex text-nowrap w-fit bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-500"
            >
              {t('nav.contact')}
            </Link>
            <LangguageButton type="Primary"/>
          </div>

          <div className="absolute inset-y-0 right-2 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-3 text-brand-1000 hover:text-brand-500 hover:bg-brand-50">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

        </div>
      </div>

      <DisclosurePanel className="bg-brand-0 rounded-3xl mt-4 lg:hidden">
        <div className="space-y-1 px-2 py-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-brand-500/50 text-white"
                  : "text-brand-1000/50 hover:bg-brand-50 hover:text-shadow-brand-800 hover:text-brand-300",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* <LangguageButton type="Primary"/>

          <Link
            className="bg-brand-1000 text-brand-0 py-2 px-6 rounded-full"
            to="/contact"
          >
            {t('nav.contact')}
          </Link> */}
          <div className="flex flex-row w-full inset-y-0 right-0 items-center gap-2">
            
            <Link
              to="/contact"              
              className="flex w-full text-nowrap justify-center bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-500"
            >
              {t('nav.contact')}
            </Link>
            <LangguageButton type="Primary"/>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
