import React, { Fragment } from "react"
import Head from "next/head"

interface Props {
  title: string
  metaValues: {
    ogSiteName?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    twitterCard?: string
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: string
  }
}

const Layout: React.FC<Props> = ({
  title,
  children,
  metaValues: {
    twitterTitle = "Caliapp",
    twitterCard = "summary_large_image",
    twitterDescription = "Put your calisthenics training on whole new level!",
    twitterImage = "",
    ogDescription = "Put your calisthenics training on whole new level!",
    ogImage = "",
    ogSiteName = "Caliapp.com",
    ogTitle = "Caliapp"
  }
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={ogDescription} />
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@caliapp" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
      </Head>
      {children}
    </Fragment>
  )
}

export default Layout
