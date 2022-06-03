<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEW MESSAGE<title>
<head>
<body>
<h1 style="text-align: center; text-decoration: underline">NEW MESSAGE<h1>
<h1>From:<h1>
<p style="text-align: center;">{{$details['name']}}<p>
<h1>Contact:<h1>
<h2>Mail:<h2>
<p style="text-align: center;">{{$details['email']}}<p>
<h2>Phone:<h2>
<p style="text-align: center;">{{$details['phone']}}<p>
<h1>Message:<h1>
<p style="text-align: center;">{{$details['message']}}<p>
<h1 style="text-align: center; text-decoration: underline">Thanks!!<h1>
{{-- {(config('app.name'))} --}}
<body>
<html>