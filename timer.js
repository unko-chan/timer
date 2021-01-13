const beep = function () {
  input = process.argv;
  timer = input.slice(2);

  for (const seconds of timer) {
    if (seconds > 0 && seconds != NaN && timer.length > 0) {
      msConvert = seconds * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, msConvert);
    }
  }
};

beep();
