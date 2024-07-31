<?php

namespace App\Http\Resources;

use App\Http\Resources\Traits\CustomizeResponseForRequestTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TodoCollection extends ResourceCollection
{
    use CustomizeResponseForRequestTrait;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function toArray($request)
    {
        return TodoResource::collection($this->collection);
    }
}
