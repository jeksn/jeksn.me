---
title: 'Adding RSS'
pubDate: '2024-09-28'
layout: 'blog'
---
::content-hero
# {{ title }}
{{ pubDate }}
::
::markdown-content

Managed to finally add an RSS feed to this site after struggling to get it working earlier. <br>
Found this great  [blog post](https://www.anuzpandey.com/blogs/rss-feed-with-nuxt-3-and-nuxt-content-v2) that worked after only a few small tweaks.

Just to try out code highlighting here is all the code in the `rss.ts.xml`

```ts
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
```

::
::back-to-notes
::