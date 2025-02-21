import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px] text-center">
      <div>
      <h2 className="text-6xl">Welcome to next.js Home page</h2>
      <Link href='/dashboard' >
      <button className="text-center my-4 bg-green-500 text-xl px-5 py-2 text-white rounded-lg font-bold hover:bg-black">Dashboard</button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;