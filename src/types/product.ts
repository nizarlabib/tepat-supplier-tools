export interface Product {
  id: string;
  name: string;
  brand?: string;
  category: string;
  description: string;
  image: string;
  alt?: string;
  isDemo: boolean;
}

export interface ProductCategoryInfo {
  id: string;
  name: string;
  description: string;
}

