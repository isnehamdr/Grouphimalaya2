<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog; 
use App\Models\AdminLog;
use Illuminate\Support\Facades\Storage; 

class BlogController extends Controller
{
    //

    public function index()
    {
        $blogs = Blog::latest()->get();
        return response()->json($blogs);
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

        AdminLog::create([
            'ip' => $request->ip(), 
            'action' => "Added a blog", 
            'modified_by' => auth()->user()->name,
        ]);

        return response()->json($blog, 201);
    }

    public function show(Blog $blog)
    {
        return response()->json($blog);
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

         AdminLog::create([
            'ip' => $request->ip(), 
            'action' => "Updated a blog", 
            'modified_by' => auth()->user()->name,
        ]);

        return response()->json($blog);
    }

    public function destroy(Blog $blog)
    {
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->delete();

         AdminLog::create([
            'ip' => $request->ip(), 
            'action' => "Deleted a blog", 
            'modified_by' => auth()->user()->name,
        ]);

        return response()->json(['message' => 'Blog deleted successfully.']);
    }


}
