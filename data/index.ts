export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Audiophile e-commerce website",
    des: "Audiophile is an e-commerce platform that offers a wide range of high-quality headphones, earphones, speakers.",
    img: "/ad.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stripe.svg"],
    link: "https://audiophile-ecommerce-app-1gm3.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoom-clone-yy5n.vercel.app/",
  },
  {
    id: 3,
    title: "Memory game",
    des: "A memory game built with Vue js and Tailwind CSS.",
    img: "/memory.png",
    iconLists: ["/vue.svg", "/tail.svg", "/ts.svg"],
    link: "https://memory-game-nu-roan.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-main-sigma.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Oussama's dedication to delivering high-quality results is unparalleled. His ability to understand our vision and bring it to life was impressive. We couldn't be happier with the final product.",
    name: "Emily Chen",
    title: "Founder of Bloom Studio",
    image: "/profile.svg"
  },
  {
    quote:
      "Working with Oussama was a seamless experience. His communication skills are top-notch, and he's always willing to go the extra mile to ensure the project is a success.",
    name: "David Lee",
    title: "Co-Founder of Codeflow",
    image: "/empty-user.jpg"
  },
  {
    quote:
      "Oussama is a true professional. His expertise in web development is unmatched, and his passion for his work is contagious. We're grateful to have him as a partner.",
    name: "Sarah Taylor",
    title: "CEO of Fresh Start",
    image: "/empty-user.jpg"
  },
  {
    quote:
      "Oussama's attention to detail is remarkable. He's always looking for ways to improve the user experience and ensure the project is a success. We're lucky to have him on our team.",
    name: "John Doe",
    title: "CTO of Codeflow",
    image: "/empty-user.jpg"
  },
  {
    quote:
      "Oussama is a master of his craft. His ability to balance form and function is unparalleled, and his dedication to delivering high-quality results is inspiring.",
    name: "Jane Smith",
    title: "UX Designer at Codeflow",
    image: "/empty-user.jpg"
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
    
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Full Stack Developer",
    desc: "Developed and maintained multiple web applications using modern technologies like Next.js, React, and Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Built and maintained multiple web applications for clients using modern web technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/oussamataima/",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
