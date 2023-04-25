import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() {
  const username = useForm('email');
  const password = useForm();

  function handleLogin(event) {
    event.preventDefault();

    if(username.validade() && password.validade)
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    }).then((response) => {
      console.log(response);
      return response.json();
  }).then(json => {
    console.log(json);
  });
  }

  return (
    <section>
     <h1>Login</h1>
     <form action='' onSubmit={handleLogin}>
      <Input label="Usuário" type="text" name="username" {...username}/>
      <Input label="Senha" type="password" name="password" {...password}/>
      <Button>Entrar</Button>
      
      <button>Entrar</button>
      
     </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
} 

export default LoginForm