$(document).ready(() => {
    $('#searchForm2').on('submit', (e) => {
        var searchText = $('#searchText3').val();
        localStorage.setItem("storageName", searchText);
        getBooks();
        e.preventDefault();
        return false;
    })
    $('#searchForm4').on('submit', (e) => {
        var searchText = $('#searchText3').val();
        //   window.open('Sbooks.html', '_blank');
        window.location.href = 'comicsearch.html';
        localStorage.setItem("storageName", searchText);
        return false;
    })

});




// function getBooks() {
//     var searchText = localStorage.getItem("storageName");
//     localStorage.setItem("storageName", "");
//     // $('#preloader').removeClass('hidden');
//     axios.get('https://api.jikan.moe/v3/search/manga?q=' + searchText)
//         .then((response) => {
//             console.log(response);
//             var books = response.data.results;
//             console.log(books);
//             var output = '';
//             $.each(books, (index, book) => {
//                 output += "<div class='flip-card-container ' style='--hue: 220 '>";
//                 output += "<div class='flip-card'>";
//                 output += "<div class='card-front'>";
//                 output += "<figure>";
//                 output += "<div class='img-bg'></div>";



//                 if (book.image_url != undefined) {
//                     output += " <img src= '" + book.image_url + "' /> ";
//                 } else {
//                     output += "<img src= 'images/book.jpg' />";
//                 }
//                 var book_title = book.title > 35 ? book.title.substring(0, 35) + '...' : book.title;
//                 output += "<figcaption> " + book_title + " </figcaption>";
//                 output += "</figure>";
//                 output += "</div>";
//                 output += "<div class='card-back'>";
//                 output += "<figure>";
//                 output += "<div class='img-bg'></div>";



//                 if (book.image_url != undefined) {
//                     output += " <img src= '" + book.image_url + "' /> ";
//                 } else {
//                     output += "<img src= 'images/book.jpg' />";
//                 }
//                 output += "</figure>";
//                 output += "<button onclick= bookselected('" + book.mal_id + "') class='Bookaa'>View Book</button>";
//                 output += "<div class='design-container'>";
//                 output += "<span class='design design--1 '></span>";
//                 output += "<span class='design design--2 '></span>";
//                 output += "<span class='design design--3 '></span>";
//                 output += "<span class='design design--4 '></span>";
//                 output += "<span class='design design--5 '></span>";
//                 output += "<span class='design design--6 '></span>";
//                 output += "<span class='design design--7 '></span>";
//                 output += "<span class='design design--8 '></span>";


//                 output += "</div>";
//                 output += "</div>";
//                 output += "</div>";
//                 output += "</div>";
//                 output += "</div>";
//             });
//             $('#preloader').addClass('hidden');
//             $('#manga').html(output);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

function bookselected(id) {
    // alert(id)
    window.location.href = 'comicbook.html?id=' + id;
    localStorage.setItem("storageName", id);
    return false;
}

function getbook() {
    var id = localStorage.getItem("storageName");
    localStorage.setItem("storageName", "");
    axios.get('https://api.jikan.moe/v3/manga/' + id)
        .then((response) => {
           // $('#book').removeClass('hidden');
            console.log(response);
            var info = response.data.volumeInfo;
            var cat = info.categories;
            console.log(cat);
            var authors = info.authors;
            var output = '';
            output += "<div class='row'>";
            output += "<div class='col-md-4'>";
            if (info.imageLinks != undefined) {
                output += "<img src= " + info.imageLinks.thumbnail + " /><br/>";
            }
            output += "<a class='btn btn-danger' id='go_button' href='index.html'>Go Back To Search</a>";
            output += "</div>";
            output += "<div class='col-md-8'>";
            output += "<h2><strong>Title:</strong>" + info.title + "</h2>";
            output += "<h3><strong>SubTitle:</strong>" + info.subtitle + "</h3>";
            output += "<h3>Authors: ";
            for (var i = 0; i < authors.length; i++) {
                output += authors[i] + " ";
            }
            output += "</h3>";
            output += "<ul class='list-group'>";
            output += "<li class='list-group-item'><strong>Categories</strong></li>";
            for (var j = 0; j < cat.length; j++) {
                output += "<li class='list-group-item'>" + (j + 1) + ". " + cat[j] + "</li>";
            }
            output += "</ul>"
            output += "<p><strong>Description:</strong>";
            var dis = info.description.length > 250 ? info.description.substring(0, 250) + '...' : info.description;
            output += dis + "</p>";
            output += "</div>";
            output += "</div>";
            $('#preloader').addClass('hidden');
            $('#book').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}