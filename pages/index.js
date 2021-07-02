import Head from "next/head";
import First from "../components/First";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SHOUTOUT</title>
        <meta
          name="description"
          content="Shoutout is a social networking website where users can shout (share) photos, videos and even chat with their friends."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <First />
    </div>
  );
}
