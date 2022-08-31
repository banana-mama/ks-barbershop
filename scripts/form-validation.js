var bookForm = document.querySelector(".book-form");
var bookDate = bookForm.querySelector("input[type=date]");
var bookTime = bookForm.querySelector("input[type=time]");
var bookName = bookForm.querySelector("input[type=text]");
var bookTel = bookForm.querySelector("input[type=tel]");
var bookErrMsg = bookForm.querySelector(".error-msg");

bookForm.noValidate = true;

bookForm.addEventListener("submit", function (evt){
    if (!bookDate.value || !bookTime.value || !bookName.value || !bookTel.value) {
        evt.preventDefault();
        bookErrMsg.classList.add("error-msg-show");
        bookDate.blur();
        bookTime.blur();
        bookName.blur();
        bookTel.blur();
    }
});

bookDate.addEventListener("focus", function (){
    bookErrMsg.classList.remove("error-msg-show");
});

bookTime.addEventListener("focus", function (){
    bookErrMsg.classList.remove("error-msg-show");
});

bookName.addEventListener("focus", function (){
    bookErrMsg.classList.remove("error-msg-show");
});

bookTel.addEventListener("focus", function (){
    bookErrMsg.classList.remove("error-msg-show");
});