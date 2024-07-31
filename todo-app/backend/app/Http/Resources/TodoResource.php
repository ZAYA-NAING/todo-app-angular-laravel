<?php

namespace App\Http\Resources;

use App\Http\Resources\Traits\CustomizeResponseForRequestTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    use CustomizeResponseForRequestTrait;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
