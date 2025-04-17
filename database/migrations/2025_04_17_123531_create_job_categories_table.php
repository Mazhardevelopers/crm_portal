<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('job_categories', function (Blueprint $table) {
            $table->id(); // AUTO_INCREMENT primary key
            $table->string('category_name',50); // Category name
            $table->enum('category_type', ['specialist', 'non-specialist']); // Category type
            $table->timestamps(0); // Created at and updated at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('job_categories');
    }
}
