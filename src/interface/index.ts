export interface Todo {
    id: string,
    title: string
    description: string
    status: {
        value: string;
        label: string
    };
}
export interface TodoState {
    todoData: Todo[];
    editData: Todo;
    isTodoModalOpen: boolean
}
export interface TodoValues {
    title: string;
    description: string;
    status: {
        value: string;
        label: string
    };
}