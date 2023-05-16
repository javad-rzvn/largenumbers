let ORIGIN = "https://largenumbers.ir/numbers/";

function create_entry(path, lastmod) {
    return `<url>
    <loc>${new URL(path, ORIGIN).href}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

export async function GET({ fetch, setHeaders }) {
    setHeaders({
        'Content-Type': 'application/xml'
    });

    const response = await fetch('https://waterdirectory.ir/wp-json/wp/v2/posts?categories=265');

    if (!response.ok) {
        throw error(500, 'Failed to fetch posts.');
    }

    const raw_posts = await response.json();

    const posts = raw_posts.map((post) => create_entry(post.slug, post.modified));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.join('\n')}
</urlset>`;

    return new Response(sitemap);
}