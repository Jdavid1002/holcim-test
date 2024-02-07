import { createResponseFailed, createResponseSuccess } from '@/utils/customResponses';
import { http } from '@/utils/http';
import { createToken } from '@/utils/tokens';

//@INFO Next and libraries
import { NextResponse } from "next/server"
const bcrypt = require('bcrypt');

export interface IPOSTRequest {
  email : string
  password : string
}

export const POST = async (request : Request, res : Response) => {

  const params = await request.json() as IPOSTRequest

  if(!params?.email || (!params?.password)) return NextResponse.json(createResponseFailed({
    message : 'Invalid data.'
  }));

  //@INFO: Buscar usuario por email
  const users = await http({
    url: "/users",
    method: 'GET',
    data: null
  })

  const user = users?.find((user : any) => user?.email === params?.email) 
  if(!user) return NextResponse.json(createResponseFailed({
    message : 'User not found.'
  }));

  //@INFO: Validacion de contraseñas encriptadas
  const is_same_password = await bcrypt.compare(params?.password, user?.password);
  if(!is_same_password) return NextResponse.json(createResponseFailed({
    message : 'User not found.'
  }));

  await createToken(user?._id)

  return NextResponse.json(createResponseSuccess({
    message : 'success',
    data : user
  }));
}