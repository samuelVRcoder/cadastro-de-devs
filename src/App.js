import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <h1>Cadastro de Desenvolvedor</h1>
       
          <form>
	      <input type="text" placeholder="Nome Completo"/><br/>
	      <input type="email" placeholder="Email"/><br/>
	      <h3>Selecione abaixo o que você domina:</h3>
	      <input type="checkbox"/>
	     	<label >Java</label>
	      <input type="checkbox"/>
	        <label >JavaScript</label>
	      <input type="checkbox"/>
	        <label >Python</label>
	      <input type="checkbox"/>
	        <label >HTML</label><br/>
	      <input type="checkbox"/>
	        <label >CSS</label>
	      <input type="checkbox"/>
	     	<label >C/C++</label>
	      <input type="checkbox"/>
	     	<label >Dart</label>
	      <input type="checkbox"/>
	     	<label >C#</label><br/>
	      <input type="checkbox"/>
	     	<label >PHP</label>
	      <input type="checkbox"/>
	     	<label >SQL</label>
	      <input type="checkbox"/>
	     	<label >NoSQL</label><br/>
	      <input type="submit"/><br/>

	  </form>
        
         
      </header>
      <footer><p>2023 Todos os Direitos Reservados .  Feito por <a href="https://www.github.com/samuelVRcoder" target="_blank">samuelVRcoder</a></p></footer>
      

      </div>
     

      
    
  );
}

export default App;
