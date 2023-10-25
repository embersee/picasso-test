export type PostId = Brand<Id, "PostId">;

export type Post = {
  id: PostId;
  title: string;
  body: string;
};

export type PostDetails = {
  id: PostId;
  title: string;
  body: string;
};
