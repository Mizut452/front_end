(()=> {
    const $doc = document;
    //タブ全体のDOMを取得
    const $tab = $doc.getElementById('js-tab');
    //タブ全体のDOMの中から属性名が"data-nav"のDOMを取得
    const $nav = $tab.querySelectorAll('[data-nav]');
    //タブ全体のDOMの中から属性名が"data-content"のDOMを取得
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    //初期化
    const init = () => {
        //ブロック表示にする
        $tab.style.color = 'pink';
        $content[0].style.display = 'block';
        
    };
    init();

    const handleClick = (e) => {
        //クリックしたときの挙動をすべて失くす
        e.preventDefault();

        //targetは発生したイベントを返す
        const $this = e.target;
        //data属性のnavという名前の属性を取得(data-nav属性を取得する)
        const targetVal = $this.dataset.nav;

        let index = 0;
        while(index < navLen) {
            $content[index].style.display = 'none';
            //クラス名を削除する
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };
        
        let index = 0;
        while(index < navLen) {
            $nav[index].addEventListener('click', (e) => handleClick(e));
            index++;
        }
})();