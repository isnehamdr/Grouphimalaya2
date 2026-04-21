<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\AdminLog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = $request->user();

        if ($user && Schema::hasTable('admin_logs')) {
            $payload = [
                'ip' => $request->ip(),
                'action' => 'Logged in',
                'modified_by' => $user->name,
            ];

            if (Schema::hasColumn('admin_logs', 'user_id')) {
                $payload['user_id'] = $user->id;
            }

            AdminLog::create($payload);
        }

        return redirect()->intended($user?->isAdmin() ? '/admin' : '/');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();

        if ($user && Schema::hasTable('admin_logs')) {
            $payload = [
                'ip' => $request->ip(),
                'action' => 'Logged out',
                'modified_by' => $user->name,
            ];

            if (Schema::hasColumn('admin_logs', 'user_id')) {
                $payload['user_id'] = $user->id;
            }

            AdminLog::create($payload);
        }

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

       return redirect('/login');
    }
}
