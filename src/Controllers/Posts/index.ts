import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Post from '../../models/Post';

export default async function index(request: Request, response: Response) {
  try {
    const postRepository = getRepository(Post);

    const posts = await postRepository.find();

    return response.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};