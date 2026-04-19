<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController; 

Route::get('/', function () {
    return Inertia::render('HomePage');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/automobile', function () {
    return Inertia::render('Automobile');
});


Route::get('/realestate', function () {
    return Inertia::render('RealEstate');
});


Route::get('/hospitality', function () {
    return Inertia::render('Hospitality');
});


Route::get('/banking', function () {
    return Inertia::render('Banking');
});


Route::get('/agriculture', function () {
    return Inertia::render('Agriculture');
});

Route::get('/engineering', function () {
    return Inertia::render('Engineering');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/organization-history', function () {
    return Inertia::render('OrganizationHistory');
});


Route::get('/message-from-chairman', function () {
    return Inertia::render('ChairmanMessage'); 
});


Route::get('/career', function () {
    return Inertia::render('Career');
});

Route::get('/community', function () {
    return Inertia::render('Community');
});

Route::get('/corporate-profile', function () {
    return Inertia::render('CorporateProfile');
});

 Route::get('/admin/blog', function () {
        return Inertia::render('AdminPages/AdminBlog');
    });

    Route::get('/admin/career', function () {
        return Inertia::render('AdminPages/AdminCareer');
    });

    Route::get('/admin', function () {
        return Inertia::render('AdminPages/AdminDashboard');
    });

    Route::get('/admin/logs', function() {
        return Inertia::render('AdminPages/AdminLog');
    });


    Route::get('/blogs', [BlogController::class, 'index'])->name('blog.index');
    Route::post('/blogs', [BlogController::class, 'store'])->name('blog.store');
    Route::get('/blogs/{blog}', [BlogController::class, 'show']);
    Route::put('/blogs/{blog}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy'])->name('blog.destroy');

Route::get('/blog', function () {
    return Inertia::render('Blog');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
   

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::fallback(function () {
    return Inertia::render('NotFoundPage')
        ->toResponse(request())
        ->setStatusCode(404);
});

require __DIR__.'/auth.php';
