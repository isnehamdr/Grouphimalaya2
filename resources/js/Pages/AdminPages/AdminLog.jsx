import React, { useContext, useEffect, useMemo, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { MainDataContext } from '@/Context/MainContext'
import axios from 'axios'
import { Link } from '@inertiajs/react'
import { RiHome5Line } from 'react-icons/ri'
import MyTable from '@/AdminComponents/MyTable'

const AdminLog = () => {
    const { toggleSidebar } = useContext(MainDataContext)
    const [logs, setLogs] = useState([])

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get(route('admin.logs.index'))
                setLogs(response.data)
            } catch (error) {
                console.log('Error fetching logs', error)
            }
        }

        fetchLogs()
    }, [])

    const columns = useMemo(() => [
        {
            Header: 'S.No',
            Cell: ({ row }) => <p>{row.index + 1}.</p>,
        },
        {
            Header: 'User',
            accessor: 'modified_by',
        },
        {
            Header: 'Action',
            accessor: 'action',
        },
        {
            Header: 'IP Address',
            accessor: 'ip',
        },
        {
            Header: 'Date',
            Cell: ({ row }) => (
                <span>{new Date(row.original.created_at).toLocaleString()}</span>
            ),
        },
    ], [])

    return (
        <AppLayout>
            <div className='w-full min-h-screen flex flex-col relative text-neutral'>
                <div className={`min-h-screen max-w-full ${toggleSidebar ? 'w-[96%]' : ' lg:w-[83%] sm:w-[70%] w-full'} ml-auto flex justify-start items-start py-[74px] overflow-x-auto flex-col relative md:px-10 px-2 transition-all duration-200`}>
                    <div className='w-full'>
                        <p className='text-2xl font-semibold'>Activity Logs</p>
                        <div className='flex gap-1 items-center'>
                            <Link href='/admin' className='text-lg text-gray-500'><RiHome5Line /></Link>
                            <p>/</p>
                            <p className='text-base'>Logs</p>
                        </div>
                    </div>

                    <MyTable data={logs} columns={columns} />
                </div>
            </div>
        </AppLayout>
    )
}

export default AdminLog
