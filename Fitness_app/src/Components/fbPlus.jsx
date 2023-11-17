import React from "react";

export default function FbPass() {
    return (
        <div className="fbpass">
            <div className="fbplus">
                <div>
                    <span style={{display:"flex", justifyContent:"center"}}><h1 style={{fontSize:"40px", margin:"5px"}}>FB Plus</h1> <p style={{fontSize:"25px", padding:"14px 0px", margin:"5px 5px 0px"}}>Passes</p></span>
                    <p>Passes give you full access to everything FB Plus has to offer, without a long-term subscription.</p>
                    <div><a href="">Buy A Pass</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp" alt="FB Plus"/>
            </div>
            <div className="videos">
                <div>
                    <h1>Workout Videos</h1>
                    <p>Exercise with certified personal trainers whether you’re at home or on the road.</p>
                    <div><a href="">Find a Workout</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp" alt="Videos"/>
            </div>
            <div className="program">
                <div>
                    <h1>Programs</h1>
                    <p>Professionally designed programs take the guesswork out of exercising.</p>
                    <div><a href="">Browse All Programs</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp" alt="Programs"/>
            </div>
            <div className="fbmerch">
                <div>
                    <h1>FB Merch</h1>
                    <p>We have new shirts, hoodies, water bottles and more in our updated Fitness Blender Tee Spring store.</p>
                    <div><a href="">Shop Now</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/fb-swag-720.webp" alt="FB Merch"/>
            </div>
            <div className="article">
                <div>
                    <h1>Wellness Articles</h1>
                    <p>Research-backed articles to help you care for your body and mind.</p>
                    <div><a href="">Learn from Experts</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp" alt="Article"/>
            </div>
            <div className="recipe">
                <div>
                    <h1>Healthy Recipes</h1>
                    <p>Fuel your day with recipes by Registered Dietitians and professional chefs.</p>
                    <div><a href="">Find a Recipe</a></div>
                </div>
                <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp" alt="Recipe"/>
            </div>
            <div className="comm">
                <div>
                    <h1>Supportive Community</h1>
                    <p>Stay motivated and engaged with a little help from a supportive community of other members.</p>
                    <div style={{marginLeft:"40%"}}><a href="">Become a Member</a></div>
                </div>
                <img alt="Community" src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"/>
            </div>
        </div>
    )
}