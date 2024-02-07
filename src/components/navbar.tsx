import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between font-medium">
      <Image
        src="/image/Logo.png"
        alt="Logo"
        width={46}
        height={47}
        className="cursor-pointer"
      />
      <div className="flex items-center justify-between gap-16 px-6 py-4 bg-gray-50 rounded-3xl">
        <Link href="#home" className="font-semibold text-blue-500">
          Home
        </Link>
        <Link href="#about">About us</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact Us</Link>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center">
          <p className="text-sm font-normal">EN</p>
          <Image
            src="/icons/down-arrow.svg"
            alt="down-arrow"
            width={16}
            height={16}
            className="animate-bounce"
          />
        </div>
        <button className="px-6 py-4 text-base font-medium text-white bg-blue-500 rounded-full cursor-pointer">
          Schedule a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
