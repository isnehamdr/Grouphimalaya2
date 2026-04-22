// import MainWrapper from '@/MainComponents/MainWrapper'
// import { Head, Link } from '@inertiajs/react'
// import parse from 'html-react-parser'
// import blogFallback from '../../../public/images/blog_image.avif'

// // Converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
// const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

// const BlogDetail = ({ blog, relatedBlogs = [] }) => {
//   // Use storageUrl() for DB-stored image path, fallback to local asset
//   const heroImage = blog?.image ? storageUrl(blog.image) : blogFallback

//   return (
//     <MainWrapper>
//       <Head>
//         <title>{blog?.title ? `${blog.title} | Blog` : 'Blog Detail | Himalaya Organization'}</title>
//         {blog?.meta_description && (
//           <meta name="description" content={blog.meta_description} />
//         )}
//       </Head>

//       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
//         <section
//           className='relative overflow-hidden rounded-2xl min-h-[55vh] sm:min-h-[70vh] lg:min-h-[82vh] bg-cover bg-center bg-no-repeat flex items-end'
//           style={{ backgroundImage: `url(${heroImage})` }}
//         >
//           <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/90' />
//           <div className='relative z-10 w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16'>
//             <div className='max-w-4xl'>
//               {/* <Link
//                 href='/blog'
//                 className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white'
//               >
//                 Back to Blog
//               </Link> */}
//               {/* <div className='mt-6 flex flex-wrap gap-3 text-sm text-white/70'>
//                 <span className='rounded-full border border-[#b88a42]/40 bg-[#b88a42]/15 px-3 py-1 capitalize'>
//                   {blog?.status}
//                 </span>
//                 <span>{new Date(blog?.created_at).toLocaleDateString()}</span>
//               </div> */}
//               <h1 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
//                 {blog?.title}
//               </h1>
//               {/* {blog?.meta_description && (
//                 <p className='mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg'>
//                   {blog.meta_description}
//                 </p>
//               )} */}
//             </div>
//           </div>
//         </section>

//         <section className='px-2 py-10 sm:px-6 lg:px-20 lg:py-16'>
//           <div className='grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px]'>
//             <article className='rounded-[2rem] border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10'>
//               <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#d2a15a]'>
//                 {parse(blog?.content || '')}
//               </div>
//             </article>

//             <aside className='space-y-5'>
//               <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
//                 <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Article Info</p>
//                 <div className='mt-5 space-y-4 text-sm text-gray-300'>
//                   <div>
//                     <p className='text-white'>Published</p>
//                     <p>{new Date(blog?.created_at).toLocaleDateString()}</p>
//                   </div>
//                   <div>
//                     <p className='text-white'>Slug</p>
//                     <p>{blog?.slug}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
//                 <div className='flex items-center justify-between gap-4'>
//                   <p className='text-xl font-medium text-white'>More Articles</p>
//                   <Link href='/blog' className='text-sm text-[#d2a15a] hover:text-[#e1b36d]'>
//                     View all
//                   </Link>
//                 </div>

//                 <div className='mt-5 space-y-4'>
//                   {relatedBlogs.length > 0 ? relatedBlogs.map((item) => (
//                     <Link
//                       key={item.id}
//                       href={`/blogs/${item.slug}`}
//                       className='block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/10'
//                     >
//                       <p className='text-lg font-medium text-white'>{item.title}</p>
//                       {/* <p className='mt-2 line-clamp-2 text-sm text-gray-400'>
//                         {item.meta_description || 'Read the full article for more details.'}
//                       </p> */}
//                     </Link>
//                   )) : (
//                     <p className='text-sm text-gray-400'>No related articles available.</p>
//                   )}
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </section>
//       </div>
//     </MainWrapper>
//   )
// }

// export default BlogDetail


import MainWrapper from '@/MainComponents/MainWrapper'
import { Head, Link } from '@inertiajs/react'
import parse from 'html-react-parser'
import blogFallback from '../../../public/images/blog_image.avif'
import SEO from '@/Components/SEO'

// Converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

const BlogDetail = ({ blog, relatedBlogs = [] }) => {
  // Use storageUrl() for DB-stored image path, fallback to local asset
  const heroImage = blog?.image ? storageUrl(blog.image) : blogFallback
  
  // Get current URL for canonical
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://www.himalayaorganization.com/blogs/${blog?.slug}`

  // SEO data for the blog post
  const seoData = {
    title: blog?.title ? `${blog.title} | Himalaya Organization Blog` : 'Blog Detail | Himalaya Organization',
    description: blog?.meta_description || blog?.excerpt || `Read ${blog?.title} on Himalaya Organization's official blog. Insights on Nepal's automotive, agriculture, banking, and real estate sectors.`,
    url: currentUrl,
    image: heroImage,
  }

  return (
    <MainWrapper>
      {/* Use SEO component correctly - only once */}
      <SEO {...seoData} />
      
      {/* Additional blog-specific meta tags */}
      <Head>
        {blog?.meta_description && (
          <meta name="description" content={blog.meta_description} />
        )}
        {blog?.keywords && (
          <meta name="keywords" content={blog.keywords} />
        )}
        <meta name="author" content="Himalaya Organization" />
        <meta property="article:published_time" content={blog?.created_at} />
        <meta property="article:modified_time" content={blog?.updated_at} />
        {blog?.tags && blog.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
      </Head>

      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        <section
          className='relative overflow-hidden rounded-2xl min-h-[55vh] sm:min-h-[70vh] lg:min-h-[82vh] bg-cover bg-center bg-no-repeat flex items-end'
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/90' />
          <div className='relative z-10 w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16'>
            <div className='max-w-4xl'>
              <Link
                href='/blog'
                className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white'
              >
                ← Back to Blog
              </Link>
              <div className='mt-6 flex flex-wrap gap-3 text-sm text-white/70'>
                <span className='rounded-full border border-[#b88a42]/40 bg-[#b88a42]/15 px-3 py-1 capitalize'>
                  {blog?.status || 'Published'}
                </span>
                <span>{blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : 'Recent'}</span>
              </div>
              <h1 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
                {blog?.title}
              </h1>
              {blog?.meta_description && (
                <p className='mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg'>
                  {blog.meta_description}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className='px-2 py-10 sm:px-6 lg:px-20 lg:py-16'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px]'>
            <article className='rounded-[2rem] border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10'>
              <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#d2a15a]'>
                {parse(blog?.content || '')}
              </div>
            </article>

            <aside className='space-y-5'>
              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Article Info</p>
                <div className='mt-5 space-y-4 text-sm text-gray-300'>
                  <div>
                    <p className='text-white'>Published</p>
                    <p>{blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <div>
                    <p className='text-white'>Reading Time</p>
                    <p>{Math.ceil((blog?.content?.length || 0) / 1000)} min read</p>
                  </div>
                </div>
              </div>

              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <div className='flex items-center justify-between gap-4'>
                  <p className='text-xl font-medium text-white'>More Articles</p>
                  <Link href='/blog' className='text-sm text-[#d2a15a] hover:text-[#e1b36d]'>
                    View all
                  </Link>
                </div>

                <div className='mt-5 space-y-4'>
                  {relatedBlogs.length > 0 ? relatedBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${item.slug}`}
                      className='block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/10'
                    >
                      <p className='text-lg font-medium text-white'>{item.title}</p>
                      {item.meta_description && (
                        <p className='mt-2 line-clamp-2 text-sm text-gray-400'>
                          {item.meta_description}
                        </p>
                      )}
                    </Link>
                  )) : (
                    <p className='text-sm text-gray-400'>No related articles available.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </MainWrapper>
  )
}

export default BlogDetail