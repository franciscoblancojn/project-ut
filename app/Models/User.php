<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Carbon\Carbon;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    } 
    //  /**
    //  * Mutador para setear la fecha de creación en UTC.
    //  *
    //  * @param  mixed  $value
    //  * @return void
    //  */
    // public function setCreatedAtAttribute($value)
    // {
    //     // Convierte la fecha a UTC antes de guardarla en la base de datos.
    //     $this->attributes['created_at'] = Carbon::parse($value)->setTimezone('America/Bogota')->toDateTimeString();
    // }

    // /**
    //  * Mutador para setear la fecha de actualización en UTC.
    //  *
    //  * @param  mixed  $value
    //  * @return void
    //  */
    // public function setUpdatedAtAttribute($value)
    // {
    //     // Convierte la fecha a UTC antes de guardarla en la base de datos.
    //     $this->attributes['updated_at'] = Carbon::parse($value)->setTimezone('America/Bogota');
    // }
}
