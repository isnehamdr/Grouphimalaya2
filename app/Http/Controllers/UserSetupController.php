<?php

namespace App\Http\Controllers;

use App\Models\AdminLog;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class UserSetupController extends Controller
{
    public function index(Request $request): Response
    {
        $this->ensureAdmin($request);

        $columns = ['id', 'name', 'email', 'created_at'];

        if ($this->supportsRoles()) {
            $columns[] = 'role';
        }

        return Inertia::render('AdminPages/AdminUser', [
            'users' => User::query()
                ->select($columns)
                ->latest()
                ->get(),
            'supportsRoles' => $this->supportsRoles(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $this->ensureAdmin($request);

        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ];

        if ($this->supportsRoles()) {
            $rules['role'] = ['required', Rule::in(['admin', 'editor', 'user'])];
        }

        $validated = $request->validate($rules);

        $payload = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ];

        if ($this->supportsRoles()) {
            $payload['role'] = $validated['role'];
        }

        $user = User::create($payload);

        $this->logActivity($request, "Created user: {$user->email}");

        return back();
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        $this->ensureAdmin($request);

        $rules = [
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id)],
            'password' => 'nullable|string|min:8|confirmed',
        ];

        if ($this->supportsRoles()) {
            $rules['role'] = ['required', Rule::in(['admin', 'editor', 'user'])];
        }

        $validated = $request->validate($rules);

        $payload = [
            'name' => $validated['name'],
            'email' => $validated['email'],
        ];

        if ($this->supportsRoles()) {
            $payload['role'] = $validated['role'];
        }

        if (! empty($validated['password'])) {
            $payload['password'] = Hash::make($validated['password']);
        }

        $user->update($payload);

        $this->logActivity($request, "Updated user: {$user->email}");

        return back();
    }

    public function destroy(Request $request, User $user): RedirectResponse
    {
        $this->ensureAdmin($request);

        abort_if($request->user()?->id === $user->id, 422, 'You cannot delete your own account.');

        $email = $user->email;
        $user->delete();

        $this->logActivity($request, "Deleted user: {$email}");

        return back();
    }

    protected function ensureAdmin(Request $request): void
    {
        if (! $this->supportsRoles()) {
            return;
        }

        abort_unless($request->user()?->isAdmin(), 403);
    }

    protected function logActivity(Request $request, string $action): void
    {
        $actor = $request->user();

        if (! $actor) {
            return;
        }

        if (! Schema::hasTable('admin_logs')) {
            return;
        }

        $payload = [
            'ip' => $request->ip(),
            'action' => $action,
            'modified_by' => $actor->name,
        ];

        if (Schema::hasColumn('admin_logs', 'user_id')) {
            $payload['user_id'] = $actor->id;
        }

        AdminLog::create($payload);
    }

    protected function supportsRoles(): bool
    {
        return Schema::hasColumn('users', 'role');
    }
}
