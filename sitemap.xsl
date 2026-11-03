<?xml version="1.0" encoding="UTF-8"?>
<!--
  NXTSDEV sitemap stylesheet — renders /sitemap.xml as a clean,
  branded, human-readable table in a browser. Crawlers ignore this
  and read the raw XML. Brand: paper #f5f3ef, ink #111110, gold #b08a1e.
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — NXTSDEV · Mehtab Hassan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f5f3ef; color: #111110;
                 font-family: "Inter", system-ui, -apple-system, sans-serif;
                 -webkit-font-smoothing: antialiased; }
          .wrap { max-width: 1080px; margin: 0 auto; padding: 56px 24px 72px; }
          .eyebrow { font-size: 11px; letter-spacing: .32em; text-transform: uppercase;
                     font-weight: 600; color: #b08a1e; margin: 0 0 14px; }
          h1 { font-family: "Archivo", "Inter", sans-serif; font-size: clamp(34px, 6vw, 56px);
               line-height: 1.02; letter-spacing: -.02em; margin: 0 0 14px; font-weight: 800; }
          h1 span { color: #b08a1e; }
          .lede { color: #4c4a44; max-width: 620px; line-height: 1.65; margin: 0 0 8px; }
          .meta { color: #4c4a44; font-size: 13px; margin: 0 0 36px; }
          .meta strong { color: #111110; }
          table { width: 100%; border-collapse: collapse; background: #fffdf8;
                  border: 1px solid rgba(17,17,16,.12); }
          th { text-align: left; font-size: 11px; letter-spacing: .22em; text-transform: uppercase;
               color: #f5f3ef; background: #111110; padding: 14px 16px; font-weight: 600; }
          td { padding: 13px 16px; border-top: 1px solid rgba(17,17,16,.08);
               font-size: 14px; vertical-align: top; }
          tr:hover td { background: rgba(212,175,55,.08); }
          td.url a { color: #111110; font-weight: 600; text-decoration: none;
                     border-bottom: 1.5px solid rgba(176,138,30,.45); word-break: break-all; }
          td.url a:hover { color: #b08a1e; }
          td.num { color: #4c4a44; white-space: nowrap; }
          .pill { display: inline-block; padding: 2px 9px; border: 1px solid rgba(176,138,30,.55);
                  color: #8a6d15; font-size: 12px; font-weight: 600; border-radius: 999px; }
          footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(17,17,16,.12);
                   color: #4c4a44; font-size: 12.5px; display: flex; justify-content: space-between;
                   gap: 16px; flex-wrap: wrap; }
          footer a { color: #111110; font-weight: 600; }
          @media (max-width: 640px) { .hide-m { display: none; } td, th { padding: 11px 12px; } }
        </style>
      </head>
      <body>
        <main class="wrap">
          <p class="eyebrow">NXTSDEV — XML Sitemap</p>
          <h1>Site<span>map</span></h1>
          <p class="lede">Every public page on nxtsdev.eu.org, listed for search engines —
             and styled so humans can read it too. This is the portfolio of Mehtab Hassan:
             freelance development, design, AI integrations, cloud work and social media marketing.</p>
          <p class="meta"><strong><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs</strong>
             · generated from the same content file that builds the site, so it can never drift out of date.</p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th class="hide-m">Last modified</th>
                <th class="hide-m">Change frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <tr>
                  <td class="num"><xsl:value-of select="position()"/></td>
                  <td class="url"><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                  <td class="num hide-m"><xsl:value-of select="substring(sm:lastmod, 1, 10)"/></td>
                  <td class="num hide-m"><xsl:value-of select="sm:changefreq"/></td>
                  <td><span class="pill"><xsl:value-of select="sm:priority"/></span></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <footer>
            <span>© Mehtab Hassan — NXTSDEV</span>
            <a href="https://nxtsdev.eu.org/">nxtsdev.eu.org</a>
          </footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
