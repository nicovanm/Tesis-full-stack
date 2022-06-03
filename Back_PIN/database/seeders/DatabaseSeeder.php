<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(Post::class);
    }
}
