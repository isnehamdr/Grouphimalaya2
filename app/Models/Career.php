<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Career extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'employment_type',
        'work_mode',
        'description',
        'status',
    ];

    protected static function booted(): void
    {
        static::creating(function (Career $career) {
            $career->slug = $career->generateUniqueSlug($career->title);
        });

        static::updating(function (Career $career) {
            if ($career->isDirty('title')) {
                $career->slug = $career->generateUniqueSlug($career->title);
            }
        });
    }

    protected function generateUniqueSlug(string $title): string
    {
        $slug = Str::slug($title);
        $count = static::where('slug', 'like', "{$slug}%")
            ->where('id', '!=', $this->id ?? 0)
            ->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
