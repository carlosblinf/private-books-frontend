export interface Book {
  isbn13: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  url: string;
  desc?: string;
  year?: string;
  authors?: string;
  publisher?: string;
  pages?: string;
}

export interface RootObject {
  error: string;
  total: string;
  books: Book[];
}
