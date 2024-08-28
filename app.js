//メモを保存する為の空のリストを作成
const memos = [];


function addMemo(){
    //タイトルの入力値を取得
    const titleInput = document.getElementById('titleInput').value;
    //メモをリストに追加
    const memoInput = document.getElementById('memoInput').value;

    //タイトルとメモの両方が入力されているか確認
    if(titleInput && memoInput){
    //メモをリストに追加
        memos.push({title:titleInput, content: memoInput});

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
    const titleList = document.getElementById('titleList'); // ID を修正
    titleList.innerHTML = '';
    
    memos.forEach((memo, index) => {
        const titleElement = document.createElement('div');
        titleElement.textContent = memo.title;
        titleElement.style.cursor = 'pointer';
        titleElement.classList.add('list-group-item');
        titleElement.onclick = () => {
            console.log('Clicked index:', index);
            displayMemoContent(index);
        };
        console.log('Created title element:', titleElement);
        titleList.appendChild(titleElement);
    });
    
    console.log('Updated titleList:', titleList.children);
}
