// // import { useRef, useContext } from "react";
// // import Button from "react-bootstrap/Button";
// // import { InsertInHtmlContext } from "../editor.tsx";

// const HtmlTable = () => {
//   const insertInHtml = useContext(InsertInHtmlContext);
//   const divInputRef = useRef<HTMLInputElement>(null);
//   const buttonInputRef = useRef<HTMLInputElement>(null);
//   const inputInputRef = useRef<HTMLInputElement>(null);
//   const ulInputRef = useRef<HTMLInputElement>(null);
//   const h1InputRef = useRef<HTMLInputElement>(null);
//   const paraInputRef = useRef<HTMLInputElement>(null);

//   return (
//     <>
//       <table className="table">
//         <tr>
//           <td>箱</td>
//           <td>
//             <input
//               id="div-input"
//               type="text"
//               placeholder="つける名前"
//               ref={divInputRef}
//             />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<div id="${divInputRef.current?.value ?? ""}"></div>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>ボタン</td>
//           <td>
//             <input id="button-input" type="text" placeholder="つける名前" />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<button id="${
//                     buttonInputRef.current?.value ?? ""
//                   }">ボタン</button>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>入力欄</td>
//           <td>
//             <input id="input-input" type="text" placeholder="つける名前" />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<input id="${inputInputRef.current?.value ?? ""}"></input>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>リスト</td>
//           <td>
//             <input id="ul-input" type="text" placeholder="つける名前" />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<ul id="${
//                     ulInputRef.current?.value ?? ""
//                   }">\n\t<li>項目1</li>\n\t<li>項目2</li>\n</ul>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>見出し</td>
//           <td>
//             <input type="text" id="h1-input" placeholder="つける名前" />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<h1 id="${h1InputRef.current?.value ?? ""}">見出し</h1>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>段落</td>
//           <td>
//             <input type="text" id="para-input" placeholder="つける名前" />
//           </td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(
//                   `<p id="${paraInputRef.current?.value ?? ""}">段落</p>`,
//                   "cursor"
//                 );
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//       </table>
//     </>
//   );
// };

// export default HtmlTable;
