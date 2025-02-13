<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class TransactionController extends Controller
{
    public function getTransactions(Request $request)
    {
        try {
            $query = Transaction::query();

            // id
            if ($request->has('id') && !empty($request->id)) {
                $query->where('id', $request->id);
                $request->user_id = '';
                $request->status = '';
                $request->search = '';
                $request->date = '';
                $request->date_end = '';
                $request->date_start = '';
                $request->npage = 1;
                $request->page = 0;
            }
            // Filtro por usuario si se proporciona
            if (!empty($request->user_id)) {
                $query->where('user_id', $request->user_id);
            }
    
            // Filtro por estado de transacción
            if ($request->has('ITransactionStatus') && !empty($request->ITransactionStatus)) {
                $query->where('status', $request->ITransactionStatus);
            }
    
            if ($request->has('date') && !empty($request->date)) {
                $startOfDay = Carbon::parse($request->date)->startOfDay();
                $endOfDay = Carbon::parse($request->date)->endOfDay();
                $query->whereBetween('created_at', [$startOfDay, $endOfDay]);
            }
            // Filtro por rango de fechas de pago
            if ($request->has('date_start') && !empty($request->date_start) && $request->has('date_end') && !empty($request->date_end)) {
                $startDate = Carbon::parse($request->date_start)->startOfDay();
                $endDate = Carbon::parse($request->date_end)->endOfDay();
                $query->whereBetween('created_at', [$startDate, $endDate]);
            }
    
            // Paginación
            $perPage = (Int) $request->npage ?? 10;
            $currentPage = (Int) $request->page ?? 0;
            $transactions = $query->orderBy('created_at', 'asc')->paginate($perPage, ['*'], 'page', $currentPage + 1);
    
            $result = [
                'message'=>"Transacciones encontradas",
                'data'=> [
                    'items' => $transactions->items(),
                    'count' => $transactions->total(),
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
            Log::error('getTransactions',$err);
            return response()->json($err, 500);
        }

       
    }

    public function postTransactions(Request $request)
    {
        try {
            $request->validate([
                'price' => 'required|numeric|min:0',
                'status' => 'required|in:pending,complete,cancel',
                'description' => 'nullable|string',
                'user_id' => 'required|exists:users,id',
                'payed_at' => 'nullable|date',
            ]);
    
            $transaction = Transaction::create([
                'price' => $request->price,
                'status' => $request->status,
                'description' => $request->description,
                'user_id' => $request->user_id,
                'payed_at' => $request->payed_at ,
            ]);
    
            $result = [
                'message'=>"Transacción creada exitosament",
                'data' => [
                    'id'=>$transaction->id
                ]
            ];

            Log::info($result['message'],$result['data']);
    
            return response()->json($result,201);
        } catch (\Throwable $th) {
            $err = [
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ];
            Log::error('postTransactions',$err);
            return response()->json($err, 500);
        }
    }

    public function putTransaction(Request $request, $id)
    {

        try {
            $transaction = Transaction::findOrFail($id);

            $request->validate([
                'price' => 'numeric|min:0',
                'status' => 'in:pending,complete,cancel',
                'description' => 'nullable|string',
                'payed_at' => 'nullable|date',
            ]);
    
            $transaction->update([
                'price' => $request->price ?? $transaction->price,
                'status' => $request->status ?? $transaction->status,
                'description' => $request->description ?? $transaction->description,
                'payed_at' => $request->payed_at 
            ]);
    
            return response()->json([
                'message' => 'Transacción actualizada exitosamente',
                'data' => $transaction
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error interno del servidor',
                'error' => [
                    'message' => $th->getMessage()
                ]
            ], 500);
        }
    }

    public function deleteTransaction($id)
    {
        try {
            $transaction = Transaction::findOrFail($id);
    
            $transaction->delete();
    
            return response()->json([
                'message' => 'Transacción eliminada exitosamente'
            ]);
    
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
