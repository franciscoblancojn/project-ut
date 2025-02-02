<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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
                $request->user_id = $user->id;
                if($force){
                    throw new \Exception('Unauthorized');
                }
            }
    
            return $next($request);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ], 500);
        }

    }
}
