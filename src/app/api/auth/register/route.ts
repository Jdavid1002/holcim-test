import { createResponseFailed, createResponseSuccess } from '@/utils/customResponses';
import { http } from '@/utils/http';
import { createToken } from '@/utils/tokens';

//@INFO Next and libraries
import { NextResponse } from "next/server"
const bcrypt = require('bcrypt');

export interface IPOSTRequest {
  email : string
  password : string
  name : string
}


export const POST = async (request : Request) => {

  const params = await request.json() as IPOSTRequest

  if(!params?.email || !params?.password || !params?.name) {
    return NextResponse.json(createResponseFailed({
      message : 'Invalid data.'
    }))
  }
  const users = await http({
    url: "/users",
    method: 'GET',
    data: null
  })
  const user = users?.find((user : any) => user?.email === params?.email)
  if(user) return NextResponse.json(createResponseFailed({
    message : 'Current this user exist.'
  }));

  //@INFO: Creacion de contraseña encriptada.
  const new_pass = await bcrypt.hash(params?.password, 10);

  //@INFO: Creacion de usuario
  const response = await http({
    url: '/users',
    method: 'POST',
    data: {
      password: new_pass,
      email: params?.email || '',
      name: params?.name || '',
      created_at : new Date(),
    }
  })

  await createToken(response?._id)

  return NextResponse.json(createResponseSuccess({
    message : 'success',
    data : response
  }));
}