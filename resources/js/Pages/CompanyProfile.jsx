// import React from 'react'

// const CompanyProfile = () => {
//     const pdfUrl = '/images/HO CORPORATE PROFILE.pdf'

//     return (
//         <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center px-2 py-4 sm:px-4 sm:py-8">
//             <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
//                 <iframe
//                     src={pdfUrl}
//                     title="Company Profile"
//                     className="w-full"
//                     style={{ height: '100svh', minHeight: '500px' }}
//                 />
//             </div>
//         </div>
//     )
// }

// export default CompanyProfile

import React from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import SEO from '@/Components/SEO'

const CompanyProfile = () => {
    const pdfUrl = '/images/HO CORPORATE PROFILE.pdf'

    // SEO data with consistent company profile keywords
    const seoData = {
        title: "Company Profile | Corporate Overview & Business Excellence | Himalaya Organization",
        description: "Download Himalaya Organization's comprehensive company profile. Learn about our journey since 1991, diversified business divisions including automobile, agriculture, banking, real estate, and our commitment to Nepal's economic growth.",
        url: "https://www.himalayaorganization.com/company-profile",
        image: "/images/logo.png",
    }

    return (
        <MainWrapper>
            <SEO {...seoData} />
            
            <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center px-2 py-4 sm:px-4 sm:py-8">
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                    <iframe
                        src={pdfUrl}
                        title="Himalaya Organization Corporate Profile - Company Overview, Business Divisions, and Corporate Excellence"
                        className="w-full"
                        style={{ height: '100svh', minHeight: '500px' }}
                    />
                </div>
            </div>
        </MainWrapper>
    )
}

export default CompanyProfile