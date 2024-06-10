type PostProps = {
  id: string;
  title: string;
  body: string;
  image: string;
  tags?: string[];
  likes: number;
  comments: number;
  views: number;
  author: string;
  avatar: string;
};