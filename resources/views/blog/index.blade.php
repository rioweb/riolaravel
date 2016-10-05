@extends('backpack::layout')

@section('header')
    <section class="content-header">
      <h1>
        {{ trans('backpack::base.blog') }}
      </h1>
      <ol class="breadcrumb">
        <li><a href="{{ url(config('backpack.base.route_prefix')) }}">{{ config('backpack.base.project_name') }}</a></li>
        <li class="active">{{ trans('backpack::base.blog') }}</li>
      </ol>
    </section>
@endsection


@section('content')
    <h2 class="heading text-center">Carga de Posts</h2>
    <div class="row">
        <div class="col-xs-12">
          <div class="box box-default">
            <table class="table table-hover">
        <thead>
          <th>#</th>
          <th>Titulo</th>
          <th>Subtitulo</th>
          <th>Cuerpo Noticia</th>
          <th>Creacion</th>
          <th></th>
      </thead>
      <tbody>
        @foreach ($notices as $notice)
          <tr>
            <td>{{ $notice->id }}</td>
            <td>{{ $notice->title }}</td>
            <td>{{ $notice->subtitle }}</td>
            <td>{{ substr($notice->body, 0, 45)}} {{ strlen($notice->body) > 50 ? "..." : "" }}</td>
            <td>{{ $notice->created_at }}</td>
            <td>
              <a class="btn btn-default btn-sm">Vista</a>
              <a  class="btn btn-default btn-sm">Editar</a>
            </td>

          </tr>
        @endforeach

      </tbody>
          </div>
        </div>
    </div>
@endsection
