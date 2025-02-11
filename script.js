fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
            document.getElementById("user").innerHTML = data
            .map(
                  (u) =>
                        `<div>
                              <a href="user-detail.html?id=${u.id}">
                                    ${u.name}<br>
                                    ${u.email}
                              </a>
                        </div>`
            ).join("");
      });