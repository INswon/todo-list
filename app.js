//メモを保存する為の空のリストを作成
const memos = [];


function addMemo(){
    //タイトルの入力値を取得
    const titleInput = document.getElementById('titleInput').value;
    //メモをリストに追加
    const memoInput = document.getElementById('memoInput').value;

    //タイトルとメモの両方が入力されているか確認
    if(titleInput && memoInput){
        //日時を取得
        const currentDateTime = new Date().toLocaleString();
        //メモをリストに追加
        memos.push({title:titleInput, content: memoInput, date:currentDateTime});

        //入力フィールドをクリア
        document.getElementById('titleInput').value = '';
        document.getElementById('memoInput').value = '';
        updateTitleList();
    } else {
        alert('タイトルとメモを入力してください。');
    }
}

// タイトルリストを更新する関数
function updateTitleList() {
    //タイトルリストの要素を取得
    const titleList = document.getElementById('titleInput');

    //リストの内容を空にする
    titleList.innerHTML = '';

     // 保存されたメモを順番に処理
    memos.forEach((memo, index) => {
        const titleElement = document.createElement('div');
        titleElement.textContent = memo.title;
        titleElement.style.cursor = 'pointer';
        titleElement.classList.add('list-group-item');
        titleElement.onclick = () => displayMemoContent(index);
        titleList.appendChild(titleElement);
    });
}

// メモ内容を表示する関数
function updateTitleList() {
    //メモリストを表示する場所(HTML要素)を取得する
    const titleList = document.getElementById('titleList'); 
    //メモの内容を一度空にする
    titleList.innerHTML = '';

    //保存された全てのメモに対して、一つずつ処理を行います。
    memos.forEach((memo) => {
        //各メモを表示するための新しいHTML要素を作成します。
        //ここでの処理は、新しいメモのHTML要素を作成し、それをリストに追加することです。
        //この<div>が、各メモのタイトル、内容、日時を表示するための枠になります。
        const memoElement = document.createElement('div');
        memoElement.textContent = `${memo.title} - ${memo.content} - ${memo.date}`; // タイトル、内容、日時を一行で表示

        memoElement.classList.add('list-group-item'); // Bootstrapのスタイルを適用
        titleList.appendChild(memoElement); // リストに追加
    });
}
