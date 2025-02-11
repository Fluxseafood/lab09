const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

if (userId) {

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("user-name").innerHTML = `<span>${user.name}</span>`;
    });

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((posts) => {
      const postsList = document.getElementById("posts-list");
      if (posts.length > 0) {
        postsList.innerHTML = posts
          .map(
            (post) => `
                                <div class="post">
                                    <h2>${post.title}</h2>
                                    <p>${post.body}</p>
                                    <button class="view-posts-btn" onclick="showComments(${post.id}, this)">ดูความคิดเห็น</button>
                                    <div id="comments-${post.id}" class="comments-container" style="display: none;">
                                        <!-- คอมเมนต์จะถูกแสดงที่นี่ -->
                                    </div>
                                </div>
                              `
          )
          .join("");
      }
    });
}


function showComments(postId, button) {
  const commentsContainer = document.getElementById(`comments-${postId}`);


  if (commentsContainer.style.display === "none" || commentsContainer.style.display === "") {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((comments) => {
        commentsContainer.innerHTML = comments
          .map(
            (comment) => `
                                    <div class="comment container-comment">
                                        <strong>${comment.email}</strong><p>${comment.body}</p>
                                    </div>
                                `
          ).join("");

        commentsContainer.style.display = "block";
        button.textContent = "ซ่อนความคิดเห็น";
      });
  } else {
    commentsContainer.style.display = "none"; 
    button.textContent = "ดูความคิดเห็น";  
  }
}
