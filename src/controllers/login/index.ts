import { LogIn } from "@models/entity/Name"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export const getLogIn = async (req: Request, res: Response) => {
  try {
    const { senha, usuario } = req.body
    const camparando = await getRepository(LogIn).findOne({
      where: { senha: senha, usuario: usuario },
    })
    console.log(senha, camparando.senha)
    if (senha === camparando.senha && usuario === camparando.usuario) {
      return res.status(500).json({ auth: "true", message: "sucesso" })
    }
    return res.status(500).json({ auth: "false", message: "falha" })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ mensagem: `nome de usuario ou senha invalida` })
  }
}

// import { Request, Response } from "express"
// import { Name } from "@models/entity/Name"
// import { getRepository } from "typeorm"
// import { get } from "http"
// export const postNames = async (req: Request, res: Response) => {
//   try {
//     const { name } = req.body
//     const newName = getRepository(Name).create({ name })
//     await getRepository(Name).save(newName)
//     return res.status(201).json(newName)
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ mensagem: `erro ao cadastrar o nome` })
//   }
// }
// export const allNames = async(req:Request, res: Response)=> {
//     try {
//         const pullNames = await getRepository(Name).find()
//         return res.status(201).json(pullNames)
//     } catch (error){
//         return res.status(500).json({mensagem:`ocorreu erro ao puxar o banco de dados`})
//     }
// }
