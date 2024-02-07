import {createResponseSuccess } from '@/utils/customResponses';
import {deleteToken } from '@/utils/tokens';

//@INFO Next and libraries
import { NextResponse } from "next/server"

export interface IPOSTRequest {
  email : string
  password : string
}

export const POST = async (request : Request, res : Response) => {
  await deleteToken()

  return NextResponse.json(createResponseSuccess({
    message : 'success',
    data : null
  }));
}