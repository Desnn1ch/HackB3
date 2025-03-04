'use client'

import { changePage } from "@/lib/slices/pages/pagesSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from 'react';
import { BasePlug } from "../components/plugs";
import Welcome from "./components/welcome";

const blocks = [
    {
        id: 0,
        title: 'Краткая сводка по курсам',
        body: 'Последний созданный курс / Курс в процессе создания, если впервые вход - предложение курс создать',
        isBlue: true,
        isReverse: true
    },
    {
        id: 1,
        title: 'Краткая сводка по аналитике',
        body: 'Люди в команде, их прогресс в прохождении курса, пройденные курсы, процент правильных ответов',
        isBlue: false,
        isReverse: false
    },
    // {
    //     id: 2,
    //     title: 'Управление командами, организациями',
    //     body: 'Регистрация организации / команды, добавление и удаление сотрудников по ссылке / ID, оповещение сотрудников о новом курсе, который им надо пройти на почте',
    //     isBlue: true,
    //     isReverse: true
    // }
]

export default function Page() {
    const dispatch = useAppDispatch();
    const page = useAppDispatch(state => state.pages.page);
    useEffect (() => {
        if (page != 0){
            dispatch(changePage(0));
        }
    });

    return (
        <>
            <Welcome />
            {blocks.map(block => <BasePlug key={block.id} title={block.title} body={block.body} isBlue={block.isBlue} isReverse={block.isReverse}/>)}
        </>
    )
}