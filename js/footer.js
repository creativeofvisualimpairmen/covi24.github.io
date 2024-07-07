function tentang() {
    var tenangKami = document.getElementById('idTentang');

    // get the current value of the clock's display property
    var displaySetting = tenangKami.style.display;

    // also get the clock button, so we can change what it says
    var tombolTentang = document.getElementById('tentangButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      tenangKami.style.display = 'none';
      // change button text
      tombolTentang.innerHTML = 'Lihat Tentang';
    }
    else {
      // clock is hidden. show it
      tenangKami.style.display = 'block';
      // change button text
      tombolTentang.innerHTML = 'Sembunyikan tentang';
    }
  }