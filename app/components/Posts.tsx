import React from 'react'
import { getSortedPostsData } from '@/lib/posts'

export default function Posts() {
    const posts = getSortedPostsData()
  return (
    <section className="mt-6 mx-auto max-w-2xl">
        <h2>
            <ul>
                {posts.map(post => (JSON.stringify(post)))}
            </ul>
        </h2>
    </section>
  )
}
