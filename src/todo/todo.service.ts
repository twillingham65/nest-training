import { Injectable } from '@nestjs/common';
import { Todo } from "./todo";

@Injectable()
export class TodoService {
    private readonly items = new Map<string, Todo>();

    constructor() {
        for (let i = 0; i < 4; i++) {
            const mockTodo = new Todo();
            mockTodo.description = "test";
            mockTodo.completed = false;
            mockTodo.owner = "unassigned";
            this.items.set(mockTodo.id, mockTodo);
        }
    }

    public async getAll(): Promise<IterableIterator<Todo>> {
        return Promise.resolve(this.items.values());
    }

    public async getItem(id: string): Promise<Todo | null> {
        return Promise.resolve(this.items.get(id) ?? null);
    }

//tw 20200424 - added deleteItem method
public async deleteItem(id: string): Promise<Todo | null> {
        Promise.resolve(this.items.delete(id) ?? null);
        return null;
    }

//tw 20200424 - added updateItem method
public async updateItem(id: string, description: string, completed: boolean, owner: string): Promise<Todo | null> {
        const mockTodo = new Todo();
        Promise.resolve(this.items.set(id, mockTodo) ?? null);
        return mockTodo;
    }

}