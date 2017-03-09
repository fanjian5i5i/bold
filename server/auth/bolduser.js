var records = [
    { id: 1, username: "jian.fan", password: "t$k$CtyNSkt&J#n$fBpTbsdi", displayName: "Fan", email: "jian.fan@boston.gov" }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];
exports.findByEmail = function(email, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.email === email) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
