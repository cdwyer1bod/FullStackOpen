import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.header}</h1>

const Button = (props) => {
  const {onClick, text} = props
  return(
    <button onClick={onClick}> {text} </button>
  )
}

const Statistics = ({text, value}) => {
  console.log({text, value})
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  );
};

const StatisticsTable = ({ statistics }) => {
  if (!statistics.length) {
    return <p>No feedback given </p>;
  }

  return (
    <table>
      <tbody>
        {statistics.map((statistic, index) => {
          return (
            <Statistics
              key={index}
              text={statistic.text}
              value={statistic.value}
            />
          );
        })}
      </tbody>
    </table>
  );
};


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const course = {title: 'Give Feedback', stats: 'Statistics'}
  const all = good + neutral + bad;
  const statistics = []

  if (all !== 0) {
    statistics.push({ text: "good", value: good });
    statistics.push({ text: "neutral", value: neutral });
    statistics.push({ text: "bad", value: good });
    statistics.push({ text: "all", value: all });
    let average = (good - bad) / all;
    let positive = (good * 100) / all + " %";
    statistics.push({ text: "average", value: average });
    statistics.push({ text: "positive", value: positive });
  }

  return (
    <div>
      <Header header={course.title} />
      <Button onClick={() => setGood(good + 1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral+ 1)} text={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'bad'} />
      <Header header={course.stats} />
      <StatisticsTable statistics={statistics} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
