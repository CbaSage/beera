<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkflowStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workflow_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->char('name', 50);
            $table->text('description');

            $table->integer('workflow_id')->unsigned();
            $table->foreign('workflow_id')->references('id')->on('workflows');

            $table->integer('previous_status_id')->unsigned()->nullable();
            $table->foreign('previous_status_id')->references('id')->on('workflow_statuses');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workflow_statuses');
    }
}
