import React, { useState } from "react";
import { usePage, useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import { Inertia } from "@inertiajs/inertia";

const Index = () => {
    const { posts, search } = usePage().props;
    const [checked, setChecked] = useState(Array(posts.length).fill(false));
    const [numberOfChecked, setNumberOfChecker] = useState(0);
    const { data, setData, get, errors } = useForm({
        search: search || "",
    });
    const switchLink = useForm();
    const createTask = (e) => {
        e.preventDefault();
        switchLink.get(route("posts.create"))
    }

    function destroy(id) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", { id }));
        }
    }
    const checkManager = (idx) => {
        setNumberOfChecker(!checked[idx] ? numberOfChecked + 1 : numberOfChecked - 1)
        setChecked(datas => ({
            ...datas,
            [idx]: !checked[idx]
        }))
    }
    const checkAll = () => {
        // Removes all 
        let isAllSelected = numberOfChecked == posts.length;
        setChecked(Array(posts.length).fill(!isAllSelected))
        setNumberOfChecker(isAllSelected ? 0 : posts.length);

    }
    const onSearch = (e) => {
        e.preventDefault();
        get(route("posts.index"));
    }

    const destroySelected = (e) => {
        e.preventDefault();
        if (numberOfChecked == 0) return;
        if (!confirm("Are you sure you want to delete this user?")) return;


        var ids = []
        for (let i = 0; i < posts.length; i++)
            if (checked[i]) ids.push(posts[i].id);
        Inertia.delete(route("posts.delete-many", { id: ids }));
    }
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Task</h1>
                <div className="overflow-x-auto bg-white rounded shadow">
                    <div className=" text-white p-2 w-full m-5 rounded-md shadow-sm">
                        <button className="w-36 bg-black w-46 p-2 m-2 rounded-md" onClick={createTask}>
                            + Create Task
                        </button>
                        <form onSubmit={onSearch} className="mt-10" name="searchForm">
                            <input onChange={(e) => setData("search", e.target.value)} value={data.search} type="search" className="text-black shadow rounded border-0 p-3 w-10/12 text-blac " placeholder="Search Task..." />
                        </form>
                    </div>
                    {numberOfChecked > 0 && <div className="h-16 w-full shadow-lg p-5">
                        <span className="text-xs"> <strong> Selected </strong>: {numberOfChecked}</span>
                        <span onClick={destroySelected} className="m-2 bg-red-400 p-2 rounded-md text-white font-bold text-xs"> <strong>X</strong> Delete Selected </span>
                    </div>}
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-black">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">no.<span className="p-1"><input type="checkbox" checked={numberOfChecked == posts.length && posts.length > 0} onChange={checkAll} /></span></th>
                                <th className="px-6 pt-5 pb-4">Title</th>
                                <th className="px-6 pt-5 pb-4">Description</th>
                                <th className="px-6 pt-5 pb-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((key, idx) => {
                                return (

                                    <tr key={idx} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <input type="checkbox" checked={checked[idx]} onChange={() => checkManager(idx)} />
                                            <span className="p-5">
                                                {key.id}
                                            </span>
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
                                            <button onClick={() => destroy(key.id)} className="w-16 h-10 bg-red-400 text-white p-3 m-2 rounded-md">
                                                delete
                                            </button>
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
        </div >
    )
}

export default Index;