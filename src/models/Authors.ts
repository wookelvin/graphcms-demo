export interface Authors { 
  id: string;
  name: string;
  picture: { url: string };
  posts: { 
    title: string; 
    slug: string;
    date: string;
    id: string;
  }[];
}

export const AuthorsQuery = `
{
  authors {
    name
    id
    picture {
      url(transformation: {image: {resize: {width: 100, height: 100}}})
    }
    posts {
      title
      slug
      date
      id
    }
  }
}`;