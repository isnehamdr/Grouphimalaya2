
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { MdClose } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddBlog = ({ showBlogAddition, setShowBlogAddition, setReloadDataTrigger }) => {
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
        if (data.image) formData.append('image', data.image)

        try {
            await axios.post(route('blog.store'), formData)
        reset()
        setPreview(null)
        setShowBlogAddition(false)
        setReloadDataTrigger((prev)=>!prev)
        toast.success('Blog Added Successfully')
        } catch (error) {
            console.log('Error fetching data', error)
            toast.error('Error Adding Blog')
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
        <div className={`fixed inset-0 w-full min-h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center ${showBlogAddition ? 'block' : 'hidden'} z-[390]`}>
            <div className='w-full max-w-3xl bg-white p-6 rounded-md relative max-h-[90vh] overflow-y-auto'>
                <button onClick={() => setShowBlogAddition(false)} className='absolute top-3 right-3'>
                    <MdClose />
                </button>

                <p className='text-xl font-medium'>Add Blog</p>
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
                        {errors.title && <p className='text-xs text-red-500'>{errors.title.message}</p>}
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
                        {errors.content && <p className='text-xs text-red-500'>{errors.content.message}</p>}
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
                            <img src={preview} alt='Preview' className='mt-2 h-40 w-full object-cover rounded-md' />
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
                        {errors.status && <p className='text-xs text-red-500'>{errors.status.message}</p>}
                    </div>

                    {/* Meta Description */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium'>Meta Description</label>
                        <textarea
                            {...register('meta_description', { maxLength: { value: 160, message: 'Max 160 characters' } })}
                            placeholder='Short description for search engines (max 160 characters)'
                            rows={3}
                            className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black resize-none'
                        />
                        {errors.meta_description && <p className='text-xs text-red-500'>{errors.meta_description.message}</p>}
                    </div>

                    {/* Actions */}
                    <div className='flex justify-end gap-2 mt-2'>
                        <button
                            type='button'
                            onClick={() => { reset(); setPreview(null); setShowBlogAddition(false) }}
                            className='px-4 py-2 text-sm rounded-md border hover:bg-gray-50'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-black/80 disabled:opacity-50'
                        >
                            {isSubmitting ? 'Saving...' : 'Save Blog'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddBlog