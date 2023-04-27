export default async function getPosts() {
    const res = await fetch(`http://localhost:3000/api/posts`)
    if (!res.ok) {
        console.log(res)
    }
    return res.json()
}
