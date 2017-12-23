<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function projectList()
    {
        return Project::with('createdBy')->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:projects',
            'abbreviation' => 'required|unique:projects',
        ]);

        return Project::create(array_merge(
            $request->all(),
            ['created_by_id' => auth()->user()->id]
        ));
    }
}
