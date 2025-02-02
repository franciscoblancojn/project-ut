<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->decimal('price', 10, 2);  // Para el precio, con dos decimales
            $table->timestamp('payed_at')->nullable();  // Para la fecha de pago
            $table->string('status');  // El estado de la transacción
            $table->string('reference')->nullable();  
            $table->text('description')->nullable();  // La descripción, puede ser nula
            $table->foreignId('user_id')->constrained()->onDelete('cascade');  // Referencia al usuario

            $table->timestamps();  // Las marcas de tiempo (created_at, updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
