'use strict';

// Selecting elements
const logo = document.querySelector('.logo');
const user = document.querySelector('.user')
const mobileUser = document.getElementById('mobile-User');
const partner = document.querySelectorAll('.flex-item');
console.log(mobileUser)
// Logo 
logo.addEventListener('click', function () {
    return alert("Лого 🔵")
})

// User
user.addEventListener('click', function () {
    return alert("изображение пользователя 🖼")
})
mobileUser.addEventListener('click', function () {
    return alert("изображение пользователя 🖼")
})
// Partners
for (let i = 0; i < partner.length; i++) {
    partner[i].addEventListener('click', function () {
        return alert(`наш партнер ${i + 1} 😊`)
    })
}
