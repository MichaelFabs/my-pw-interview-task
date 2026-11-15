const { test, expect } = require('@playwright/test');

// function to create a pet
async function createPet(request) {
  const pet = {
    id: Date.now(),
    name: 'My interview task for pet creation',
    photoUrls: [],
    status: 'available'
  };

  const response = await request.post('pet', {
    data: pet
  });

  expect(response.status()).toBe(200);

  return pet;
}

test.describe('Petstore API tests', () => {

  test('create a new pet', async ({ request }) => {
    const pet = {
      id: Date.now(),
      name: 'My interview task for pet creation',
      photoUrls: [],
      status: 'available'
    };

    const response = await request.post('pet', {
      data: pet
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toMatchObject({
      id: pet.id,
      name: pet.name,
      status: pet.status
    });
  });

  test('retrieve or get an existing pet', async ({ request }) => {
    const pet = await createPet(request);

    const response = await request.get(`pet/${pet.id}`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toMatchObject({
      id: pet.id,
      name: pet.name,
      status: pet.status
    });
  });

  test('return 404 for an unknown pet ID request', async ({ request }) => {
    const unknownPetId = 1234567890;

    const response = await request.get(`pet/${unknownPetId}`);

    expect(response.status()).toBe(404);
  });

});
