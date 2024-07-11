/*asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      asyncOperation4(result3, (result4) => {
        // More nested callbacks...
      });
    });
  });
});

asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => asyncOperation4(result3))
  .then((result4) => {
    // Code after all operations are complete
  })
  .catch((error) => {
    // Handle errors
  });
*/