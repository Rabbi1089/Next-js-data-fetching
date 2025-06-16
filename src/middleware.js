import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const middleware = async (request) => {
  //const cookieStore = cookies(); // No argument needed
  //const token = cookieStore.get("next-auth.session-token");
  
  const token = cookies(request).get('next-auth.session-token');
  console.log(" token is ", token);
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
};
export const config = {
  matcher: ['/meal', '/post'],
};

export default middleware;
