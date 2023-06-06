// import { useContext } from "react";
// import Button from "react-bootstrap/Button";
// import {
//   InsertInHtmlContext,
//   InsertInCssContext,
//   InsertInJsContext,
// } from "../editor.tsx";
// import { omikujiHtml, omikujiCss, omikujiJs } from "../template/omikuji";

// const TemplateTable = () => {
//   const insertInHtml = useContext(InsertInHtmlContext);
//   const insertInCss = useContext(InsertInCssContext);
//   const insertInJs = useContext(InsertInJsContext);
//   return (
//     <>
//       <table className="table">
//         <tr>
//           <td>おみくじアプリ</td>
//           <td>
//             <Button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => {
//                 insertInHtml(omikujiHtml, "bottom");
//                 insertInCss(omikujiCss, "bottom");
//                 insertInJs(omikujiJs, "bottom");
//               }}
//             >
//               追加
//             </Button>
//           </td>
//         </tr>
//         <tr>
//           <td>BMI計算アプリ</td>
//           <td>
//             <button
//               className="btn btn-outline-secondary btn-sm"
//               id="bmi-button"
//             >
//               追加
//             </button>
//           </td>
//         </tr>
//         <tr>
//           <td>TODOアプリ</td>
//           <td>
//             <button
//               className="btn btn-outline-secondary btn-sm"
//               id="todo-button"
//             >
//               追加
//             </button>
//           </td>
//         </tr>
//       </table>
//     </>
//   );
// };

// export default TemplateTable;
