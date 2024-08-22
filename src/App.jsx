import { useState } from "react";
import "./App.css";


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  );


  const handleAddFighter = (zombieFighter) => {
    if(money < zombieFighter.price){
      console.log("Not enough money");
    }
    else {
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price);
      setTotalStrength(totalStrength + zombieFighter.strength);
      setTotalAgility(totalAgility+ zombieFighter.agility);
    }
  }

  const handleRemoveFighter = (teamMember) => {
      setTeam(team.filter((el) => el !== teamMember));
      setMoney(money + teamMember.price);
      setTotalStrength(totalStrength - teamMember.strength);
      setTotalAgility(totalAgility - teamMember.agility);
  }

  return (
    <>
      <h2>Money: {money}</h2>
      <h2>Strength : {team.length === 0 ? "0" : totalStrength}</h2>
      <h2>Agility : {team.length === 0 ? "0" : totalAgility}</h2>
      <h2> Team: </h2>
      <ul>
        {team.length === 0
          ? "Pick some team members"
          : team.map((teamMember, index) => (
              <li key={index}>
                <img src={teamMember.img} alt={teamMember.name} />
                <h3> {teamMember.name} </h3>
                <h4>Price: {teamMember.price}</h4>
                <h4>Strength: {teamMember.strength}</h4>
                <h4>Agility: {teamMember.agility}</h4>
                <button onClick={() => handleRemoveFighter(teamMember)}>
                  Remove
                </button>
              </li>
            ))}
      </ul>
      <hr />
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} />
            <h3>{zombieFighter.name}</h3>
            <h4>Price: {zombieFighter.price}</h4>
            <h4>Strength: {zombieFighter.strength}</h4>
            <h4>Agility: {zombieFighter.agility}</h4>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
