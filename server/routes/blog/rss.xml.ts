import RSS from 'rss'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {

    const BASE_URL = 'https://jeksn.me'

    const feed = new RSS({
        title: 'jeksn | Blog',
        site_url: BASE_URL,
        feed_url: `${BASE_URL}/blog/rss.xml`,
        description: 'A blog by jeksn.',
    })

    const docs = await serverQueryContent(event)
        .sort({ pubDate: -1 })
        .where({ _partial: false })
        .find()

    // Filter out the blog posts.
    const posts = docs.filter((doc) => doc?._path?.includes('/blog'))

    for (const post of posts) {
        feed.item({
            title: post.title ?? '-',
            url: `${BASE_URL}${post._path}`,
            date: post.pubDate,
            description: post.description,
            author: post.author,
          })
    }

    const feedString = feed.xml({ indent: true })
    event.res.setHeader('content-type', 'text/xml')
    event.res.end(feedString)
})
