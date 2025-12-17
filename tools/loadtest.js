/* eslint-disable no-undef, no-console */
import autocannon from 'autocannon';

autocannon(
  { url: 'http://localhost:3000/health', connections: 20, duration: 10 },
  (err, result) => {
    if (err) throw err;
    console.log(autocannon.printResult(result));
  },
);
