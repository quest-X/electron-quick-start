document.getElementById("btn_sum").addEventListener("click", async () => {
  let num_a = document.getElementById("num_a").value;
  let num_b = document.getElementById("num_b").value;
  let options = {
    method: "post",
    url: "http://127.0.0.1:5000/summation",
    //headers:{'Content-Type': 'application/json'},
    data: {
      numa: num_a,
      numb: num_b,
    },
  };
  await window.electronAPI.summation(options);
});
window.electronAPI.summation_response((event, result) => {
  document.getElementById("summation").value = result;
});
