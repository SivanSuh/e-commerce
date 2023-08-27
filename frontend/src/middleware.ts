import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { isAuth } from "@/lib/auth"

export function middleware(request:NextRequest){

    const allCookies = request.cookies.getAll();
    if(!isAuth(request.cookies)){
        return NextResponse.redirect(new URL("/login",request.url))
    }
}

