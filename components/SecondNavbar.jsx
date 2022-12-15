import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const SecondNavbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot relative hidden sm:block">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-sm font-semibold">
            Services <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Link className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <li
                className="ListItem"
                href="https://stitches.dev/"
                title="Stitches"
              >
                CSS-in-JS with best-in-class developer experience.
              </li>
              <li className="ListItem" href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </li>
              <li
                className="ListItem"
                href="https://icons.radix-ui.com/"
                title="Icons"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Link
            className="NavigationMenuLink font-semibold text-sm"
            href="PricingSinglePage"
          >
            PricingSinglePage
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Link
            className="NavigationMenuLink font-semibold text-sm"
            href="PricingMultiPage"
          >
            PricingMultiPage
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Link
            className="NavigationMenuLink font-semibold text-sm"
            href="/Resources"
          >
            Resources
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Link
            className="NavigationMenuLink font-semibold text-sm"
            href=""
          >
            Events
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="pt-3 pb-1">
          <NavigationMenu.Link
            className="NavigationMenuLink font-semibold text-sm"
            href="/About"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default SecondNavbar;
