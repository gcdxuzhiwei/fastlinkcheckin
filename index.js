const axios = require("axios");

axios
  .post("https://fl9web01.fastlinkyj.com/auth/login", {
    email: process.env.EMAIL,
    passwd: process.env.PASSWD,
    code: "",
    remember_me: "on",
  })
  .then((res) => {
    const cookie = res.headers["set-cookie"]
      .map((v) => v.split("; ")[0])
      .join("; ");

    axios
      .post("https://fl9web01.fastlinkyj.com/user/checkin", undefined, {
        headers: {
          cookie,
        },
      })
      .then((res) => {
        console.log("---res---", res.data);
      });
  });
