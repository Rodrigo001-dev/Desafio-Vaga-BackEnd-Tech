import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; // O typeorm utiliza uma arquitetura
// um pattern chamado repository pattern que é basicamente toda a operação
// que queremos fazer no banco de dados(criar, listar, deletar ...) passa
// por um repositorio, o repositorio é quem detem a regra de como que um
// dado pode ser criado, como que ele pode ser deletado

import Post from '../../models/Post';

import * as Yup from 'yup';

export default async function create(request: Request, response: Response) {
  try {
    const {
      name,
      message,
    } = request.body;

    const postRepository = getRepository(Post);

    const data = {
      name,
      message,
    };

    const post = postRepository.create(data); // deixa o post pré-criado

    await postRepository.save(post); // salvar no banco

    return response.status(201).json(post);
  } catch (error) {
    // return error;

    console.log(error);
  }
}