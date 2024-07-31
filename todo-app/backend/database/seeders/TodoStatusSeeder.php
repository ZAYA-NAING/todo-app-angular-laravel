<?php

namespace Database\Seeders;

use App\Models\TodoStatus;
use Illuminate\Database\Seeder;

class TodoStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TodoStatus::query()->truncate();
        TodoStatus::create(['id' => 100, 'name' => 'Processing']);
        TodoStatus::create(['id' => 200, 'name' => 'Completed']);
        TodoStatus::create(['id' => 300, 'name' => 'Pending']);
    }
}
