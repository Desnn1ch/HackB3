'use client'

import { API_HOST, APP_HOST } from "@/app/components/host";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Welcome() {
    let [user, setUser] = useState({name: false, isSuccess: false});

    useEffect(() => {
        async function getData() {
            try {
                if (!user.name) {
                    let res = await fetch(`${API_HOST}/auth/users/me/`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "Authorization": 'Bearer ' + window.localStorage.getItem('access')
                        }
                    });
                    if (res.ok) setUser({name: (await res.json()).username, isSuccess: true});
                    else throw new Error(res.status);
                }
            } catch(e) {
                setUser({name: '', isSuccess: false});
                console.log(e);
            }
        }
        getData();
    });

    return (
        <>
            {(user.isSuccess && user.name.length > 0) && <h2 className="text-4xl font-title">Добро пожаловать, {user.name}!</h2>}
        </>
    )
}