<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function projectList()
    {
        return Project::all();
    }

    public function store(Request $request)
    {
        return Project::create($request->all);
    }
}
