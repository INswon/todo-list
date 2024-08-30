// メモを保存するための空のリスト
const memos = [];
let selectedIndex = null; // 現在選択されているメモのインデックスを保存する変数

function addMemo() {
    // タイトルの入力値を取得
    const titleInput = document.getElementById('titleInput').value;
    // メモをリストに追加
    const memoInput = document.getElementById('memoInput').value;

    // タイトルとメモの両方が入力されているか確認
    if (titleInput && memoInput) {
        // 日時を取得
        const currentDateTime = new Date().toLocaleString();
        // メモをリストに追加
        memos.push({ title: titleInput, content: memoInput, date: currentDateTime });

        // 入力フィールドをクリア
        document.getElementById('titleInput').value = '';
        document.getElementById('memoInput').value = '';
        updateTitleList();
    } else {
        alert('タイトルとメモを入力してください。');
    }
}

function updateTitleList() {
    // メモリストを表示する場所(HTML要素)を取得する
    const titleList = document.getElementById('titleList');
    // メモの内容を一度空にする
    titleList.innerHTML = '';

    // 保存された全てのメモに対して、一つずつ処理を行います。
    memos.forEach((memo, index) => {
        const memoElement = document.createElement('div');
        memoElement.textContent = `${memo.title} - ${memo.content} - ${memo.date}`; // タイトル、内容、日時を一行で表示

        memoElement.classList.add('list-group-item'); // Bootstrapのスタイルを適用
        memoElement.style.cursor = 'pointer';
        memoElement.onclick = () => {
            selectedIndex = index; // クリックされたメモのインデックスを保存
            // 選択されたメモを強調表示するためのCSSクラスを追加する
            document.querySelectorAll('.list-group-item').forEach(item => item.classList.remove('active'));
            memoElement.classList.add('active');
        };
        titleList.appendChild(memoElement); // リストに追加
    });
}

function deleteMemo() {
    if (selectedIndex !== null) {
        memos.splice(selectedIndex, 1); // 選択されたインデックスのメモを削除
        selectedIndex = null; // インデックスをリセット
        updateTitleList(); // リストを更新して画面に反映
    } else {
        alert('削除するメモを選択してください。');
    }
}
