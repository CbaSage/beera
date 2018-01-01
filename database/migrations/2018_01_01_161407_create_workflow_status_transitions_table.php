<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkflowStatusTransitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workflow_status_transitions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('workflow_id')->unsigned();
            $table->foreign('workflow_id')->references('id')->on('workflows');

            $table->integer('workflow_status')->unsigned()->nullable();
            $table->foreign('workflow_status')->references('id')->on('workflow_statuses');

            $table->integer('transition_option')->unsigned()->nullable();
            $table->foreign('transition_option')->references('id')->on('workflow_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workflow_status_transitions');
    }
}
