const url = `https://jsonplaceholder.typicode.com/comments`;
const getComments = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const comments = data.slice(0, 20);

  const commentContainer = document.getElementById("comments-container");

  comments.forEach(comment => {
    const { id, name, email, body } = comment;
    // console.log(comment);
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
    <div onclick="handleComments(${id})">
    <p><strong>Comment ID: </strong>${id}</p>
    <p><strong>Name: </strong>${name}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Body: </strong>${body}</p>
    <hr />
    </div>
    `;
    commentContainer.appendChild(commentDiv);
  });
};

const handleComments = id => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data));
};

const displayPost = post => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  const postDiv = document.createElement("div");
  postDiv.innerHTML = `
  <h1>${post.title}</h1>
  <p>${post.body}</p>
  `;
  postContainer.appendChild(postDiv);
};

getComments();
