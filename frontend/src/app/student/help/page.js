'use client'

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { changePage } from "@/lib/slices/pages/pagesSlice";

export default function Page() {
    const dispatch = useAppDispatch();
    const page = useAppDispatch(state => state.pages.page);
    useEffect (() => {
        if (page != 2){
            dispatch(changePage(2));
        }
    });

    return(
        <>
        </>
    )
}