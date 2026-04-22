import { Head } from "@inertiajs/react";

export default function SEO({
    title,
    description,
    url,
    image = "/images/logo.png",
}) {
    const fullTitle = title ? `${title} | Group Himalaya` : "Group Himalaya";

    return (
        <Head>
            <title>{fullTitle}</title>

            <meta name="description" content={description} />

            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />

            {/* JSON-LD (FIXED) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Gorup Himalaya",
                        url: url,
                        logo: "/images/logo.png",
                    }),
                }}
            />
        </Head>
    );
}