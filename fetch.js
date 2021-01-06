fetch(
  "https://api.airtable.com/v0/appo2m5gXXd3pNNCG/Table%201?api_key=key3AHJQkA3Gkjagf"
).then(function (data) {
  data.json().then(function (response) {
    const records = response.records;
    records.forEach(function (record) {
      const fields = record.fields;
      frameMaker(fields.title, fields.img);
    });
  });
});
