import React, { useState, useEffect } from 'react';

function Requests() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [response, setResponse] = useState('');

  // Simulating fetching requests from a database
  useEffect(() => {
    // Replace this code with your actual API call to fetch requests from the database
    const fetchRequests = async () => {
      try {
        // Simulating the response data from the database
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();

        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleRequestSelect = (request) => {
    setSelectedRequest(request);
    setResponse('');
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSendResponse = () => {
    // Replace this code with your actual API call to send the response to the user
    console.log('Sending response:', response);

    // Clear the selected request and response input
    setSelectedRequest(null);
    setResponse('');
  };

  return (
    <div>
      <h2>Requests</h2>
      <div>
        <ul>
          {requests.map((request) => (
            <li
              key={request.id}
              onClick={() => handleRequestSelect(request)}
              className={selectedRequest === request ? 'selected' : ''}
            >
              {request.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedRequest && (
        <div>
          <h3>Selected Request: {selectedRequest.title}</h3>
          <p>{selectedRequest.description}</p>
          <textarea
            value={response}
            onChange={handleResponseChange}
            placeholder="Type your response..."
          />
          <button onClick={handleSendResponse}>Send Response</button>
        </div>
      )}
    </div>
  );
}

export default Requests;
