const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector("h2");

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  dateTitle.innerText = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};


const dateinit = () => {
  getDate();
};

dateinit();
