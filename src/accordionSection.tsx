import Accordion from "react-bootstrap/Accordion";

// import HtmlTable from "./htmlTable";
import CssTable from "./cssTable";
import JsTable from "./jsTable";
// import TemplateTable from "./templateTable";

type AccordionSectionProps = {
  insertInHtml: (text: string, place: "cursor" | "top" | "bottom") => void;
  insertInCss: (text: string, place: "cursor" | "top" | "bottom") => void;
  insertInJs: (text: string, place: "cursor" | "top" | "bottom") => void;
};

function AccordionSection(props: AccordionSectionProps) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>構造</Accordion.Header>
        <Accordion.Body>{/* <HtmlTable /> */}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>見た目</Accordion.Header>
        <Accordion.Body>
          <CssTable insertInCss={props.insertInCss} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>動き</Accordion.Header>
        <Accordion.Body>
          <JsTable />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>テンプレート</Accordion.Header>
        <Accordion.Body>{/* <TemplateTable /> */}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionSection;
