import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, schema }) => {
    const siteTitle = "Dumwala";
    const defaultDescription = "Authentic Dum Biryani, slow-cooked to perfection in the royal tradition. Order the best Hyderabadi biryani online.";

    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Premium Authentic Dum Biryani`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || defaultDescription} />

            {/* Canonical */}
            {canonical && <link rel="canonical" href={`https://dumwala.com${canonical}`} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
