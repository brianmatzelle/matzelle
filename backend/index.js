import {QdrantClient} from '@qdrant/js-client-rest';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
});

const client = new QdrantClient({
    url: 'https://8ce4e821-39c0-4c03-bd75-1b0da948ce7f.us-east4-0.gcp.cloud.qdrant.io',
    apiKey: 'FNWjLyxBRGJmOsnJj-BJLmQ_wRD--bNRhpRlkhATH_LSZWNldOmouQ',
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const { messages } = req.body;
    
    const completion = await openai.chat.completions.create({
        messages: messages,
        model: 'ft:gpt-3.5-turbo-1106:personal::8cM1D2zk',
    });

    res.send(completion);
});

const port = 8200;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

