const result = document.getElementById("result");
const error = document.getElementById("error");
const hobbyList = [];

function saveHobby() {
  const hobby = document.getElementById("hobby");

  let hobbies = hobby.value.trim();

  if (hobbies.indexOf(",") === -1) {
    // Hanya satu nilai, langsung ditambahkan ke dalam array
    hobbyList.push(hobbies);
  } else {
    // Lebih dari satu nilai, nilai-nilai dipisahkan dan ditambahkan ke dalam array
    hobbies = hobbies.split(",");
    hobbies.forEach((hobby) => {
      hobbyList.push(hobby.trim());
    });
  }

  result.textContent = hobbyList;
}

function switcher() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (from > hobbyList.length || to > hobbyList.length) {
    return (error.textContent = "*Hobi mu tidak sebanyak itu mohon sadar diri");
  }

  [hobbyList[from - 1], hobbyList[to - 1]] = [
    hobbyList[to - 1],
    hobbyList[from - 1],
  ];

  error.textContent = "";
  result.textContent = hobbyList;
}
