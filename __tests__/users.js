const frisby = require('frisby');
const frisbyUtils = require('../functions/frisby-methods.js');
const fs = require('fs');
const path = require('path');
var Validator = require('jsonschema').Validator;
var v = new Validator();
const baseUrl = 'https://d26923e2-0412-48b9-8a71-564cdc1947c3.mock.pstmn.io';
const endpoint = '/users';

beforeAll(async () => {
  //Get a token (Example)
});

describe("User endpoint", () => {
  it('response should have status as ACTIVE and a valid JSON schema', async () => {
    const schemaPath = path.resolve('./JSON/users.json');
      try {
        const res = await frisbyUtils.get(baseUrl, endpoint, frisby);
        const schema = await JSON.parse(fs.readFileSync(schemaPath));
        const validate = v.validate(await JSON.parse(res.body), schema);
        const body = JSON.parse(res.body);
        expect(res.status).toBe(200);
        expect(validate.valid).toBe(true);
        expect(body.results.length).toBe(1);
        expect(body.results[0].status).toBe("ACTIVE");
      } catch(error) {
        console.error(error);
      }
  });
});

afterAll(async () => {
  //Clear test data (Example)
});
