'use client'

import { useState, useEffect } from "react";
import refresh from "../components/func";
import { API_HOST, APP_HOST } from "../components/host";

export default function useGetData(query, errorRedirect) {
    let [data, setData] = useState({data: null, isSuccess: false, isLoad: false});
    useEffect(() => {
        async function getData() {
            if (!data.isLoad) {
                let redirectPath = '';
                try {
                    let res = await fetch(`${API_HOST}${query}`, {
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
                    if (errorRedirect) redirectPath = `${APP_HOST}${errorRedirect}`;
                } finally {
                    if (redirectPath != '') redirect(redirectPath);
                }
            }
        }
        getData();        
    });
    return data;
}