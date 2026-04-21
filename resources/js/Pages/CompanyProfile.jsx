import React from 'react'

const CompanyProfile = () => {
    const pdfUrl = '/images/HO CORPORATE PROFILE.pdf'

    return (
        <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center px-4 py-8">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                <iframe
                    src={pdfUrl}
                    title="Company Profile"
                    className="w-full"
                    style={{ height: '95vh', minHeight: '500px' }}
                />
            </div>
        </div>
    )
}

export default CompanyProfile