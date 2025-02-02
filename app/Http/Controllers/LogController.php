<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class LogController extends Controller
{
    public function getLogs()
    {
        $logPath = storage_path('logs/laravel.log');

        if (!File::exists($logPath)) {
            return response()->json([
                'message' => 'No hay logs disponibles'
            ], 404);
        }

        $logs = File::get($logPath);
        $logLines = explode("\n", $logs);
        $logLines = array_reverse(array_filter($logLines)); // Orden descendente

        return response()->json([
            'logs' => array_slice($logLines, 0, 100) // Máximo 100 líneas para evitar sobrecarga
        ]);
    }
}
