// DOM queries
const responseBox = document.querySelector("#results");
export const form = document.querySelector("form");
export const countInput = document.querySelector("#repeat");

//renders
export const renderResponse = resp => {
   responseBox.value = resp;
   console.log(resp);
};
