import { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '~/configs/google-analytics';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Tekken7 Movelist" />
        <meta
          name="description"
          content="Tekken7 Movelist. This shows commands and frame data of characters. It is good for newbies to learn game skills and knowledge."
        />
        <meta name="author" content="Aromahyang" />
        <meta
          name="keywords"
          content="Tekken7, Tekken7 Movelist, Tekken7 Frame, Tekken7 commands, 철권7, 철권7 프레임표, 철권7 무브리스트, 철권7 커맨드, 鉄拳7, 鉄拳7の攻略・フレームデータ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tekken7 Movelist" />
        <meta
          property="og:description"
          content="Tekken7 Movelists. This shows commands and frame data of characters."
        />
        <meta property="og:url" content="https://tekken7.movelist.xyz" />
        <meta name="robots" content="index,follow" />
        <link rel="shortcut icon" type="image/ico" href="/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* ==== Global site tag (gtag.js) - Google Analytics ==== */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  );
}
