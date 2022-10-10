s = '';
for (num = 1; num <= 10; num++) {
  s = s + num + ' ';
  for (count = 1; count <= 10; count++) {
    s = s + num * count + ' ';
  }
  s = s + '<br>';
}
document.getElementById('q1').innerHTML = s;

s = '';
for (num = 1; num <= 10; num++) {
  s = s + num + ' ';

  s = s + num * num + ' ';

  s = s + '<br>';
}
document.getElementById('q2').innerHTML = s;

s = '';
for (num = 1; num <= 10; num++) {
  s = s + num + ' ';
  for (count = 1; count <= 4; count++) {
    s = s + Math.pow(num, count) + ' ';
  }
  s = s + '<br>';
}
document.getElementById('q3').innerHTML = s;
