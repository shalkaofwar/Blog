import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Greet from './Components/greet';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyDJiwTxRhu-p38-Jnk0wLFbWsLwBtRYiSM",
  authDomain: "luminaria-spectacle.firebaseapp.com",
  projectId: "luminaria-spectacle",
  storageBucket: "luminaria-spectacle.appspot.com",
  messagingSenderId: "892525480198",
  appId: "1:892525480198:web:a1623fea6509995f1d3687"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  //creates app only when no app has been created
}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      id: uuidv4(),
      isRegistered: false,
      boat: "Dhvani ",
      name: null,
      email: null,
      password: null,
      author: false,
      showPassword: false,
      confirmPass: false,
      message: null,
      lmessage: null,
    }
  }
 
// LoginHandler = () => { old Login Handler
//   console.log(this.state.auth);
// this.setState({auth: !this.state.auth}, );
// console.log(this.state.auth);};

registrationHandler = (event) => {
  event.preventDefault();
  const name=event.target.name.value;
  const email=event.target.email.value;
  const password=event.target.password.value;
  const confirmpassword=event.target.confirmpassword.value;
  if(password!==confirmpassword){
    this.setState({message: "Password does not match"})
    return;
  }
  const auth = firebase.auth();
  const authpromise = auth.createUserWithEmailAndPassword(email,password);
  authpromise.then((data)=>
  {
    this.setState({isRegistered: true, name}, ()=>
    {event.target.name.value ="";
      event.target.email.value ="";
    }
    );
  }
  ).catch((error)=>
  {
    this.setState({message: error})
  });
  }




  LoginHandler = (event) =>{
    event.preventDefault();
  const email=event.target.email.value;
  const password=event.target.password.value;
  const auth = firebase.auth();

  auth.signInWithEmailAndPassword(email,password)
  .then((data)=>{
    console.log(data);
    this.setState({author: !this.state.author}, );
    this.setState({lmessage: null});

  }).catch((error)=>{
    this.setState({lmessage: error.message});
    console.log(this.state.lmessage);
  
  })
  
  }

  ShowHide = () => {
    this.setState({showPassword: !this.state.showPassword}, );
  }

  ConfirmHide = () => {
    this.setState({confirmPass: !this.state.confirmPass}, );
  }

  LogoutHandler = () =>{
    alert("You are now being logged out your session will end");
    this.setState({author: !this.state.author}, );
    return;
  }

render(){
// let x=10, y=11;
//   let ala = new Promise((resolve, reject) => {
//     if (x === y) {
//         resolve("Equal Values")
//     } else {
//         reject("Unequal Values")
//     }
// })
// ala.then((data)=>{
// console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })
  return (
      <Router>
        <div>
        <Navbar login={this.LoginHandler} logout={this.LogoutHandler} status={this.state.author}/>
        <Switch>
          <Route exact path ='/about'>
          <Header title="About Us" subtitle="Get To Know More." image="./About.png"/>
          <div className='App-body'> <About/></div> </Route>
        <Route exact path='/'>
          <Header title="The Voyage of the Chariot" subtitle="A Lively Festival To Remember." image="./Background.png"/>
      <div className='App-body'><Home/></div> </Route>
      <Route exact path='/Blog'>
          <Header title="The Voyage of the Chariot" subtitle="A Lively Festival To Remember." image="./Background.png"/>
      <div className='App-body'><Home/></div> </Route>
      <Route path="/Login"> 
      {this.state.author ? (<Header title="Welcome" subtitle="Get Ready to Learn more about Willowdale Communnity" image="./Error.jpg"/>) : 
      (<Header title="Login" subtitle="Already an existing User" image="./Error.jpg"/>) 
      }
      {this.state.author ? (<About/>) :
      (<Login lmessage={this.state.lmessage} logging={this.LoginHandler} showPassword={this.state.showPassword} ShowHide={this.ShowHide}/>) }
      </Route>
      <Route path="/Register"> 
      <Header title="Register" subtitle="Join the Willowdale Community" image="./About.png"/>
      {this.state.isRegistered ?(<Greet user={this.state.name}/>)
        :  (<Register message={this.state.message} submit={this.registrationHandler} showPassword={this.state.showPassword} ShowHide={this.ShowHide} ConfirmHide={this.ConfirmHide} confirmPass={this.state.confirmPass}/>)
    }
      </Route>
      <Route path="*"> <Header title="Error 404" subtitle="There is no error in Willowdale." image="./Error.jpg"/></Route>
      </Switch>
      <Footer/>
      </div>
      </Router>
  );
}
}

export default App;
