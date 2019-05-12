import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Img from 'react-image'
import WallPaper from './balloon.jpg';
import classes from './Question.css';
import Rolling from './rolling.gif'

const imgStyle={
  backgroundImage:"url("+ WallPaper + ")",
  height: '900px',
  backgroundColor: 'white'
};

const textFieldStyle = {
   width: 600
}

const answersStyle = {
   fontStyle: 'bold',
   fontSize: '35px',
   fontfamily: 'Sans Serif'
}

class Question extends Component{
   constructor(props){
     super(props);
     this.state = {
        question: '',
        answers: [],
        error : null,
        loading: false
     }
   }

   handleChange = (event) =>  {
      this.setState({question: event.target.value})
   }

   handleSubmit = () => {
     this.setState({loading: true})
     const url = " http://localhost:5000/answerpage?question=" + this.state.question;
      axios.post(url).then(res => {
          console.log(res);
          this.setState({answers: res.data,loading: false})
      }).catch(err => {
        this.setState({error : err})
      });
   }

  render(){
    let answers = null;
    let loading = null;
    if(this.state.loading){
         loading = <Img src={Rolling}/>
    }
    if(this.state.answers.length > 0){
      answers = <div>
                  <h4>Answers</h4>
                  <span style={answersStyle}>{this.state.answers}</span>
                </div>
    }
    return(

        <div className="questionMain"  style={imgStyle}>
        <h2 style={{color: 'black'}}>Post your question</h2>
        <TextField style={textFieldStyle}
            id="standard-name"
            value={this.state.question}
            onChange={this.handleChange}
            margin="normal"
          />
          <br/>
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
        <div className ="questionLoading">
          {loading}
            {answers}
        </div>
      </div>
      )
    }
}

export default Question;
