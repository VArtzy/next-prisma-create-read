import Form from "@/components/Form"
import Posts from "@/components/Posts"
import Link from "next/link"

export default function Home() {
    return (
        <main className="p-8 max-w-5xl mx-auto">
            <Link
                href="/dashboard"
                className="bg-teal-700 text-gray-50 font-medium py-2 px-4 rounded-md"
            >
                Dashboard
            </Link>
            <h1 className="text-4xl my-6 font-bold text-center">
                Curated post that you'll like
            </h1>
            <Posts />
            <h2 className="text-3xl my-6 font-semibold text-center">
                Help other people by make your post
            </h2>
            <Form />
        </main>
    )
}
