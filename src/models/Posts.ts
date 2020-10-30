export interface Posts { 
  id: string; 
  title: string; 
  date: string;
  author: { 
    name: string;
    picture: {url: string};
  }; 
  excerpt: string;
  slug: string;
  tags: string[];
}

export const PostsQuery = `
query {
  posts {
    id
    title
    date
    author {
      name
      picture {
        url(transformation: {image: {resize: {width: 100, height: 100}}})
      }
    }
    excerpt
    slug
    tags
  }
}`;