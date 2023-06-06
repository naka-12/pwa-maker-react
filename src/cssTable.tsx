import { Button } from "react-bootstrap";

type CssTableProps = {
  insertInCss: (text: string, place: "cursor" | "top" | "bottom") => void;
};

const CssTable = (props: CssTableProps) => {
  return (
    <>
      <Button
        onClick={() => {
          props.insertInCss("ほげほげ insertCSS", "top");
        }}
      >
        追加
      </Button>
      <table className="table">
        <tr>
          <td>長さ</td>
          <td>
            横: <input id="width-input" type="text" />
          </td>
          <tr>
            <td></td>
            <td>
              縦: <input id="height-input" type="text" />
            </td>
            <td>
              <button
                className="btn btn-outline-secondary btn-sm"
                id="wh-button"
              >
                追加
              </button>
            </td>
          </tr>
        </tr>
        <tr>
          <td>背景の色</td>
          <td>
            <select id="color-select">
              <option value="transparent">透明</option>
              <option value="gray">グレー</option>
              <option value="lightblue">青</option>
              <option value="lightpink">ピンク</option>
              <option value="lightgreen">緑</option>
            </select>
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="color-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>文字を大きくする</td>
          <td></td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="fs-large-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>文字を太くする</td>
          <td></td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="fw-bold-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>文字を中央揃え</td>
          <td></td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="text-align-button"
            >
              追加
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default CssTable;
