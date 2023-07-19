(()=> {
  const $doc = document;
  const $checkbox = $doc.querySelectorAll('[data-checkbox]');
  const checkLen = $checkbox.length;
  const content = document.querySelectorAll('[data-content]');
  const CONTEXT_CLASS = 'context';
  


  const handleClick = (e) => {
    
    const $this = e.target;
    const targetVal = $this.dataset.checkbox;
    const $deCheckbox = $checkbox[targetVal];

    $deCheckbox.addEventListener("change", ()=> {
      if($deCheckbox.checked) {
        content[targetVal].classList.remove(CONTEXT_CLASS);
      } else {
        content[targetVal].classList.add(CONTEXT_CLASS);
      }
    });
  };

  let index = 0;
  while(index < checkLen) {
    $checkbox[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }




})();