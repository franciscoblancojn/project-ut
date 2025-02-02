<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
   
    public function getUsers(Request $request)
    {
        try {
            $query = User::query();

            // id
            if (!empty($request->id)) {
                $query->where('id', $request->id);
                $request->search = '';
                $request->date = '';
                $request->date_end = '';
                $request->date_start = '';
                $request->npage = 1;
                $request->page = 0;
            }
            // Filtro por usuario si se proporciona
            if ( !empty($request->user_id)) {
                $query->where('id', $request->user_id);
                $request->search = '';
                $request->date = '';
                $request->date_end = '';
                $request->date_start = '';
                $request->npage = 1;
                $request->page = 0;
            }
    
            // search
            if ($request->has('search') && !empty($request->search)) {
                $query->where(function ($q) use ($request) {
                    $q->where('name', 'like', "%{$request->search}%")
                      ->orWhere('email', 'like', "%{$request->search}%");
                });
            }
            if ($request->has('date') && !empty($request->date)) {
                $startOfDay = Carbon::parse($request->date)->startOfDay();
                $endOfDay = Carbon::parse($request->date)->endOfDay();
                $query->whereBetween('created_at', [$startOfDay, $endOfDay]);
            }
            if ($request->has('date_start') && !empty($request->date_start) && $request->has('date_end') && !empty($request->date_end)) {
                $startDate = Carbon::parse($request->date_start)->startOfDay();
                $endDate = Carbon::parse($request->date_end)->endOfDay();
                $query->whereBetween('created_at', [$startDate, $endDate]);
            }



            if ($request->has('getTransactions') && !empty($request->getTransactions)) {
                // traerce todas las trancaciones por usuairo
                $query->with('transactions');
            }

            $perPage = (Int) $request->npage ?? 10;
            $currentPage = (Int) $request->page ?? 0;
            $users = $query->orderBy('created_at', 'asc')->paginate($perPage, ['*'], 'page', $currentPage + 1);


            $result = [
                'message'=>"User finded",
                'data'=> [
                    'items' => $users->items(),
                    'count' => $users->total(),
                ]
            ];

            Log::info($result['message'],$result['data']);

            return response()->json($result);
        } catch (\Throwable $th) {
            $err = [
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ];
            Log::error('Ingreso fallido',$err);
            return response()->json($err, 500);
        }
    }

    public function addAmountUsers(Request $request)
    {
        try {
            $request->validate([
                'user_id' => 'numeric',
                'amount' => 'numeric|min:0',
            ]);
            if(empty($request->user_id) || empty($request->amount)){
                throw new \Exception('Fileds invalid');
            }
    
            $user = User::findOrFail($request->user_id);

            $amount = (float) ($user->amount ?? 0);
            $amount += (float) $request->amount;
            
            $user->amount = $amount;
            $user->save();
            

            $result = [
                'message'=>"Saldo agregado exitosamente",
                'data'=> [
                    'user_id' => $request->user_id,
                    'amount' => $amount,
                ]
            ];

            Log::info($result['message'],$result['data']);
    
            return response()->json($result);
        } catch (\Throwable $th) {
            $err = [
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ];
            Log::error('addAmountUsers',$err);
            return response()->json($err, 500);
        }
    }
}
