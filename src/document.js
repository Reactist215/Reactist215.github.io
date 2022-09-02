const DEBOUNCE_TIME = 1000; // ms
const TIME_INTERVAL = 2000; // ms

export function documentReady() {
  function onClickMole(mole, idx) {
    console.log(mole, idx);
  }

  function setupUI() {
    const btnStart = document.getElementById('start');
    btnStart.addEventListener('click', (ev) => {
      console.log(ev);
    });

    const moles = [];
    document.getElementById('moles').childNodes.forEach((mole) => {
      if (mole.nodeName.toUpperCase() === 'DIV') {
        let idx = moles.length;
        mole.addEventListener('click', function () {
          onClickMole(mole, idx);
        });
        moles.push(mole);
      }
    });
  }

  setupUI();
}
