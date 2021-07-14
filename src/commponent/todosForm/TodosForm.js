import React, {useState} from "react";

export default function TodosForm({onSubmit}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const hendleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || isLoading) return

        try {
            setIsLoading(true);
            await onSubmit(title, description);
            setTitle('');
            setDescription('');
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={hendleSubmit}>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
                   placeholder='to do title'/>
            <br/>
            <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
                   placeholder='to do description'/>
            <br/>
            <button type='submit' disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}