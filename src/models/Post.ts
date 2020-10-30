export interface Post { 
  id: string;
  slug: string;
  content: { html: string };
  title: string;
  tags: string[];
  author: { name: string; picture: { url: string }};
}

export const PostQuery = (slug: string)=> `
query {
  post(where: {slug: "${slug}"}) {
    date
    id
    slug
    title
    tags
    content {
      html
    }
    author {
      name
      picture {
        url(transformation: {image: {resize: {height: 100, width: 100}}})
      }
    }
  }
}`;