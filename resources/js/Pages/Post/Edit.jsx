
import React from "react";
// import { Inertia } from "@inertiajs/core";
import { usePage, useForm, Link } from '@inertiajs/react'
import { Inertia } from "@inertiajs/inertia";



const Edit = () => {
    const { post } = usePage().props;
    const { data, setData, put, errors } = useForm({
        title: post.title || "",
        description: post.description || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", post.id));
        }
    }
    return (
        <div className="flex min-h-screen items-center justify-start bg-white">
            <div className="mx-auto w-full max-w-lg">
                <h1 className="text-4xl font-medium">Edit Tasks</h1>
                <p className="mt-3"> Edit the  Task </p>
                <form onSubmit={handleSubmit} className="mt-10" name="createForm">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                            <input type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)} name="title"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Task Title
                            </label>
                            <span className="text-red-600">
                                {errors.title}
                            </span>
                        </div>
                        <div className="relative z-0 col-span-2">
                            <textarea value={data.description}
                                onChange={(e) => setData("description", e.target.value)} name="description" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                Your message
                            </label>
                            <span className="text-red-600">
                                {errors.description}
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">
                        Submit
                    </button>
                    <button
                        onClick={destroy}
                        tabIndex="-1"
                        type="button"
                        className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                        Delete
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Edit;