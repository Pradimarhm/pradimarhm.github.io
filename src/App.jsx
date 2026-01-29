// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'

// import Ballpit from './components/bg/Ballpit.component'
// import Home from './components/home.component'

// const navigation = [
//   { name: 'Home', href: '#', current: true },
//   { name: 'About', href: '#', current: false },
//   { name: 'Experience', href: '#', current: false },
//   { name: 'My Project', href: '#', current: false },
//   { name: 'My Design', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className='min-h-screen px-2 sm:px-4 md:px-6 lg:px-10 overflow-x-hidden bg-none'>
//       <Disclosure
//         as="nav"
//         className="fixed w-full pr-4 sm:pr-8 md:pr-12 lg:pr-20 pt-5 z-20 bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
//       >
//         <div className="mx-none w-full">
//           <div className="relative bg-brand-0 rounded-full px-2 sm:px-4 lg:px-5 py-8 flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
//               {/* Mobile menu button*/}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-5 text-brand-1000 hover:bg-white/5 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//                 <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//               </DisclosureButton>
//             </div>
            
//             <div className="flex flex-1 lg:flex-none items-center justify-center lg:items-stretch lg:justify-start">
//               <div className="flex shrink-0 items-center gap-1">
//                 <img
//                   alt="Pradima_Creative"
//                   src="./src/assets/logo-nobg2_3.webp"
//                   className="h-12 w-auto"
//                 />
//                 <h2 className='text-sm font-semibold text-brand-900'>Pradima_Creative Porto</h2>
//               </div>
//             </div>

//             <div className="hidden sm:ml-6 content-center lg:block">
//               <div className="flex gap-1">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-brand-500/50 text-white px-5' : 'text-brand-1000/50 hover:bg-white/5 hover:text-brand-300',
//                       'rounded-full px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             <div className="absolute inset-y-0 right-0 flex items-center pr-5 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <button className='hidden bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-400'>Let's Connected</button>
//               <button
//                 type="button"
//                 className="relative rounded-full p-2 text-brand-500 bg-brand-100 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View notifications</span>
//                 {/* <BellIcon aria-hidden="true" className="size-6" /> */}
//                 {/* <MoonIcon aria-hidden="true" className="size-6" /> */}
//                 <SunIcon aria-hidden="true" className="size-6" />
//               </button>

//               {/* Profile dropdown */}
//               {/* <Menu as="div" className="relative ml-3">
//                 <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
//                   />
//                 </MenuButton>

//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//                 >
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
//                     >
//                       Your profile
//                     </a>
//                   </MenuItem>
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
//                     >
//                       Settings
//                     </a>
//                   </MenuItem>
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
//                     >
//                       Sign out
//                     </a>
//                   </MenuItem>
//                 </MenuItems>
//               </Menu> */}
//             </div>
//           </div>
//         </div>

//         <DisclosurePanel className="bg-brand-0 rounded-2xl mt-4 lg:hidden">
//           <div className="space-y-1 px-2 pt-2 pb-3">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? 'page' : undefined}
//                 className={classNames(
//                   item.current ? 'bg-brand-500/50 text-white' : 'text-brand-1000/50 hover:bg-brand-50 hover:text-shadow-brand-800 hover:text-brand-300',
//                   'block rounded-md px-3 py-2 text-base font-medium',
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}

//             <button className='bg-brand-1000 text-brand-0 py-2 px-6 rounded-full'>Let's Connected</button>
//           </div>
//         </DisclosurePanel>
//       </Disclosure>

//       <Home/>      

//       <div className='absolute w-screen top-0 left-0 h-screen -z-10'>
//         <Ballpit
//           count={100}
//           gravity={0.01}
//           friction={0.9975}
//           wallBounce={0.95}
//           followCursor={false}
//           colors={[0x000C1B, 0x002D64, 0x004495]}
//           ambientColor={0x000102}
//           className="bg-brand-1000"
//         />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from './components/home.component'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, LanguageIcon, LightBulbIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'My Project', href: '#', current: false },
  { name: 'My Design', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  return (
    <body className='min-h-screen overflow-x-hidden bg-brand-1000'>
      <Disclosure
        as="nav"
        className="fixed w-full px-2 sm:px-4 md:px-6 lg:px-10 pr-2 sm:pr-4 md:pr-6 lg:pr-10 pt-5 z-20 bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
      >
        <div className="mx-none w-full">
          <div className="relative bg-brand-0 rounded-full px-2 sm:px-4 lg:px-5 py-8 flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-5 text-brand-1000 hover:bg-white/5 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            
            <div className="flex flex-1 lg:flex-none items-center pr-18 sm:pr-0 md:pr-0 pl-0 md:pl-8 lg:pl-0 justify-center sm:justify-center lg:items-stretch lg:justify-start">
              <div className="flex shrink-0 items-center gap-1">
                <img
                  alt="Pradima_Creative"
                  src="./src/assets/logo-nobg2_3.webp"
                  className="h-12 w-auto"
                />
                <h2 className='text-sm font-semibold text-brand-900'>Pradima_Creative Porto</h2>
              </div>
            </div>

            <div className="hidden sm:ml-6 content-center lg:block">
              <div className="flex gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-brand-500/50 text-white px-5' : 'text-brand-1000/50 hover:bg-white/5 hover:text-brand-300',
                      'rounded-full px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-5 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className='hidden bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-500'>Let's Connected</button>
              <button
                type="button"
                className="relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Theme</span>
                {/* <BellIcon aria-hidden="true" className="size-6" /> */}
                {/* <MoonIcon aria-hidden="true" className="size-6" /> */}
                <SunIcon aria-hidden="true" className="size-6" />
              </button>
              <button
                type="button"
                className="relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Theme</span>
                {/* <BellIcon aria-hidden="true" className="size-6" /> */}
                {/* <MoonIcon aria-hidden="true" className="size-6" /> */}
                <LanguageIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Your profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu> */}
            </div>
          </div>
        </div>

        <DisclosurePanel className="bg-brand-0 rounded-2xl mt-4 lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-brand-500/50 text-white' : 'text-brand-1000/50 hover:bg-brand-50 hover:text-shadow-brand-800 hover:text-brand-300',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}

            <button className='bg-brand-1000 text-brand-0 py-2 px-6 rounded-full'>Let's Connected</button>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* <div className='z-20'>  */}
        <Home/> 
      {/* </div>      */}
    </body>
  )
}

export default App

