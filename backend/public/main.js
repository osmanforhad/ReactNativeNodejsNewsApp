const select = (selector) => document.querySelector(selector)

//select all the html elements
const form = select('.form');
const message = select('.message');

//function for display message
const displayMessage = (text, color) => {
    //setup the message style
    message.style.visibility = 'visible'
    message.style.backgroundColor = color;

    message.innerText = text;

    //time out the message
    setTimeout(() => {
        message.style.visibility = 'hidden'
    }, 3000);
};

//function for form validation
const validateForm = () => {
    const title = select('#title').value.trim();
    const content = select('#content').value.trim();
    const thumbnail = select('#thumbnail').value;
    const category = select('#category').value;

    //define the accepted file format
    const acceptedImageFiles = ['jpg', 'jpeg', 'png']

    if (!title || !content || !thumbnail || category == '0') {
        //show error message
        return displayMessage('Field can not be empty', 'red');
    }

    //extention checker for thumbnail
    const extention = thumbnail.split('.').pop();

    if (!acceptedImageFiles.includes(extention)) {
        //show error message
        return displayMessage('Image file is not valid', 'red');
    }

    return true;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //form validation
    const valid = validateForm();

    if (valid) {
        //submit the form
    }

});