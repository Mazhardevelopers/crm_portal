<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobCategoryJobTitleTable extends Migration
{
    public function up()
    {
        Schema::create('job_category_job_title', function (Blueprint $table) {
            $table->bigInteger('job_category_id')->unsigned();
            $table->bigInteger('job_title_id')->unsigned();
            $table->primary(['job_category_id', 'job_title_id']); // Composite primary key
            $table->foreign('job_category_id')->references('id')->on('job_categories')->onDelete('cascade');
            $table->foreign('job_title_id')->references('id')->on('job_titles')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('job_category_job_title');
    }
}
