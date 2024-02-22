import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/signin' || path === '/register' 

    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token) {
      // const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
      // const role = "/" + decodedToken.role
      return NextResponse.redirect(new URL('/mentor', request.nextUrl))
    }

    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [

    '/signin',
    '/register',
    '/student',
    '/mentor'
  ],
}