'use client'

const { API_HOST } = require("./host");

export default async function refresh() {
    try {
        let res = await fetch(`${API_HOST}/auth/jwt/refresh`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorisation": 'Bearer ' + window.localStorage.getItem('access'),
            },
            body: JSON.stringify({refresh: window.localStorage.getItem('refresh')})
        });
        if (res.ok) {
            window.localStorage.setItem('access', (await res.json()).access);
            return true;
        }
        else throw new Error(res.status);
    } catch(e) {
        console.log(e);
        return false;
    }
}