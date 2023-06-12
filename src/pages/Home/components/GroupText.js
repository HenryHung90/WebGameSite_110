const GroupCard = ({ Group }) => {
  ////////////////////////////////
  if (Group === "01") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Slime Slayer</h1>
        <p className="GroupCard_GroupMember">羅健毅、林駿宇</p>
        <p className="GroupCard_GroupMember">蕭家證、曹文育</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "02") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">跑啊!小鳥</h1>
        <p className="GroupCard_GroupMember">鐘柏元、丁麒銘、楊克勤</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "03") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">墨韻江湖</h1>
        <p className="GroupCard_GroupMember">謝星野、林芝佑</p>
        <p className="GroupCard_GroupMember">薛翔尹、林俊霖</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "04") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">奔跑吧MOFU!!</h1>
        <p className="GroupCard_GroupMember">黃薔、傅昱瑄、沈羿伶</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "05") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">《THIWORLDS》</h1>
        <p className="GroupCard_GroupMember">林雅棋、林靖萱</p>
        <p className="GroupCard_GroupMember">周沅樟、陳威丞</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "06") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Color Journey</h1>
        <p className="GroupCard_GroupMember">袁萱芳、蕭渝樺</p>
        <p className="GroupCard_GroupMember">蘇蕙婷、陳慧心</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "07") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Dream Hospital</h1>
        <p className="GroupCard_GroupMember">惠維慶、戴新祐</p>
        <p className="GroupCard_GroupMember">陳宥瑜、林成翰</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "08") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Unknown</h1>
        <p className="GroupCard_GroupMember">何念樺、顏郁盛</p>
        <p className="GroupCard_GroupMember">陳東科、丁兆生</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "09") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Unknown</h1>
        <p className="GroupCard_GroupMember">歐姿含、黃舒榆</p>
        <p className="GroupCard_GroupMember">張芳語、陳采葳</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "10") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Unknown</h1>
        <p className="GroupCard_GroupMember">楊承恩、陳璋慶</p>
        <p className="GroupCard_GroupMember">簡宥瑋、鍾為廉</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "11") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">挑戰天際</h1>
        <p className="GroupCard_GroupMember">栩齊斌、杜孟洋</p>
        <p className="GroupCard_GroupMember">汪承緒、周方浩</p>
      </div>
    );
  }
  ////////////////////////////////
};
export default GroupCard;
