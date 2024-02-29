<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        //CREACION DE LA TABLA
        Schema::create('DESARROLLADORES', function (Blueprint $table) {

            $table->id('DESARROLADOR_ID')->autoIncrement();
            $table->string('NOMBRE',45);
            $table->integer('EDAD');
            $table->string('HABILIDAD',45);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('DESARROLLADORES');
    }
};
