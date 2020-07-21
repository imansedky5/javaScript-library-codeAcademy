//set variables
const container = document.getElementById("container");
const firstRow = document.createElement("div");
const secondRow = document.createElement("div");
const thirdRow = document.createElement("div");

let books = [
      {
            title: "Arbaoon",
            author: "ahmad shugairi",
            image:
                  "http://www.assabile.com/media/photo/full_size/ahmed-al-shukairy-69.jpg",
      },
      {
            title: "Harry Potter",
            author: "J.K. Rowling",
            image:
                  "https://tse1.mm.bing.net/th?id=OIP.vTmr71xs8osmQ1xzareb_wHaLH&pid=Api&P=0&w=300&h=300",
      },
      {
            title: "The Origin",
            author: "Dan Brown",
            image:
                  "https://tse4.mm.bing.net/th?id=OIP.mmT0dH_w4RTdUlsldHOkJgAAAA&pid=Api&P=0&w=300&h=300",
      },
      {
            title: "Central Park",
            author: "Guillaume Musso",
            image:
                  "https://tse1.mm.bing.net/th?id=OIP.SHqdRo4l1vStGsHTAXL-YQHaK5&pid=Api&P=0&w=300&h=300",
      },
      {
            title: "1984",
            author: "George Orwell",
            image:
                  "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/1984_play_artwork.jpg/220px-1984_play_artwork.jpg",
      },
      {
            title: "Davenci Code",
            author: "Dan Brown",
            image:
                  "https://upload.wikimedia.org/wikipedia/en/f/fd/Davincicodesoundtrack.jpg",
      },
      {
            title: "Scream",
            author: "Angila marsons",
            image:
                  "https://tse4.mm.bing.net/th?id=OIP.tqVaOnyFWGMHjsSHSjxBmgHaLF&pid=Api&P=0&w=300&h=300",
      },
];
//to make our User interface
function render() {
      firstRow.classList.add("first_shelf");
      secondRow.classList.add("second_shelf");
      thirdRow.classList.add("third_shelf");

      container.appendChild(firstRow);
      container.appendChild(secondRow);
      container.appendChild(thirdRow);

      var images = [];
      var newArr = [];

      //create layout for each book & book's info
      books.forEach((el, i) => {
            const imageContainer = document.createElement("div");
            const book = document.createElement("div");
            imageContainer.classList.add("imageContainer");
            book.classList.add(`book_${i}`);
            book.textContent = `${books[i].title} 
      by ${books[i].author}`;
            const image = document.createElement("img");
            image.setAttribute("src", books[i].image);
            image.classList.add(`image_${i}`);
            imageContainer.appendChild(image);
            book.appendChild(imageContainer);
            newArr.push(book);
      });
      //divide books over shelves
      newArr.forEach((el, i) => {
            if (i <= 3) {
                  firstRow.appendChild(el);
            } else if (i <= 7) {
                  secondRow.appendChild(el);
            } else {
                  thirdRow.appendChild(el);
            }
      });

      addNewBook();
}
function addNewBook() {
      const addBookButton = document.getElementById("addbook_btn");
      addBookButton.addEventListener("click", () => {
            container.style.position = "relative";
            container.style.width = "auto";
            container.innerHTML = `<form id="form">
            <h4>NEW BOOK</h4>
            <input id="book_title" placeholder="Book Title" />
            <input id="auther" placeholder="Auther" />
            <input
                  id="image_link"
                  placeholder="Book Cover Link"
            /><br /><br />
            <button type="submit" id="submit_btn">submit</button>
      </form> `;

            submitForm();
      });
}
function submitForm() {
      const form = document.getElementById("form");
      const submitButton = document.getElementById("submit_btn");
      submitButton.addEventListener("click", (e) => {
            e.preventDefault();

            firstRow.innerHTML = ""; //to remove existing books from the shelf
            secondRow.innerHTML = "";
            thirdRow.innerHTML = "";
            form.style.display = "none";
            container.style.display = "block";

            const bookTitleVal = document.getElementById("book_title").value;
            const autherVal = document.getElementById("auther").value;
            const imageLinkVal = document.getElementById("image_link").value;

            books.push({
                  title: bookTitleVal,
                  author: autherVal,
                  image: imageLinkVal,
            });
            render();
      });
}

render();
