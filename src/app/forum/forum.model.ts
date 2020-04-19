export interface Todo {
    text: string;
    name: string;
    priority: Priority;
    authorId: string;
    date: Date;
}

export enum Priority {
    Low = 1,
    Middle = 2,
    High = 3
}

