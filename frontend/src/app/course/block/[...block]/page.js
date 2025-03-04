'use client'

import Header from "@/app/components/header"
import useGetData from "@/app/hooks/getDataHook";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";
import { API_HOST, APP_HOST } from "@/app/components/host";
import { useState } from "react";

export default function Page() {
    let id = usePathname().split('/');
    id = id[id.length - 1];
    return (
        <main className="relative w-full bg-dark">
            <Header />
            <BlockContent id={id}/>
        </main>
    )
}

function BlockContent({id}) {
    let data = useGetData(`/blocks/${id}`);
    let [isTest, setIsTest] = useState(false);
    return (
        <div className="flex flex-col gap-[30px] w-full p-10 rounedd-[40px] bg-white">
            {!data.isSuccess
            ?
            <Back id={id}/>
            :
            <>
                <div className="flex w-full justify-between text-dark">
                    <Back />
                    <span className="flex gap-2.5">
                        <Image alt="deadline" src={'/dedline.svg'} width={32} height={32}/>
                        <span className="text-3xl">deadline: {data.data.dedline}</span>
                    </span>
                </div>
                <Line />
                <section className="w-full rounded-[20px] p-5 bg-blue-opacity">
                    <p className="text-xl">
                        {data.data.text_content}
                    </p>
                </section>
                <Line />
                <VideoBlock video={data.data.video_content} isTest={isTest}/>
                <Line />
                <Test isTest={isTest} setIsTest={setIsTest} testContent={test_content.questions}/>
            </>
            }
        </div>
    )
}

function Test({isTest, setIsTest, testContent}) {
    async function sendTest(e) {
        e.preventDefault();
        let formData = JSON.stringify(Object.fromEntries(new FormData(document.getElementById('test'))));
        try {
            let res = await fetch(`${API_HOST}/submit/answer`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": 'Bearer ' + window.localStorage.getItem('access')
                },
                body: formData,
            });
            if (res.ok) setIsTest(false);
            else throw new Error(res.status);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="flex flex-col gap-[25px]">
            <h4 className="w-full text-left text-4xl">Тест по изученному материалу</h4>
            {
                !isTest
                ?
                <button onClick={() => setIsTest(true)} className="text-white bg-blue hover:bg-active active:bg-active">Начать тест</button>
                :
                <div className="text-dark relative rounded-[40px] p-[15px] bg-blue-opacity overflow-y-scroll">
                    <form id="test" className="flex flex-col items-center gap-[180px] min-h-[636px] rounded-[25px] p-10" onSubmit={sendTest}>
                        {testContent.map(question => <Question key={question.id} question={question}/>)}
                        <button type="submit" className="fixed text-white text-base bg-blue active:bg-active hover:bg-hover bottom-[65px] right-[150px]">Завершить тест</button>
                    </form>
                </div>
            }
        </section>
    )
}

function Question({question}) {
    let [answer, setAnswer] = useState(-1);

    return (
        <div className="flex flex-col gap-10 items-center max-w-[964px]">
            <div className="flex flex-col gap-[3px]">
                <h5 className="text-xl font-title font-bold text-[#BCBDC0]">Вопрос {Number(question.id) + 1}</h5>
                <p className="text-dark text-xl">{question.title}</p>
            </div>
            <Line />
            <div className="flex flex-col gap-2.5 w-[514px]">
                {question.options.map(option => <Answer answer={option} answerId={answer} key={option.id} setAnswer={setAnswer} questionId={question.id}/>)}
            </div>
        </div>
    )
}

function Answer(answer, answerId, setAnswer, questionId) {
    function change() {
        if (answer.id == answerId) setAnswer(-1);
        else setAnswer(answer.id);
    }

    return (
        <div className={`${answer.id == answerId && 'border-l-4 border-r-blue'} flex justify-between items-center rounded-md bg-[#F4F5F8] py-[15px] px-[30px]`}>
            <label htmlFor={``} className="text-base text-[#BCBDC0]">{answer.title}</label>
            <input id={`question${questionId}answer${answer}`} name={`question${questionId}answer${answer}`} onChange={change} type="checkbox" checked={answer.id == answerId}/>
        </div>
    )
}

function VideoBlock({video, isTest}) {
    return (
        <section className="flex flex-col gap-[25px] p-5 items-center">
            <h5 className="text-4xl w-full">Видео</h5>
            <div className="p-5 rounded-[20px] bg-blue-opacity">
                <video width={902} height={409} autoPlay={false} controls={true} className={`${isTest && 'pointer-events-none'}`} ><source src={video}  type="video/mp4"/></video>
            </div>
        </section>
        
    )
}

function Back({id}) {
    return (
        <Link className="" href={`${APP_HOST}/student/courses/`}><Image alt="close" width={30} height={51} src={'/back'}/></Link>
    )
}

function Line() {
    return (
        <div className="min-w-full min-h-[2px] bg-[#C8CDD0] opacity-50"></div>
    )
}