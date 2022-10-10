import { NextApiRequest, NextApiResponse } from "next";

export default (request : NextApiRequest, response : NextApiResponse) => {

  const users = [
    {id: 1, nome: 'Cabral'},
    {id: 2, nome: 'Everton'},
    {id: 3, nome: 'Warlen'}
  ]

  return response.json(users);

}