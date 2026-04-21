import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    
    // Refs for GSAP animations
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const brandRef = useRef(null);

    useEffect(() => {
        // GSAP entrance animations
        const ctx = gsap.context(() => {
            gsap.fromTo(formRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
            );
            gsap.fromTo(brandRef.current,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );
            gsap.fromTo('.animate-item',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(0.6)', delay: 0.4 }
            );
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div 
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-[#0b0c0f]"
           
        >
           
            {/* Additional white overlay for more brightness */}
            
            <Head title="Log in" />

            {/* Main Card Container */}
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/30 border border-white/40">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Left: Form Section */}
                    <div ref={formRef} className="p-6 sm:p-10 bg-white backdrop-blur-sm">
                        <div className="text-center mb-8 animate-item">
                            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                            <p className="mt-2 text-sm text-gray-600">Sign in with Email & Password</p>
                        </div>

                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-700 text-center animate-item">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            <div className="animate-item">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    placeholder="Enter E-mail"
                                    className="w-full rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-600 focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/30 focus:outline-none transition-all duration-200"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            <div className="animate-item">
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        placeholder="Enter Password"
                                        className="w-full rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm px-4 py-3 pr-12 text-sm text-gray-800 placeholder-gray-500 focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/30 focus:outline-none transition-all duration-200"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((v) => !v)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500  transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                                <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                                                <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                                <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-1" />
                            </div>

                            <div className="flex items-center justify-between animate-item">
                                <label className="flex items-center text-sm text-gray-700">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="rounded border-gray-300 bg-white/60 text-amber-600 focus:ring-amber-500"
                                    />
                                    <span className="ms-2">Remember me</span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-gray-500 hover:text-amber-800 transition-colors duration-200 font-medium"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-xl bg-[#b08d57] backdrop-blur-sm px-4 py-3 text-sm font-semibold text-white  hover:shadow-lg disabled:opacity-60 transition-all duration-200 animate-item"
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>
                    </div>

                    {/* Right: Brand Panel with Glass Effect */}
                    <div 
                        ref={brandRef}
                        className="relative flex flex-col items-center justify-center p-8 sm:p-12 text-center overflow-hidden bg-[#b08d57]"
                    >
                        <img
                            src="/images/logo.png"
                            alt="Himalaya Organization"
                            className="w-28 h-28 object-contain mb-4 drop-shadow-lg animate-item"
                        />
                        <h2 className="text-3xl font-bold text-white animate-item">Himalaya Organization</h2>
                        <p className="mt-2 text-sm text-white max-w-xs animate-item">
                            Welcome back. Please sign in to continue your journey.
                        </p>
                        
                        {/* Subtle decorative line */}
                        <div className="mt-6 w-16 h-0.5 bg-white/50 rounded-full animate-item" />
                    </div>
                </div>
            </div>
        </div>
    );
}