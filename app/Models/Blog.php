<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'status',
        'image',
        'meta_description',
    ];

    protected static function booted(): void
    {
        static::creating(function (Blog $blog) {
            $blog->slug = $blog->generateUniqueSlug($blog->title);
        });

        static::updating(function (Blog $blog) {
            if ($blog->isDirty('title')) {
                $blog->slug = $blog->generateUniqueSlug($blog->title);
            }
        });
    }

    protected function generateUniqueSlug(string $title): string
    {
        $slug  = Str::slug($title);
        $count = static::where('slug', 'like', "{$slug}%")
                       ->where('id', '!=', $this->id ?? 0)
                       ->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }

    public function getSeoDescriptionAttribute(): string
    {
        return $this->meta_description
            ?: Str::limit(strip_tags($this->content), 155);
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
