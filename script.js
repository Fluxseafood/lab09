fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
            document.getElementById("user").innerHTML = data
              .map(
                (u) =>
                  `<div>
                        ${u.name}<br>
                        ${u.email}
                  </div>`
              )
              .join("");
      });