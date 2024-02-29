<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesarrolladoresModel extends Model
{
    use HasFactory;

    protected $table = 'DESARROLLADORES';
    protected $primaryKey= 'DESARROLADOR_ID';
    protected $fillable = ['NOMBRE', 'EDAD', 'HABILIDAD'];
    
    public $timestamps = true;

    
}
