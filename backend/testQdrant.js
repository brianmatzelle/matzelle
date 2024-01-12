import {QdrantClient} from '@qdrant/qdrant-js'; // REST client

const client = new QdrantClient({
    url: 'https://8ce4e821-39c0-4c03-bd75-1b0da948ce7f.us-east4-0.gcp.cloud.qdrant.io',
    apiKey: 'FNWjLyxBRGJmOsnJj-BJLmQ_wRD--bNRhpRlkhATH_LSZWNldOmouQ',
});

const result = await client.retrieve

// console.log(result)
