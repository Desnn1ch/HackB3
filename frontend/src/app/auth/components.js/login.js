'use client'

import LogoFull from "@/app/components/logo"
import InputField from "./input"
import { API_HOST, APP_HOST } from "@/app/components/host";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
    let [error, setError] = useState(null);
    let redirectPath = '/'

    async function sendData(e) {
        e.preventDefault();
        let formData = JSON.stringify(Object.fromEntries(new FormData(document.getElementById('login'))));
        try {
            let res = await fetch(`${API_HOST}/auth/jwt/create`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: formData
            });
            if (res.ok) {
                let tokens = await res.json();
                window.localStorage.setItem('access', tokens.access);
                window.localStorage.setItem('refresh', tokens.refresh);
                redirectPath = `${APP_HOST}/student`;
            } else throw new Error(res.status);
        } catch (e) {
            console.log(e);
            window.localStorage.clear();
            setError('Неверная почта или пароль');
        } finally {
            redirect(redirectPath, 'replace');
        }   
    }

    return (
        <section className="relative flex flex-col justify-center items-center gap-[65px] z-10 w-1/2 text-white py-[30px] px-[60px]">
            <h3 className="text-6xl font-title text-center text-nowrap">Войти в аккаунт</h3>
            <p className="text-xl text-center">Введи электронную почту, привязанную к аккаунту Большой Тройки, а также используемый пароль ниже.</p>
            <form id="login" className="w-[514px] flex flex-col gap-2.5 items-center" onSubmit={sendData}>
                {
                    error && <label className="text-base w-full text-left text-red-500">{error}</label>
                }
                <InputField placeholder={'Введите имя пользователя'} image={'/FullName.svg'} name={'username'} id={'usernamesignup'} type={'username'}/>
                <InputField placeholder={'Пароль'} image={'/Password.svg'} name={'password'} id={'passwordsignup'} type={'password'}/>
                <button className="mt-5 transition-all text-white rounded-full px-10 py-4 text-xl bg-blue hover:bg-active active:bg-active focus:bg-active">Войти</button>
            </form>
        </section>
    )
}