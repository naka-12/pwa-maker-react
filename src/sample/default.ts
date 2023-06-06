const htmlDefaultValue = `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My App</title>
	</head>
	<body>
		<h1 id="app_daimei">Hello PWA!</h1>
		<p id="app_shoukai">自由に書き換えてみましょう。</p>
	</body>
</html>


`;

const cssDefaultValue = `#app_daimei {
	/* この中で「app_daimei」の見た目を調整 */
	text-align: center; /* 文字等を中央揃え */
}
#app_shoukai {
	/* この中で「app_shoukai」の見た目を調整 */
	text-align: center; /* 文字等を中央揃え */
}

`;

const jsDefaultValue = `const app_shoukai = document.getElementById("app_shoukai"); // 「app_shoukai」の動きを操作するための準備
const app_daimei = document.getElementById("app_daimei"); // 「app_daimei」の動きを操作するための準備

`;

export { htmlDefaultValue, cssDefaultValue, jsDefaultValue };
