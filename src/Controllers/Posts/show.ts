import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Post from '../../models/Post';

export default async function show(request: Request, response: Response) {
  const { id } = request.params; // Route Params

  const postRepository = getRepository(Post);

  const post = await postRepository.findOneOrFail(id, {
    relations: ['comments']
  });

  if (!post) {
    return response.status(404).json({ message: 'Not Found' });
  }
  
  return response.status(200).json(
    {
      name: post.name, 
      message: post.message, 
    }
  );
};