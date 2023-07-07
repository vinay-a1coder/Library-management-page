import React ,{useState}from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { Navbar } from "./navbar/Navbar";
import { LoginPage } from "./login/Login";
import {SignupPage} from "./signup/SignupPage";
import { HomePage } from "./home/HomePage";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB0TaBPQr4uVLnDpsdq22138uANTWt-awM')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <Router>
            {/* <Navbar /> */}
            <Switch>
            {/* <Route path="/">
                <Navbar />
                </Route> */}

                <Route exact path="/">
                <Navbar />
                <div className="header">
                    {/* Rest of the code for the header */}
                    <div className="row1">
                        <h1>A room without books is like<br/> a body without a soul.</h1>
                    </div>
                    <div className="row2">
                        <h2>Find Your Book</h2>
                        <div className="search">
                            <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                            <button><i className="fas fa-search"></i></button>
                        </div>
                        <img src="./images/bg2.png" alt="" />
                    </div>
                </div>

                <div className="container">
                    {/* Render the Card component here */}
                    <Card book={bookData} />
                </div>
                </Route>
                <Route path="/login">
                <LoginPage />
                </Route>
                <Route path="/signup">
                <SignupPage />
                </Route>
                <Route path="/home">
                <HomePage />
                </Route>
            </Switch>
        </Router>
        // <>
        //     <Navbar />
        //     <div className="header">
        //         <div className="row1">
        //             <h1>A room without books is like<br/> a body without a soul.</h1>
        //         </div>
        //         <div className="row2">
        //             <h2>Find Your Book</h2>
        //             <div className="search">
        //                 <input type="text" placeholder="Enter Your Book Name"
        //                 value={search} onChange={e=>setSearch(e.target.value)}
        //                 onKeyPress={searchBook}/>
        //                 <button><i className="fas fa-search"></i></button>
        //             </div>
        //             <img src="./images/bg2.png" alt="" />
        //         </div>
        //     </div>

        //     <div className="container">
        //       {
        //             <Card book={bookData}/>
        //       }  
        //     </div>
        // </>
    )
}
export default Main;