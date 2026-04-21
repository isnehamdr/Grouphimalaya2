import MainWrapper from '@/MainComponents/MainWrapper'
import { Head, Link } from '@inertiajs/react'
import parse from 'html-react-parser'
import careerFallback from '../../../public/images/vision.jpeg'

const CareerDetail = ({ career, relatedCareers = [] }) => {
  return (
    <MainWrapper>
      <Head>
        <title>{career?.title ? `${career.title} | Career` : 'Career Detail | Himalaya Organization'}</title>
      </Head>

      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        <section
          className='relative overflow-hidden rounded-2xl min-h-[52vh] sm:min-h-[65vh] lg:min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-end'
          style={{ backgroundImage: `url(${careerFallback})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/25 via-black/50 to-black/90' />
          <div className='relative z-10 w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16'>
            <div className='max-w-4xl'>
              {/* <Link
                href='/career'
                className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/15 hover:text-white'
              >
                Back to Career
              </Link> */}
              {/* <div className='mt-6 flex flex-wrap gap-3 text-sm text-white/75'>
                <span className='rounded-full border border-[#b88a42]/40 bg-[#b88a42]/15 px-3 py-1'>{career?.work_mode}</span>
                <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1'>{career?.employment_type}</span>
                <span>{new Date(career?.created_at).toLocaleDateString()}</span>
              </div> */}
              <h1 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl'>
                {career?.title}
              </h1>
              <p className='mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base lg:text-lg'>
                Explore the full role details and responsibilities below.
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
                  <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Employment</p>
                  <p className='mt-3 text-lg text-white'>{career?.employment_type}</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-xs uppercase tracking-[0.25em] text-gray-500'>Status</p>
                  {/* <p className='mt-3 text-lg capitalize text-white'>{career?.status}</p> */}
                  <p className='mt-3 text-lg capitalize text-white'>{new Date(career?.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#d2a15a]'>
                {parse(career?.description || '')}
              </div>
            </article>

            <aside className='space-y-5'>
              <div className='rounded-[2rem] border border-white/10 bg-[#111318] p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#b88a42]'>Quick Actions</p>
                <p className='mt-4 text-sm leading-7 text-gray-400'>
                  Interested candidates can use this page to review the opening before reaching out through your existing hiring flow.
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
                  <Link href='/career' className='text-sm text-[#d2a15a] hover:text-[#e1b36d]'>View all</Link>
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
                    <p className='text-sm text-gray-400'>No related openings available.</p>
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

export default CareerDetail