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
        ["Burger Logger", "https://mail.google.com/mail/u/0/#inbox", "1.png"], 
        ["ChefPro", "https://mail.google.com/mail/u/0/#inbox", "2.png"]
    ]

    return(
        <div>
            {apps.map((value, index)=>{
                return(
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={value[2]} />
                            <Card.Body>
                                <Card.Title>{value[0]}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary" href={value[1]}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            )}
        </div>
    )
}

export default Project;