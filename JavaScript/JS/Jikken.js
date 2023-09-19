(()=>{
    const $doc = document;
    const $button = $doc.getElementsByClassName("openButton");

    const openText = (e) => {
        e.preventDefault();

        const $this = e.target;
        const $button = $this.dataset.button
    }

    let age = prompt("say hello", 1);

    let a = (c < 10) ?
        () => alert("hello") :
        () => alert("greetings!");
    a();
});