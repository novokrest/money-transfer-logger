// ./server.js
/*
* Initialise Express
*/
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

const MOCK_TRANSFERS = [
  {
    id: 1,
    amount: 10000,
    source: 'Sberbank',
    destination: 'Alfa-bank',
    issuedDate: '2017-12-01',
    issuedTime: '12:01',
    status: 'processing'
  },
  {
    id: 2,
    amount: 20000,
    source: 'Raiffaisen',
    destination: 'Alfa-bank',
    issuedDate: '2017-12-04',
    issuedTime: '13:01',
    status: 'done'
  },
  {
    id: 3,
    amount: 30000,
    source: 'VTB24',
    destination: 'Sberbank',
    issuedDate: '2017-12-02',
    issuedTime: '11:34',
    status: 'done'
  },
];

app.get('/transfers', (req, res) => {
  const transfers = MOCK_TRANSFERS;
  console.log('Return transfers:', transfers);
  res.status(200).json({
    _embedded: {
      transfers: transfers
    }
  });
});

/*
* Define post route for creating new reviews
*/
app.post('/transfers', (req, res) => {
  const transfer = req.body;
  transfer.id = MOCK_TRANSFERS.length + 1;
  console.log('Transfer to add:', transfer);
  MOCK_TRANSFERS.push(transfer);
  res.status(200).send();
});

app.delete('/transfers/:id', (req, res) => {
  const id = req.params.id;
  console.log('Transfer to remove:', id)
  MOCK_TRANSFERS.splice(id - 1, 1);
  res.status(200).send();
});

/*
* Run app
*/
const port = 5000;
app.listen(port, () => { console.log(`App listening on port ${port}...`)});
