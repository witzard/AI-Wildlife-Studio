"use client"

export default function DeleteButton({ id, deletePost }: { id: number, deletePost: Function }) {
    return <button onClick={() => deletePost(id)}>Delete</button>
}