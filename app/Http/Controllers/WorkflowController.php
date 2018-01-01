<?php

namespace App\Http\Controllers;

use App\Workflow;
use Illuminate\Http\Request;

class WorkflowController extends Controller
{
    public function workflowList()
    {
        return Workflow::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:workflows',
        ]);

        return Workflow::create(array_merge(
            $request->all(),
            ['created_by_id' => auth()->user()->id]
        ));
    }
}
