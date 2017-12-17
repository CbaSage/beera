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

    public function fetchIssue(Issue $issue)
    {
        return $issue;
    }
}
