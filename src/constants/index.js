import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    django,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    promise,
    flask
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Software Development",
      icon: mobile,
    },
    {
      title: "E-commerce Solutions",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Startup Vision",
      company_name: "CodeKarmaTech",
      icon: meta, // Replace with your preferred icon for the company vision
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      points: [
        "Developing innovative technology solutions across various domains including E-commerce, Software Development, and AI.",
        "Emphasizing on modern technologies and user-centered design to deliver top-notch products and services.",
        "Aiming to collaborate with industry leaders and stakeholders to push the boundaries of digital transformation.",
      ],
    },
    {
      title: "Web Development",
      company_name: "Frontend, Backend, Full Stack Development", // Description as the company name
      icon: web, // Ensure this icon matches your assets
      iconBg: "#383E56",
      points: [
        "Crafting responsive and scalable web solutions tailored to client needs, utilizing modern frameworks like React.js.",
        "Engaging in agile development processes to ensure timely delivery of feature-rich applications.",
        "Ensuring compatibility across all major browsers and devices to provide a seamless user experience.",
      ],
    },
    {
      title: "Software Development",
      company_name: "Enterprise Software Solutions, SaaS Products, Custom Development", // Description as the company name
      icon: mobile, // Ensure this icon matches your assets
      iconBg: "#E6DEDD",
      points: [
        "Building robust software solutions that drive business efficiency and scalability.",
        "Integrating advanced technological stacks including cloud services and APIs to enhance software capabilities.",
        "Focusing on security best practices to safeguard data integrity and privacy.",
      ],
    },
    {
      title: "E-commerce Solutions",
      company_name: "Custom E-commerce Development, E-commerce Optimization, Mobile Commerce", // Description as the company name
      icon: backend, // Ensure this icon matches your assets
      iconBg: "#383E56",
      points: [
        "Developing customized e-commerce platforms that enhance shopping experiences and increase sales conversions.",
        "Optimizing existing e-commerce systems for better performance and higher efficiency.",
        "Implementing mobile-first design strategies to accommodate the growing trend of mobile commerce.",
      ],
    },
    {
      title: "Content Creation",
      company_name: "Digital Media, Marketing Content, Brand Storytelling", // Description as the company name
      icon: creator, // Ensure this icon matches your assets
      iconBg: "#E6DEDD",
      points: [
        "Creating engaging content that enhances brand visibility and fosters audience engagement.",
        "Leveraging multimedia tools and platforms to produce high-quality video and graphic content.",
        "Developing content strategies that align with broader marketing goals and SEO practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "At CodeKarmaTech, we promise to elevate your business with bespoke software solutions designed to drive growth and efficiency.",
      name: "The Promise",
      designation: "CodeKarmaTech Commitment",
      company: "Your Success",
      image: promise,
    },
    {
      testimonial:
        "Discover the power of full-stack development with us. From initial design to final deployment, our focus is on delivering seamless, scalable applications.",
      name: "The Approach",
      designation: "Our Methodology",
      company: "Expert Execution",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      testimonial:
        "Transform your digital landscape with our innovative e-commerce solutions. We tailor every platform to enhance user experience and maximize sales conversions.",
      name: "The Innovation",
      designation: "E-commerce Excellence",
      company: "Market Leadership",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    {
      testimonial:
        "Harness the potential of AI and data analysis with CodeKarmaTech. We apply cutting-edge technologies to unlock actionable insights that propel your business forward.",
      name: "The Future",
      designation: "AI and Data Mastery",
      company: "Intelligent Solutions",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      testimonial:
        "Elevate your brand with our design and creative services. Our strategic branding and impactful designs ensure your business stands out in a crowded market.",
      name: "The Impact",
      designation: "Design and Creativity Hub",
      company: "Visual Distinction",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    }
  ];
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };