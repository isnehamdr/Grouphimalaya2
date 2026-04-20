import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { MdClose, MdEdit } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'

// Helper: converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
const storageUrl = (path) => `/storage/${path}`

const UpdateBlog = ({ blogData, setReloadDataTrigger }) => {
    const [showBlogUpdate, setShowBlogUpdate] = useState(false)
    const [preview, setPreview] = useState(null)

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            title: '',
            content: '',
            status: 'draft',
            image: null,
            meta_description: '',
        },
    })

    // Prefill form when modal opens
    useEffect(() => {
        if (blogData && showBlogUpdate) {
            reset({
                title: blogData.title || '',
                content: blogData.content || '',
                status: blogData.status || 'draft',
                meta_description: blogData.meta_description || '',
                image: null,
            })

            // Use storage URL for existing image preview (NOT route())
            if (blogData.image) {
                setPreview(storageUrl(blogData.image))
            } else {
                setPreview(null)
            }
        }
    }, [blogData, showBlogUpdate, reset])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setValue('image', file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('content', data.content)
        formData.append('status', data.status)
        formData.append('meta_description', data.meta_description)
        if (data.image) {
            formData.append('image', data.image)
        }
        // Laravel PUT requires method spoofing when sending FormData
        formData.append('_method', 'PUT')

        try {
            await axios.post(
                route('blog.update', { blog: blogData.id }),
                formData
            )
            setShowBlogUpdate(false)
            setReloadDataTrigger((prev) => !prev)
            toast.success('Blog Updated Successfully')
        } catch (error) {
            console.log('Error updating', error)
            toast.error(error?.response?.data?.message || 'Error updating blog')
        }
    }

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    }

    return (
        <div>
            {/* Edit Button */}
            <button onClick={() => setShowBlogUpdate(true)}>
                <MdEdit />
            </button>

            {/* Modal */}
            <div className={`fixed inset-0 w-full min-h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center ${showBlogUpdate ? 'block' : 'hidden'} z-[400]`}>
                <div className='w-full max-w-3xl bg-white p-6 rounded-md relative max-h-[90vh] overflow-y-auto'>
                    <button
                        onClick={() => setShowBlogUpdate(false)}
                        className='absolute top-3 right-3'
                    >
                        <MdClose />
                    </button>

                    <p className='text-xl font-medium'>Update Blog</p>
                    <p className='text-sm text-gray-500 mb-4'>(Entries with * are required)</p>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                        {/* Title */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Title *</label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                placeholder='Enter blog title'
                                className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'
                            />
                            {errors.title && (
                                <p className='text-xs text-red-500'>{errors.title.message}</p>
                            )}
                        </div>

                        {/* Content */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Content *</label>
                            <Controller
                                name='content'
                                control={control}
                                rules={{ required: 'Content is required' }}
                                render={({ field }) => (
                                    <ReactQuill
                                        {...field}
                                        modules={quillModules}
                                        theme='snow'
                                        placeholder='Write your blog content here...'
                                        className='rounded-md'
                                    />
                                )}
                            />
                            {errors.content && (
                                <p className='text-xs text-red-500'>{errors.content.message}</p>
                            )}
                        </div>

                        {/* Image */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Image</label>
                            <input
                                type='file'
                                accept='image/jpeg,image/png,image/jpg,image/webp'
                                onChange={handleImageChange}
                                className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'
                            />
                            {preview && (
                                <img
                                    src={preview}
                                    alt='Preview'
                                    className='mt-2 h-40 w-full object-cover rounded-md'
                                />
                            )}
                        </div>

                        {/* Status */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Status *</label>
                            <select
                                {...register('status', { required: 'Status is required' })}
                                className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'
                            >
                                <option value='draft'>Draft</option>
                                <option value='published'>Published</option>
                            </select>
                            {errors.status && (
                                <p className='text-xs text-red-500'>{errors.status.message}</p>
                            )}
                        </div>

                        {/* Meta Description */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Meta Description</label>
                            <textarea
                                {...register('meta_description', {
                                    maxLength: { value: 160, message: 'Max 160 characters' },
                                })}
                                rows={3}
                                placeholder='Short description for search engines'
                                className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black resize-none'
                            />
                            {errors.meta_description && (
                                <p className='text-xs text-red-500'>{errors.meta_description.message}</p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className='flex justify-end gap-2 mt-2'>
                            <button
                                type='button'
                                onClick={() => setShowBlogUpdate(false)}
                                className='px-4 py-2 text-sm rounded-md border hover:bg-gray-50'
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-black/80 disabled:opacity-50'
                            >
                                {isSubmitting ? 'Updating...' : 'Update Blog'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlog