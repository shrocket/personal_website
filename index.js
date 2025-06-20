const moreWorkExperience = document.querySelector(
  '[data-js="moreWorkExperience"]'
);

const buttonWorkExperience = document.querySelector(
  '[data-js="buttonWorkExperience"]'
);
buttonWorkExperience.addEventListener("click", () => {
  console.log("yeah");
  moreWorkExperience.classList.toggle("work-experience--more");
});

const moreTeaching = document.querySelector('[data-js="moreTeaching"]');

const buttonTeaching = document.querySelector('[data-js="buttonTeaching"]');
buttonTeaching.addEventListener("click", () => {
  console.log("teaching");
  moreTeaching.classList.toggle("teaching--more");
});
