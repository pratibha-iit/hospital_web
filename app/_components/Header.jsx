// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// function Header() {
//     const Menu = [
//         {
//             id: 1,
//             name: 'Home',
//             path: '/'
//         },
//         {
//             id: 2,
//             name: 'Membership',
//             path: '/membership'
//         },
//         {
//             id: 3,
//             name: 'V-fit Club',
//             path: '/vfit-club'
//         },
//         {
//             id: 4,
//             name: 'My AI',
//             path: '/my-ai'
//         },
//         {
//             id: 5,
//             name: 'About Us',
//             path: '/about'
//         },
//     ];

//     return (
//         <div className="flex items-center justify-between p-4 shadow-md"
//              style={{ background: 'linear-gradient(120deg, #0D1017, #3BE374)' }}>
//             {/* Logo Section */}
//             <div className="flex items-center gap-12">
//                 <div className="rounded-full px-6 py-2">
//                     <Image src='/logo.png' alt='logo' width={160} height={60} />
//                 </div>
                
//                 {/* Menu Links */}
//                 <ul className="md:flex gap-12 hidden">
//                     {Menu.map((item) => (
//                         <li key={item.id} className="text-white text-lg hover:text-green-400 cursor-pointer hover:scale-105 transition-transform ease-in-out">
//                             <Link href={item.path}>{item.name}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Login Button */}
//             <Link href="/login">
//                 <Button className="bg-green-800 hover:bg-green-700 text-white rounded-full px-6 py-2">
//                     Login
//                 </Button>
//             </Link>
//         </div>
//     );
// }

// export default Header;


// Header.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
    // Menu items array for navigation
    const Menu = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Membership', path: '/membership' },
        { id: 3, name: 'V-fit Club', path: '/vfit-club' },
        { id: 4, name: 'My AI', path: '/my-ai' },
        { id: 5, name: 'About Us', path: '/about' },
    ];

    return (
        <div className="flex items-center justify-between p-4 shadow-md"
             style={{ background: 'linear-gradient(110deg, #0D1017, #3BE374)' }}>
             
            {/* Logo Section */}
            <div className="flex items-center gap-12">
                <div className="rounded-full px-6 py-2">
                    <Image src="/logo.png" alt="logo" width={160} height={60} />
                </div>
                
                {/* Navigation Menu */}
                <ul className="md:flex gap-12 hidden">
                    {Menu.map((item) => (
                        <li key={item.id} className="text-white text-lg hover:text-green-400 cursor-pointer hover:scale-105 transition-transform ease-in-out">
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Login Button */}
            <Link href="/login">
                <Button className="bg-green-800 hover:bg-green-700 text-white rounded-full px-6 py-2">
                    Login
                </Button>
            </Link>
        </div>
    );
}

export default Header;
