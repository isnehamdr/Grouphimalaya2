<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class CareerController extends Controller
{
    /**
     * Return all careers as JSON (used by axios in Career listing page).
     */
    public function index(Request $request): JsonResponse
    {
        $query = Career::query()->latest();

        if ($request->get('status') === 'published') {
            $query->where('status', 'published');
        }

        return response()->json($query->get());
    }

    /**
     * Show a single career detail page via Inertia (slug-based route model binding).
     * URL: /careers/{slug}
     */
    public function show(Career $career)
    {
        $relatedCareers = Career::where('status', 'published')
            ->where('id', '!=', $career->id)
            ->latest()
            ->take(4)
            ->get();

        return Inertia::render('CareerDetail', [
            'career'         => $career,
            'relatedCareers' => $relatedCareers,
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title'           => 'required|string|max:255|unique:careers,title',
            'employment_type' => 'required|string|max:100',
            'work_mode'       => 'required|string|max:100',
            'description'     => 'required|string',
            'status'          => 'required|in:draft,published',
        ]);

        $career = Career::create($validated);

        $this->logActivity($request, "Added career: {$career->title}");

        return response()->json($career, 201);
    }

    public function update(Request $request, Career $career): JsonResponse
    {
        $validated = $request->validate([
            'title'           => 'required|string|max:255|unique:careers,title,' . $career->id,
            'employment_type' => 'required|string|max:100',
            'work_mode'       => 'required|string|max:100',
            'description'     => 'required|string',
            'status'          => 'required|in:draft,published',
        ]);

        $career->update($validated);

        $this->logActivity($request, "Updated career: {$career->title}");

        return response()->json($career);
    }

    public function destroy(Request $request, Career $career): JsonResponse
    {
        $title = $career->title;
        $career->delete();

        $this->logActivity($request, "Deleted career: {$title}");

        return response()->json(['message' => 'Career deleted successfully.']);
    }

    protected function logActivity(Request $request, string $action): void
    {
        $user = $request->user();

        if (!$user || !Schema::hasTable('admin_logs')) {
            return;
        }

        $payload = [
            'ip'          => $request->ip(),
            'action'      => $action,
            'modified_by' => $user->name,
        ];

        // if (Schema::hasColumn('admin_logs', 'user_id')) {
        //     $payload['user_id'] = $user->id;
        // }

        \App\Models\AdminLog::create($payload);
    }
}