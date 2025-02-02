<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

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
                'amount'=>10000 + (100 * $i)
            ]);
        }
    }
}
