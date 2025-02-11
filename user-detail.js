const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
            document.getElementById("user-detail").innerHTML = `
                        <h2>${user.name}</h2>
                        <p><strong>อีเมล<br></strong> ${user.email}</p>
                        <p><strong>เบอร์โทรศัพท์<br></strong> ${user.phone}</p>
                        <p><strong>เว็บไซต์<br></strong> ${user.website}</a></p>
                        <p><strong>ที่อยู่<br></strong> ${user.address.street}, ${user.address.city}</p>
                        <p><strong>บริษัท<br></strong> ${user.company.name}</p>
                        <button id="view-posts" class="view-posts-btn"><a href="user-posts.html?id=${user.id}">ดูโพสต์ทั้งหมด</a></button>
 
                  `;
           });
}
