const template = {
  projectId: 1,
  project: "golang",
  title: "",
  description: "",
  bannerImgUrl: "",
  images: [],
  features: [],
  packages: [],
  startDate: "",
  endDate: "",
  completed: false,
  github: "",
};

const projects = {
  nextjs: [
    {
      projectId: 1,
      project: "nextjs",
      title: "Ecommerce Website",
      description:
        "A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. Get your business online.",
      bannerImgUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/home-1.png",
      images: [
        "/assets/img/projects/nextjs/nextjs_ecommerce/home-1.png",
        "/assets/img/projects/nextjs/nextjs_ecommerce/home-2.png",
        "/assets/img/projects/nextjs/nextjs_ecommerce/product-details-1.png",
        "/assets/img/projects/nextjs/nextjs_ecommerce/product-details-2.png",
        "/assets/img/projects/nextjs/nextjs_ecommerce/cart.png",
        "/assets/img/projects/nextjs/nextjs_ecommerce/success.png",
      ],
      features: [
        "Well designed home page",
        "Fully functional cart",
        "Stripe Payment System",
        "Sanity backend. Allows to add products and configure product details(price, description, name, photos)",
      ],
      packages: [
        "@sanity/client",
        "@sanity/image-url",
        "@stripe/stripe-js",
        "canvas-confetti",
        "next",
        "next-sanity-image",
        "react",
        "react-dom",
        "react-hot-toast",
        "react-icons",
        "stripe",
      ],
      startDate: "11-08-2022",
      endDate: "20-08-2022",
      completed: true,
      github: "",
    },
  ],
  golang: [],
};

export default projects;
