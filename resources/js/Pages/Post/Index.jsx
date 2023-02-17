import React from "react";

import { usePage, useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

const Index = () => {
    const { posts } = usePage().props;
    const { data } = posts;

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Task</h1>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <div className="bg-black text-white p-2 w-36 m-5 rounded-md shadow-sm">
                        <Link href={route("posts.create")} >
                            + Create Task
                        </Link>
                    </div>

                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-black">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">Title</th>
                                <th className="px-6 pt-5 pb-4">Description</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((key, idx) => {
                                return (

                                    <tr key={idx} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {key.id}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {key.title}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {key.description}
                                        </td>
                                        <td>
                                            <a href={route("posts.edit", key.id)} className="w-16 h-10 bg-black text-white p-3 m-2 rounded-md">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                            {posts.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No Task Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Index;