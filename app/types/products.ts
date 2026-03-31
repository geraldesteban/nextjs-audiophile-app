export type Products = {
  id: number;
  slug: string;
  name: string;

  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
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
    second: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    third: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };

  others: unknown[];

  cart: {
    image: string;
  };

  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductsProps = {
  products: Products[];
};
