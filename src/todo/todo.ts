let counter = 0;

export class Todo {
    public readonly id: string = (counter++).toString(16);
    public description: string = "";
    public completed: boolean = false;
    public owner: string = "";
}