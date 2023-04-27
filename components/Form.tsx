"use client"

import postPosts from "@/utils/postPosts"
import { Post } from "@prisma/client"
import React from "react"

export default function Form() {
    async function createPost(e: React.FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        const res = await postPosts(data)

        console.log(res)
        form.reset()
    }
    return (
        <form onSubmit={createPost} className="flex flex-col gap-8">
            <div className="">
                <label htmlFor="title">
                    Please give the title to your post
                </label>
                <input type="text" id="title" name="title" />
            </div>
            <label htmlFor="content">Content of your post</label>
            <textarea name="content" id="content" cols={30} rows={5}></textarea>
            <div className="">
                <label htmlFor="published">Is it published ready?</label>
                <input type="checkbox" name="published" id="published" />
            </div>
            <button type="submit">Post</button>
        </form>
    )
}
