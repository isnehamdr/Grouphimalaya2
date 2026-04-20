import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Sign In" />
            <div className="auth-root">
                {/* Left panel */}
                <div className="auth-panel-left">
                    <div className="brand-mark">
                        <div className="brand-logo">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <rect width="16" height="16" fill="currentColor" opacity="1"/>
                                <rect x="20" width="16" height="16" fill="currentColor" opacity="0.6"/>
                                <rect y="20" width="16" height="16" fill="currentColor" opacity="0.6"/>
                                <rect x="20" y="20" width="16" height="16" fill="currentColor" opacity="0.3"/>
                            </svg>
                        </div>
                        <span className="brand-name">YourCorp</span>
                    </div>

                    <div className="panel-content">
                        <p className="panel-label">ENTERPRISE PORTAL</p>
                        <h1 className="panel-headline">
                            Where ideas<br />
                            <em>become ventures.</em>
                        </h1>
                        <p className="panel-sub">
                            Manage your organization's presence, publish content, review applications, and track operations — all in one secure platform.
                        </p>
                        <div className="panel-stats">
                            <div className="stat">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">Sectors</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Secure</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Access</span>
                            </div>
                        </div>
                    </div>

                    <div className="panel-deco">
                        <div className="deco-circle deco-1" />
                        <div className="deco-circle deco-2" />
                        <div className="deco-grid" />
                    </div>
                </div>

                {/* Right panel - Form */}
                <div className="auth-panel-right">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Welcome back</h2>
                            <p>Sign in to your admin account</p>
                        </div>

                        {status && (
                            <div className="alert alert-success">{status}</div>
                        )}

                        <form onSubmit={submit} className="auth-form">
                            <div className="field-group">
                                <label htmlFor="email">Email address</label>
                                <div className="input-wrap">
                                    <svg className="input-icon" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 6.5L10 11L17.5 6.5M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        autoComplete="username"
                                        autoFocus
                                        onChange={e => setData('email', e.target.value)}
                                        placeholder="you@company.com"
                                        className={errors.email ? 'is-error' : ''}
                                    />
                                </div>
                                {errors.email && <span className="field-error">{errors.email}</span>}
                            </div>

                            <div className="field-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrap">
                                    <svg className="input-icon" viewBox="0 0 20 20" fill="none">
                                        <rect x="4" y="8" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M7 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
                                    </svg>
                                    <input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={e => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className={errors.password ? 'is-error' : ''}
                                    />
                                </div>
                                {errors.password && <span className="field-error">{errors.password}</span>}
                            </div>

                            <div className="form-row">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={e => setData('remember', e.target.checked)}
                                    />
                                    <span className="checkmark" />
                                    <span>Remember me</span>
                                </label>
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="forgot-link">
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            <button type="submit" className="btn-primary" disabled={processing}>
                                {processing ? (
                                    <span className="btn-loading">
                                        <svg viewBox="0 0 24 24" className="spinner"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="30" strokeDashoffset="10"/></svg>
                                        Signing in…
                                    </span>
                                ) : 'Sign in to Dashboard'}
                            </button>
                        </form>

                        <p className="form-footer">
                            Don't have an account?{' '}
                            <Link href={route('register')}>Create account</Link>
                        </p>

                        <div className="form-back">
                            <Link href="/">
                                <svg viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Back to website
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .auth-root {
                    display: flex;
                    min-height: 100vh;
                    font-family: 'Georgia', serif;
                    background: #0a0a0a;
                }

                /* ── LEFT PANEL ── */
                .auth-panel-left {
                    position: relative;
                    width: 45%;
                    background: #0f1923;
                    padding: 48px 56px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                }

                .brand-mark {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #e8d5a3;
                    position: relative;
                    z-index: 2;
                }
                .brand-logo { display: flex; }
                .brand-name {
                    font-family: 'Georgia', serif;
                    font-size: 18px;
                    letter-spacing: 0.08em;
                    font-weight: normal;
                    text-transform: uppercase;
                }

                .panel-content {
                    position: relative;
                    z-index: 2;
                }

                .panel-label {
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    letter-spacing: 0.3em;
                    color: #e8d5a3;
                    opacity: 0.7;
                    margin-bottom: 24px;
                }

                .panel-headline {
                    font-size: clamp(36px, 4vw, 52px);
                    font-weight: normal;
                    line-height: 1.15;
                    color: #f0ece0;
                    margin-bottom: 24px;
                }
                .panel-headline em {
                    font-style: italic;
                    color: #e8d5a3;
                }

                .panel-sub {
                    font-family: 'Georgia', serif;
                    font-size: 15px;
                    line-height: 1.75;
                    color: #8a9aaa;
                    max-width: 360px;
                    margin-bottom: 48px;
                }

                .panel-stats {
                    display: flex;
                    align-items: center;
                    gap: 28px;
                }
                .stat { text-align: center; }
                .stat-number {
                    display: block;
                    font-size: 28px;
                    font-weight: normal;
                    color: #e8d5a3;
                    letter-spacing: -0.02em;
                }
                .stat-label {
                    font-family: 'Courier New', monospace;
                    font-size: 10px;
                    letter-spacing: 0.2em;
                    color: #4a5a6a;
                    text-transform: uppercase;
                }
                .stat-divider {
                    width: 1px;
                    height: 36px;
                    background: #1e2e3e;
                }

                /* decorative */
                .panel-deco { position: absolute; inset: 0; pointer-events: none; }
                .deco-circle {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(232, 213, 163, 0.06);
                }
                .deco-1 { width: 500px; height: 500px; right: -200px; top: -100px; }
                .deco-2 { width: 300px; height: 300px; right: -80px; bottom: 80px; border-color: rgba(232,213,163,0.04); }
                .deco-grid {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
                    background-size: 48px 48px;
                }

                /* ── RIGHT PANEL ── */
                .auth-panel-right {
                    flex: 1;
                    background: #f7f4ef;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 48px 32px;
                }

                .form-container {
                    width: 100%;
                    max-width: 400px;
                }

                .form-header {
                    margin-bottom: 36px;
                }
                .form-header h2 {
                    font-size: 30px;
                    font-weight: normal;
                    color: #1a1a1a;
                    letter-spacing: -0.02em;
                    margin-bottom: 6px;
                }
                .form-header p {
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    color: #888;
                    letter-spacing: 0.05em;
                }

                .alert-success {
                    background: #edf7ed;
                    border: 1px solid #c3e6cb;
                    color: #2d6a2d;
                    padding: 12px 16px;
                    border-radius: 6px;
                    font-size: 13px;
                    margin-bottom: 24px;
                    font-family: 'Courier New', monospace;
                }

                .auth-form { display: flex; flex-direction: column; gap: 20px; }

                .field-group { display: flex; flex-direction: column; gap: 6px; }
                .field-group label {
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #555;
                }

                .input-wrap {
                    position: relative;
                }
                .input-icon {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 16px;
                    color: #aaa;
                    pointer-events: none;
                }
                .input-wrap input {
                    width: 100%;
                    padding: 12px 14px 12px 42px;
                    background: #fff;
                    border: 1.5px solid #e0dbd0;
                    border-radius: 6px;
                    font-family: 'Georgia', serif;
                    font-size: 15px;
                    color: #1a1a1a;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .input-wrap input:focus {
                    border-color: #0f1923;
                    box-shadow: 0 0 0 3px rgba(15,25,35,0.07);
                }
                .input-wrap input.is-error {
                    border-color: #c0392b;
                }
                .input-wrap input::placeholder { color: #bbb; }

                .field-error {
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    color: #c0392b;
                    letter-spacing: 0.03em;
                }

                .form-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    color: #555;
                    cursor: pointer;
                    user-select: none;
                }
                .checkbox-label input[type="checkbox"] { display: none; }
                .checkmark {
                    width: 16px;
                    height: 16px;
                    border: 1.5px solid #ccc;
                    border-radius: 3px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.15s;
                }
                .checkbox-label input:checked + .checkmark {
                    background: #0f1923;
                    border-color: #0f1923;
                }
                .checkbox-label input:checked + .checkmark::after {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 5px;
                    border-left: 1.5px solid #fff;
                    border-bottom: 1.5px solid #fff;
                    transform: rotate(-45deg) translate(1px, -1px);
                }

                .forgot-link {
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    color: #888;
                    text-decoration: none;
                    letter-spacing: 0.05em;
                    transition: color 0.15s;
                }
                .forgot-link:hover { color: #0f1923; }

                .btn-primary {
                    width: 100%;
                    padding: 14px;
                    background: #0f1923;
                    color: #e8d5a3;
                    border: none;
                    border-radius: 6px;
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.1s;
                    margin-top: 4px;
                }
                .btn-primary:hover:not(:disabled) {
                    background: #1e2e3e;
                    transform: translateY(-1px);
                }
                .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
                .btn-loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .spinner {
                    width: 16px;
                    height: 16px;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin { to { transform: rotate(360deg); } }

                .form-footer {
                    text-align: center;
                    margin-top: 28px;
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    color: #888;
                }
                .form-footer a {
                    color: #0f1923;
                    text-decoration: none;
                    font-weight: bold;
                }
                .form-footer a:hover { text-decoration: underline; }

                .form-back {
                    text-align: center;
                    margin-top: 20px;
                }
                .form-back a {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    color: #aaa;
                    text-decoration: none;
                    letter-spacing: 0.05em;
                    transition: color 0.15s;
                }
                .form-back a:hover { color: #555; }
                .form-back svg { width: 14px; height: 14px; }

                @media (max-width: 768px) {
                    .auth-panel-left { display: none; }
                    .auth-panel-right { background: #f7f4ef; }
                }
            `}</style>
        </>
    );
}