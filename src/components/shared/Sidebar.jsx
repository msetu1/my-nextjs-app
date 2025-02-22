import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <Link href='/'>
      <h1 className="text-2xl font-bold mb-6 text-center pt-4">My Sidebar</h1>
      </Link>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block px-4 py-2 rounded hover:text-gray-700">
          Dashboard
        </Link>
        <Link href="/profile" className="block px-4 py-2 rounded hover:text-gray-700">
          Profile
        </Link>
        <Link href="/settings" className="block px-4 py-2 rounded hover:text-gray-700">
         Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
