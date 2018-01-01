<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkflowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workflows', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->char('name', 50);

            $table->integer('created_by_id')->unsigned();
            $table->foreign('created_by_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('workflows', function ($table) {
            $table->dropForeign(['created_by_id']);
            $table->dropColumn('created_by_id');
        });

        Schema::dropIfExists('workflows');
    }
}
