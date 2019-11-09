<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller as Base;
use Illuminate\Http\Request;

class PostsController extends Base
{
    public function index()
    {
        $data = [
            "posts" => [
                [
                    "id" => 1,
                    "title" => "First Post",
                    "content" => "contentcontent",
                ],
                [
                    "id" => 2,
                    "title" => "Second Post",
                    "content" => "SECOND",
                ]
            ],
        ];
        return response()->json($data);
    }
}
