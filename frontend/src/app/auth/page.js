'use server'

import LogIn from "./components.js/login";
import LogoFull from "../components/logo";

export default async function Page() {
    return (
        <main className={`h-screen w-full flex`}>
            <Info />
            <LogIn />
        </main>
    )
}

function Info() {
    return (
        <section className={`h-full relative z-20 bg-local bg-center bg-cover bg-no-repeat w-1/2 overflow-hidden rounded-r-[40px]`} style={{backgroundImage: 'url(/BgAuth.jpg)'}}>
            <div className="w-full h-full px-24 pt-7 backdrop-blur-xl flex flex-col items-center justify-start text-white gap-11">
                <div className="w-full flex justify-start items-center pb-[100px]">
                    <LogoFull />
                </div>
                <h2 className="text-7xl text-center font-title">Давно не виделись!</h2>
                <p className="text-xl text-center">Мы рады, что ты вернулся! Войди в свой аккаунт, чтобы продолжить знакомство с платформой</p>
            </div>
        </section>
    )
}