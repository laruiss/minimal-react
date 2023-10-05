import { useState } from "react";

import { signIn } from "../api/api-client";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  setTimeout(() => {
    document.querySelector('input[type="text"]').value = 'valeur inconnue de React'
  }, 1000)

  setTimeout(() => {
    console.log('email', email)
  }, 2000)

  const login = event => {
    event.preventDefault();
    // Appel à l'API pour se connecter
    try {
      signIn(email, password)
    } catch (error) {
      // TODO: Afficher l'erreur à l'utilisateur
      console.error(error.message)
    }
  }

  return (
    <>
      <header>
        <h1>Connexion</h1>
      </header>
      <form onSubmit={login}>
        <fieldset className="flex  flex-col  border-2  border-gray-300">
          <legend className="px-2">Connexion</legend>
          <div className="flex  my-2  gap-2  justify-between">
            <label htmlFor="email">Adresse email :</label>
            <input value={email} onChange={event => setEmail(event.target.value)} type="text" id="email" />
          </div>
          <div className="flex  my-2  gap-2  justify-between">
            <label htmlFor="password">Mot de passe :</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" />
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LoginPage;
