<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\AdminLog;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Return all blogs as JSON (used by axios in Admin & Blog listing page).
     */
    public function index(Request $request)
    {
        $query = Blog::query()->latest();

        if ($request->get('status') === 'published') {
            $query->where('status', 'published');
        }

        return response()->json($query->get());
    }

    /**
     * Show a single blog detail page via Inertia (slug-based route model binding).
     * URL: /blogs/{slug}
     */
    public function show(Blog $blog)
    {
        // Fetch up to 4 related (published) blogs, excluding the current one
        $relatedBlogs = Blog::where('status', 'published')
            ->where('id', '!=', $blog->id)
            ->latest()
            ->take(4)
            ->get();

        return Inertia::render('BlogDetail', [
            'blog'         => $blog,
            'relatedBlogs' => $relatedBlogs,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'            => 'required|string|max:255|unique:blogs,title',
            'content'          => 'required|string',
            'status'           => 'required|in:draft,published',
            'image'            => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'meta_description' => 'nullable|string|max:160',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blogs', 'public');
        }

        $blog = Blog::create($validated);

        $this->logActivity($request, "Added blog: {$blog->title}");

        return response()->json($blog, 201);
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title'            => 'required|string|max:255|unique:blogs,title,' . $blog->id,
            'content'          => 'required|string',
            'status'           => 'required|in:draft,published',
            'image'            => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'meta_description' => 'nullable|string|max:160',
        ]);

        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $validated['image'] = $request->file('image')->store('blogs', 'public');
        }

        $blog->update($validated);

        $this->logActivity($request, "Updated blog: {$blog->title}");

        return response()->json($blog);
    }

    public function destroy(Request $request, Blog $blog)
    {
        $title = $blog->title;

        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->delete();

        $this->logActivity($request, "Deleted blog: {$title}");

        return response()->json(['message' => 'Blog deleted successfully.']);
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

        if (Schema::hasColumn('admin_logs', 'user_id')) {
            $payload['user_id'] = $user->id;
        }

        AdminLog::create($payload);
    }
}