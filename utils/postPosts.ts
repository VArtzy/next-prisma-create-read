export default async function postPosts(data: any) {
    const res = await fetch(`http://localhost:3000/api/posts`, {
        method: "POST",
        body: JSON.stringify(data),
    })
    if (!res.ok) {
        console.log(res)
    }
    return res.json()
}
