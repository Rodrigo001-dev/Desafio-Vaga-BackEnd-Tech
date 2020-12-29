import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; // O typeorm utiliza uma arquitetura
// um pattern chamado repository pattern que é basicamente toda a operação
// que queremos fazer no banco de dados(criar, listar, deletar ...) passa
// por um repositorio, o repositorio é quem detem a regra de como que um
// dado pode ser criado, como que ele pode ser deletado

import Comment from '../../models/Comment';

export default async function create(request: Request, response: Response) {
  try {
    const { id } = request.params; // Route Param
    const { comment } = request.body;

    const commentRepository = getRepository(Comment);

    const data = {
      comment,
      post_id: Number(id),
    };

    // deixa os comments pré-criado
    const comments = commentRepository.create(data); 

    await commentRepository.save(comments); // salvar no banco

    return response.status(201).json(comments);
  } catch (error) {
    console.log(error);
  }
};