const blogPosts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    author: "John Doe",
    content:
      "Closures are a powerful feature in JavaScript that allow functions to access variables from an outer function's scope even after the outer function has finished executing...",
    date: "2024-08-01",
    tags: ["JavaScript", "Programming", "Web Development"],
  },
  {
    id: 2,
    title: "A Beginner's Guide to CSS Grid",
    author: "Jane Smith",
    content:
      "CSS Grid Layout is a two-dimensional layout system for the web that allows developers to create complex layouts with ease. In this guide, we will explore the basics of CSS Grid and how to get started...",
    date: "2024-08-05",
    tags: ["CSS", "Web Design", "Frontend"],
  },
  {
    id: 3,
    title: "10 Tips for Effective Remote Work",
    author: "Alex Johnson",
    content:
      "Remote work has become increasingly common, and with it comes the challenge of staying productive and maintaining a healthy work-life balance. Here are ten tips to help you succeed while working remotely...",
    date: "2024-08-10",
    tags: ["Productivity", "Remote Work", "Lifestyle"],
  },
  {
    id: 4,
    title: "Exploring the New Features in React 18",
    author: "Emily Davis",
    content:
      "React 18 brings exciting new features and improvements, including automatic batching, concurrent rendering, and new hooks. In this article, we'll explore what's new and how you can take advantage of these updates...",
    date: "2024-08-15",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 5,
    title: "The Ultimate Guide to SEO in 2024",
    author: "Michael Lee",
    content:
      "Search Engine Optimization (SEO) is constantly evolving, and staying up-to-date with the latest trends is crucial for success. In this guide, we'll cover the best practices and strategies for SEO in 2024...",
    date: "2024-08-20",
    tags: ["SEO", "Marketing", "Web Development"],
  },
];

const gridContainer = document.querySelector("#grid-container");
console.log(gridContainer);

let formattedContent = "";

for (let i = 0; i < blogPosts.length; i++) {
  //   console.log(blogPosts[i].title);

  // this fetches title and content
  // fetch author, date and tags
  formattedContent += `

  <section id = "box${i + 1}">
  <h1> ${blogPosts[i].title} </h1>
  <p> ${blogPosts[i].content} </p>
  <p> ${blogPosts[i].tags} </p>
  <p> ${blogPosts[i].date} </p>
  <p> ${blogPosts[i].author} </p>
  </section>
  `;
}

console.log(formattedContent);
gridContainer.innerHTML += formattedContent;
// const container = document.querySelector("#grid-container");
// let postContent = "";
// for (let i = 0; i < blogPosts.length; i++) {
//   postContent += `
//     <section id="box${i + 1}">
//       <h1>${blogPosts[i].title} </h1>
//       <p> ${blogPosts[i].content}</p>
//     </section>
//     `;
// }

// Fetching the posts using the forEach method
// let i = 0;

// blogPosts.forEach(addPosts);

// function addPosts(post) {
//   postContent += `
//   <section id="box${i + 1}">
//     <h1>${post.title} </h1>
//     <p> ${post.content}</p>
//   </section>
//   `;
//   i++;
// }

// container.innerHTML = postContent;
