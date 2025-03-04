'use client'

import LogoFull from "@/app/components/logo";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { changePage } from "@/lib/slices/pages/pagesSlice";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_HOST } from "@/app/components/host";
import { redirect } from "next/navigation";

const baseNav = [
    {
        id: 0,
        name: 'Главная',
        link: `${APP_HOST}/student/`,
        image: '/HomeImg'
    },
    {
        id: 1,
        name: 'Курсы',
        link: `${APP_HOST}/student/courses`,
        image: '/CourseImg'
    },
    // {
    //     id: 2,
    //     name: 'Аналитика',
    //     link: `${APP_HOST}/admin/analytics`,
    //     image: '/AnalyticsImg',
    // },
    // {
    //     id: 3,
    //     name: 'Управление',
    //     link: `${APP_HOST}/admin/administration`,
    //     image: '/ControlImg'
    // }
    {
        id: 2,
        name: 'Помощь',
        link: `${APP_HOST}/student/help`,
        image: '/Help'
    },
]

export default function NavBar() {
    const store = useAppStore();
    const initialized = useRef(false);
    if (!initialized.current) {
        store.dispatch(changePage(-2))
        initialized.current = true
    }
    const page = useAppSelector(state => state.pages.page);    

    return(
        <div className="h-full w-auto relative bg-dark">
            <nav className="sticky h-fit flex flex-col items-center min-w-[228px] bg-white">
                <div className="flex w-full justify-center pb-[15px] pt-5 bg-dark">
                    <LogoFull />
                </div>
                <Line activeId={page} id={1}/>
                {baseNav.map(elem => <NavLink activeId={page} key={elem.id} id={elem.id} link={elem.link} name={elem.name} image={elem.image}/>)}
                <Line activeId={page} id={2}/>
                <Exit />
            </nav>
        </div>
    )
}

function Exit() {
    let [isActive, setIsActive] = useState(false);

    function exit() {
        window.localStorage.clear();
        redirect(`${APP_HOST}/auth`);
    }

    return (
        <button onClick={exit} onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className={`flex flex-col items-center w-full h-fit bg-dark`}>
            <div className={`flex items-center w-full justify-center gap-x-[15px] py-[15px]`}>
                <Image alt={'exit'} src={`/Exit${isActive ? 'Active' : ''}.svg`} width={30} height={30} className="stroke-white hover:stroke-[#FF0000] transition-all"/>
                <span className={`transition-all text-left w-[118px] ${isActive ? 'text-[#FF0000]' : 'text-white'} text-xl`}>Выйти</span>
            </div>
        </button>
    )
}

function Line({activeId, id}) {
    return (
        <div className={`flex w-full bg-dark justify-center py-[15px] ${activeId == 0 && id == 1 && 'rounded-br-[20px]'} ${activeId == 2 && id == 2 && 'rounded-tr-[20px]'}`}>
            <div className="w-[186px] h-[2px] bg-[#C8CDD0] opacity-20"></div>
        </div>
    )
}

function NavLink({activeId, id, link, name, image}) {
    return (
        <Link className={`flex flex-col items-center w-full h-fit bg-dark ${activeId - 1 == id || activeId + 1 == id ? activeId - 1 == id ? 'rounded-br-[20px]' : 'rounded-tr-[20px]' : ''}`} href={link}>
            <div className={`flex items-center w-full justify-center gap-x-[15px] py-[15px] ${activeId == id ? 'bg-white rounded-l-[20px]' : 'bg-transparent'} `}>
                <Image alt={name} src={`${image}${activeId == id ? 'Active' : ''}.svg`} width={30} height={30}/>
                <span className={`w-[118px] ${activeId == id ? 'text-blue' : 'text-white'} text-xl`}>{name}</span>
            </div>
        </Link>
    )
}