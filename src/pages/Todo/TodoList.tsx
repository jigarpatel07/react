import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changePosition, deleteTodo, doneTodo, editData, openTodoModal } from '../../store/TodoStore/TodoStoreSlice';
import { ToastNotification } from '../../components/ToastNotification';
import { Todo } from '../../interface';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { MdDoneOutline } from "react-icons/md";

const TodoList = () => {
    const data = useSelector((state: RootState) => state.Todo.todoData)
    console.log({ data });

    const dispatch = useDispatch()
    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const newItems = Array.from(data);
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);
        dispatch(changePosition(newItems))
    };
    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id))
        ToastNotification({ status: 'success', message: 'Todo deleted successfully' });
    }
    const handleEditTodo = (data: Todo) => {
        dispatch(editData(data))
        dispatch(openTodoModal(true))
    }
    const handleDoneTodo = (data: Todo) => {
        let newData = { ...data, status: "Done" }
        dispatch(doneTodo(newData))
        ToastNotification({ status: 'success', message: 'Todo Done successfully' });
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot: any) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}
                            className='bg-white p-2 w-full m-h-[200px] box-border rounded-md'
                        >
                            {data.length > 0 ? data?.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index} >
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                userSelect: 'none',
                                                margin: '0 0 8px 0',
                                                backgroundColor: snapshot.isDragging ? '#080808' : '#212329',
                                                ...provided.draggableProps.style,
                                            }}
                                            className='flex justify-between gap-4 w-full p-4 text-white box-border rounded-xl '
                                        >
                                            <div className='flex flex-col max-w-[200px] sm:max-w-[500px] md:max-w-[800px]'>
                                                <p className={`text-2xl  line-clamp-1 ${item.status.value === "Done" && "line-through"} `}>
                                                    {item.title}
                                                </p>
                                                <p className={`text-xl  max-h-16 line-clamp-2 ${item.status.value === "Done" && "line-through"}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex gap-4 items-center sm:flex-row flex-col">
                                                <div
                                                    onClick={() => handleDeleteTodo(item.id)}
                                                    className='cursor-pointer p-1 md:p-3'
                                                >
                                                    <HiOutlineTrash className='text-red-500 hover:scale-125' />
                                                </div>
                                                <div
                                                    onClick={() => handleEditTodo(item)}
                                                    className='cursor-pointer  p-1 md:p-3'
                                                >
                                                    <HiOutlinePencil className='text-blue-500 hover:scale-125' />
                                                </div>
                                                <div
                                                    onClick={() => item.status.value !== "Done" && handleDoneTodo(item)}
                                                    className={`cursor-pointer  p-1 md:p-3 ${item.status.value !== "Done" ? "opacity-100" : "opacity-45"}`}
                                                >
                                                    <MdDoneOutline className='text-green-500 hover:scale-125' />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            )) :
                                <p className='text-center font-medium'>No Todo data available</p>}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default TodoList;
