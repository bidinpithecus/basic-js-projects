/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const characterName = document.getElementById('name');
const imgLink = document.getElementById('img-link');
const imgSrc = document.getElementById('img-src');
const nickname = document.getElementById('nickname');
const age = document.getElementById('age');
const status = document.getElementById('status');
const occupation = document.getElementById('occupation');
const seasons = document.getElementById('seasons-appearance');
const betterCallSaul = document.getElementById('better-call-saul');
const actor = document.getElementById('actor');
const button = document.getElementById('random');

const today = new Date();
const character = brBadList[0];
let birthday;
let actualAge;

characterName.textContent += character.name;
imgLink.href = character.img;
imgSrc.src = character.img;
nickname.textContent += character.nickname;
status.textContent += character.status;
occupation.textContent += character.occupation.join(', ');
actor.textContent += character.portrayed;

function characterSettings(e) {
  characterName.textContent = `Name: ${e.name}`;
  imgLink.href = e.img;
  imgSrc.src = e.img;
  nickname.textContent = `Nickname: ${e.nickname}`;
  status.textContent = `Status: ${e.status}`;
  occupation.textContent = `Occupation; ${e.occupation.join(', ')}`;
  actor.textContent = `Actor: ${e.portrayed}`;
}

function characterAge(e) {
  birthday = new Date(e.birthday);
  actualAge = today.getFullYear() - birthday.getFullYear();
  if (String(birthday) === 'Invalid Date') {
    age.textContent = 'Age: Unknown';
  } else if (birthday.getMonth() > today.getMonth()) {
    age.textContent = `Age: ${String(actualAge - 1)}`;
  } else if (birthday.getMonth() === today.getMonth()) {
    if (birthday.getDate() > today.getDate()) {
      age.textContent = `Age: ${String(actualAge - 1)}`;
    } else {
      age.textContent = `Age: ${String(actualAge)}`;
    }
  } else {
    age.textContent = `Age: ${String(actualAge)}`;
  }
}

function brBadAppearance(e) {
  if (e.appearance.length === 5) {
    seasons.textContent = 'Seasons: All of them';
  } else if (e.appearance.length === 0) {
    seasons.textContent = 'Seasons: None';
  } else {
    seasons.textContent = `Seasons: ${e.appearance.join(', ')}`;
  }
}

function betterCallSaulAppearance(e) {
  if (e.better_call_saul_appearance.length === 0) {
    betterCallSaul.textContent = 'Better Call Saul: No';
  } else {
    betterCallSaul.textContent = 'Better Call Saul: Yes';
  }
}

function buttonClick() {
  const randomOne = brBadList[Math.floor(Math.random() * brBadList.length)];
  characterSettings(randomOne);
  characterAge(randomOne);
  brBadAppearance(randomOne);
  betterCallSaulAppearance(randomOne);
}

button.addEventListener('click', buttonClick);
