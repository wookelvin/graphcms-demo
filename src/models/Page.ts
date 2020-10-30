export interface Page { 
  id: string;
  slug: string;
  content: { html: string };
  title: string;

}

export const PageQuery = (slug: string)=> `
query {
  page(where: {slug: "${slug}"}) {
    slug
    id
    title
    content {
      html
    }
  }
}`;