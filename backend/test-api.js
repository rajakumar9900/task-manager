/**
 * Simple script to test if the backend API is working
 * Run this after starting the server: node test-api.js
 */

const API_URL = 'http://localhost:5000';

async function testAPI() {
  console.log('🧪 Testing Backend API...\n');

  try {
    // Test 1: GET all tasks
    console.log('1️⃣ Testing GET /tasks');
    const getResponse = await fetch(`${API_URL}/tasks`);
    const tasks = await getResponse.json();
    console.log('✅ Success! Tasks:', tasks);
    console.log('');

    // Test 2: POST new task
    console.log('2️⃣ Testing POST /tasks');
    const postResponse = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Task from API Test' })
    });
    const newTask = await postResponse.json();
    console.log('✅ Success! Created task:', newTask);
    console.log('');

    // Test 3: PUT update task
    console.log('3️⃣ Testing PUT /tasks/:id');
    const putResponse = await fetch(`${API_URL}/tasks/${newTask.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    });
    const updateResult = await putResponse.json();
    console.log('✅ Success! Updated task:', updateResult);
    console.log('');

    // Test 4: DELETE task
    console.log('4️⃣ Testing DELETE /tasks/:id');
    const deleteResponse = await fetch(`${API_URL}/tasks/${newTask.id}`, {
      method: 'DELETE'
    });
    const deleteResult = await deleteResponse.json();
    console.log('✅ Success! Deleted task:', deleteResult);
    console.log('');

    console.log('🎉 All tests passed! Backend is working correctly.\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n⚠️  Make sure the backend server is running:');
    console.log('   cd backend && node server.js\n');
  }
}

testAPI();
