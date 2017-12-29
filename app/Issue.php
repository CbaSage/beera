<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    protected $fillable = ['title', 'story_points', 'created_by_id', 'description', 'project_id'];

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function photos()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }
}
