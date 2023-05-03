import { useEffect, useState } from "react";

function Home({ authenticated }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/account").then(async (response) => {
      if (response.status == 200) {
        let account = await response.json();
        console.log(account.user);
        setEmail(account.user.email);
      }
    });
  });

  return (
    <div>
      <h1>Welcome Back, {email}</h1>
    </div>
  );
}

export default Home;
