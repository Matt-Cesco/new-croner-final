import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const SecondNavbar = () => {
  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item className="mx-2">
          <NavigationMenu.Trigger className="flex items-center px-3 py-2 text-sm font-semibold">
            Services{" "}
            <CaretDownIcon
              className="CaretDown transition-transform"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-white top-0 left-0">
            <div className="lg:w-60 p-3">
              <div className="w-full flex flex-col">
                <NavigationMenu.Link className="w-full px-4 py-3" href="">
                  <span className="text-sm">HR Services</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Employment law services</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Health & Safety Services</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Pay & Reward services</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Additional services</span>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="mx-2">
          <NavigationMenu.Link
            href="/Pricing"
            className="flex items-center px-3 py-2 text-sm font-semibold"
          >
            Pricing
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="mx-2">
          <NavigationMenu.Trigger className="px-3 py-2 text-sm font-semibold">
            <NavigationMenu.Link
              className="flex items-center"
              href="/Resources"
            >
              Resources{" "}
              <CaretDownIcon
                className="CaretDown relative transition-transform"
                aria-hidden
              />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-white left-40">
            <div className="lg:w-60 p-3">
              <div className="w-full flex flex-col">
                <NavigationMenu.Link className="w-full px-4 py-3" href="">
                  <span className="text-sm">Blog articles</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Free downloads</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Online calculators</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Business Health Check</span>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="mx-2">
          <NavigationMenu.Trigger className="flex items-center px-3 py-2 text-sm font-semibold">
            Events{" "}
            <CaretDownIcon
              className="CaretDown relative transition-transform"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-white left-60">
            <div className="lg:w-60 p-3">
              <div className="w-full flex flex-col space-y-2">
                <NavigationMenu.Link className="w-full px-4 py-3" href="">
                  <span className="text-sm">Find an event</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Co-host with Croner</span>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="mx-2">
          <NavigationMenu.Trigger className="flex items-center px-3 py-2 text-sm font-semibold">
            About{" "}
            <CaretDownIcon
              className="CaretDown relative transition-transform"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-white left-80">
            <div className="lg:w-60 p-3">
              <div className="w-full flex flex-col space-y-2">
                <NavigationMenu.Link className="w-full px-4 py-3" href="">
                  <span className="text-sm">Awards & Accreditations</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Client Referral Programme</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Partners</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Careers</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Case studies</span>
                </NavigationMenu.Link>
                <NavigationMenu.Link
                  className="w-full px-4 py-3"
                  href=""
                >
                  <span className="text-sm">Testimonials</span>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item asChild className="mx-2">
          <NavigationMenu.Link
            href=""
            className="flex items-center px-3 py-2 text-sm font-semibold"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="z-10 top-[100%] flex items-end justify-center h-2 overflow-hidden radix-state-visible:animate-fade-in radix-state-hidden:animate-fade-out transition-[width_transform] duration-[250ms] ease-[ease]">
          <div className="top-1 relative bg-white dark:bg-gray-800 w-2 h-2 rotate-45" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div
        className="absolute flex justify-center top-full left-0"
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenu.Viewport className="relative mt-2 shadow-lg rounded-md bg-white dark:bg-gray-800 radix-state-open:animate-scale-in-content radix-state-closed:animate-scale-out-contentm origin-[top_center] transition-[width_height] duration-300 ease-[ease]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default SecondNavbar;
