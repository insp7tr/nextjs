const template = {
  projectId: 1,
  project: "",
  title: "",
  description: "",
  bannerImgUrl: "",
  bannerType: "",
  images: [
    {
      imageId: 1,
      imageUrl: "",
      imageTitle: "",
    },
  ],
  features: ["", "", ""],
  packages: ["", "", ""],
  startDate: "",
  endDate: "",
  completed: false,
  github: "",
};

const projects = {
  flutter: [
    {
      projectId: 1,
      project: "flutter",
      title: "Amazon Ecommerce Clone",
      description:
        "A full stack e-commerce app with Flutter, Javascript, Node.js, Express, MongoDB and Mongoose.",
      bannerImgUrl:
        "/assets/img/projects/flutter/flutter_amazon_clone/user-home.png",
      bannerType: "full-stack-project",
      images: [
        {
          imageId: 1,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/auth-1.png",
          imageTitle: "Signup Screen",
        },
        {
          imageId: 2,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/auth-2.png",
          imageTitle: "Login Screen",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-home.png",
          imageTitle: "User Home Screen",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-search.png",
          imageTitle: "User Search Screen",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-product-details.png",
          imageTitle: "User Product Details Screen",
        },
        {
          imageId: 6,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-orders.png",
          imageTitle: "User Orders Screen",
        },
        {
          imageId: 7,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-order-details.png",
          imageTitle: "User Order Details Screen",
        },
        {
          imageId: 8,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-category-search.png",
          imageTitle: "User Category Search Screen",
        },
        {
          imageId: 9,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-cart.png",
          imageTitle: "User Cart Screen",
        },
        {
          imageId: 10,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-address.png",
          imageTitle: "User Address Pre-checkout Screen",
        },
        {
          imageId: 11,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/user-checkout.png",
          imageTitle: "User Checkout Screen",
        },
        {
          imageId: 12,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/admin-products.png",
          imageTitle: "Admin Products CRUD Screen",
        },
        {
          imageId: 13,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/admin-graph-stats.png",
          imageTitle: "Admin Statistics Screen",
        },
        {
          imageId: 14,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/admin-orders.png",
          imageTitle: "Admin Orders Screen",
        },
        {
          imageId: 15,
          imageUrl:
            "/assets/img/projects/flutter/flutter_amazon_clone/admin-order-details.png",
          imageTitle: "Admin Orders Details Screen",
        },
      ],
      features: [
        "Works on Android and IOS.",
        "Fully functional NodeJS Backend.",
        "Admin & User login and Signup with JWT Authentication.",
        "Ability to search for products by name.",
        "Ability to search for products by category.",
        "Deal of the day.",
        "Users can track orders and view the order details.",
        "Fully functional cart system.",
        "Pay with apple pay on IOS and Google Pay on Android.",
        "Admin Products CRUD (Create, Read, Update and Delete) options.",
        "Admin statistics for orders.",
        "Admin can update order details and tracking.",
        "Stores data in MongoDB using Mongoose.",
        "Flutter State Management tool as a provider.",
      ],
      packages: [
        "flutter",
        "cupertino_icons",
        "http",
        "provider",
        "shared_preferences",
        "flutter_easyloading",
        "badges",
        "carousel_slider",
        "dotted_border",
        "file_picker",
        "cloudinary_public",
        "flutter_rating_bar",
        "pay",
        "intl",
        "charts_flutter",
      ],
      startDate: "17-07-2022",
      endDate: "30-07-2022",
      completed: true,
      github: "https://github.com/insp7tr/flutter/tree/main/amazon_clone",
    },
  ],
  nextjs: [
    {
      projectId: 1,
      project: "nextjs",
      title: "Ecommerce Website",
      description:
        "A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. Get your business online.",
      bannerImgUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/home-1.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/home-1.png",
          imageTitle: "Home Screen 1",
        },
        {
          imageId: 2,
          imageUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/home-2.png",
          imageTitle: "Home Screen 2",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/nextjs/nextjs_ecommerce/product-details-1.png",
          imageTitle: "Product Details Screen 1",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/nextjs/nextjs_ecommerce/product-details-2.png",
          imageTitle: "Product Details Screen 2",
        },
        {
          imageId: 5,
          imageUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/cart.png",
          imageTitle: "Cart Screen",
        },
        {
          imageId: 6,
          imageUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/success.png",
          imageTitle: "Success Screen 1",
        },
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
      github: "https://github.com/insp7tr/nextjs/tree/main/ecommerce",
    },
    {
      projectId: 2,
      project: "nextjs",
      title: "Real Estate Website",
      description:
        "An amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel, and much more.",
      bannerImgUrl: "/assets/img/projects/nextjs/real_estate_app/home-1.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/nextjs/real_estate_app/home-1.png",
          imageTitle: "Home Screen 1",
        },
        {
          imageId: 2,
          imageUrl: "/assets/img/projects/nextjs/real_estate_app/home-2.png",
          imageTitle: "Home Screen 2",
        },
        {
          imageId: 3,
          imageUrl: "/assets/img/projects/nextjs/real_estate_app/Search.png",
          imageTitle: "Search Screen",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/nextjs/real_estate_app/property-details-1.png",
          imageTitle: "Property Details Screen 1",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/nextjs/real_estate_app/property-details-2.png",
          imageTitle: "Property Details Screen 2",
        },
      ],
      features: ["Makes api calls to Rapidapi", "Advanced property filtering"],
      packages: [
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "axios",
        "framer-motion",
        "millify",
        "next",
        "nprogress",
        "react",
        "react-dom",
        "react-horizontal-scrolling-menu",
        "react-icons",
      ],
      startDate: "06-05-2022",
      endDate: "20-05-2022",
      completed: true,
      github: "https://github.com/insp7tr/nextjs/tree/main/ecommerce",
    },
    {
      projectId: 3,
      project: "nextjs",
      title: "Personal Portfolio",
      description:
        "My third take on a personal portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
      bannerImgUrl:
        "/assets/img/projects/nextjs/personal_portfolio/landing-page.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/landing-page.png",
          imageTitle: "Landing page",
        },
        {
          imageId: 2,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/frameworks.png",
          imageTitle: "Frameworks Section",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/tech-stacks.png",
          imageTitle: "Tech-Stacks Section",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/services.png",
          imageTitle: "Services Section",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/contact.png",
          imageTitle: "Contact Section",
        },
        {
          imageId: 6,
          imageUrl: "/assets/img/projects/nextjs/personal_portfolio/footer.png",
          imageTitle: "Footer Section",
        },
        {
          imageId: 7,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/project-details-1.png",
          imageTitle: "Project Details Screen 1",
        },
        {
          imageId: 8,
          imageUrl:
            "/assets/img/projects/nextjs/personal_portfolio/project-details-2.png",
          imageTitle: "Project Details Screen 2",
        },
      ],
      features: [
        "Showcases all languages and frameworks in a slideshow.",
        "Fully functional contact section using Emailjs.",
        "Full description of projects including the source code.",
      ],
      packages: [
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "bootstrap",
        "emailjs-com",
        "framer-motion",
        "next",
        "nprogress",
        "react",
        "react-bootstrap",
        "react-bootstrap-icons",
        "react-dom",
        "react-horizontal-scrolling-menu",
        "react-icons",
        "react-multi-carousel",
      ],
      startDate: "01-08-2022",
      endDate: "21-08-2022",
      completed: true,
      github: "https://github.com/insp7tr/nextjs/tree/main/personal_portfolio",
    },
  ],
  html_css_js: [
    {
      projectId: 1,
      project: "html_css_js",
      title: "Book Analyzer",
      description:
        "A simple book analyzer. Shows most used, least used and document stats.",
      bannerImgUrl: "/assets/img/projects/html_css_js/book_analyzer/home.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/html_css_js/book_analyzer/home.png",
          imageTitle: "Landing Page",
        },
      ],
      features: [
        "Displays the full book",
        "Displays the top 5 most used word in the book",
        "Displays the top 5 least used word in the book",
        "Displays the document length of the book",
        "Displays the word count of the book",
      ],
      packages: ["Bootstrap"],
      startDate: "16-08-2021",
      endDate: "17-08-2021",
      completed: true,
      github: "https://github.com/insp7tr/html-css-js/tree/main/book_analyzer",
    },
    {
      projectId: 2,
      project: "html_css_js",
      title: "Grocery Bud",
      description: "A to-buy tracker for groceries.",
      bannerImgUrl: "/assets/img/projects/html_css_js/grocery_bud/home-2.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/html_css_js/grocery_bud/home-1.png",
          imageTitle: "Landing Page 1",
        },
        {
          imageId: 2,
          imageUrl: "/assets/img/projects/html_css_js/grocery_bud/home-2.png",
          imageTitle: "Landing Page 2",
        },
      ],
      features: [
        "Displays groceries added",
        "Allows CRUD (Create, Read, Update, Delete) operations",
      ],
      packages: ["Fontawesomeicons"],
      startDate: "18-08-2021",
      endDate: "19-08-2021",
      completed: true,
      github: "https://github.com/insp7tr/html-css-js/tree/main/grocery_bud",
    },
    {
      projectId: 3,
      project: "html_css_js",
      title: "Online Food Menu",
      description: "Static webiste dsiplaying an online menu.",
      bannerImgUrl: "/assets/img/projects/html_css_js/online_food_menu/all.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/html_css_js/online_food_menu/all.png",
          imageTitle: "Landing Page",
        },
        {
          imageId: 2,
          imageUrl:
            "/assets/img/projects/html_css_js/online_food_menu/breakfast.png",
          imageTitle: "Breakfast Screen",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/html_css_js/online_food_menu/lunch.png",
          imageTitle: "Lunch Screen",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/html_css_js/online_food_menu/shakes.png",
          imageTitle: "Shakes Screen",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/html_css_js/online_food_menu/dinner.png",
          imageTitle: "Dinner Screen",
        },
      ],
      features: ["Displays full menu with prices"],
      packages: ["Fontawesomeicons"],
      startDate: "27-08-2021",
      endDate: "27-08-2021",
      completed: true,
      github:
        "https://github.com/insp7tr/html-css-js/tree/main/online_food_menu",
    },
    {
      projectId: 4,
      project: "html_css_js",
      title: "Personal Portfolio",
      description:
        "My first take on a portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
      bannerImgUrl:
        "/assets/img/projects/html_css_js/personal_portfolio/landing-page.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/landing-page.png",
          imageTitle: "Landing Page",
        },
        {
          imageId: 2,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/about-me.png",
          imageTitle: "Amount Me Section",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/skills.png",
          imageTitle: "Skills Section",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/qualification.png",
          imageTitle: "Qualification Section",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/services.png",
          imageTitle: "Services Section",
        },
        {
          imageId: 6,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/portfolio.png",
          imageTitle: "Portfolio Section",
        },
        {
          imageId: 7,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/testimonial.png",
          imageTitle: "Testimonial Section",
        },
        {
          imageId: 8,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/contact.png",
          imageTitle: "Contact Section",
        },
        {
          imageId: 9,
          imageUrl:
            "/assets/img/projects/html_css_js/personal_portfolio/footer.png",
          imageTitle: "Footer Section",
        },
      ],
      packages: ["Fontawesomeicons"],
      startDate: "29-08-2021",
      endDate: "30-08-2021",
      completed: true,
      github:
        "https://github.com/insp7tr/html-css-js/tree/main/personal_portfolio",
    },
  ],
  react: [
    {
      projectId: 1,
      project: "react",
      title: "Meetups Page",
      description: "Meetups page for users to add meetups and get-togethers",
      bannerImgUrl: "/assets/img/projects/react/meetups_page/landing-page.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl: "/assets/img/projects/react/meetups_page/landing-page.png",
          imageTitle: "Landing Page",
        },
        {
          imageId: 2,
          imageUrl: "/assets/img/projects/react/meetups_page/add-page.png",
          imageTitle: "Add New Meetup Page",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/react/meetups_page/favourite-page.png",
          imageTitle: "Favourite Page",
        },
      ],
      features: [
        "Add new Meetups",
        "View Meetups",
        "Favourite Meetups to view them later",
      ],
      packages: [
        "@testing-library/jest-dom",
        "@testing-library/react",
        "@testing-library/user-event",
        "react",
        "react-dom",
        "react-router-dom",
        "react-scripts",
        "web-vitals",
      ],
      startDate: "19-11-2022",
      endDate: "21-11-2022",
      completed: true,
      github: "https://github.com/insp7tr/reactjs/tree/main/meetups_page",
    },
    {
      projectId: 2,
      project: "react",
      title: "Personal portfolio",
      description:
        "My second take on a personal portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
      bannerImgUrl:
        "/assets/img/projects/react/personal_portfolio/landing-page.png",
      bannerType: "Frontend",
      images: [
        {
          imageId: 1,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/landing-page.png",
          imageTitle: "Landing Page",
        },
        {
          imageId: 2,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/about-me.png",
          imageTitle: "About Me Section",
        },
        {
          imageId: 3,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/experience.png",
          imageTitle: "Experience Section",
        },
        {
          imageId: 4,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/services.png",
          imageTitle: "Services Section",
        },
        {
          imageId: 5,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/portfolio.png",
          imageTitle: "Portfolio Section",
        },
        {
          imageId: 6,
          imageUrl:
            "/assets/img/projects/react/personal_portfolio/testimonials.png",
          imageTitle: "Testimonials Section",
        },
        {
          imageId: 7,
          imageUrl: "/assets/img/projects/react/personal_portfolio/contact.png",
          imageTitle: "Contact Me Section",
        },
        {
          imageId: 8,
          imageUrl: "/assets/img/projects/react/personal_portfolio/footer.png",
          imageTitle: "Footer Section",
        },
      ],
      packages: [
        "@testing-library/jest-dom",
        "@testing-library/react",
        "@testing-library/user-event",
        "emailjs-com",
        "react",
        "react-dom",
        "react-icons",
        "react-scripts",
        "swiper",
        "web-vitals",
      ],
      startDate: "01-04-2022",
      endDate: "15-04-2022",
      completed: true,
      github:
        "https://github.com/insp7tr/reactjs/tree/main/personal_portfolio_2",
    },
  ],
};

export default projects;
