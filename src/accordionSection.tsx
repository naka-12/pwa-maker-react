import Accordion from "react-bootstrap/Accordion";

// import HtmlTable from "./htmlTable";
import CssTable from "./cssTable";
import JsTable from "./jsTable";
// import TemplateTable from "./templateTable";

function AccordionSection() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>構造</Accordion.Header>
        <Accordion.Body>{/* <HtmlTable /> */}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>見た目</Accordion.Header>
        <Accordion.Body>
          <CssTable />
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
