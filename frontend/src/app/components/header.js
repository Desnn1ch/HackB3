'use client'

import { API_HOST, APP_HOST } from "@/app/components/host";
import LogoFull from "@/app/components/logo"
import { useState, useEffect } from "react"
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import refresh from "./func";

export default function Header() {
    let [data, setData] = useState({name: '', isLoad: false});
    useEffect(() => {
        async function getData() {
            if (!data.isLoad) {
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
                    if (res.ok) setData({name: (await res.json()).username, isLoad: true});
                    else if (res.status == 401) {
                        if (!(await refresh())) redirectPath = `${APP_HOST}/auth`;
                        else setData({name: '', isLoad: false});
                    }
                    else throw new Error(res.status);
                } catch(e) {
                    console.log(e);
                    setData({name: data.name, isLoad: true});
                } finally {
                    if (redirectPath != '') redirect(redirectPath);
                }
            }
        }
        getData();
    })

    return (
        <header className="z-50 p-5 w-full fixed">
            <div className="px-10 py-5 w-full flex justify-between items-center bg-dark rounded-full shadow-base">
                <LogoFull />
                <Link href={`${APP_HOST}/student/courses`} className="px-[30px] py-[15px] rounded-full text-white text-xl border-[1px] border-white">к курсам</Link>
                <Name />
            </div>
        </header>
    )
}

function Name({name}) {
    let randomColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`.toUpperCase();
    return (
        <div className="flex gap-5 items-center">
            <span className="text-white text-xl">{name}</span>
            <div className={`w-[60px] h-[60px] rounded-full bg-[${randomColor}] flex items-center justify-center`}>
                <Image alt="avatar" src={'/UserIco.svg'} width={44} height={44}/>
            </div>
        </div>
    )
}