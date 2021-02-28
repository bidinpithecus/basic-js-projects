/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const fields = {
  characterName: document.getElementById('name'),
  imgLink: document.getElementById('img-link'),
  imgSrc: document.getElementById('img-src'),
  nickname: document.getElementById('nickname'),
  age: document.getElementById('age'),
  alive: document.getElementById('status'),
  occupation: document.getElementById('occupation'),
  seasons: document.getElementById('seasons-appearance'),
  betterCallSaul: document.getElementById('better-call-saul'),
  actor: document.getElementById('actor'),
  button: document.getElementById('random'),
};

const today = new Date();

function characterAge(characterObj) {
  const birthday = new Date(characterObj.birthday);
  const actualAge = today.getFullYear() - birthday.getFullYear();
  let answer = actualAge;

  if (String(birthday) === 'Invalid Date') {
    answer = 'Unknown';
  } else if (birthday.getMonth() > today.getMonth()) {
    answer = actualAge - 1;
  } else if (birthday.getMonth() === today.getMonth() && birthday.getDate() > today.getDate()) {
    answer = actualAge - 1;
  }

  return `Age: ${answer}`;
}

function brBadAppearance(characterObj) {
  let answer = characterObj.appearance.join(', ');

  if (characterObj.appearance.length === 5) {
    answer = 'All of them';
  } else if (characterObj.appearance.length === 0) {
    answer = 'None';
  }

  return `Seasons: ${answer}`;
}

function betterCallSaulAppearance(characterObj) {
  const output = 'Better Call Saul:';
  let answer = true;

  if (characterObj.better_call_saul_appearance.length === 0) {
    answer = false;
  }

  return answer ? `${output} Yes` : `${output} No`;
}

function characterSettings(characterObj) {
  fields.characterName.textContent = `Name: ${characterObj.name}`;
  fields.imgLink.href = characterObj.img;
  fields.imgSrc.src = characterObj.img;
  fields.nickname.textContent = `Nickname: ${characterObj.nickname}`;
  fields.alive.textContent = `Status: ${characterObj.status}`;
  fields.occupation.textContent = `Occupation: ${characterObj.occupation.join(', ')}`;
  fields.actor.textContent = `Actor: ${characterObj.portrayed}`;
  fields.age.textContent = characterAge(characterObj);
  fields.seasons.textContent = brBadAppearance(characterObj);
  fields.betterCallSaul.textContent = betterCallSaulAppearance(characterObj);
}

function renderCharacter(index) {
  const character = brBadList[index];

  characterSettings(character);
}

renderCharacter(0);

fields.button.addEventListener('click', () => {
  const randomOne = Math.floor(Math.random() * brBadList.length);

  renderCharacter(randomOne);
});
