import Head from "next/head";
import Avatar from "../components/Avatar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-l text-gray-700">
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
          <ViewGridIcon />
          <Avatar url="https://avatars.githubusercontent.com/u/45966257?v=4" />
        </div>
      </header>
      {/* Body */}

      {/* Footer */}
    </div>
  );
}
