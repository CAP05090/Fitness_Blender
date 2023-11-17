import React from "react";

export default function FrontPage() {
    return(
        <div className="pages">
            <div className="front">
                <h1 >Feel Great.</h1>
                <h1>Body and Mind</h1>
                <p>Choose from hundreds of workouts, healthy</p>
                <p>recipes, relaxing meditations, and expert</p>
                <p>articles, for a whole body and mind</p>
                <p>approach to feeling great.</p>
                <button style={{padding:"10px 20px", borderRadius:"5px", backgroundColor:"black", color:"white"}}>JOIN NOW</button>
            </div>
            <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-2023-720.webp" alt="" />
        </div>
        
    )
}