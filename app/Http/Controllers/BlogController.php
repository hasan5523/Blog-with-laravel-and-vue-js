<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function get_all_blog_post(){
        $posts = Post::with('user','category')->orderBy('id','desc')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }

    public function getPostById($id){
        $post = Post::with('user','category')->where('id',$id)->first();
        return response()->json([
            'post'=>$post
        ],200);
    }

    public function allCategories(){
        $categories = Category::all();
        return response()->json([
            'categories' => $categories

        ],200);
    }

    public function allPostByCatId($id){
        $posts = Post::with('user','category')->where('cat_id',$id)->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }

    public function searchPost(){
        $search = \Request::get('s');

        if( $search != null){
            $posts = Post::with('user','category')
                ->where('title','LIKE',"%$search%")
                ->orWhere('description','LIKE',"%$search%")
                ->get();
            return response()->json([
                'posts'=>$posts
            ],200);
        }else{
            return $this->get_all_blog_post();
        }

    }

    public function latestPost(){
        return $this->get_all_blog_post();
    }
}
