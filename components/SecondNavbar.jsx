import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot hidden sm:flex">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Services <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <Link className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">Unstyled, accessible components for React.</p>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <li className="ListItem" href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </li>
              <li className="ListItem" href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </li>
              <li className="ListItem" href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Pricing <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <li className="ListItem" title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </li>
              <li className="ListItem" title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </li>
              <li className="ListItem" title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </li>
              <li className="ListItem" title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </li>
              <li className="ListItem" title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </li>
              <li className="ListItem" title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Resources
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Events
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className='pt-4 pb-1 fs-lg'>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Contact
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



export default NavigationMenuDemo;
