// import MainWrapper from '@/MainComponents/MainWrapper'
// import { Head, Link } from '@inertiajs/react'
// import parse from 'html-react-parser'
// import careerFallback from '../../../public/images/vision.jpeg'

// const CareerDetail = ({ career, relatedCareers = [] }) => {
//   return (
//     <MainWrapper>
//       <Head>
//         <title>{career?.title ? `${career.title} | Career` : 'Career Detail | Himalaya Organization'}</title>
//       </Head>

//       <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
//         <section
//           className='relative overflow-hidden rounded-2xl min-h-[52vh] sm:min-h-[65vh] lg:min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-end'
//           style={{ backgroundImage: `url(${careerFallback})` }}
//         >
//           <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/50 to-black/90' />
//           <div className='relative z-10 w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16'>
//             <div className='max-w-4xl'>
//               {/* <Link
//                 href='/career'
//                 className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white'
//               >
//                 Back to Career
//               </Link> */}
//               {/* <div className='mt-6 flex flex-wrap gap-3 text-sm text-white/75'>
//                 <span className='rounded-full border border-[#b88a42]/40 bg-[#b88a42]/15 px-3 py-1'>{career?.work_mode}</span>
//                 <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1'>{career?.employment_type}</span>
//                 <span>{new Date(career?.created_at).toLocaleDateString()}</span>
//               </div> */}
//               <h1 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
//                 {career?.title}
//               </h1>
//               <p className='mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg'>
//                 Explore the full role details and responsibilities below.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className='px-2 py-10 sm:px-6 lg:px-20 lg:py-16'>
//           <div className='grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px]'>
//             <article className='rounded-[2rem] border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10'>
//               <div className='mb-8 grid gap-4 sm:grid-cols-3'>
//                 <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
//                   <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Work Mode</p>
//                   <p className='mt-3 text-lg text-white'>{career?.work_mode}</p>
//                 </div>
//                 <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
//                   <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Employment</p>
//                   <p className='mt-3 text-lg text-white'>{career?.employment_type}</p>
//                 </div>
//                 <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
//                   <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Status</p>
//                   {/* <p className='mt-3 text-lg capitalize text-white'>{career?.status}</p> */}
//                   <p className='mt-3 text-lg capitalize text-white'>{new Date(career?.created_at).toLocaleDateString()}</p>
//                 </div>
//               </div>

//               <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#d2a15a]'>
//                 {parse(career?.description || '')}
//               </div>
//             </article>

//             <aside className='space-y-5'>
//               <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
//                 <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Quick Actions</p>
//                 <p className='mt-4 text-sm leading-7 text-gray-400'>
//                   Interested candidates can use this page to review the opening before reaching out through your existing hiring flow.
//                 </p>
//                 <Link
//                   href='/contact'
//                   className='mt-5 inline-flex rounded-full bg-[#4b4640] px-5 py-3 text-sm text-white transition hover:bg-[#61594f]'
//                 >
//                   Contact Us
//                 </Link>
//               </div>

//               <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
//                 <div className='flex items-center justify-between gap-4'>
//                   <p className='text-xl font-medium text-white'>Other Openings</p>
//                   <Link href='/career' className='text-sm text-[#d2a15a] hover:text-[#e1b36d]'>View all</Link>
//                 </div>

//                 <div className='mt-5 space-y-4'>
//                   {relatedCareers.length > 0 ? relatedCareers.map((item) => (
//                     <Link
//                       key={item.id}
//                       href={`/careers/${item.slug}`}
//                       className='block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/10'
//                     >
//                       <p className='text-lg font-medium text-white'>{item.title}</p>
//                       <div className='mt-2 flex flex-wrap gap-2 text-xs text-gray-400'>
//                         <span>{item.work_mode}</span>
//                         <span>•</span>
//                         <span>{item.employment_type}</span>
//                       </div>
//                     </Link>
//                   )) : (
//                     <p className='text-sm text-gray-400'>No related openings available.</p>
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

// export default CareerDetail


import MainWrapper from '@/MainComponents/MainWrapper'
import { Head, Link } from '@inertiajs/react'
import parse from 'html-react-parser'
import careerFallback from '../../../public/images/vision.jpeg'
import SEO from '@/Components/SEO'

const CareerDetail = ({ career, relatedCareers = [] }) => {
  // Get current URL for canonical
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://www.himalayaorganization.com/careers/${career?.slug}`

  // SEO data for the career/job posting
  const seoData = {
    title: career?.title 
      ? `${career.title} | Career Opportunities at Himalaya Organization Nepal` 
      : 'Career Detail | Himalaya Organization',
    description: career?.description 
      ? `${career.title} position at Himalaya Organization. ${career.employment_type} role based in ${career.work_mode === 'Remote' ? 'Remote' : 'Pokhara, Nepal'}. Join our mission-driven team and create real change in Nepal's communities.`
      : 'Explore career opportunities at Himalaya Organization. Join a purpose-driven workplace in Nepal offering meaningful work, growth opportunities, and supportive culture.',
    url: currentUrl,
    image: "/images/vision.jpeg",
  }

  return (
    <MainWrapper>
      <SEO {...seoData} />
      
      {/* Additional job-specific meta tags */}
      <Head>
        <meta name="keywords" content={`${career?.title}, careers in Nepal, job openings Nepal, ${career?.employment_type} jobs, ${career?.work_mode} jobs Nepal, Himalaya Organization careers, purpose-driven jobs Nepal`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={career?.created_at} />
        <meta property="article:modified_time" content={career?.updated_at} />
        
        {/* Job Posting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": career?.title,
              "description": career?.description?.replace(/<[^>]*>/g, '').substring(0, 4000),
              "datePosted": career?.created_at,
              "validThrough": career?.deadline || new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
              "employmentType": career?.employment_type === "Full-time" ? "FULL_TIME" 
                : career?.employment_type === "Part-time" ? "PART_TIME"
                : career?.employment_type === "Contract" ? "CONTRACTOR"
                : "OTHER",
              "workHours": career?.work_mode === "Remote" ? "Remote" : "On-site",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Himalaya Organization",
                "sameAs": "https://www.himalayaorganization.com",
                "logo": "https://www.himalayaorganization.com/images/logo.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": career?.work_mode === "Remote" ? "Remote (Nepal)" : "Pokhara",
                  "addressRegion": "Gandaki Province",
                  "addressCountry": "Nepal"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "NPR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": career?.salary_range || "Competitive",
                  "unitText": "MONTH"
                }
              },
              "employmentType": career?.employment_type,
              "workLocation": {
                "@type": "Place",
                "name": career?.work_mode === "Remote" ? "Remote Work" : "Pokhara Office",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Nepal"
                }
              },
              "url": currentUrl,
              "identifier": {
                "@type": "PropertyValue",
                "name": "Himalaya Organization",
                "value": career?.id
              }
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.himalayaorganization.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Careers",
                  "item": "https://www.himalayaorganization.com/careers"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": career?.title,
                  "item": currentUrl
                }
              ]
            })
          }}
        />
      </Head>

      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        <section
          className='relative overflow-hidden rounded-2xl min-h-[52vh] sm:min-h-[65vh] lg:min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-end'
          style={{ backgroundImage: `url(${careerFallback})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/50 to-black/90' />
          <div className='relative z-10 w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16'>
            <div className='max-w-4xl'>
              <Link
                href='/careers'
                className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white'
              >
                ← Back to Careers
              </Link>
              <div className='mt-6 flex flex-wrap gap-3 text-sm text-white/75'>
                <span className='rounded-full border border-[#b88a42]/40 bg-[#b88a42]/15 px-3 py-1'>{career?.work_mode}</span>
                <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1'>{career?.employment_type}</span>
                <span>Posted: {new Date(career?.created_at).toLocaleDateString()}</span>
                {career?.deadline && (
                  <span className='rounded-full border border-red-500/40 bg-red-500/15 px-3 py-1'>
                    Deadline: {new Date(career.deadline).toLocaleDateString()}
                  </span>
                )}
              </div>
              <h1 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
                {career?.title}
              </h1>
              <p className='mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg'>
                Join our mission-driven team and help create real change in Nepal's communities through this exciting opportunity.
              </p>
            </div>
          </div>
        </section>

        <section className='px-2 py-10 sm:px-6 lg:px-20 lg:py-16'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px]'>
            <article className='rounded-[2rem] border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10'>
              <div className='mb-8 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Work Mode</p>
                  <p className='mt-3 text-lg text-white'>{career?.work_mode}</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Employment Type</p>
                  <p className='mt-3 text-lg text-white'>{career?.employment_type}</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Posted Date</p>
                  <p className='mt-3 text-lg text-white'>{new Date(career?.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#d2a15a]'>
                {parse(career?.description || '')}
              </div>
              
              {/* Application CTA */}
              <div className='mt-10 rounded-2xl border border-[#b88a42]/30 bg-[#b88a42]/5 p-6 text-center'>
                <h3 className='text-xl font-medium text-white'>Ready to Apply?</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  If you're passionate about making a difference in Nepal, we'd love to hear from you.
                </p>
                <Link
                  href='/contact'
                  className='mt-4 inline-flex rounded-full bg-[#b88a42] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#d2a15a]'
                >
                  Apply Now
                </Link>
              </div>
            </article>

            <aside className='space-y-5'>
              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Quick Actions</p>
                <p className='mt-4 text-sm leading-7 text-gray-400'>
                  Interested candidates can review the opening details above and reach out through our contact form.
                </p>
                <Link
                  href='/contact'
                  className='mt-5 inline-flex rounded-full bg-[#4b4640] px-5 py-3 text-sm text-white transition hover:bg-[#61594f]'
                >
                  Contact Us
                </Link>
              </div>

              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <div className='flex items-center justify-between gap-4'>
                  <p className='text-xl font-medium text-white'>Other Openings</p>
                  <Link href='/careers' className='text-sm text-[#d2a15a] hover:text-[#e1b36d]'>View all</Link>
                </div>

                <div className='mt-5 space-y-4'>
                  {relatedCareers.length > 0 ? relatedCareers.map((item) => (
                    <Link
                      key={item.id}
                      href={`/careers/${item.slug}`}
                      className='block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/10'
                    >
                      <p className='text-lg font-medium text-white'>{item.title}</p>
                      <div className='mt-2 flex flex-wrap gap-2 text-xs text-gray-400'>
                        <span>{item.work_mode}</span>
                        <span>•</span>
                        <span>{item.employment_type}</span>
                      </div>
                    </Link>
                  )) : (
                    <p className='text-sm text-gray-400'>No other openings available at this time.</p>
                  )}
                </div>
              </div>
              
              {/* Share job posting section */}
              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Share This Job</p>
                <div className='mt-4 flex gap-3'>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='rounded-full bg-white/10 p-2 transition hover:bg-white/20'
                    aria-label="Share on Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='rounded-full bg-white/10 p-2 transition hover:bg-white/20'
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </MainWrapper>
  )
}

export default CareerDetail