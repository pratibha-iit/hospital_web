// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Hero from "./_components/Hero";
// import Pricing from "./_components/Pricing";
// import Footer from "./_components/Footer";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/login";
// import Register from "./pages/register";



// export default function Home() {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   </>
//   <div>
//     {/* hero / main section*/}
//     <Hero/>
//     {/* Pricing */}
//     <Pricing/>
//     {/* footer page*/}
//     <Footer/>

//   </div>
//   );
// }


// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Hero from "./_components/Hero";
// import Pricing from "./_components/Pricing";
// import Footer from "./_components/Footer";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       {/* Navigation Links */}
//       <nav>
//         <Link href="/">Home</Link>
//         <Link href="/login">Login</Link>
//         <Link href="/register">Register</Link>
//       </nav>

//       {/* Hero / main section */}
//       <Hero />

//       {/* Pricing */}
//       <Pricing />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
// page.js

import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import Footer from "./_components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* Navigation Links */}
            <nav className="hidden-nav flex gap-4 p-4">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Register</Link>
            </nav>

            {/* Hero / main section */}
            <Hero />

            {/* Pricing */}
            <Pricing />

            {/* Footer */}
            <Footer />
        </div>
    );
}
