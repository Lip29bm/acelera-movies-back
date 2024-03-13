import { Movies } from "@models/entity/Movies"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export const getMovies = async (req: Request, res: Response) => {
  try {
    const retornaFilmes = await getRepository(Movies).find()
    return res.status(200).json(retornaFilmes)
  } catch (error) {
    return res.status(500).json({ message: "falha" })
  }
}

export const postMovies = async (req: Request, res: Response) => {
  try {
    const {
      title,
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    } = req.body
    const verificaFilme = getRepository(Movies).create({
      title: title,
      gender: gender,
      classification: classification,
      subtitle: subtitle,
      image: image,
      releaseDate: releaseDate,
      director: director,
      writer: writer,
      studio: studio,
      actors: actors,
      resume: resume,
      awards: awards,
      note: note,
    })
    if (
      title !== "" &&
      gender !== "" &&
      classification !== "" &&
      subtitle !== "" &&
      image !== "" &&
      releaseDate !== null &&
      director !== "" &&
      writer !== "" &&
      studio !== "" &&
      actors !== "" &&
      resume !== "" &&
      awards !== "" &&
      note !== null
    ) {
      await getRepository(Movies).save(verificaFilme)
      return res.status(200).json({ auth: "true", message: "sucesso" })
    }
    return res
      .status(500)
      .json({ message: `a descricao do filme esta imcompleta` })
  } catch (error) {
    return res.status(500).json({ message: "falha" })
  }
}
