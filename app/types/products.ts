export type Products = {
  id: number;
  slug: string;
  name: string;

  image: Record<string, unknown>;
  category: string;

  categoryImage?: Record<string, unknown>;

  new: boolean;
  price: number;

  description?: string;
  features?: string;

  includes: {
    quantity: number;
    item: string;
  }[];

  gallery: {
    first: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };

  others: unknown[];

  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductsProps = {
  products: Products[];
};
