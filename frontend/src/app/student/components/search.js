'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { API_HOST, APP_HOST } from "@/app/components/host";
import { redirect } from "next/navigation";
import refresh from "@/app/components/func";

export default function Search() {
    let [user, setUser] = useState({name: false, isSuccess: false});
    
    useEffect(() => {
        async function getData() {
            let redirectPath = ''
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
                    else if (res.status == 401) {
                        if (!(await refresh())) redirectPath = `${APP_HOST}/auth`;
                        else setUser({name: null, isSuccess: false});
                    }
                    else throw new Error(res.status);
                }
            } catch(e) {
                console.log(e);
                setUser({name: '', isSuccess: false});
            } finally {
                if (redirectPath != '') redirect(redirectPath);
            }
        }
        getData();
    });

    return (
        <div className="flex justify-between items-center">
            <form className="flex items-center gap-x-2.5">
                <button type="submit">
                    <Image alt="search" src={'/search.svg'} width={30} height={30}/>
                </button>
                <input className='w-[120px] py-1 px-1 border-none placeholder:text-xl placeholder:text-dark' placeholder="Поиск..."/>
            </form>
            <div className="flex gap-x-5 items-center">
                {user.isSuccess && <p className="text-xl text-dark">{user.name}</p>}
                <Image alt="Avatar" src={'/UserDefAvatar.svg'} width={60} height={60}/>
            </div>
        </div>
    )
}