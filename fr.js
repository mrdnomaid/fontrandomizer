fstr = 'Arial Black, Comic Sans MS, Papyrus, Courier New, Georgia, Times New Roman, Impact, Lucida Console, Lucida Sans Unicode, Lucida Grande, Tahoma, Trebuchet MS, Helvetica, Neucha, Patrick Hand SC';
f = fstr.split(', ');
w = document.getElementById('word');
l = document.getElementById('letter');
o = document.getElementById('out');

function ran(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function ret(str) {
  return '<span style="font-family:\'' + ran(f) + '\';background-color:' + hex() + ';">' + str + '</span>';
}

function hex() {
  if (document.getElementById('colsyes').checked) {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    return 'none';
  }
}

function append(str) {
  o.innerHTML += str;
}

function doTheThing() {
  o.innerHTML = '';
  t = document.getElementById('in').value;
  wrds = t.split(' ');

  if (w.checked) {
    for (var i = 0; i < wrds.length; i++) {
      append(ret(wrds[i]));
    }
  } else if (l.checked) {
    for (var i = 0; i < t.length; i++) {
      append(ret(t[i]));
    }
  }
}
