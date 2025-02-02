<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'userAdmin',
            'email' => 'userAdmin@gmail.com',
            'password' => Hash::make('user1234'),
            'role'=>"admin",
        ]);
        User::create([
            'name' => 'userClient',
            'email' => 'userClient@gmail.com',
            'password' => Hash::make('user1234'),
            'role'=>"client",
            'amount'=>10000
        ]);
        for ($i=0; $i < 30; $i++) { 
            User::create([
                'name' => 'userClient'.$i,
                'email' => 'userClient'.$i.'@gmail.com',
                'password' => Hash::make('user1234'),
                'role'=>"client",
                'amount'=>rand(10000,200000) 
            ]);
        }
        $transactionStatus = ['pending','cancel','complete'];
        for ($i=2; $i <= 32; $i++) { 
            for ($j=0; $j < 5; $j++) { 
                $status= $transactionStatus[rand(0,2)];
                Transaction::create([
                    'price' => rand(500,2000),
                    'status' =>$status,
                    'description' => "",
                    'reference'=> (rand(500,2000) * $i * $j)."",
                    'user_id' => $i,
                    'payed_at' => $status == 'complete' ?  Carbon::now(): NULL ,
                ]);
            }
        }
    }
}
