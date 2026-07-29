
import { Given, When, Then, JsonFormatter } from "@cucumber/cucumber";
import { request } from "playwright";
import { expect } from "playwright/test";


let response: any

Given('I send the get request', async function () {

    const baseurl = "https://reqres.in/api/users?page=2"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.get(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })
});


Then('I verify the api response', async function () {

    await expect(response.status()).toBe(200)
    console.log("Response for Get Request: ", await response.status());
    console.log(await response.json());
    let body= await response.json()
    expect(body.data[0].email).toContain("michael.lawson@reqres.in")

});

Given('I send the post request', async function () {

    const baseurl = "https://reqres.in/api/users"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.post(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

    })


});

Given('I send the post request body', async function (requestbody) {

    const baseurl = "https://reqres.in/api/users"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.post(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },
        data: JSON.parse(requestbody)
    })
});


Then('I verify the api post response', async function () {
    expect(response.status()).toBe(201)
    console.log("Repsone of Post request: ", response.status());

});


Given('I send the put request body', async function (requestbody) {

    const baseurl = "https://reqres.in/api/users/2"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.put(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },
        data: JSON.parse(requestbody)
    })
});



Then('I verify the api put response', async function () {
    expect(response.status()).toBe(200)
    console.log("PUT response code : ", response.status());

});

Given('I send the patch request body', async function (requestbody) {

    const baseurl = "https://reqres.in/api/users/2"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.patch(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },
        data: JSON.parse(requestbody)
    })
});



Then('I verify the api patch response', async function () {
    expect(response.status()).toBe(200)
    console.log("Patch request reponse code: ", response.status());

});

Given('I send the delete request', async function () {
    const baseurl = "https://reqres.in/api/users/2"
    const apirequest = await request.newContext({ baseURL: baseurl })
    response = await apirequest.delete(baseurl, {
        headers: {
            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })
});



Then('I verify the api delete response', async function () {
    expect(response.status()).toBe(204)
    console.log("Response of Delete code: ", response.status());

});