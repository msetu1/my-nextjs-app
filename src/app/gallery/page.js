import Image from "next/image";
import nextImg from "@/assets/nextjs-img-test.avif";

export const metadata = {
  title: " Mye Next App | Gallery",
};

const GalleryPage = () => {
  return (
    <div className="text-center ">
      <h2>Regular imag tag</h2>
      <img
        src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h2>Next js imag tag</h2>
      <Image
        src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
        alt="next.js img"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2>Local imag tag</h2>
      <Image
        src={nextImg}
        alt="next.js img"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
