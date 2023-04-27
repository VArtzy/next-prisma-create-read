"use client"

import getPosts from "@/utils/getPosts"
import { Post } from "@prisma/client"
import { useEffect, useState } from "react"

export default function Posts() {
    const [data, setData] = useState<Post[]>([])

    useEffect(() => {
        async function init() {
            const post = await getPosts()
            setData(post)
        }
        init()
    }, data)

    return (
        <div className="grid grid-cols-3 gap-8">
            {data.map((post) => (
                <div key={post.id} className="">
                    <h2 className="text-lg my-2 font-semibold">{post.title}</h2>
                    <p>
                        {post.content
                            ? post.content
                            : "this content is empty :("}
                    </p>
                </div>
            ))}
        </div>
    )
}
