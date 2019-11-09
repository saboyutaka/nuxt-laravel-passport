<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Laravel\Passport\Client::create([
            'id' => env('LARAVEL_PASSPORT_CLIENT_ID'),
            'name' => 'nuxt-auth',
            'secret' => env('LARAVEL_PASSPORT_CLIENT_SECRET'),
            'redirect' => env('NUXT_CALLBACK_URL'),
            'personal_access_client' => 0,
            'password_client' => 0,
            'revoked' => 0,
        ]);
    }
}
