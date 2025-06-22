const posts = [
  {
    title: "🌐 The Rise of Web3",
    date: "June 10, 2025",
    author: "Priyanka Choudhary",
    content: "Web3 is revolutionizing the internet by introducing decentralization, blockchain-based identity, and data ownership. This post explores its potential to change how users interact online.",
    comments: [
      { name: "Raj", message: "Great breakdown of Web3. Thanks for sharing!" },
      { name: "Neha", message: "Looking forward to your post on Ethereum next." }
    ]
  },
  {
    title: "🧠 AI in Daily Life",
    date: "May 28, 2025",
    author: "Priyanka Choudhary",
    content: "From smart assistants to recommendation engines, AI is becoming a part of our daily routines. In this article, we discuss the good and the concerns around AI usage.",
    comments: [
      { name: "Amit", message: "Informative and well-written!" }
    ]
  },
  {
    title: "💻 My Journey into Web Development",
    date: "May 15, 2025",
    author: "Priyanka Choudhary",
    content: "I started my web dev journey with HTML and CSS and slowly moved into JavaScript, React, and backend tech. Here's how I built my first full-stack website.",
    comments: [
      { name: "Sakshi", message: "This inspired me to keep going on my own journey!" }
    ]
  }
];

// Render Posts
const postsContainer = document.getElementById('posts-container');
const recentList = document.getElementById('recent-posts');

posts.forEach(post => {
  // Create post element
  const postEl = document.createElement('div');
  postEl.classList.add('post');
  postEl.innerHTML = `
    <h2>${post.title}</h2>
    <p class="meta">Posted on ${post.date} by ${post.author}</p>
    <p>${post.content}</p>
    <div class="comments">
      <h4>Comments</h4>
      ${post.comments.map(comment => `<p><strong>${comment.name}:</strong> ${comment.message}</p>`).join('')}
    </div>
  `;
  postsContainer.appendChild(postEl);

  // Add to recent list
  const listItem = document.createElement('li');
  listItem.textContent = post.title;
  recentList.appendChild(listItem);
});
