function result() {
  const father = document.getElementById("father").value;//아빠키 입력란 value를 father라고 정의
  const mother = document.getElementById("mother").value;//엄마키 입력란 value를 mother라고 정의
  const height = parseFloat(mother) + parseFloat(father);//엄마키와 아빠키를 실수로 변환해서 더함

  if (height >= 1) {
    if (document.getElementById("gender").checked) {
      const heightn = height + 13;
      swal("우와", `${heightn / 2}cm네요!`);//결과 alert
    } else {
      const heightn = height - 13;
      swal("와우", `${heightn / 2}cm네요!`);//결과 alert
    }
  } else {
    swal("에러", "부모님 키를 입력하세요!", "error");//에러
  }
}
