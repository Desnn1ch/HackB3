'use client'

import { APP_HOST, API_HOST } from "@/app/components/host"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import useGetData from "@/app/hooks/getDataHook";
import { LoadPlug } from "@/app/components/plugs";
import Header from "@/app/components/header";
import refresh from "@/app/components/func";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Page() {
    let id = usePathname().split('/')[2];
    let [moduleOpen, setModuleOpen] = useState(-1);
    let data = useGetData(`/courses/${id}`, `/student`);
    
    if (!data.isLoad || !data.isSuccess) return <></>
    else {
        let img 
        if (data.data.image) img = data.data.img;
        else img = `url(/DefCourse.jpg)`
        return (
            <main className="w-full relative bg-fixed bg-cover bg-center bg-no-repeat" style={{backgroundImage: (img)}}>
                <Header />
                <div className="w-full pt-[450px]">
                    <div className="w-full p-10 rounded-t-[40px] bg-dark flex flex-col items-start gap-[30px] text-white">
                        <h2 className="text-4xl font-title">{data.data.title}</h2>
                        <p className="w-full text-xl">{data.data.description}</p>
                        <span className="text-base">Дедлайн: {data.data.deadline}</span>
                        <Modules id={data.data.id} openModule={setModuleOpen}/>
                    </div>
                </div>
                <Module id={moduleOpen} close={() => setModuleOpen(-1)}/>
            </main>
        )
    }
}

function Modules({id, openModule}) {
    let data= useGetData(`/modules?course=${id}`, `${APP_HOST}/student`);

    if (data.isLoad) {
        if (data.isSuccess) {
            return (
                <ul className="grid grid-cols-3 gap-[30px] p-10 rounded-[40px] bg-white">
                    {data.data.map(module => <PreviewModule key={module.id} module={module} openModule={openModule}/>)}
                </ul>
            )
        } else return <></>
    } else {
        <LoadPlug width={'100%'} height={276}/>
    }
}

function PreviewModule({module, openModule}) {
    return (
        <li className="w-full flex flex-col gap-[15px] items-start p-5 rounded-[20px] shadow-base bg-bright-opacity">
            <h5 className="text-4xl text-dark">{module.title}</h5>
            <p className="text-xl text-dark">{module.description}</p>
            <button onClick={() => openModule(module.id)} className="py-2.5 px-[30px] bg-blue rounded-xl hover:bg-blue focus:bg-blue text-white">Открыть модуль</button>
        </li>
    )
}


function Module({id, close}) {
    let [data, setData] = useState({data: null, isSuccess: false, isLoad: false});
    useEffect(() => {
        async function getData() {
            if (!data.isLoad && id >= 0) {
                let redirectPath = '';
                try {
                    let res = await fetch(`${API_HOST}/modules/${id}/`, {
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
                    else throw new Error(res.status);
                } catch (e) {
                    console.log(e);
                    setData({data: data.data, isSuccess: false, isLoad: true});
                } finally {
                    if (redirectPath != '') redirect(redirectPath);
                }
            }
        }
        getData();        
    });

    if (id >= 0 && data.isSuccess){
        return (
            <div className="z-30 fixed top-0 w-full px-5 py-[172px] h-screen backdrop-blur-lg overflow-scroll">
                <div className="w-full flex flex-col gap-[30px] text-white bg-dark rounded-[40px] p-10">
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-title">{data.data.title}</h3>
                        <button onClick={close}><Image src={'/Close.svg'} alt="close" width={30} height={30}/></button>
                    </div>
                    <p className="text-xl">{data.data.description}</p>
                    <span className="text-base">{data.data.deadline}</span>
                    <Blocks id={id}/>
                </div>
            </div>
        )
    } else return <></>
    
}

function Blocks({id}) {
    let data = useGetData(`/blocks?module=${id}`);
    if (data.isSuccess) {
        return (
            <ul className="flex flex-col gap-[30px] p-10 rounded-[40px] bg-white">
                {data.data.map(block => <PreviewBlock key={block.id} block={block}/>)}
            </ul>
        )
    } else return <></>
}

function PreviewBlock({block}) {
    return (
        <li className="w-full text-dark rounded-[20px] shadow-base">
            <Link href={`${APP_HOST}/course/block/${block.id}`} className="w-full bg-white">
                <p className="text-xl w-full p-5">{block.text_content}</p>
            </Link>
        </li>
    )
}