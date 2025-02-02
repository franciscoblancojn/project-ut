<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthController extends Controller
{

    private function onGenerateTokenUser(User $user)
    {
            // Generar token JWT
            $key = env('JWT_SECRET'); // Usa una clave secreta en .env
            $payload = [
                'id' => $user->id, // ID del usuario
                'iat' => time(),  // Fecha de emisión
                'exp' => time() + 3600 * 24, // Expira en 1 dia
            ];

            $token = JWT::encode($payload, $key, 'HS256');

            // Responder con el token
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'token' => $token,
                'created_at' =>  $user->created_at,
                'updated_at' =>  $user->updated_at,
            ];
    }

    public function onLogin(Request $request)
    {
        try {
            // Validar la solicitud
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            // Buscar el usuario por email
            $user = User::where('email', $credentials['email'])->first();


            // Verificar si el usuario existe y la contraseña es válida
            if (!$user || !Hash::check($credentials['password'], $user->password)) {
                return response()->json(['message' => 'Credenciales inválidas'], 401);
            }

            // Generar el token y usuario de retorno
            $user_token = $this->onGenerateTokenUser($user);

            // Responder con el token y datos del usuario
            return response()->json([
                'message'=>"Ingreso exitoso",
                'data'=>$user_token
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ], 500);
        }
    }


    // Método de Registro
    public function onRegister(Request $request)
    {
        try {
            // Validar los datos de entrada
            $data = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6',
            ]);

            // Crear el nuevo usuario
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            // Generar el token y usuario de retorno
            $user_token = $this->onGenerateTokenUser($user);

            // Responder con el token y datos del usuario
            return response()->json([
                'message'=>"Registro exitoso",
                'data'=>$user_token
            ], 200);

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
