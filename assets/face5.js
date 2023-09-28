{
  /* <script nonce=""> */
}
ServerJSQueue.add(function () {
  requireLazy(['Bootloader'], function (b) {
    b.enableBootload({
      Dialog: {
        r: [],
        rds: {
          m: [
            'FbtLogging',
            'IntlQtEventFalcoEvent',
            'Animation',
            'PageTransitions',
          ],
          r: [],
        },
        be: 1,
      },
      ExceptionDialog: {
        r: [],
        rds: {
          m: ['FbtLogging', 'IntlQtEventFalcoEvent'],
          r: [],
        },
        be: 1,
      },
      QuickSandSolver: {
        r: [],
        rds: {
          m: ['FbtLogging', 'IntlQtEventFalcoEvent'],
          r: [],
        },
        be: 1,
      },
      ConfirmationDialog: { r: [], be: 1 },
      MWADeveloperReauthBarrier: { r: [], be: 1 },
    });
  });
});
// </script>
