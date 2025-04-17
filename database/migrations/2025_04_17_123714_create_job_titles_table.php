<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobTitlesTable extends Migration
{
    public function up()
    {
        Schema::create('job_titles', function (Blueprint $table) {
            $table->id(); // AUTO_INCREMENT primary key
            $table->string('job_title',50); // Job title name
            $table->foreignId('job_category_id')->constrained('job_categories')->onDelete('cascade'); // Foreign key reference to job_categories
            $table->timestamps(0); // Created at and updated at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('job_titles');
    }
}
