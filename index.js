const buttonExperience = document.querySelector(
  '[data-js="buttonWorkExperience"]'
);
const expandExperience = document.querySelector(
  '[data-js="moreWorkExperience"]'
);
buttonExperience.addEventListener("click", () => {
  expandExperience.classList.toggle("work-experience--more");
  if (!expandExperience.classList.contains("work-experience--more")) {
    buttonExperience.textContent = "less";
  } else {
    buttonExperience.textContent = "more";
  }
});

const buttonTeaching = document.querySelector('[data-js="buttonTeaching"]');

const expandTeaching = document.querySelector('[data-js="expandTeaching"]');

buttonTeaching.addEventListener("click", () => {
  console.log("teaching");
  expandTeaching.classList.toggle("teaching--more");
  if (!expandTeaching.classList.contains("teaching--more")) {
    buttonTeaching.textContent = "less";
  } else {
    buttonTeaching.textContent = "more";
  }
});
