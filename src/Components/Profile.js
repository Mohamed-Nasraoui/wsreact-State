    import React, { Component } from 'react'
    import { Card} from 'react-bootstrap'

    export default class Profile extends Component {
        constructor(props){
            super(props)
            this.Profile={
                FullName:"Bruce Wayne",
                Bio:"Super Hero",
                Profession:"Batman",
                img:"https://png.pngitem.com/pimgs/s/78-785878_batman-icon-batman-avatar-icon-hd-png-download.png",

            }
            this.state={count:0}
        }
        componentDidMount(){
            setInterval(()=>{
                this.setState(prevState=>({
                count:prevState.count+1  
                }))
            },1000)

        }

    render() {
        return (
        <div className='card'>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.Profile.img} alt="img" />
    <Card.Body>
        <Card.Title><h2>{this.Profile.FullName}</h2></Card.Title>
        <Card.Text>
        <h2>{this.Profile.Bio}</h2>
        <h2>{this.Profile.Profession}</h2>
            <h2>{this.state.count}</h2>
        </Card.Text>
        
    </Card.Body>
    </Card>
        </div>
        )
    }
    }




