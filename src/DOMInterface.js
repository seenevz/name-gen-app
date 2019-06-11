// DOM queries
const responseBox = document.querySelector("#results");
const checkboxes = document.querySelector(".selector");
export const form = document.querySelector("form");
export const countInput = document.querySelector("#repeat");

//renders
export const renderResponse = resp => {
   responseBox.value = resp;
};

export const renderSelector = () => {
   const selectBoxes = document.createElement("checkbox");
};
