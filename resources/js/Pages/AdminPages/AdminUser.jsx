import React, { useContext, useState } from 'react'
import { Link, router, usePage } from '@inertiajs/react'
import { toast } from 'react-toastify'
import { FaEdit, FaPlus, FaSave, FaTimes, FaTrash, FaUser } from 'react-icons/fa'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
import { RiHome5Line } from 'react-icons/ri'
import MyTable from '@/AdminComponents/MyTable'

const AdminUser = () => {
    const { toggleSidebar } = useContext(MainDataContext)
    const { props } = usePage()
    const { users = [], auth } = props

    const [showModal, setShowModal] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const resetForm = () => {
        setFormData({ name: '', email: '', password: '', password_confirmation: '' })
        setEditingUser(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name.trim()) return toast.error('Name is required')
        if (!formData.email.trim()) return toast.error('Email is required')
        if (!editingUser && !formData.password) return toast.error('Password is required')
        if (formData.password !== formData.password_confirmation) return toast.error('Passwords do not match')

        setIsSubmitting(true)

        if (editingUser) {
            router.put(`/user-setup/${editingUser.id}`, formData, {
                onSuccess: () => {
                    toast.success('User updated successfully')
                    setShowModal(false)
                    resetForm()
                },
                onError: (errors) => Object.values(errors).forEach((e) => toast.error(e)),
                onFinish: () => setIsSubmitting(false),
            })
        } else {
            router.post('/user-setup', formData, {
                onSuccess: () => {
                    toast.success('User created successfully')
                    setShowModal(false)
                    resetForm()
                },
                onError: (errors) => Object.values(errors).forEach((e) => toast.error(e)),
                onFinish: () => setIsSubmitting(false),
            })
        }
    }

    const handleEdit = (user) => {
        setEditingUser(user)
        setFormData({ name: user.name, email: user.email, password: '', password_confirmation: '' })
        setShowModal(true)
    }

    const handleDelete = (user) => {
        if (user.id === auth?.user?.id) return toast.error('You cannot delete your own account')
        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
            router.delete(`/user-setup/${user.id}`, {
                onSuccess: () => toast.success('User deleted successfully'),
                onError: () => toast.error('Failed to delete user'),
            })
        }
    }

    const filteredUsers = users.filter((user) =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const columns = [
        {
            Header: 'User',
            Cell: ({ row }) => (
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FaUser className="text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{row.original.name}</span>
                </div>
            ),
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Created At',
            Cell: ({ row }) => (
                <span>{new Date(row.original.created_at).toLocaleDateString()}</span>
            ),
        },
        {
            Header: 'Actions',
            Cell: ({ row }) => (
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleEdit(row.original)}
                        className="text-blue-600 hover:text-blue-900"
                        disabled={row.original.id === auth?.user?.id}
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={() => handleDelete(row.original)}
                        className="text-red-600 hover:text-red-900"
                        disabled={row.original.id === auth?.user?.id}
                    >
                        <FaTrash />
                    </button>
                </div>
            ),
        },
    ]

    return (
        <AppLayout>
            <div className='w-full min-h-screen flex flex-col relative text-neutral'>
                <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : 'lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>

                    {/* Header */}
                    <div className="w-full flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">User Setup</h1>
                            <div className='flex gap-1 items-center'>
                                <Link href='/admin' className='text-lg text-gray-500'><RiHome5Line /></Link>
                                <p>/</p>
                                <p className='text-base'>User Setup</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { resetForm(); setShowModal(true) }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                        >
                            <FaPlus />
                            Add New User
                        </button>
                    </div>

                    {/* Search */}
                    <div className="mb-6 w-full">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <MyTable data={filteredUsers} columns={columns} />
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold">
                                {editingUser ? 'Edit User' : 'Add New User'}
                            </h2>
                            <button onClick={() => { setShowModal(false); resetForm() }} className="text-gray-400 hover:text-gray-600">
                                <FaTimes />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {editingUser ? 'Password (leave blank to keep current)' : 'Password *'}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={!editingUser}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password {!editingUser && '*'}
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={!editingUser}
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => { setShowModal(false); resetForm() }}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                                >
                                    <FaSave />
                                    {isSubmitting ? 'Saving...' : (editingUser ? 'Update' : 'Create')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    )
}

export default AdminUser