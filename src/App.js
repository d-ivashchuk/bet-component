import React, { Component } from 'react';
import styled,{injectGlobal} from 'styled-components'
import Layout from './components/Layout/Layout'
import Bet from './components/Bet/Bet'
import Game from './components/Game/Game.js'
import Result from './components/Result/Result.js'




injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
`

class App extends Component {
  state={
      teams:['England','Spain'],
      votes:{
        team1:2,
        team2:1,
        draw:2
      },
      betPlaced:false

  }


  componentWillMount(){

    this.setState({totalVotes:this.state.votes.team1+this.state.votes.team2+this.state.votes.draw})
  }

  betHandler =(team)=>{
  const prevVal = this.state.votes[team];

  this.setState({
    votes: {...this.state.votes, [team]:prevVal+1},
    totalVotes: this.state.totalVotes+1,
    betPlaced:true
  })

  }



  render() {

    let view = null
    if(!this.state.betPlaced){
      view =
      <React.Fragment>
        <Game/>
        <Bet teams={this.state.teams} bet={this.betHandler} />
      </React.Fragment>
    } else {
      view =
      <React.Fragment>
        <Game/>
        <Result votes={this.state.votes} totalVotes={this.state.totalVotes} teams={this.state.teams}/>
      </React.Fragment>
    }




    return (
      <div className="App">
        <Layout>
          {view}
        </Layout>
      </div>
    );
  }
}

export default App;
