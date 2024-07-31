import { Component, ModelOptions, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, tap } from 'rxjs/operators';
import { Todo, TodoSearchParams } from '../../../../models/todo';
import { ApiResponse } from '../../../../interfaces/app.interface';
import { TodoService } from '../../../../core/services/api-services/todo/todo.service';
import { TodoEditableFormComponent } from '../../../components/todos/todo-editable-form/todo-editable-form.component';

@Component({
  selector: 'app-todos-index',
  templateUrl: './todos-index.component.html',
  styleUrls: ['./todos-index.component.less'],
})

export class TodosIndexComponent implements OnInit, OnDestroy {
  private _response$: BehaviorSubject<ApiResponse<Todo[]>> =
    new BehaviorSubject(null);
    

  response$: Observable<ApiResponse<Todo[]>> = this._response$.asObservable();

  defaultSearch: any = {};

  activatedRouteQueryParams$: BehaviorSubject<TodoSearchParams> =
    new BehaviorSubject(null);

  subscription: Subscription;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modal: NzModalService
  ) {
    this.subscription = this.activatedRoute.queryParams
      .pipe(
        map(activatedQueryParams => {
          const parseParams: any = {};
          Object.keys(activatedQueryParams).forEach((key: string) => {
            // If key starts with '_', change it to an array
            if (activatedQueryParams[key].length && key.match(/^_/)) {
              parseParams[key] = activatedQueryParams[key].split(',');
            } else {
              parseParams[key] = activatedQueryParams[key];
            }
          });
          return parseParams;
        })
      )
      .subscribe((params: Params) =>
        this.activatedRouteQueryParams$.next(params)
      );
  }

  ngOnInit(): void {
    const params = this.activatedRouteQueryParams$.value
      ? this.activatedRouteQueryParams$.value
      : this.defaultSearch;
    this.fetchItems(params);
  }

  ngOnDestroy(): void {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  fetchItems(params?: TodoSearchParams): void {
    this.todoService
      .fetchItems(params)
      .pipe(
        tap(() => {
          this.changeRouteQueryParams(params);
        })
      )
      .subscribe(res => this._response$.next(res));
  }

  onSearchStart(params: TodoSearchParams): void {
    this.fetchItems(params);
  }

  onSearchClear(): void {
    this.fetchItems(this.defaultSearch);
  }

  onPageChanged(page: number): void {
    this.fetchItems({
      ...this.activatedRouteQueryParams$.value,
      ...{ page: page },
    });
  }

  changeRouteQueryParams(params: TodoSearchParams) {
    this.router.navigate([], {
      queryParams: this.todoService.makeParams(params),
      relativeTo: this.activatedRoute,
      replaceUrl: true,
    });
  }

  onShowTodoEditModal(todo?: Todo): void {
    console.log(todo);
    this.modal
      .create<TodoEditableFormComponent, any>({
        nzTitle: todo ? 'Edit' : 'Add',
        nzContent: TodoEditableFormComponent,
        nzClosable: true,
        nzCancelText: 'Cancel',
        nzOkText: todo ? 'Save' : 'Register',
        // nzComponentParams: todo ? { todo } : undefined,
        nzData: todo ? { todo } : undefined,
      })
      .afterClose.subscribe((res: any) => {
        if (!!res) {
          this.fetchItems(this.activatedRouteQueryParams$.value);
        }
      });
  }

  onShowDeleteConfirm(todoId: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>
        this.todoService.deleteItem(todoId).subscribe(res => {
          if (res.result) {
            this.fetchItems(this.activatedRouteQueryParams$.value);
          }
        }),
      nzCancelText: 'No',
    });
  }
}
