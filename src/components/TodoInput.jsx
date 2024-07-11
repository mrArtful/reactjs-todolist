import React, { useState } from 'react';

export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
    

    return (
        <header>
            <input
                onChange={(e) => setTodoValue(e.target.value)}
                type="text"
                placeholder="Enter todo..."
                value={todoValue}
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue('');
                }}
            >
                Add
            </button>
        </header>
    );
}
