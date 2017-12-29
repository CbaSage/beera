<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->timestamps();

            $table->increments('id');
            $table->char('title', 255);
            $table->float('story_points')->nullable();
            $table->text('description');

            $table->integer('created_by_id')->unsigned();
            $table->foreign('created_by_id')->references('id')->on('users');

            $table->integer('assigned_to_id')->unsigned()->nullable();
            $table->foreign('assigned_to_id')->references('id')->on('users');

            $table->integer('parent_issue_id')->unsigned()->nullable();
            $table->foreign('parent_issue_id')->references('id')->on('issues');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('issues');
    }
}
