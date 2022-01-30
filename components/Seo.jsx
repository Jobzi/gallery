import Head from 'next/head'

export default function HeadSeo ({ page = 'YawGallery', section = 'Home', description = 'Hello, welcome to best place to share his experiences' }) {
  return (
    <>
      <Head>
        <title>{page} | {section}</title>
        <meta name='description' content={description}/>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
        <link rel="manifest" href="/fav/site.webmanifest"/>
        <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
    </>
  )
}
