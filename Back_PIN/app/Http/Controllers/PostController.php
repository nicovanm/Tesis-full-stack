<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Mail\NewMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class PostController extends Controller
{
    public function saveForm(Request $request){
        $post = Post::create([
            'name'=> $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message
        ]);

        Mail::to('rodrigosalas75@gmail.com')->send(new NewMessage($post));        
        return response()->json(['status'=>'-----Mensaje enviado correctamente!!!-----','response'=>200,'detail'=>$post]);
    }

    public function newForm(){
        return view('form');
    }
}

