emailjs.init("MZIrv7Mt4gVJyNCJe");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  // メール一致確認

  const email =
    document.getElementById("email").value;

  const emailConfirm =
    document.getElementById("emailConfirm").value;

  if (email !== emailConfirm) {

    alert("メールアドレスが一致しません");

    return;
  }

  // 同意チェック

  const agree =
    document.getElementById("agree");

  if (!agree.checked) {

    alert("同意チェックを入れてください");

    return;
  }

  // 送信

  emailjs.sendForm(
    "service_6oibens",
    "template_vdec08q",
    this
  )

  .then(() => {

    alert("お問い合わせを送信しました");

    form.reset();

  })

  .catch((error) => {

    console.log("EmailJS error:", error);

    alert(
      "送信に失敗しました\n\n" +
      "status: " + error.status + "\n" +
      "text: " + error.text
    );

  });

});