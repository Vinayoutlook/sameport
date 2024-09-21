const express = require('express');
const cors = require('cors');
const path = require('path');
const AWS = require('aws-sdk');
const { groupEnd } = require('console');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../react-app/build')));

// Configure AWS SDK to use environment variables set by Jenkins
AWS.config.update({
  region:  'us-west-2', // Default to your configured region
});


// API Routes
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

//app.get('/api/users', (req, res) => {
//    const users = [
//      { id: 1, name: 'Vinay' },
//      { id: 2, name: 'Shubham' },
//    ];
//    res.json(users);
//});


//
//// Configure AWS SDK
//AWS.config.update({
//
//  region: 'us-east-1',
//
//  credentials: new AWS.Credentials({
//
//    accessKeyId: '',  // Replace with your actual access key ID
//
//    secretAccessKey: ''  // Replace with your actual secret access key
//
//  })
//
//});
// Initialize DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

// Define DynamoDB table name
const TABLE_NAME = 'dev-platform-ecbio-tnc-audit';

app.get('/items/:email', async (req, res) => {
  try {
    const email = req.params.email;
    console.log("email in backend : ", email);
    // Validate email
    if (!email) {
      return res.status(400).json({ message: 'Email parameter is required.' });
    }

    // Get item based on email
    const params = {
      TableName: TABLE_NAME,
      Key: {
          'email': email,
//        'email': email,
       'group_id': 'h1'
      }
    };

    const data = await docClient.get(params).promise();

    if (data.Item) {
      // Send the TnC data if found
      if (data.Item.tnc_value==false) {
        res.status(200).json({
          tnc_page: data.Item.tnc_page,
          tnc_value: data.Item.tnc_value
        });
      } else {
        res.status(200).json({
          tnc_value: data.Item.tnc_value
        });
      }
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({
      message: 'An error occurred while retrieving data.',
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack // Optionally include stack trace for debugging
      }
    });
  }
});

// REST API endpoint to store email and TnC
app.put('/items', async (req, res) => {

  try {

    const { email, tnc_value } = req.body;




    // Validate input

    if (!email || typeof tnc_value !== 'boolean') {

      return res.status(400).json({ message: 'Invalid input', success: false });

    }




    // Define the table name

    const TABLE_NAME = 'dev-platform-ecbio-tnc-audit'; // Ensure this matches your DynamoDB table name




    // Define key attributes

    const partitionKey = 'email'; // Ensure this matches your table's partition key
//
    const sortKey = 'group_id'; // Ensure this matches your table's sort key if applicable




    // Check if the item already exists

    const getParams = {

      TableName: TABLE_NAME,

      Key: {

        [partitionKey]: email,

        [sortKey]: 'h1' // Adjust this based on your schema

      }

    };




    const data = await docClient.get(getParams).promise();




    const updateParams = {

      TableName: TABLE_NAME,

        Key: {

          [partitionKey]: email,

          [sortKey]: 'h1'

        },

        UpdateExpression: 'set tnc_value = :tnc_value',

        ExpressionAttributeValues: {

          ':tnc_value': tnc_value

        }

    };




    await docClient.update(updateParams).promise();

    res.status(200).json({ message: 'Item updated', success: true });

  }

  catch (error) {

    console.error('Error saving data:', error);

    res.status(500).json({

      message: 'An error occurred while saving data.',

      error: {

        name: error.name,

        message: error.message,

        stack: error.stack

      }

    });

  }

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-app/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


  