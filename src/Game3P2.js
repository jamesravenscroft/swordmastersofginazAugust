import React, { Component } from "react";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import Modal from "./components/Modal/Modal";
import Cancion from "./img/tameAlandPart3.mp3";

import {Animated} from "react-animated-css";

class Game3 extends Component {

  constructor() {
    super();
    this.state = {
      player: {
        shields: sessionStorage.getItem("playerShields"),
        
      },
      enemy: {
        shields: sessionStorage.getItem("enemyShields"),
        attack: sessionStorage.getItem("enemyAttack"),
        defense: sessionStorage.getItem("enemyDefense")
      },
      isDuncanAttacking: false,
      isEliteAttacking: false,
      archer: true,
      eliteResting: true,
      isShowing: false,
      message: "",
      link: "",
      pulsedGrunt: false,
      pierce: false,
      cancion: Cancion

    }
  };

  normalAttack = () => {
    let newEnemyShields = this.state.enemy.shields - 150;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({
      enemy: {shields: newEnemyShields},
      archer: false,
      isDuncanAttacking:true,
      pulsedGrunt: true
    }); 
    this.deathCheckEnemy();
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 550);
    setTimeout(() =>{this.setState({archer:true})}, 550);
    setTimeout(() => {this.setState({pulsedGrunt:false})}, 550);
    setTimeout(() => {this.enemyAttack()}, 1000);
    this.deathCheckPlayer();

  }
 
  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      eliteResting: false,
      isEliteAttacking: true,
      archer: true
    });
    let newPlayerShields = this.state.player.shields - 200;
    this.setState({player: {shields: newPlayerShields}});
    setTimeout(() => {this.setState({isEliteAttacking:false})}, 550);
    setTimeout(() => {this.setState({eliteResting: true})}, 560);


  };
  
  pulseAttack = () => {
    this.setState({
      enemy: {shields: this.state.enemy.shields},
      archer: false,
      isDuncanAttacking:true
      
    });
    let roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1 || roll === 4) {
      this.setState({pierce:true});
      let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 2 || roll === 5) {
      this.setState({pierce:true});
      let damageDealt = Math.floor((40/100) * this.state.enemy.shields);
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 3 || roll === 6) {
      let damageDealt = 0;
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      this.setState({enemy: {shields: newEnemyShields}});
    }
    setTimeout(() =>{this.setState({isDuncanAttacking:false})}, 550);
    setTimeout(() =>{this.setState({pierce:false})}, 550);
    setTimeout(() =>{this.enemyPulseAttack()}, 1000);
    this.deathCheckEnemy();
    this.deathCheckPlayer();
    

  }

  enemyPulseAttack = () => {
    this.setState({player: {shields: this.state.player.shields},
      eliteResting: false,
      isEliteAttacking: true,
      archer: true
    });
    let pulseAttackCost = Math.floor(this.state.player.shields/10);
    let damageDealt = 200 + pulseAttackCost;
    let newPlayerShields = this.state.player.shields - damageDealt;
    this.setState({player: {shields: newPlayerShields}});
    setTimeout(() => {this.setState({isEliteAttacking:false})}, 550);
    setTimeout(() => {this.setState({eliteResting: true})}, 560);
  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("duncan is dead");
    }
  };
  deathCheckEnemy = () => {
    if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
      console.log(`enemy is dead`);
      let newMessage = `Enemy has been defeated, you gain experience`;
      sessionStorage.setItem("playerShields", (this.state.player.shields) + 600);
      sessionStorage.setItem("playerAttack", 200);
      sessionStorage.setItem("playerDefense", 100);
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link: "/game4"});

    }
  };

  render() {
    function initiateStats(){
    
      sessionStorage.setItem("enemyShields", 650);
      sessionStorage.setItem("enemyAttack", 200);
      sessionStorage.setItem("enemyDefense", 25);

  };
    return (
      <div className="A">
        {initiateStats()}
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          link={this.state.link}>  
            {this.state.message}             
        </Modal>
        <Container >
          <div >
          <Row style={{marginTop:"-30%", }}>
              <Col size="md-3">
                <DuncanIdaho
                  archer={this.state.archer}
                  isDuncanAttacking={this.state.isDuncanAttacking}
                  pierce={this.state.pierce}
                />
              </Col>
              <Col size="md-6"></Col>
              <Col size="md-3">
                <SardaukarElite
                  pulsedGrunt={this.state.pulsedGrunt}
                  eliteResting={this.state.eliteResting}
                  isEliteAttacking={this.state.isEliteAttacking}
                />                
              </Col>
          </Row>
          <Row>
          <BattleMenu
              playerShields = {this.state.player.shields}
              playerAttack = {this.state.player.attack}
              playerDefense = {this.state.player.defense}
              normalAttack = {this.normalAttack}
              pulseAttack = {this.pulseAttack}
              enemyShields = {this.state.enemy.shields}   
              cancion={this.state.cancion}
            />
          </Row>
          </div>
        </Container>
        
      </div>
    );
  }
}

export default Game3;
