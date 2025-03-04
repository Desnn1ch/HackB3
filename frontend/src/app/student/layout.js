'use client'

import { useEffect, useState } from "react";
import { API_HOST, APP_HOST } from "../components/host";
import StoreProvider from "../components/storeProvider";
import NavBar from "./components/navbar";
import Search from "./components/search";
import { redirect } from "next/navigation";
import refresh from "../components/func";

export default function AdminLayout({children}) {
    let [admin, setAdmin] = useState({name: null, isSuccess: false, isLoad: false})
    useEffect(() => {
        async function getData() {
            if (!admin.isLoad) {
                let redirectPath = ''
                try {
                    let res = await fetch(`${API_HOST}/auth/users/me`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "Authorization": 'Bearer ' + window.localStorage.getItem('access')
                        }
                    });
                    if (res.ok) setAdmin({name: (await res.json()).name, isSuccess: true, isLoad: true});
                    else if (res.status == 401) {
                        if (!(await refresh())) redirectPath = `${APP_HOST}/auth`;
                        else setAdmin({name: null, isSuccess: false, isLoad: false});
                    }
                    else throw new Error(res.status);
                } catch(e) {
                    console.log(e);
                    setAdmin({name: admin.name, isSuccess: false, isLoad: true});
                } finally {
                    if (redirectPath != '') redirect(redirectPath);
                }
            }
            
        }
        getData();
    })   
    
    if (admin.isSuccess) {
        return(
            <StoreProvider>
                <div className="w-full flex p-5">
                    <NavBar />
                    <div className="w-full flex flex-col gap-y-[30px] py-5 px-10 rounded-[40px] bg-white">
                        <Search />
                        <Line />
                        {children}
                    </div>
                </div>
            </StoreProvider>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

function Line() {
    return (
        <div className="flex w-full justify-center">
            <div className="w-full h-[2px] bg-[#C8CDD0] opacity-50"></div>
        </div>
    )
}