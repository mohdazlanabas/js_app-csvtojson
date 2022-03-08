let csv2Jason = require('convert-csv-to-json')
csv2Jason.generateJsonFileFromCsv('data.csv','output.json')

let jsonResponse = csv2Jason.getJsonFromCsv('data.csv')
for( let jsonCounter=0; jsonCounter<jsonResponse.length; jsonCounter++) {
    console.log(jsonResponse[jsonCounter]);
}

/*
CSVToJSON().fromFile("./data.csv").then(data => {
    console.log(data);
    const csv = JSONToCSV(data, {field: ["username","firstname","lastname,"email","altemail","password","mobile","gender,"idcard","dob","city","country","marital"] });
    FileSystem.writeFileSystem("./output.csv", csv);})
*/