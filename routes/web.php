<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminLogController;
use App\Http\Controllers\CareerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserSetupController;

// ─── PUBLIC PAGES ────────────────────────────────────────────────
Route::get('/', fn() => Inertia::render('HomePage'));
Route::get('/about', fn() => Inertia::render('About'));
Route::get('/automobile', fn() => Inertia::render('Automobile'));
Route::get('/realestate', fn() => Inertia::render('RealEstate'));
Route::get('/hospitality', fn() => Inertia::render('Hospitality'));
Route::get('/banking', fn() => Inertia::render('Banking'));
Route::get('/agriculture', fn() => Inertia::render('Agriculture'));
Route::get('/engineering', fn() => Inertia::render('Engineering'));
Route::get('/contact', fn() => Inertia::render('Contact'));
Route::get('/organization-history', fn() => Inertia::render('OrganizationHistory'));
Route::get('/message-from-chairman', fn() => Inertia::render('ChairmanMessage'));
Route::get('/career', fn() => Inertia::render('Career'));
Route::get('/community', fn() => Inertia::render('Community'));
Route::get('/corporate-profile', fn() => Inertia::render('CorporateProfile'));
Route::get('/company-profile', fn() => Inertia::render('CompanyProfile'));

// ─── BLOG PUBLIC PAGES ───────────────────────────────────────────
// Blog listing page (renders Inertia Blog.jsx)
Route::get('/blog', fn() => Inertia::render('Blog'));

// Blog API — used by axios in Blog.jsx to fetch JSON
Route::get('/blogs', [BlogController::class, 'index'])->name('blog.index');

// Blog detail page — renders BlogDetail.jsx via BlogController::show
// Uses slug-based route model binding: /blogs/my-first-post
Route::get('/blogs/{blog:slug}', [BlogController::class, 'show'])->name('blog.show');

// ─── CAREER PUBLIC PAGES ─────────────────────────────────────────
Route::get('/careers', [CareerController::class, 'index'])->name('career.index');
Route::get('/careers/{career:slug}', [CareerController::class, 'show'])->name('career.show');

// ─── AUTHENTICATED ROUTES ─────────────────────────────────────────
Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

    Route::prefix('admin')->group(function () {
        Route::get('/', fn() => Inertia::render('AdminPages/AdminDashboard'))->name('admin.dashboard');
        Route::get('/blog', fn() => Inertia::render('AdminPages/AdminBlog'))->name('admin.blog');
        Route::get('/career', fn() => Inertia::render('AdminPages/AdminCareer'))->name('admin.career');
        Route::get('/logs', fn() => Inertia::render('AdminPages/AdminLog'))->name('admin.logs');
        Route::get('/logs/data', [AdminLogController::class, 'index'])->name('admin.logs.index');
    });

    Route::post('/blogs', [BlogController::class, 'store'])->name('blog.store');
    Route::put('/blogs/{blog}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy'])->name('blog.destroy');

    Route::post('/careers', [CareerController::class, 'store'])->name('career.store');
    Route::put('/careers/{career}', [CareerController::class, 'update'])->name('career.update');
    Route::delete('/careers/{career}', [CareerController::class, 'destroy'])->name('career.destroy');

    Route::get('/user-setup', [UserSetupController::class, 'index'])->name('user-setup.index');
    Route::post('/user-setup', [UserSetupController::class, 'store'])->name('user-setup.store');
    Route::put('/user-setup/{user}', [UserSetupController::class, 'update'])->name('user-setup.update');
    Route::delete('/user-setup/{user}', [UserSetupController::class, 'destroy'])->name('user-setup.destroy');
 


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ─── 404 FALLBACK ─────────────────────────────────────────────────
Route::fallback(function () {
    return Inertia::render('NotFoundPage')
        ->toResponse(request())
        ->setStatusCode(404);
});

require __DIR__ . '/auth.php';