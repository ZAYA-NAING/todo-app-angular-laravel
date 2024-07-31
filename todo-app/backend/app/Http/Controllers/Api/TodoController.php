<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TodoCollection;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return TodoCollection
     */
    public function index()
    {
        Log::debug("index.");
        $query = Todo::query()->with(['todoStatus']);
        if ($title = request()->input('title')) {
            $query->where('title', 'LIKE', "%{$title}%");
        }
        if (request()->input('todo_status_id')) {
            $query->where('todo_status_id', request()->input('todo_status_id'));
        }
        $todos = $query->orderBy('id', 'desc')
            ->paginate(request()->input('per_page', 10));
        return (new TodoCollection($todos));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return TodoResource
     */
    public function store(Request $request)
    {
        Log::debug("store.");
        $result = (new Todo())->fill(request()->all());
        if ($result->save()) {
            return (new TodoResource($result))->setMessage('New todo added.');
        } else {
            Log::debug("Could not create todo. input = " . json_encode(request()->all()));
            throw new HttpResponseException(response()->json([
                'result'  => false,
                'message' => ['title' => 'Todo could not be created.', 'body' => null],
            ], 200));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Todo $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Todo $todo
     * @return TodoResource
     */
    public function update(Request $request, Todo $todo)
    {
        Log::debug("update.");
        $result = $todo->fill(request()->all())->save();
        if ($result) {
            return (new TodoResource($todo))->setMessage('Todo updated.');
        } else {
            Log::debug("Could not update todo. id = {$todo->id}, input = " . json_encode(request()->input()));
            throw new HttpResponseException(response()->json([
                'result'  => false,
                'message' => ['title' => 'Todo could not be updated.', 'body' => null],
            ], 200));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Todo $todo
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Todo $todo)
    {
        Log::debug("destroy.");
        if ($todo->delete()) {
            return response()->json([
                'result'  => true,
                'message' => ['title' => 'Todo deleted.', 'body' => null],
            ], 200);
        } else {
            Log::debug("Could not destroy User. id = $todo->id");
            throw new HttpResponseException(response()->json([
                'result'  => false,
                'message' => ['title' => 'Todo could not be deleted.', 'body' => null],
            ], 200));
        }
    }
}
