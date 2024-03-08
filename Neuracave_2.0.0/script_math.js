function calculate() {
    var x1 = parseFloat(document.getElementById('x1-input').value);
    var x2 = parseFloat(document.getElementById('x2-input').value);
    var x3 = parseFloat(document.getElementById('x3-input').value);
    var x4 = parseFloat(document.getElementById('x4-input').value);
    var x5 = parseFloat(document.getElementById('x5-input').value);
    var y = 1 * 0.32695716 + 1 * 0.26272758 + 20 * -0.19025575 + 1 * 0.17744926 + 1 * 0.02768056 + 2 * 0.15607865 + 2 * -0.12748642 + 3 * -0.09454873 + 3 * -0.05731518 + 2 * -0.19696273 + 1 * 0.06196999 + 2 * 0.03443529 + 2 * 0.0248782 + 0.10941769 + 0.12335563 + x1 * 0.0310335 + 4 * 0.04341644 + x2 * 0.0784005 + x3 * 0.04430735 + x4 * 0.13215699 + x5 * 0.96733227 + 1.4783936811949623;
    document.getElementById('result').innerHTML = "Your Upcoming Exam Grade : " + y;
  }