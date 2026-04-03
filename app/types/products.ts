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
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: [
    {
      quantity: number;
      item: string;
    },
  ];
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
  others: [
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    },
  ];
  cart: {
    image: string;
  };
};
