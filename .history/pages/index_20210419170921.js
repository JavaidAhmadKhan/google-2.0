import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/*  className='linkRight */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/45966257?v=4" />
        </div>
      </header>
      {/* Body */}
      <form>
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div>
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="bg-red-500 focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
      </form>
      {/* Footer */}
    </div>
  );
}
