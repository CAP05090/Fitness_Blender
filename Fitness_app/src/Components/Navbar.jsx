import React from "react";
import Login from "./Login";

export default function Navbar(){
    return(
        <div style={{display:"flex", padding:"2px 20px"}}>
            <div>
                <img className="imglogo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.crunchbase.com%2Fimage%2Fupload%2Fc_lpad%2Cf_auto%2Cq_auto%3Aeco%2Cdpr_1%2Fxrw4bb4pimqsu4pq6eij&tbnid=6KkWZlDb3JtzjM&vet=12ahUKEwjVzNvg_sKCAxV22jgGHbvVB1EQMygDegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.crunchbase.com%2Forganization%2Ffitness-blender&docid=9fg_Aj-Yj0N7IM&w=200&h=200&q=fitnessblender%20logo&ved=2ahUKEwjVzNvg_sKCAxV22jgGHbvVB1EQMygDegQIARBP" alt="fitness logo"/>
                <a href="/_">Fitness Blender</a>
            </div>
            <div className="Nav">
                <span>Workouts</span>
                <span>Programs</span>
                <span>Healthy Living</span>
                <span>Community</span>
                <span>About</span>
                <span>Store</span>
                <a>MeberShip</a>
            </div>
            <a href="Login.jsx">
                <p>Hi! Sign In</p>
            </a>
        </div>
        
    )
}