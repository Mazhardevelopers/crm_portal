<?php

use Illuminate\Support\Facades\Route;

Route::get('/api', function () {
    return response()->json(['message' => 'Hello from Laravel API']);
});
