// function TrendItem({ trend }) {

//     return (
//         <li className="trend-item">
//             <span>#{trend.name}</span>
//             <small>Views: {trend.views}</small>
//         </li>
//     );
// }
// export default TrendItem;

function TrendItem({ trend }) {
    return (
      <li className="trend-item">
        <div className="trend-info">
          <h3>#{trend.name}</h3>
          <p>Views: {trend.views}</p>
        </div>
      </li>
    );
  }
  
  export default TrendItem;
  