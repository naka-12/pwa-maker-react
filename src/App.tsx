import Editor from "@monaco-editor/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  htmlDefaultValue,
  cssDefaultValue,
  jsDefaultValue,
} from "./sample/default";

function App() {
  const [iframeText, setIframeText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [cssText, setCssText] = useState("");
  const [jsText, setJsText] = useState("");

  const reflectToIframe = () => {
    const bodyEndTagIndex = htmlText.indexOf("</body>");
    if (bodyEndTagIndex === -1) {
      return;
    }
    const textBeforeBodyEndTag = htmlText.slice(0, bodyEndTagIndex);
    const textFromBodyEndTag = htmlText.slice(bodyEndTagIndex);

    const newHtmlText =
      textBeforeBodyEndTag +
      `<style>${cssText}</style>` +
      `<script>${jsText}</script>` +
      textFromBodyEndTag;
    setIframeText(newHtmlText);
  };

  const handleHtmlEditorChange = (value: any, event: any) => {
    setHtmlText(value);
    reflectToIframe();
  };

  const handleCssEditorChange = (value: any, event: any) => {
    setCssText(value);
    reflectToIframe();
  };

  const handleJsEditorChange = (value: any, event: any) => {
    setJsText(value);
    reflectToIframe();
  };

  // 入力時に onChange が発火しないのでなんとかしたい

  return (
    <Row>
      <Col>
        <h2 className="mx-3">オリジナルアプリを作ろう！</h2>
      </Col>
      <Col>
        <Editor
          height="30vh"
          defaultLanguage="html"
          defaultValue={htmlDefaultValue}
          onChange={handleHtmlEditorChange}
        />
        <Editor
          height="30vh"
          defaultLanguage="css"
          defaultValue={cssDefaultValue}
          onChange={handleCssEditorChange}
        />
        <Editor
          height="30vh"
          defaultLanguage="javascript"
          defaultValue={jsDefaultValue}
          onChange={handleJsEditorChange}
        />
      </Col>
      <Col>
        <h3 className="title">プレビュー</h3>
        <iframe
          srcDoc={iframeText}
          className="border"
          style={{ width: "350px", height: "90%" }}
        ></iframe>
      </Col>
    </Row>
  );
}

export default App;
