"use client"
import { useFormStatus } from "react-dom"

export default function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus()
    return <button className="inline-block shrink-0 rounded-md border border-[#67296d] bg-[#67296d] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[c874b2] focus:outline-none focus:ring active:text-[#c874b2] dark:hover:bg-[#c874b2] dark:hover:text-white" disabled={pending} type="submit">
        {pending ? "Submitting..." : label}
    </button>
}