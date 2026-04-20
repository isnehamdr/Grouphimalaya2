import React, { useContext, useEffect, useMemo, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
import { Link } from '@inertiajs/react'
import { RiHome5Line } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'
import { MdClose, MdDelete, MdEdit } from 'react-icons/md'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { toast } from 'react-toastify'
import parse from 'html-react-parser'
import MyTable from '@/AdminComponents/MyTable'
import DeletionDialog from '@/AdminComponents/DeletionDialog'

const AdminCareer = () => {
    const { toggleSidebar } = useContext(MainDataContext)
    const [careers, setCareers] = useState([])
    const [reloadDataTrigger, setReloadDataTrigger] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [editingCareer, setEditingCareer] = useState(null)
    const [deleteItemId, setDeleteItemId] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            title: '',
            employment_type: 'Full Time',
            work_mode: 'Onsite',
            description: '',
            status: 'draft',
        },
    })

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await axios.get(route('career.index'))
                setCareers(response.data)
            } catch (error) {
                console.log('Error fetching careers', error)
            }
        }

        fetchCareers()
    }, [reloadDataTrigger])

    useEffect(() => {
        if (!showModal) {
            return
        }

        reset({
            title: editingCareer?.title || '',
            employment_type: editingCareer?.employment_type || 'Full Time',
            work_mode: editingCareer?.work_mode || 'Onsite',
            description: editingCareer?.description || '',
            status: editingCareer?.status || 'draft',
        })
    }, [editingCareer, reset, showModal])

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'],
        ],
    }

    const columns = useMemo(() => [
        {
            Header: 'S.No',
            Cell: ({ row }) => <p>{row.index + 1}.</p>,
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Type',
            accessor: 'employment_type',
        },
        {
            Header: 'Mode',
            accessor: 'work_mode',
        },
        {
            Header: 'Description',
            Cell: ({ row }) => (
                <div className='max-w-sm line-clamp-3 text-sm text-gray-700'>
                    {parse(row.original.description || '')}
                </div>
            ),
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            Cell: ({ row }) => (
                <div className='flex gap-2'>
                    <button onClick={() => openEditModal(row.original)}>
                        <MdEdit />
                    </button>
                    <button onClick={() => {
                        setDeleteItemId(row.original.id)
                        setShowDeleteDialog(true)
                    }}>
                        <MdDelete />
                    </button>
                </div>
            ),
        },
    ], [])

    const closeModal = () => {
        setShowModal(false)
        setEditingCareer(null)
        reset({
            title: '',
            employment_type: 'Full Time',
            work_mode: 'Onsite',
            description: '',
            status: 'draft',
        })
    }

    const openEditModal = (career) => {
        setEditingCareer(career)
        setShowModal(true)
    }

    const onSubmit = async (data) => {
        try {
            if (editingCareer) {
                await axios.put(route('career.update', { career: editingCareer.id }), data)
                toast.success('Career updated successfully')
            } else {
                await axios.post(route('career.store'), data)
                toast.success('Career added successfully')
            }

            closeModal()
            setReloadDataTrigger((prev) => !prev)
        } catch (error) {
            console.log('Error saving career', error)
            toast.error(error?.response?.data?.message || 'Unable to save career')
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(route('career.destroy', { career: deleteItemId }))
            setReloadDataTrigger((prev) => !prev)
            setShowDeleteDialog(false)
            toast.success('Career deleted successfully')
        } catch (error) {
            console.log('Error deleting career', error)
            toast.error(error?.response?.data?.message || 'Unable to delete career')
        }
    }

    return (
        <AppLayout>
            <div className='w-full min-h-screen flex flex-col relative text-neutral'>
                <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : ' lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='text-2xl font-semibold'>Career</p>
                            <div className='flex gap-1 items-center'>
                                <Link href='/admin' className='text-lg text-gray-500'><RiHome5Line /></Link>
                                <p>/</p>
                                <p className='text-base'>Career</p>
                            </div>
                        </div>

                        <button className='bg-blue-700 text-white px-6 py-2 rounded-full flex gap-2 items-center border-2 hover:bg-blue-600 transition-all duration-300' onClick={() => setShowModal(true)}>
                            <FaPlus />
                            Career
                        </button>
                    </div>

                    <MyTable data={careers} columns={columns} />
                    <DeletionDialog showDeleteDialog={showDeleteDialog} setShowDeleteDialog={setShowDeleteDialog} handleDelete={handleDelete} />
                </div>
            </div>

            <div className={`fixed inset-0 w-full min-h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center ${showModal ? 'block' : 'hidden'} z-[400]`}>
                <div className='w-full max-w-3xl bg-white p-6 rounded-md relative max-h-[90vh] overflow-y-auto'>
                    <button onClick={closeModal} className='absolute top-3 right-3'>
                        <MdClose />
                    </button>

                    <p className='text-xl font-medium'>{editingCareer ? 'Update Career' : 'Add Career'}</p>
                    <p className='text-sm text-gray-500 mb-4'>(Entries with * are required)</p>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Title *</label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                placeholder='Enter career title'
                                className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'
                            />
                            {errors.title && <p className='text-xs text-red-500'>{errors.title.message}</p>}
                        </div>

                        <div className='grid sm:grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-medium'>Employment Type *</label>
                                <select {...register('employment_type', { required: 'Employment type is required' })} className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'>
                                    <option value='Full Time'>Full Time</option>
                                    <option value='Part Time'>Part Time</option>
                                    <option value='Contract'>Contract</option>
                                    <option value='Internship'>Internship</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-medium'>Work Mode *</label>
                                <select {...register('work_mode', { required: 'Work mode is required' })} className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'>
                                    <option value='Onsite'>Onsite</option>
                                    <option value='Remote'>Remote</option>
                                    <option value='Hybrid'>Hybrid</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Description *</label>
                            <Controller
                                name='description'
                                control={control}
                                rules={{ required: 'Description is required' }}
                                render={({ field }) => (
                                    <ReactQuill
                                        {...field}
                                        modules={quillModules}
                                        theme='snow'
                                        placeholder='Write the job description here...'
                                        className='rounded-md'
                                    />
                                )}
                            />
                            {errors.description && <p className='text-xs text-red-500'>{errors.description.message}</p>}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium'>Status *</label>
                            <select {...register('status', { required: 'Status is required' })} className='border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black'>
                                <option value='draft'>Draft</option>
                                <option value='published'>Published</option>
                            </select>
                        </div>

                        <div className='flex justify-end gap-2 mt-2'>
                            <button type='button' onClick={closeModal} className='px-4 py-2 text-sm rounded-md border hover:bg-gray-50'>
                                Cancel
                            </button>
                            <button type='submit' disabled={isSubmitting} className='px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-black/80 disabled:opacity-50'>
                                {isSubmitting ? 'Saving...' : editingCareer ? 'Update Career' : 'Save Career'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default AdminCareer
