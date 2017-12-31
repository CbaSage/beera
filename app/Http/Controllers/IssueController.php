<?php

namespace App\Http\Controllers;

use App\Issue;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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

    public function updateIssueField(Issue $issue, Request $request)
    {
        $data = $request->all();
        $properties = array_keys($data);
        if(count($properties) != 1){
            return Response::json(array(
                'code'      =>  400,
                'message'   =>  'Only one field is allowed to be updated at a time'
            ), 400);
        }

        $issue->{$properties[0]} = $data[$properties[0]];
        $issue->save();
        return $issue;
    }

    public function fetchIssue(Issue $issue)
    {
        return $issue;
    }
}
