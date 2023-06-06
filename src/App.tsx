import Editor from "@monaco-editor/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Row>
      <Col>
        <h2 className="mx-3">オリジナルアプリを作ろう！</h2>
      </Col>
      <Col>
        <Editor height="30vh" language="html" value="<p>Hello, World!</p>" />
        <Editor height="30vh" language="css" value="p { color: red; }" />
        <Editor
          height="30vh"
          language="javascript"
          value="console.log('Hello, World!');"
        />
      </Col>
      <Col>
        <h3 className="title">プレビュー</h3>
      </Col>
    </Row>
  );
}

export default App;
