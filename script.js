// let arr = [] // Создадим быстро массив наших клавищ
// document.addEventListener('keypress', (event) => {
//     arr.push(event.charCode)
//     console.log(arr)
// })
CODE_KEYS = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
CODE_CAPSLOCK_KEYS = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47]

document.querySelector('#keyboard').addEventListener('mouseleave', (event) => {
    init(event)
    addColorForKeysClick()
})

function init (event) {
    let out = ''
    if (event.getModifierState('CapsLock')) {
        for (let i = 0; i < CODE_KEYS.length; i++) {
            out += `<div class='keys' data="${CODE_CAPSLOCK_KEYS[i]}">${String.fromCharCode(CODE_CAPSLOCK_KEYS[i])}</div>`
        }
    } else {
        for (let i = 0; i < CODE_KEYS.length; i++) {
            out += `<div class='keys' data="${CODE_KEYS[i]}">${String.fromCharCode(CODE_KEYS[i])}</div>`
        }
    }
    document.querySelector('#keyboard').innerHTML = out
}

document.addEventListener('keypress', addColorForKeys)

function addColorForKeys (event) {
    document.querySelectorAll('.keys').forEach((keys) => {
        setTimeout(() => {
            keys.classList.remove('pressing')
        }, 100)
    })
    document.querySelector(`.keys[data="${event.keyCode}"]`).classList.add('pressing')
}

function addColorForKeysClick(){
    document.querySelectorAll('.keys').forEach((keys) => {
        keys.addEventListener('click', function() {
            this.classList.add('pressing')
            setTimeout(() => this.classList.remove('pressing'), 100)
        })
    })
}

/* Нативное решение языка пользователя
const translate = document.querySelector('#translate') //input
const id = document.querySelector('#id')

const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
const rusUpper = rusLower.toUpperCase()
const enLower = 'abcdefghijklmnopqrstuvwxyz'
const enUpper = enLower.toUpperCase()
const rus = rusLower + rusUpper
const en = enLower + enUpper

const getChar = (event) => String.fromCharCode(event.keyCode || event.charCode)

translate.addEventListener('keypress', function (e) {
	const char = getChar(e)
  if (rus.includes(char)) {
  	id.innerHTML = 'ru'
  } else if (en.includes(char)) {
  	id.innerHTML = 'en'
  } else {
  	id.innerHTML = 'ХЗ'
  }
})
*/