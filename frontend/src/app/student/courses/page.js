'use client'

import { changePage } from "@/lib/slices/pages/pagesSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from 'react';
import { API_HOST, APP_HOST } from "@/app/components/host";
import { redirect } from "next/navigation";
import { LoadPlug, TINPlug } from "@/app/components/plugs";
import Image from "next/image";
import { MoveToButton } from "../components/buttons";
import refresh from "@/app/components/func";
import { Coming_Soon } from "next/font/google";

export default function Page() {
    let [data, setData] = useState({data: null, isSuccess: false, isLoad: false});
    let [activeId, setActiveId] = useState(0);
    const dispatch = useAppDispatch();
    const page = useAppDispatch(state => state.pages.page);
    useEffect (() => {
        if (page != 1){
            dispatch(changePage(1));
        }
    });

    useEffect(() => {
        async function getData() {
            let redirectPath = ''
            try {
                if (!data.isLoad) {
                    let res = await fetch(`${API_HOST}/courses`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "Authorization": 'Bearer ' + window.localStorage.getItem('access')
                        }
                    });
                    if (res.ok) setData({data: await res.json(), isSuccess: true, isLoad: true});
                    else if (res.status == 401) {
                        if (!(await refresh())) redirectPath = `${APP_HOST}/auth`;
                        else setData({name: null, isSuccess: false, isLoad: false});
                    }
                    else setData({data: data.data, isSuccess: false, isLoad: true});
                }
            } catch(e) {
                console.log(e);
                setData({data: data.data, isSuccess: false, isLoad: true});
            } finally {
                if (redirectPath != '') redirect(redirectPath);
            }
        }
        getData();
    })

    return (
        <>
            <div className="flex gap-[30px] w-full h-10 justify-start items-end">
                <SlideButton id={0} activeId={activeId} change={setActiveId} text={'Все курсы'}/>
                <SlideButton id={1} activeId={activeId} change={setActiveId} text={'Пройденные курсы'}/>
            </div>
            {
                data.isLoad
                ?
                <List data={data} activeId={activeId}/>
                :
                <>
                    <LoadPlug width={'100%'} height={'276'}/>
                    <LoadPlug width={'100%'} height={'276'}/>
                    <LoadPlug width={'100%'} height={'276'}/>
                </>
            }
        </>
    )
}

function List({data, activeId}) {
    return (
        <>
            {
            data.isSuccess && data.data.lendth != 0
            ?
                data.data.map(course => <Course key={course.id} course={course} full={activeId == 1}/>)
            :
                <TINPlug body={'Добавьте курс при помощи кнопки справа или попросите администратора выдать вам доступ'}/>
            }
        </>
    )
}

function Course({course, full}) {
    let image
    if (course.image) image = course.image;
    else image = '/DefCourse.jpg'
    return (
        <div className={`flex relative gap-5 w-full p-10 rounded-[30px] ${course.id % 2 == 0 ? 'bg-blue-opacity' : 'bg-bright-opacity'}`}>
            <Image alt="Course image" width={335} height={220} src={image} className="rounded-xl"/>
            <div className="w-full flex flex-col gap-[15px]">
                <h4 className="w-full text-wrap text-4xl">{course.title}</h4>
                <p className="w-full text-xl">{course.description}</p>
            </div>
            <MoveToButton href={`${APP_HOST}/course/${course.id}`}/>
        </div>
    )
}



function SlideButton({id, activeId, change, text}) {
    return (
        <button onClick={() => change(id)} className={`${id == activeId ? 'underline underline-offset-[10px] text-4xl' : 'text-3xl opacity-75'} text-dark transition-all`}>
            {text}
        </button>
    )
}