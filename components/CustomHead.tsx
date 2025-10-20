import Head from "next/head";

interface CustomHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export default function CustomHead({
  title,
  description,
  url = "https://juliesanguinetti.fr",
  image = "/images/og-image.png",
}: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Julie Sanguinetti" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />*/}

      <link rel="icon" href="/favicon1.ico" />
    </Head>
  );
}
