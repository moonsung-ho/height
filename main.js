function result() {
  const father = document.getElementById("father").value;
  const mother = document.getElementById("mother").value;
  const height = parseFloat(mother) + parseFloat(father);

  if (height >= 1) {
    if (document.getElementById("gender").checked) {
      const heightn = height + 13;
      swal("와우", `${heightn / 2}cm네요!`)
      //result.innerText = `${heightn / 2}cm`;
    } else {
      const heightn = height - 13;
      swal("ㄷㄷ", `${heightn / 2}cm네요!`)
      //result.innerText = `${heightn / 2}cm`;
    }
  } else {
    swal("에러", "부모님 키를 입력하세요!", "error");
  }
}