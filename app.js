// 初期化処理: ページ読み込み時にローカルストレージからメモを読み込む
document.addEventListener('DOMContentLoaded', () => {
    memos = JSON.parse(localStorage.getItem('memos')) || [];
    updateTitleList();
});


// メモを保存するための空のリスト
let memos = []; // グローバルなメモ配列
let selectedIndex = null; // 現在選択されているメモのインデックスを保存する変数

function addMemo() {
    // メモを追加
    const titleInput = document.getElementById('titleInput').value;
    const memoInput = document.getElementById('memoInput').value;

    if (titleInput && memoInput) {
        const currentDateTime = new Date().toLocaleString();
        const memo = { title: titleInput, content: memoInput, date: currentDateTime };
        memos.push(memo);

        // ローカルストレージに保存
        localStorage.setItem('memos', JSON.stringify(memos));

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

    // ローカルストレージからメモを取得
    const storedMemos = JSON.parse(localStorage.getItem('memos')) || [];
    console.log('Memos to Display:', storedMemos);

    storedMemos.forEach((memo, index) => {
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
        memos.splice(selectedIndex, 1);
        selectedIndex = null;
        localStorage.setItem('memos', JSON.stringify(memos));
        updateTitleList();
    } else {
        alert('削除するメモを選択してください。');
    }
}
