import Editor from "@monaco-editor/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  htmlDefaultValue,
  cssDefaultValue,
  jsDefaultValue,
} from "./sample/default";
import AccordionSection from "./accordionSection";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

function App() {
  const [iframeText, setIframeText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [cssText, setCssText] = useState("");
  const [jsText, setJsText] = useState("");

  const [htmlEditor, setHtmlEditor] = useState<any>();
  const [cssEditor, setCssEditor] = useState<any>();
  const [jsEditor, setJsEditor] = useState<any>();

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

  const handleHtmlEditorDidMount = (editor: any, monaco: any) => {
    setHtmlEditor(editor);
  };

  const handleCssEditorDidMount = (editor: any, monaco: any) => {
    setCssEditor(editor);
  };

  const handleJsEditorDidMount = (editor: any, monaco: any) => {
    setJsEditor(editor);
  };

  const insertInHtml = (
    text: string,
    place: "cursor" | "top" | "bottom"
  ): void => {
    console.log("htmlEditor", htmlEditor);
    let range;
    const selection = htmlEditor.getSelection();
    if (!selection) return;
    if (place === "cursor") {
      range = selection;
    } else if (place === "top") {
      range = new monaco.Range(1, 1, 1, 1);
    } else if (place === "bottom") {
      range = new monaco.Range(
        (htmlEditor.getModel()?.getLineCount() ?? 0) + 1,
        1,
        (htmlEditor.getModel()?.getLineCount() ?? 0) + 1,
        1
      );
    } else {
      return;
    }
    htmlEditor.executeEdits("", [
      {
        forceMoveMarkers: true,
        range: range,
        text: text + "\n",
      },
    ]);
  };

  const insertInCss = (
    text: string,
    place: "cursor" | "top" | "bottom"
  ): void => {
    console.log("cssEditor", cssEditor);
    let range;
    const selection = cssEditor.getSelection();
    if (!selection) return;
    if (place === "cursor") {
      range = selection;
    }
    if (place === "top") {
      range = new monaco.Range(1, 1, 1, 1);
    }
    if (place === "bottom") {
      range = new monaco.Range(
        (cssEditor.getModel()?.getLineCount() ?? 0) + 1,
        1,
        (cssEditor.getModel()?.getLineCount() ?? 0) + 1,
        1
      );
    } else {
      return;
    }
    cssEditor.executeEdits("", [
      {
        forceMoveMarkers: true,
        range: range,
        text: text + "\n",
      },
    ]);
  };

  const insertInJs = (
    text: string,
    place: "cursor" | "top" | "bottom"
  ): void => {
    let range;
    const selection = jsEditor.getSelection();
    if (!selection) return;
    if (place === "cursor") {
      range = selection;
    }
    if (place === "top") {
      range = new monaco.Range(1, 1, 1, 1);
    }
    if (place === "bottom") {
      range = new monaco.Range(
        (jsEditor.getModel()?.getLineCount() ?? 0) + 1,
        1,
        (jsEditor.getModel()?.getLineCount() ?? 0) + 1,
        1
      );
    } else {
      return;
    }
    jsEditor.executeEdits("", [
      {
        forceMoveMarkers: true,
        range: range,
        text: text + "\n",
      },
    ]);
  };

  // 入力時に onChange が発火しないのでなんとかしたい

  return (
    <Row>
      <Col>
        <h2 className="mx-3">オリジナルアプリを作ろう！</h2>
        <AccordionSection
          insertInHtml={insertInHtml}
          insertInCss={insertInCss}
          insertInJs={insertInJs}
        />
      </Col>
      <Col>
        <Editor
          height="30vh"
          defaultLanguage="html"
          defaultValue={htmlDefaultValue}
          onChange={handleHtmlEditorChange}
          onMount={handleHtmlEditorDidMount}
        />
        <Editor
          height="30vh"
          defaultLanguage="css"
          defaultValue={cssDefaultValue}
          onChange={handleCssEditorChange}
          onMount={handleCssEditorDidMount}
        />
        <Editor
          height="30vh"
          defaultLanguage="javascript"
          defaultValue={jsDefaultValue}
          onChange={handleJsEditorChange}
          onMount={handleJsEditorDidMount}
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
