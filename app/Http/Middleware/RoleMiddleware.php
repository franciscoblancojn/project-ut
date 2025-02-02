<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role, $force = false):Response
    {
        try {
            $user = $request->user_token;
            if (!$user){
                throw new \Exception('Unauthorized');
            }
            if ($user->role != $role){
                if($force){
                    throw new \Exception('Unauthorized');
                }else{
                    $request->user_id = $user->id;
                }
            }
    
            return $next($request);
        } catch (\Throwable $th) {
            $err = [
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ];
            Log::error('RoleMiddleware',$err);
            return response()->json($err, 500);
        }

    }
}
