import React, { useContext, useEffect, useMemo, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
import AddBlog from '@/AdminComponents/AddBlog'
import { RiHome5Line } from 'react-icons/ri'
import { Link } from '@inertiajs/react'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import MyTable from '@/AdminComponents/MyTable'
import UpdateBlog from '@/AdminComponents/UpdateBlog'
import { MdDelete } from 'react-icons/md'
import DeletionDialog from '@/AdminComponents/DeletionDialog'
import { toast } from 'react-toastify'
import parse from 'html-react-parser'

// Helper: converts a stored path like "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

const AdminBlog = () => {
    const { toggleSidebar } = useContext(MainDataContext)
    const [showBlogAddition, setShowBlogAddition] = useState(false)
    const [allBlogs, setAllBlogs] = useState([])
    const [reloadDataTrigger, setReloadDataTrigger] = useState(false)
    const [deleteItemId, setDeleteItemId] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(route('blog.index'))
                setAllBlogs(response.data)
            } catch (error) {
                console.log('Error fetching data', error)
            }
        }
        fetchBlogs()
    }, [reloadDataTrigger])

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
            Header: 'Slug',
            accessor: 'slug',
        },
        {
            Header: 'Content',
            Cell: ({ row }) => (
                <div className='max-w-sm line-clamp-3 text-sm text-gray-700'>
                    {parse(row.original.content || '')}
                </div>
            ),
        },
        {
            Header: 'Image',
            Cell: ({ row }) => (
                <div>
                    {row.original.image ? (
                        <img
                            src={storageUrl(row.original.image)}
                            alt={row.original.title}
                            className='w-16 h-16 rounded object-cover'
                        />
                    ) : (
                        <span className='text-xs text-gray-500'>No image</span>
                    )}
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
                    <UpdateBlog
                        blogData={row.original}
                        setReloadDataTrigger={setReloadDataTrigger}
                    />
                    <button
                        onClick={() => {
                            setDeleteItemId(row.original.id)
                            setShowDeleteDialog(true)
                        }}
                    >
                        <MdDelete className='text-sm' />
                    </button>
                </div>
            ),
        },
    ], [])

    const handleDelete = async () => {
        try {
            await axios.delete(route('blog.destroy', { blog: deleteItemId }))
            setReloadDataTrigger((prev) => !prev)
            toast.success('Deletion Successful')
            setShowDeleteDialog(false)
        } catch (error) {
            console.log('Error Deleting Data', error)
            toast.error(error?.response?.data?.message || 'Error Deleting Data')
        }
    }

    return (
        <AppLayout>
            <div className='w-full min-h-screen flex flex-col relative text-neutral'>
                <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : 'lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='text-2xl font-semibold'>Blogs</p>
                            <div className='flex gap-1 items-center'>
                                <Link href='/admin' className='text-lg text-gray-500'>
                                    <RiHome5Line />
                                </Link>
                                <p>/</p>
                                <p className='text-base'>Blogs</p>
                            </div>
                        </div>

                        <button
                            className='bg-blue-700 text-white px-6 py-2 rounded-full flex gap-2 items-center border-2 hover:bg-blue-600 transition-all duration-300'
                            onClick={() => setShowBlogAddition(true)}
                        >
                            <FaPlus />
                            Blog
                        </button>
                    </div>

                    <AddBlog
                        showBlogAddition={showBlogAddition}
                        setShowBlogAddition={setShowBlogAddition}
                        setReloadDataTrigger={setReloadDataTrigger}
                    />
                    <DeletionDialog
                        showDeleteDialog={showDeleteDialog}
                        setShowDeleteDialog={setShowDeleteDialog}
                        handleDelete={handleDelete}
                    />
                    <MyTable data={allBlogs} columns={columns} />
                </div>
            </div>
        </AppLayout>
    )
}

export default AdminBlog