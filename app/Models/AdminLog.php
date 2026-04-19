<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminLog extends Model
{
    protected $table = 'adminlogs';

    protected $fillable = [
        'ip',
        'action',
        'modified_by',
    ];
}
