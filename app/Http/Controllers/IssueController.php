<?php

namespace App\Http\Controllers;

use App\Issue;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    public function issueList()
    {
        $issues = Issue::all();
        return $issues;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:issues',
            'project_id' => 'required'
        ]);

        return Issue::create(array_merge(
            $request->all(),
            ['created_by_id' => auth()->user()->id]
        ));
    }

    public function fetchIssue(Issue $issue)
    {
        return $issue;
    }
}
