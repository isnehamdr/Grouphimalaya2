import { useContext, useState, useEffect } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { MainDataContext } from '@/Context/MainContext';
import { IoMenu } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa";
import { Link, router } from "@inertiajs/react"; // ✅ import router from inertia
import { usePage } from "@inertiajs/react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";


const AdminNavbar = () => {
    const { setShowResponsiveSidebar } = useContext(MainDataContext)
    const { props } = usePage();

    const userName = props?.auth?.user?.name || "";

    const [showDropdown, setShowDropdown] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const userInitials = userName
        ? userName.split(" ").map((n) => n[0]).join("").toUpperCase()
        : "?";

    // ✅ FIXED: use router.post() from Inertia instead of axios
    // axios doesn't send Inertia headers or handle CSRF redirect properly
    const handleLogout = () => {
        router.post(route('logout'), {}, {
            onSuccess: () => {
                // Inertia handles the redirect automatically
            },
            onError: () => {
                toast.error("Failed to logout. Please try again")
            },
        })
    }

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    return (
        <div className='w-full py-1.5 sm:px-6 px-2 flex justify-between items-center fixed top-0 z-[260] bg-white'>
            <div className='flex gap-4 items-center'>
                <button
                    className='sm:hidden'
                    onClick={() => setShowResponsiveSidebar((prev) => !prev)}
                >
                    <IoMenu />
                </button>
            </div>

            <div className='flex gap-2 items-center relative'>
                <button
                    onClick={toggleFullscreen}
                    className='p-2 rounded-full transition hover:scale-95 duration-300'
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen
                        ? <MdFullscreenExit className='text-2xl' />
                        : <MdFullscreen className='text-2xl' />
                    }
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="flex items-center gap-2 bg-white hover:bg-base-100 px-3 py-2 rounded-full transition"
                    >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                            {userInitials}
                        </div>
                        <span className="hidden sm:block font-medium max-w-[140px] truncate">
                            {userName}
                        </span>
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-white rounded-lg shadow-lg py-2 z-50">
                            {/* ✅ FIXED: was /user, correct route is /user-setup */}
                            <Link
                                href="/user-setup"
                                className="flex items-center px-4 py-2"
                                onClick={() => setShowDropdown(false)}
                            >
                                <FaUserCircle className="mr-2" />
                                User Setup
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full px-4 py-2 text-red-600"
                            >
                                <IoMdLogOut className="mr-2" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar