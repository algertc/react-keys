import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <script defer data-domain="keys.charliealgert.com" src="https://analytics.charliealgert.com/js/script.js"></script>
            </Head>
            <body className="bg-black text-neutral-300">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
