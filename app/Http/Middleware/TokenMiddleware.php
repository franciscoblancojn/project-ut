<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class TokenMiddleware
{
    public function handle(Request $request, Closure $next):Response
    {
        try {
            $token = $request->header('Authorization');

            if(empty($token)){
                throw new \Exception('Unauthorized');
            }
            $key = env('JWT_SECRET');
            $token_decode = JWT::decode($token, new Key($key, 'HS256'));
            
            $user_id= $token_decode->id;
            $user = User::find($user_id);
            if(!$user){
                throw new \Exception('Unauthorized');
            }
            $request->user_token = $user;
            return $next($request);
        } catch (\Throwable $th) {
            $err = [
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ];
            Log::error('TokenMiddleware',$err);
            return response()->json($err, 500);
        }
    }
}
