import { Movies } from "@models/entity/Movies"
import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { remove } from "winston"

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const idInserido = req.params.id
    const buscandoIdInserido = await getRepository(Movies).findOne({
      where: { id: idInserido },
    })
    if (buscandoIdInserido) {
      return res.status(200).json({
        mensage: "filme encontrado com sucesso",
        movie: { buscandoIdInserido },
      })
    }
    return res.status(500).json({ message: "Falha ao encontrar Filme." })
  } catch (error) {
    return res.status(500).json({ message: "Erro interno no servidor." })
  }
}

export const getDeleteMovieById = async (req: Request, res: Response) => {
  try {
    const idParaDeletar = req.params.id
    const buscandoParaDeletar = await getRepository(Movies).findOne({
      where: { id: idParaDeletar },
    })
    await getRepository(Movies).remove(buscandoParaDeletar)
    const listaAtualizada = getRepository(Movies).find()
    return res
      .status(200)
      .json({ message: "removido com sucesso", listaAtualizada })
  } catch (error) {
    return res.status(500).json({ messagem: "erro interno" })
  }
}

export const putMovieById = async (res: Request, req: Request) => {
  try {
    const {
      idDoNovoFilme = req.params.id,
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
      id: idDoNovoFilme,
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
      idDoNovoFilme !== null &&
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
      return
    }
    return
  } catch (error) {}
}
