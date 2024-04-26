// import TrendItem from "./TrendItem";

// function TrendList({ trends }) {



//     return (
//         <ul className="trend-list">
//             {trends.map((trend) => (
//                 <TrendItem trend={trend} key={trend.id} />
//             ))}
//         </ul>
//     );
// }

// export default TrendList;

import TrendItem from "./TrendItem";

function TrendList({ trends }) {
  return (
    <div className="trend-list">
      <h2>Trending Topics</h2>
      <ul className="trend-items">
        {trends.map((trend) => (
          <TrendItem trend={trend} key={trend.id} />
        ))}
      </ul>
    </div>
  );
}

export default TrendList;
