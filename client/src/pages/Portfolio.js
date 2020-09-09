import React from "react";
import {Card, Button} from "react-bootstrap"



function Project(){ 
    // const appInfo = {
    //     appNumber: [0,1,2,3,4,5],
    //     appTitles: ["Burger Logger", "ChefPro", "Gaea", "Note Taker", "Passwork Generator", "Quiz Game"]
    // }
    // const oneAppTitle = ["Burger Logger", "ChefPro", "Gaea", "Note Taker", "Passwork Generator", "Quiz Game"]
    // const sampleURL = ["https://mail.google.com/mail/u/0/#inbox", "https://mail.google.com/mail/u/0/#inbox", "https://mail.google.com/mail/u/0/#inbox", "https://mail.google.com/mail/u/0/#inbox", "https://mail.google.com/mail/u/0/#inbox", "https://mail.google.com/mail/u/0/#inbox"]


    const apps = [
        ["Ultimate Fitness Tracker", "https://the-ultimate-fitness-tracker.herokuapp.com/?id=5f334a2059852a0017420622", "fitness.png", "Get Fit"], 
        ["Note Taker", "https://sleepy-dawn-56235.herokuapp.com/", "noteTaker.png", "Take Notes"],
        ["Budget Tracker", "https://cryptic-badlands-37708.herokuapp.com/", "budget.png", "Figure Finances"],
        ["ChefPro: Recipe Book", "https://uw-project-2.herokuapp.com/", "chefPro.png", "Get Cooking"],
        ["Gaea: Hiking Suggestiong", "https://saharanath.github.io/Project1/", "gaea.png", "Let's Hike"],
        ["Employee Directory", "https://pure-plateau-15598.herokuapp.com/", "directory.png", "Employee Directory"]
    ]

    return(
        <div>
            {apps.map((value, index)=>{
                return(
                    // <div key={index} class="float">
                        <Card style={{ width: '18rem', float: "left", margin: "0.5em", marginBottom:"2em" }} key={index}>
                            <Card.Img variant="top" src={value[2]} />
                            <Card.Body>
                                <Card.Title>{value[0]}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary" href={value[1]}>{value[3]}</Button>
                            </Card.Body>
                        </Card>
                    // </div>
                )}
            )}
        </div>
    )
}

export default Project;