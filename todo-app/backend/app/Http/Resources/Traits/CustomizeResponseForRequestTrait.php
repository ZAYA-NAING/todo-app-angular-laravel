<?php

namespace App\Http\Resources\Traits;


use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Trait CustomizeResponseForRequestTrait
 *
 * @package App\Http\Resource
 * @see     JsonResource
 */
trait CustomizeResponseForRequestTrait
{
    protected $result = true;
    protected $message = null;
    protected $errors = null;

    /**
     * @see JsonResource::withResponse
     */
    public function withResponse($request, $response)
    {
        $responseData = $response->getData();
        $responseData->result = $this->result;
        $responseData->message = $this->message;
        $responseData->errors = $this->errors;
        $response->setData($responseData);
    }

    public function setResult($result)
    {
        $this->result = $result;
        return $this;
    }

    public function setMessage($title, $body = null)
    {
        $this->message = ['title' => $title, 'body' => $body];
        return $this;
    }

    public function setErrors($errors)
    {
        $this->errors = $errors;
        return $this;
    }
}
