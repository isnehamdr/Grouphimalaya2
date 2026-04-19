
import React, { useState } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import { Head } from '@inertiajs/react'


const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when typing
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  // Validation
  const validateForm = () => {
    let newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } 
    else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form Submitted:', formData)

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        subject: '',
        message: '',
      })
    }
  }

  return (
    <MainWrapper>
      <Head>
        <title>Contact | Himalaya Organization</title>
      </Head>
      <div className='w-full min-h-screen px-3 sm:px-6 lg:px-8 flex flex-col items-center text-white'>

        {/* Header Section */}
        <div className='flex flex-col justify-center items-center text-center pt-24 lg:pt-32 lg:pb-16 pb-8'>
          
          <p className='text-3xl sm:text-4xl lg:text-6xl font-medium'>
            We’re Here to Listen and Help
          </p>

          <p className='text-base sm:text-lg lg:max-w-2xl mt-4 text-gray-500'>
            Get in touch with our team for support, partnership inquiries,
            or any questions about our work.
          </p>

        </div>

        {/* Form Container */}
        <div className='w-full max-w-4xl bg-[#121318] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-700 lg:mb-16 mb-8'>

          <p className='text-2xl sm:text-3xl lg:text-4xl font-medium'>
            Send Us a Message
          </p>

          <p className='text-gray-500 mt-2'>
            Fill out the form and team will get back to you within 24-48 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 mt-8'
          >

            {/* Name Row */}
            <div className='flex flex-col sm:flex-row gap-4'>

              {/* First Name */}
              <div className='flex flex-col w-full'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                />

                {errors.firstName && (
                  <span className='text-red-500 text-sm mt-1'>
                    {errors.firstName}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className='flex flex-col w-full'>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                />

                {errors.lastName && (
                  <span className='text-red-500 text-sm mt-1'>
                    {errors.lastName}
                  </span>
                )}
              </div>

            </div>

            {/* Phone */}
            <div className='flex flex-col'>
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
              />

              {errors.phone && (
                <span className='text-red-500 text-sm mt-1'>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className='flex flex-col'>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
              />

              {errors.subject && (
                <span className='text-red-500 text-sm mt-1'>
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className='flex flex-col'>
              <textarea
                name='message'
                placeholder='Message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
              />

              {errors.message && (
                <span className='text-red-500 text-sm mt-1'>
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-[#4b4640] text-white rounded-full py-3 font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Submit Message
            </button>

          </form>

          <div className='mt-4 lg:mt-8'>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-medium'>Contact Information</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 lg:mt-8 gap-4'>
              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Email Us</p>
                <p className='mt-4 text-lg'>info@grouphimalaya.com</p>
              </div>

              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Call Us</p>
                <p className='mt-4 text-lg'>+977 061 523848</p>
              </div>

              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Visit Us</p>
                <p className='mt-4 text-lg'>Nayabazar - 11,
Pokhara</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </MainWrapper>
  )
}

export default Contact