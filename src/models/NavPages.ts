export interface NavPages { 
  id: string;
  slug: string;
  title: string;
}
export const NavPagesQuery = `{ pages {id slug title}}`;