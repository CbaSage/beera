<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'abbreviation', 'created_by_id'];

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

}
