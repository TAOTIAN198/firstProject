import React from "react";
import ReactDom from "react-dom";
export default class BodyIndex extends React.Component {
  render() {
    var userName = "alex";
    var boolinput = true;
    return (
      <div>
        <h2>这是内容</h2>
        <p>{userName === "" ? "用户还没有登陆" : "用户名：" + userName}</p>
        <p>
          <input type="button" value={userName} disabled={boolinput} />
        </p>
        {/*注释*/}
      </div>
    );
  }
}
