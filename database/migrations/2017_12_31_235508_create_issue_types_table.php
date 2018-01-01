<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssueTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issue_types', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('workflow_id')->unsigned();
            $table->foreign('workflow_id')->references('id')->on('workflows');
        });

        Schema::table('issues', function($table){
            $table->integer('issue_type_id')->unsigned();
            $table->foreign('issue_type_id')->references('id')->on('issue_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('issues', function ($table) {
            $table->dropForeign(['issue_type_id']);
            $table->dropColumn('issue_type_id');
        });

        Schema::dropIfExists('issue_types');
    }
}
