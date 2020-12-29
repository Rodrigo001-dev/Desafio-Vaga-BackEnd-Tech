import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Comment from '../../models/Comment';

export default async function show(request: Request, response: Response) {
  const { id } = request.params;

  const commentRepository = getRepository(Comment);

  const comment = await commentRepository.find({ where: { post_id: id } });

  return response.status(200).json(comment);
};