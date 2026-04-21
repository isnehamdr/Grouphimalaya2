import React, { useContext, useEffect, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
import { Link } from '@inertiajs/react'
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import axios from 'axios'

const AdminDashboard = () => {
    const { toggleSidebar } = useContext(MainDataContext)
    const [recentActivities, setRecentActivities] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch recent activities from logs
    useEffect(() => {
        const fetchRecentLogs = async () => {
            try {
                const response = await axios.get(route('admin.logs.index'))
                // Get only the latest 5 activities
                setRecentActivities(response.data.slice(0, 5))
                setLoading(false)
            } catch (error) {
                console.log('Error fetching logs', error)
                setLoading(false)
            }
        }

        fetchRecentLogs()
    }, [])

    // Card data
    const dashboardCards = [
        {
            title: "Blogs",
            description: "Manage blog posts, create new content, and organize your articles",
            icon: <IoNewspaperOutline className="text-4xl text-gray-600" />,
            link: "/admin/blog",
            borderColor: "border-gray-200",
            iconBg: "bg-gray-100"
        },
        {
            title: "Users",
            description: "Manage user accounts, roles, and permissions",
            icon: <FaUsers className="text-4xl text-gray-600" />,
            link: "/admin/users",
            borderColor: "border-gray-200",
            iconBg: "bg-gray-100"
        },
        {
            title: "Career",
            description: "Manage job postings, applications, and recruitment",
            icon: <FaUserGraduate className="text-4xl text-gray-600" />,
            link: "/admin/career",
          
            borderColor: "border-gray-200",
            iconBg: "bg-gray-100"
        }
    ]

    // Helper function to get icon color based on action type
    const getActionColor = (action) => {
        const actionLower = action?.toLowerCase() || ''
        if (actionLower.includes('create') || actionLower.includes('add')) return 'text-green-600'
        if (actionLower.includes('update') || actionLower.includes('edit')) return 'text-blue-600'
        if (actionLower.includes('delete') || actionLower.includes('remove')) return 'text-red-600'
        return 'text-gray-600'
    }

    // Helper function to get action badge color
    const getActionBadge = (action) => {
        const actionLower = action?.toLowerCase() || ''
        if (actionLower.includes('create') || actionLower.includes('add')) return 'bg-green-100 text-green-700'
        if (actionLower.includes('update') || actionLower.includes('edit')) return 'bg-blue-100 text-blue-700'
        if (actionLower.includes('delete') || actionLower.includes('remove')) return 'bg-red-100 text-red-700'
        return 'bg-gray-100 text-gray-700'
    }

    return (
        <AppLayout>
            <div className='w-full min-h-screen flex flex-col relative bg-gray-50'>
                <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : ' lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>
                    
                    {/* Page Header */}
                    <div className="w-full mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-500 mt-1">Welcome back! Manage your application from here.</p>
                    </div>

                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                        {dashboardCards.map((card, index) => (
                            <Link 
                                key={index}
                                href={card.link}
                                className="group"
                            >
                                <div className={`${card.bgColor} ${card.borderColor} rounded-xl shadow-sm border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${card.iconBg} shadow-sm`}>
                                            {card.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
                                                {card.title}
                                            </h3>
                                            {/* <p className="text-gray-600 text-sm">
                                                {card.description}
                                            </p> */}
                                            <div className="flex items-center text-gray-600 text-sm font-medium mt-3">
                                                Manage {card.title}
                                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Recent Activity Section */}
                    <div className="w-full">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                                <p className="text-sm text-gray-500 mt-1">Latest actions performed by users</p>
                            </div>
                            
                            <div className="p-6">
                                {loading ? (
                                    <div className="flex justify-center items-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                    </div>
                                ) : recentActivities.length > 0 ? (
                                    <div className="space-y-4">
                                        {recentActivities.map((activity, index) => (
                                            <div 
                                                key={activity.id || index} 
                                                className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-3 rounded-lg transition-colors"
                                            >
                                                <div className="flex items-start gap-3 flex-1">
                                                    <div className="mt-1">
                                                        <div className={`w-2 h-2 rounded-full ${getActionColor(activity.action)}`}></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                            <span className="font-medium text-gray-800">{activity.modified_by || 'System'}</span>
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getActionBadge(activity.action)}`}>
                                                                {activity.action || 'Performed action'}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-500">
                                                            IP: {activity.ip || 'Unknown'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-gray-400">
                                                        {activity.created_at ? new Date(activity.created_at).toLocaleString() : 'Just now'}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-gray-400">No recent activities found</p>
                                    </div>
                                )}
                            </div>

                            {/* View All Link */}
                            {recentActivities.length > 0 && (
                                <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                                    <Link 
                                        href="/admin/logs" 
                                        className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        View All Activities
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </AppLayout>
    )
}

export default AdminDashboard