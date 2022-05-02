import { useEffect, useState } from "react"
import BlogCard from "../components/reusable/BlogCard"
import { getCategories, getPosts } from "../services/index"

export interface Blog {
    title: string
    excerpt: string
    content: string
    image: string
    featured: boolean
    slug: string
    author: string
    createdAt: number
}

export interface PostCategory {
    name: string
    slug: string
}

// const data: Blog[] = [
//     {
//         title: "Increasing website performance by using custom solutions",
//         content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
//         excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         featured: false,
//         image: "https://media.graphassets.com/WQyKSMKmQmSx2Ml4S1rd",
//         slug: "increase-website-performance",
//         author: "Mehank Jain"
//     },
//     {
//         title: "Increasing website performance by using custom solutions",
//         content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
//         excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//         featured: false,
//         image: "https://media.graphassets.com/WQyKSMKmQmSx2Ml4S1rd",
//         slug: "increase-website-performance",
//         author: "Mehank Jain"
//     },
// ]

const blogs = () => {
    const [posts, setPosts] = useState<Blog[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])

    useEffect(() => {
        const fetch = async () => {
            const posts = await getPosts();
            const typedposts: Blog[] = []
            for (let index = 0; index < posts.length; index++) {
                const element = posts[index].node;
                const blogpost: Blog = {
                    title: element.title,
                    author: element.author.name,
                    content: element.content.text,
                    excerpt: element.excerpt,
                    featured: element.featured,
                    image: element.image.url,
                    slug: element.slug,
                    createdAt: element.createdAt
                }
                typedposts.push(blogpost)
            }
            setPosts(typedposts)

            // fetch categories
            const cate = await getCategories()
            const typedcate: PostCategory[] = []
            for (let index = 0; index < cate.length; index++) {
                const element = cate[index];
                const postcate: PostCategory = {
                    slug: element.slug,
                    name: element.name
                }
                typedcate.push(postcate)
            }
            setCategories(typedcate)
        }
        fetch()
    }, [])

    return (
        <div className="w-full mb-20 mt-28 lg:mt-36 px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
                <div className="lg:col-span-3 lg:block hidden">
                    <div className="lg:sticky relative top-36">
                        <br />
                        <div className="w-full pt-6 px-6 bg-white rounded-md shadow-md">
                            <h4 className="w-full text-xl font-bold tracking-widest text-left">
                                Categories
                            </h4>
                            <br />
                            {categories.map((cate, idx) => {
                                return (
                                    <p key={idx} className="w-full text-sm font-normal tracking-widest text-left py-2">
                                        {cate.name}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center w-full col-span-1 lg:col-span-7">
                    <br />
                    {/* Blog Posts */}
                    <div className="flex flex-col gap-8 w-full">
                        {posts.map((blog, idx) => {
                            return (
                                <BlogCard blog={blog} key={idx} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    console.log("Called");
    const posts = await getPosts()
    console.log(posts);

    return {
        props: { posts: [] }
    }
}

export default blogs