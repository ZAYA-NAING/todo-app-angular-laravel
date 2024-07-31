import { Injectable } from '@angular/core';
import { Todo, TodoSearchParams } from '../../../../models/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../../../interfaces/app.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(protected http: HttpClient) {}

  getUrl(...urlArguments: any[]): string {
    return 'api/todos';
  }

  createModel(data: Todo): Todo {
    return new Todo(data);
  }

  fetchItems(params?: TodoSearchParams): Observable<ApiResponse<Todo[]>> {
    return this.http
      .get<ApiResponse<Todo[]>>(this.getUrl(), { params: this.makeParams(params, true)})
      .pipe(map(res => this.createApiResponse(res) as ApiResponse<Todo[]>));
  }

  saveItem(payload: Todo, ...urlArguments: any[]): Observable<ApiResponse<Todo>> {
    return payload.id ? this.putItem(payload.id, payload, urlArguments) : this.postItem(payload, urlArguments);
  }

  postItem(payload: Todo, ...urlArguments: any[]): Observable<ApiResponse<Todo>> {
    return this.http
      .post<ApiResponse<Todo>>(`${this.getUrl(...urlArguments)}`, payload)
      .pipe(map(res => this.createApiResponse(res) as ApiResponse<Todo>));
  }

  putItem(id: number, payload: Todo, ...urlArguments: any[]): Observable<ApiResponse<Todo>> {
    return this.http
      .put<ApiResponse<Todo>>(`${this.getUrl(...urlArguments)}/${id}`, payload)
      .pipe(map(res => this.createApiResponse(res) as ApiResponse<Todo>));
  }

  deleteItem(id: number, ...urlArguments: any[]): Observable<ApiResponse<Todo>> {
    return this.http
      .delete<ApiResponse<Todo>>(`${this.getUrl(...urlArguments)}/${id}`)
      .pipe(map(res => this.createApiResponse(res) as ApiResponse<Todo>));
  }

  createApiResponse(res: ApiResponse<Todo | Todo[]>): ApiResponse<Todo | Todo[]> {
    return {
      data: Array.isArray(res.data)
        ? res.data.map(data => this.createModel(data))
        : res.data ? this.createModel(res.data) : null,
      meta: res.meta,
      errors: res.errors ?? null,
      result: res.result ?? null,
    }
  }

  makeParams(searchParams: TodoSearchParams, isHttpParams: boolean = false): HttpParams {
    let parseParams: any = {};
    Object.keys(searchParams).forEach((key: string) => {
      if (searchParams[key as keyof TodoSearchParams] !== null) {
        parseParams[key] = searchParams[key as keyof TodoSearchParams];
        if (Array.isArray(parseParams[key]) && parseParams[key].length) {
          parseParams[key] = parseParams[key].join(',');
        }
      }
    });
    if (isHttpParams) {
      return new HttpParams({ fromObject: parseParams });
    }
    return parseParams;
  }
}
