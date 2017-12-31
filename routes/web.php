<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/logout', 'Auth\LoginController@logout');

Auth::routes();

Route::get('/api/issues', 'IssueController@issueList')->name('fetch-issues');
Route::post('/api/issues', 'IssueController@store')->name('create-issue');
Route::get('/api/issues/{issue}', 'IssueController@fetchIssue')->name('fetch-issue');
Route::put('/api/issues/{issue}', 'IssueController@updateIssueField')->name('update-issue-field');


Route::get('/api/projects', 'ProjectController@projectList')->name('fetch-projects');
Route::post('/api/projects', 'ProjectController@store')->name('create-project');

Route::get('/{path?}', [
    'uses' => 'HomeController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
])->name('redux-home');