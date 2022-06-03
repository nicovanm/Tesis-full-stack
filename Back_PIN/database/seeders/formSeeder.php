<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Post;

class formSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::create([
            'name'=>'Rodrigo',
            'email'=>'rodrigosalas75@gmail.com',
            'phone'=>'3541-544707',
            'message'=>'Enviando un mensaje.'
        ]);
    }
}
