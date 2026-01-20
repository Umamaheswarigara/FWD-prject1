import React from "react";
import './App.css'
function App() {
    return(
        <><div class="box">
        <div class="profile">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user Image"></img>
        </div>
        <div class="info">
            <h1 class="name"> Gara Uma maheswari</h1>
            <h2 class="role">Frontend Developer</h2>
            <p class="about">I am very passionate creating my own Responsive Web page</p>

        </div>
        <div class="onclick">
            <button class="btn">My contact</button>
        </div>
        <style>
            {`
            *{
            box-sizing:box-border;}
            .box{
            background-color:lightblue;
            border-radius: 30px;
            }
            .name{
            font-family: sans-serif;
            font-weight:bold;
            font-size:20px}
            .role{
            font-family: sans-serif;
            font-size: 20px
            }
            .about{
            font-family:sans-serif;
            font-weight: 50%;
            }
            .profile{
            padding: 5px;
            margin: 20px;

            }
            .btn{
            text-align:center;
            padding: 10px;
            margin:20px;
            }
            button::hoover{
            color:darkblue;
            font-color: darkblue;}
            
            `}
        </style>
        </div>
        </>
    )
}

export default App;