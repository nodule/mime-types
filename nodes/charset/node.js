on.input.in = function() {
  output({
    out: $.write('in', mime_types.charset($.in))
  });
};
