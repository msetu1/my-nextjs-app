import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between bg-green-500 py-5 px-10 font-semibold text-xl text-white">
        <Link href="/" className="text-2xl font-bold text-black">
          MySide
        </Link>
        <div className="space-x-6 ">
          <Link href="/about" className="hover:text-gray-200">About Us</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact Us</Link>
          <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link href="/login" className="hover:text-gray-200">Login</Link>
          <Link href="/register" className="hover:text-gray-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
