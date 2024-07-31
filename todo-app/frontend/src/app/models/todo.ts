export class Todo {
  id: number = null;

  title: string = null;

  todo_status_id: number = null;

  todo_status: {id: number, name: string} = null;

  note: string = null;

  created_at: string = null;

  updated_at: string = null;

  constructor(data: Record<string, any>) {
    Object.keys(data).forEach((key: string) => {
      (this as any)[key] = data[key];
    });
  }
}

export class TodoSearchParams {
  title?: string = null;

  todo_status_id?: number = null;
}
