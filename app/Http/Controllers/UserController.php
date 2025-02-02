<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class UserController extends Controller
{
    public function getUsers(Request $request)
    {
        try {
            $query = User::query();

            // id
            if ($request->has('id') && !empty($request->id)) {
                $query->where(function ($q) use ($request) {
                    $q->where('id', 'like', $request->id);
                });
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

            $perPage = $request->get('npage', 10); 
            $currentPage = $request->get('page', 0);
            $users = $query->orderBy('created_at', 'asc')->paginate($perPage, ['*'], 'page', $currentPage + 1);

            return response()->json([
                'message'=>"User finded",
                'data'=> [
                    'items' => $users->items(),
                    'count' => $users->total(),
                ]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error interno del servidor',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
