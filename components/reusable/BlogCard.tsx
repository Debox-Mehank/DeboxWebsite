import moment from "moment"
import Image from "next/image"
import { Blog } from "../../pages/blogs"

interface BlogCardProps {
    blog: Blog
}

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <div className="w-full bg-white rounded-md shadow-md">
            <div className="w-full h-72 lg:h-96 relative">
                <Image src={blog.image} alt={blog.title} objectFit="cover" layout="fill" className="rounded-t-md" />
            </div>
            <div className="p-6 flex flex-col gap-2">
                <h4 className="w-full text-xl font-bold tracking-widest text-left">
                    {blog.title}
                </h4>
                <p className="w-full text-sm font-normal tracking-widest text-left text-gray-500">
                    {blog.author}, {moment(blog.createdAt).format("MMM DD, YYYY")}
                </p>
                <p className="w-full text-sm font-normal tracking-widest text-left py-4">
                    {blog.excerpt}
                </p>
                <div className="text-xs bg-primary text-white rounded-sm w-max p-2 cursor-pointer shadow-sm">
                    Read More
                </div>
            </div>
        </div>
    )
}

export default BlogCard