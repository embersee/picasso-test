import { type PostDto } from "../api/types";
import { type Post, type PostId } from "../model/types";

export function mapPostDetails(dto: PostDto): Post {
  return {
    id: dto.id as PostId,
    title: dto.title,
    body: dto.body,
  };
}
