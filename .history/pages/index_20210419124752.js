import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-gray-100 rounded-xl p-8">
        Google with nextjs and tailwindcss
      </h1>
    </div>
  );
}