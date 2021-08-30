import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = React.memo(({handleAddTodo}) => {
    console.log('TodoAdd de nuevo D:')

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length > 0) {
            handleAddTodo({
                id: new Date().getTime(),
                description: description,
                done: false
            });
            reset();
        }
    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input type='text'
                       name='description'
                       className='form-control'
                       placeholder='Tarea'
                       autoComplete='off'
                       onChange={handleInputChange}
                       value={description}/>

                <button className='btn btn-outline-primary mt-1 w-100'
                        type='submit'>
                    Agregar
                </button>
            </form>
        </>
    )
})

export default TodoAdd;