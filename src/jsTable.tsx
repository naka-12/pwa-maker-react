const JsTable = () => {
  return (
    <>
      <table className="table">
        <tr>
          <td>クリック時の動作</td>
          <td>
            <input type="text" id="onclick-input" placeholder="呼ぶ名前" />
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="onclick-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>背景の色を変える</td>
          <td>
            <input type="text" id="color-change-input" placeholder="呼ぶ名前" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <select id="color-change-select">
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
              id="color-change-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>文字を変える</td>
          <td>
            <input type="text" id="text-content-input" placeholder="呼ぶ名前" />
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="text-content-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>隠す</td>
          <td>
            <input type="text" id="hide-input" placeholder="呼ぶ名前" />
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="hide-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>表示する</td>
          <td>
            <input type="text" id="show-input" placeholder="呼ぶ名前" />
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="show-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>ランダム</td>
          <td></td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="random-button"
            >
              追加
            </button>
          </td>
        </tr>
        <tr>
          <td>○秒待ってから実行</td>
          <td>
            <input type="text" id="setTimeOut-input" />秒
          </td>
          <td>
            <button
              className="btn btn-outline-secondary btn-sm"
              id="setTimeOut-button"
            >
              追加
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default JsTable;
