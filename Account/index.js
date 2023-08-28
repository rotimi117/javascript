let bankCode = "";

function createBanks() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.paystack.co/bank`);

  xhr.setRequestHeader(
    "Authorization",
    "Bearer sk_test_d129efd0008c8067d5eb525781c5a9f8313908f0"
  );

  xhr.send();
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText).data;
    for (let index = 0; index < data.length; index++) {
      const { name } = data[index];
      const opt = document.createElement("option");
      opt.innerText = name;
      document.getElementById("sel").appendChild(opt);
    }
  };
}
createBanks();

function getCustomerName() {
  let selectedName = "";
  selectedName = document.getElementById("sel").value;
  console.log(selectedName);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.paystack.co/bank`);

  xhr.setRequestHeader(
    "Authorization",
    "Bearer sk_test_d129efd0008c8067d5eb525781c5a9f8313908f0"
  );

  xhr.send();
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText).data;
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const { name } = data[index];
      if (name == selectedName) {
        const { code } = data[index];
        bankCode = code;
      }
    }
  };
}
getCustomerName();

function displayCustomerName() {
  event.preventDefault();
  const accountNumber = document.getElementById("number").value;
  console.log(accountNumber);
  console.log(bankCode);
  const xhr = new XMLHttpRequest();

  const xhr1 = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
  );
  xhr.setRequestHeader(
    "Authorization",
    "Bearer sk_test_d129efd0008c8067d5eb525781c5a9f8313908f0"
  );
  xhr.send();
  xhr.onload = function () {
    const { account_name } = JSON.parse(xhr.responseText).data;
    console.log(account_name);

    document.getElementById(
      "cusName"
    ).innerText = `Your account name is ${account_name}`;
  };

  // function displayCustomerName() {
  //   event.preventDefault();
  //   const accountNumber = document.getElementById("accountNumber").value;
  
  //   // Check if both the bank code and account number are available
  //   if (bankCode && accountNumber) {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open(
  //       "GET",
  //       `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
  //     );
  //     xhr.setRequestHeader(
  //       "Authorization",
  //       "Bearer sk_test_d129efd0008c8067d5eb525781c5a9f8313908f0"
  //     );
  //     xhr.send();
  //     xhr.onload = function () {
  //       if (xhr.status === 200) {
  //         const responseData = JSON.parse(xhr.responseText).data;
  //         const accountName = responseData.account_name;
  //         console.log(accountName);
  
  //         // Display the retrieved account name
  //         document.getElementById("accountName").value = accountName;
  //       } else {
  //         console.error("Error fetching account name:", xhr.statusText);
  //       }
  //     };
  //     xhr.onerror = function () {
  //       console.error("Network error occurred");
  //     };
  //   }
  // }  
}
