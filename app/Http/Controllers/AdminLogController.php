<?php

namespace App\Http\Controllers;

use App\Models\AdminLog;
use Illuminate\Http\JsonResponse;

class AdminLogController extends Controller
{
    public function index(): JsonResponse
    {
        $logs = AdminLog::query()
            ->latest()
            ->get();

        return response()->json($logs);
    }
}
