const template = {
  projectId: 1,
  languages: [],
  title: "",
  description: "",
  bannerImgUrl: "",
  type: "",
  images: [
    {
      imageId: 1,
      imageUrl: "",
      imageTitle: "",
    },
  ],
  features: [],
  packages: [],
  backendPackages: [],
  startDate: "",
  endDate: "",
  completed: false,
  github: "",
};

const projects = [
  {
    projectId: 1,
    languages: ["Flutter", "Node.js"],
    title: "Amazon Ecommerce Clone",
    description:
      "A full stack e-commerce app with Flutter, Javascript, Node.js, Express, MongoDB and Mongoose.",
    bannerImgUrl:
      "/assets/img/projects/flutter/flutter_amazon_clone/user-home.png",
    type: "Full-Stack",
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
    backendPackages: [
      "bcryptjs",
      "express",
      "http",
      "jsonwebtoken",
      "mongoose",
    ],
    startDate: "17-07-2022",
    endDate: "30-07-2022",
    completed: true,
    github: "https://github.com/insp7tr/flutter/tree/main/amazon_clone",
  },
  {
    projectId: 2,
    languages: ["Next.js", ""],
    title: "Ecommerce Website",
    description:
      "A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. Get your business online.",
    bannerImgUrl: "/assets/img/projects/nextjs/nextjs_ecommerce/home-1.png",
    type: "Frontend",
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
    projectId: 3,
    languages: ["Next.js", ""],
    title: "Real Estate Website",
    description:
      "An amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel, and much more.",
    bannerImgUrl: "/assets/img/projects/nextjs/real_estate_app/home-1.png",
    type: "Frontend",
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
    projectId: 4,
    languages: ["Next.js", ""],
    title: "Personal Portfolio",
    description:
      "My third take on a personal portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
    bannerImgUrl:
      "/assets/img/projects/nextjs/personal_portfolio/landing-page.png",
    type: "Frontend",
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
        imageUrl: "/assets/img/projects/nextjs/personal_portfolio/services.png",
        imageTitle: "Services Section",
      },
      {
        imageId: 5,
        imageUrl: "/assets/img/projects/nextjs/personal_portfolio/contact.png",
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
  {
    projectId: 5,
    languages: ["HTML/CSS/JS", ""],
    title: "Book Analyzer",
    description:
      "A simple book analyzer. Shows most used, least used and document stats.",
    bannerImgUrl: "/assets/img/projects/html_css_js/book_analyzer/home.png",
    type: "Frontend",
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
    projectId: 6,
    languages: ["HTML/CSS/JS", ""],
    title: "Grocery Bud",
    description: "A to-buy tracker for groceries.",
    bannerImgUrl: "/assets/img/projects/html_css_js/grocery_bud/home-2.png",
    type: "Frontend",
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
    projectId: 7,
    languages: ["HTML/CSS/JS", ""],
    title: "Online Food Menu",
    description: "Static webiste dsiplaying an online menu.",
    bannerImgUrl: "/assets/img/projects/html_css_js/online_food_menu/all.png",
    type: "Frontend",
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
        imageUrl: "/assets/img/projects/html_css_js/online_food_menu/lunch.png",
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
    github: "https://github.com/insp7tr/html-css-js/tree/main/online_food_menu",
  },
  {
    projectId: 8,
    languages: ["HTML/CSS/JS", ""],
    title: "Personal Portfolio",
    description:
      "My first take on a portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
    bannerImgUrl:
      "/assets/img/projects/html_css_js/personal_portfolio/landing-page.png",
    type: "Frontend",
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
  {
    projectId: 9,
    languages: ["React.js", ""],
    title: "Meetups Page",
    description: "Meetups page for users to add meetups and get-togethers",
    bannerImgUrl: "/assets/img/projects/react/meetups_page/landing-page.png",
    type: "Frontend",
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
        imageUrl: "/assets/img/projects/react/meetups_page/favourite-page.png",
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
    projectId: 10,
    languages: ["React.js", ""],
    title: "Personal portfolio",
    description:
      "My second take on a personal portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
    bannerImgUrl:
      "/assets/img/projects/react/personal_portfolio/landing-page.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl:
          "/assets/img/projects/react/personal_portfolio/landing-page.png",
        imageTitle: "Landing Page",
      },
      {
        imageId: 2,
        imageUrl: "/assets/img/projects/react/personal_portfolio/about-me.png",
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
        imageUrl: "/assets/img/projects/react/personal_portfolio/services.png",
        imageTitle: "Services Section",
      },
      {
        imageId: 5,
        imageUrl: "/assets/img/projects/react/personal_portfolio/portfolio.png",
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
    github: "https://github.com/insp7tr/reactjs/tree/main/personal_portfolio_2",
  },
  {
    projectId: 11,
    languages: ["ASP.NET", ""],
    title: "Inventory Management System",
    description:
      "Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents. Companies use inventory management software to avoid product overstock and outages.",
    bannerImgUrl: "",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "No Images Uploaded as yet",
      },
    ],
    features: [
      "Authentication and Authorization with ASP.NET Core Identity",
      "Sell a product.",
      "Produce products using inventories.",
      "View inventory transactions report.",
      "View product transactions report.",
      "Print inventory and product reports.",
      "CRUD (Create, Read, Update and Delete) Operations for inventories.",
      "CRUD (Create, Read, Update and Delete) operations for products.",
      "Validations and Error handling.",
      "SQL Server Database.",
    ],
    packages: [
      "ASP.NET Core Blazor",
      "ASP.NET Core Identity",
      "EF Core",
      "SQL Server",
    ],
    startDate: "08-02-2022",
    endDate: "Not Completed",
    completed: false,
    github:
      "https://github.com/insp7tr/asp-net/tree/main/Inventory%20Management%20System",
  },
  {
    projectId: 12,
    languages: ["", "ASP.NET-BACK"],
    title: "REST API",
    description:
      "REST API (Representational State Transfer) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.",
    bannerImgUrl: "",
    type: "Backend",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "No Images Uploaded as yet",
      },
    ],
    features: ["CRUD REST API.", "Domain-Driven Design"],
    packages: [""],
    startDate: "22-04-2022",
    endDate: "Not Completed",
    completed: false,
    github:
      "https://github.com/insp7tr/asp-net-backend/tree/main/BuberBreakfast_REST_API",
  },
  {
    projectId: 13,
    languages: ["React-Native", ""],
    title: "Uber Clone",
    description:
      "Uber is a transportation company with an app that allows passengers to hail a ride and drivers to charge fares and get paid. More specifically, Uber is a ridesharing company that hires independent contractors as drivers.",
    bannerImgUrl: "/assets/img/projects/react-native/uber_clone/home.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "/assets/img/projects/react-native/uber_clone/home.png",
        imageTitle: "Home Screen",
      },
      {
        imageId: 2,
        imageUrl:
          "/assets/img/projects/react-native/uber_clone/from-screen.png",
        imageTitle: "Select Origin Screen",
      },
      {
        imageId: 3,
        imageUrl:
          "/assets/img/projects/react-native/uber_clone/pricing-screen.png",
        imageTitle: "Select Pricing Screen",
      },
    ],
    features: [
      "ReduxJS State Management.",
      "Uses the Google Distance Matrix API to calculate Travel time, Distance and Cost.",
      "Uses the Directions Google API for real navigation.",
      "Uses Google places API for real navigations.",
      "Uses apple & google maps for iOS & Android.",
    ],
    packages: [
      "@babel/core",
      "@react-native-community/masked-view",
      "@react-navigation/native",
      "@react-navigation/stack",
      "@reduxjs/toolkit",
      "expo",
      "expo-status-bar",
      "react",
      "react-native",
      "react-native-dotenv",
      "react-native-elements",
      "react-native-gesture-handler",
      "react-native-google-places-autocomplete",
      "react-native-maps",
      "react-native-maps-directions",
      "react-native-reanimated",
      "react-native-safe-area-context",
      "react-native-screens",
      "react-native-vector-icons",
      "react-redux",
      "tailwind-react-native-classnames",
    ],
    startDate: "22-04-2022",
    endDate: "15-05-2022",
    completed: true,
    github: "https://github.com/insp7tr/react-native/tree/main/uber_clone",
  },
  {
    projectId: 14,
    languages: ["Next.js", ""],
    title: "Live Chat App",
    description:
      "A live chat application with the T3 stack, tRPC, Tailwind & TypeScript.",
    bannerImgUrl: "",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "Images not uploaded as yet",
      },
    ],
    features: [""],
    packages: [""],
    startDate: "14-06-2022",
    endDate: "Not Completed",
    completed: false,
    github: "",
  },
  {
    projectId: 15,
    languages: ["React.js", ""],
    title: "Weather Application",
    description:
      "A weather application using the OpenWeatherMap API and GeoDB API with places autocomplete.",
    bannerImgUrl: "/assets/img/projects/react/weather-app/detailed.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "/assets/img/projects/react/weather-app/search.png",
        imageTitle: "Search City Screen",
      },
      {
        imageId: 2,
        imageUrl: "/assets/img/projects/react/weather-app/detailed.png",
        imageTitle: "Full Details Screen",
      },
    ],
    features: [
      "Search city component which works with the GeoDB Cities API to feature all cities.",
      "Fetching and mapping data from open weather API",
      "Shows current days weather information.",
      "Shows forecast for the next 7 days weather information.",
    ],
    packages: [
      "@testing-library/jest-dom",
      "@testing-library/react",
      "@testing-library/user-event",
      "react",
      "react-accessible-accordion",
      "react-dom",
      "react-scripts",
      "react-select-async-paginate",
      "web-vitals",
    ],
    startDate: "14-07-2022",
    endDate: "20-07-2022",
    completed: true,
    github: "https://github.com/insp7tr/react/tree/main/weather-app",
  },
  {
    projectId: 16,
    languages: ["React.js", "Node.js"],
    title: "Youtube Clone",
    description:
      "YouTube is an American online video sharing and social media platform.",
    bannerImgUrl: "",
    type: "Full-Stack",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "No images uploaded yet",
      },
    ],
    features: [""],
    packages: [""],
    backendPackages: [""],
    startDate: "01-07-2022",
    endDate: "Not Completed",
    completed: false,
    github: "",
  },
  {
    projectId: 17,
    languages: ["React-Native", ""],
    title: "Instagram Clone",
    description:
      "Instagram is a photo and video sharing social networking service. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.",
    bannerImgUrl: "",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "No images uploaded yet",
      },
    ],
    features: [""],
    packages: [""],
    startDate: "25-08-2022",
    endDate: "Not Completed",
    completed: false,
    github: "",
  },
  {
    projectId: 18,
    languages: ["Vue.js", ""],
    title: "To-Do Application",
    description:
      "To-Do List Application that uses LocalStorage for saving data to the browser.",
    bannerImgUrl: "/assets/img/projects/vuejs/to-do-app/Home-1.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "/assets/img/projects/vuejs/to-do-app/Home-1.png",
        imageTitle: "Desktop View",
      },
      {
        imageId: 2,
        imageUrl: "/assets/img/projects/vuejs/to-do-app/Home-2.png",
        imageTitle: "Mobile View",
      },
    ],
    features: ["Uses LocalStorage to persist data to the browser."],
    packages: ["vue", "@vitejs/plugin-vue", "vite"],
    startDate: "01-09-2022",
    endDate: "04-09-2022",
    completed: true,
    github: "https://github.com/insp7tr/vuejs/tree/main/todo-app",
  },
  {
    projectId: 19,
    languages: ["", "ASP.NET-BACK"],
    title: "Pokemon Review API",
    description: "An API with CRUD operations for a pokemon database.",
    bannerImgUrl: "",
    type: "Backend",
    images: [
      {
        imageId: 1,
        imageUrl: "",
        imageTitle: "Not Uploaded Yet",
      },
    ],
    features: [""],
    packages: [
      "Microsoft.AspNetCore.App@6.0.8",
      "Microsoft.NETCore.App@6.0.8",
      "AutoMapper@11.0.1",
      "AutoMapper.Exensions.Microsoft.DependencyInjection@11.0.0",
      "Microsoft.EntityFrameworkCore.Design@6.0.8",
      "Microsoft.EntityFrameworkCore.SqlServer@6.0.8",
      "Swashbuckle.AspNetCore@6.2.3",
    ],
    startDate: "04-09-2022",
    endDate: "11-09-2022",
    completed: true,
    github:
      "https://github.com/insp7tr/asp-net-backend/tree/main/PokemonReviewApp",
  },
  {
    projectId: 20,
    languages: ["Vue.js", ""],
    title: "IP Tracking App",
    description:
      "Track any user by entering their IP address or get your IP Address.",
    bannerImgUrl: "/assets/img/projects/vuejs/ip-tracking-app/home-screen.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "/assets/img/projects/vuejs/ip-tracking-app/home-screen.png",
        imageTitle: "Desktop View",
      },
      {
        imageId: 2,
        imageUrl:
          "/assets/img/projects/vuejs/ip-tracking-app/result-screen.png",
        imageTitle: "Desktop Result View",
      },
      {
        imageId: 3,
        imageUrl:
          "/assets/img/projects/vuejs/ip-tracking-app/mobile-home-screen.png",
        imageTitle: "Mobile View",
      },
      {
        imageId: 4,
        imageUrl:
          "/assets/img/projects/vuejs/ip-tracking-app/mobile-result-screen.png",
        imageTitle: "Mobile Result View",
      },
    ],
    features: [
      "Completely functional search input.",
      "Uses Leaflet.js, Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.",
      "Makes use of the Geolocation API to get accurate results.",
    ],
    packages: [
      "autoprefixer@10",
      "axios@0.27.2",
      "core-js@3.8.3",
      "leaflet@1.8.0",
      "postcss@8",
      "tailwindcss@3",
      "vue@3.2.13",
      "vue-router@4.0.3",
      "@babel/core@7.12.16",
      "@babel/eslint-parser@7.12.16",
      "@vue/cli-plugin-babel@5.0.0",
      "@vue/cli-plugin-eslint@5.0.0",
      "@vue/cli-plugin-router@5.0.0",
      "@vue/cli-service@5.0.0",
      "eslint@7.32.0",
      "eslint-plugin-vue@^8.0.3",
      "sass@1.32.7",
      "sass-loader@12.0.0",
      "vue-cli-plugin-tailwind@3.0.0",
      "font-awesome@6.2.0",
    ],
    startDate: "10-09-2022",
    endDate: "12-09-2022",
    completed: true,
    github: "https://github.com/insp7tr/vuejs/tree/main/ip-tracking-app",
  },
  {
    projectId: 21,
    languages: ["Vue.js", ""],
    title: "Weather Application",
    description:
      "Fully functional weather application that pulls real-time data from the openweather API.",
    bannerImgUrl: "/assets/img/projects/vuejs/weather-app/result-screen-1.png",
    type: "Frontend",
    images: [
      {
        imageId: 1,
        imageUrl: "/assets/img/projects/vuejs/weather-app/home-screen-1.png",
        imageTitle: "Home Screen",
      },
      {
        imageId: 2,
        imageUrl:
          "/assets/img/projects/vuejs/weather-app/information-screen.png",
        imageTitle: "Information Screen",
      },
      {
        imageId: 3,
        imageUrl: "/assets/img/projects/vuejs/weather-app/search-screen.png",
        imageTitle: "Search Screen",
      },
      {
        imageId: 4,
        imageUrl: "/assets/img/projects/vuejs/weather-app/result-screen-1.png",
        imageTitle: "Result Screen 1",
      },
      {
        imageId: 5,
        imageUrl: "/assets/img/projects/vuejs/weather-app/result-screen-2.png",
        imageTitle: "Result Screen 2",
      },
      {
        imageId: 5,
        imageUrl: "/assets/img/projects/vuejs/weather-app/home-screen-2.png",
        imageTitle: "Saved City Home Screen",
      },
    ],
    features: [
      "Fully functional city search using mapbox places api.",
      "Accurate weather results using openweather api.",
      "Ability to save or remove cities using localstorage.",
    ],
    packages: [
      "axios@0.27.2",
      "uid@2.0.0",
      "vue@3.2.38",
      "vue-router@4.1.5",
      "@vitejs/plugin-vue@3.0.3",
      "autoprefixer@10.4.9",
      "eslint@8.22.0",
      "eslint-plugin-vue@9.3.0",
      "postcss@8.4.16",
      "tailwindcss@3.1.8",
      "vite@3.0.9",
      "fontawesome@6.2.0",
    ],
    startDate: "11-09-2022",
    endDate: "13-09-2022",
    completed: true,
    github: "https://github.com/insp7tr/vuejs/tree/main/weather-app",
  },
  {
    projectId: 22,
    languages: ["Next.js", ""],
    title: "Twitter Clone",
    description:
      "My third take on a personal portfolio website. Portfolios are used by working professionals, companies and students to highlight their best work and display accomplishments, skills and potential. They visually showcase examples of work.",
    bannerImgUrl:
      "/assets/img/projects/nextjs/personal_portfolio/landing-page.png",
    type: "Frontend",
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
        imageUrl: "/assets/img/projects/nextjs/personal_portfolio/services.png",
        imageTitle: "Services Section",
      },
      {
        imageId: 5,
        imageUrl: "/assets/img/projects/nextjs/personal_portfolio/contact.png",
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
];

export default projects;
