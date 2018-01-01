<?php

namespace App\Http\Controllers;

use App\WorkflowStatus;
use Illuminate\Http\Request;

class WorkflowStatusController extends Controller
{
    public function workflowStatusList()
    {
        return WorkflowStatus::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:workflows',
        ]);

        return WorkflowStatus::create($request->all());
    }
}
