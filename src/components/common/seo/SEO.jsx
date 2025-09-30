// components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Divine Homoeo Care",
  description = "Expert homoeopathic treatment with compassion and care.",
  keywords = "homoeopathy, treatment, healthcare, natural cure, Divine Homoeo Care",
  author = "Divine Homoeo Care",
  url = "https://www.divinehcare.com", // change to your domain
  image = "https://www.divinehcare.com/logo.svg", // fallback image
}) => {
  return (
    <Helmet>
      {/* ✅ Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* ✅ Open Graph (Facebook, Instagram, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@yourTwitterHandle" /> {/* optional */}

      {/* ✅ Google / General */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
    </Helmet>
  );
};

export default SEO;
