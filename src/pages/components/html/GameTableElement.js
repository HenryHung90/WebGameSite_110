const GameTableElement = ({ Box, Header, TableHeader, TableContainer }) => {
  return (
    <>
      <div className="GameIntroTitle">
        <h3 className="GameIntroTitle_Text" id={`Game${Box}_Title`}>
          {Header}
        </h3>
      </div>
      <div className="GameIntroSubtitle">
        <table className="GameIntroElementTable">
          <thead>
            <tr>
              {TableHeader.map((val) => {
                return <th className="GameElement_th">{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {TableContainer.map((val, key) => {
              return (
                <tr>
                  {TableContainer[key].map((val) => {
                    return <td className="GameElement_td">{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GameTableElement;
