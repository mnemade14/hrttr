import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

export default function PostCard({ post }) {
    return (
        <div className='dark:bg-black dark:bg-opacity-20 group relative flex flex-row w-full border border-sky-700 h-[120px] md:h-[150px] overflow-hidden sm:w-[500px] transition-all shadow-2xl hover:shadow-lg hover:shadow-sky-800'>
            <Link className='' to={`/post/${post.slug}`}>
                <div className='relative'>

                    <img
                        src={post.image}
                        alt='post cover'
                        className='h-[120px] min-w-[150px] w-[150px] md:h-[150px] md:min-w-[200px] md:w-[200px] group-hover object-cover transition-all duration-300 z-20'
                    />
                    <span className='absolute top-0 left-0 font-semibold text-sm p-1 rounded-br bg-sky-600 text-white'>{post.category}</span>
                </div>
            </Link>
            <div className='p-3 flex flex-col gap-2'>
                <p className='text-xs italics'>{new Date(post.updatedAt).toLocaleDateString()}</p>
                <p className='text-sm sm:text-lg font-semibold line-clamp-2'>{post.title}</p>
                <Link
                    to={`/post/${post.slug}`}
                    className='z-10 w-[150px] flex items-center gap-2  text-sm sm:text-lg lg:text-lg text-sky-500 dark:text-sky-200 hover:underline transition-all duration-300'
                >
                    Read more <FiArrowRight />
                </Link>
            </div>
        </div>
    );
}