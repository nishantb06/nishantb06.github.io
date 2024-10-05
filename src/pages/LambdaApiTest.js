import React, { useState } from 'react';

const LambdaApiTest = () => {
    const [response, setResponse] = useState('');
    const [parsedData, setParsedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setResponse('');
        setParsedData(null);

        const requestOptions = {
            method: "GET",
            redirect: "follow",
            mode: 'no-cors' // Add this line
        };

        try {
            const res = await fetch("https://vng8vbic4f.execute-api.ap-south-1.amazonaws.com/default/testFunction", requestOptions);
            const result = await res.text();
            setResponse(result);
            console.log(result); // Keep the console.log for debugging

            // Parse the JSON string in the response
            const parsedResult = JSON.parse(result);
            setParsedData(parsedResult);
        } catch (error) {
            setError('An error occurred while fetching or parsing data');
            console.error(error); // Keep the console.error for debugging
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lambda API Test</h1>
            <button 
                onClick={fetchData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                disabled={loading}
            >
                {loading ? 'Fetching...' : 'Fetch Data'}
            </button>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {response && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-semibold mb-2">Raw Response:</h2>
                    <pre className="bg-white p-2 rounded border border-gray-300 whitespace-pre-wrap">
                        {response}
                    </pre>
                </div>
            )}
            {parsedData && (
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Parsed Data:</h2>
                    <div className="bg-white p-2 rounded border border-gray-300">
                        <p><strong>Status Code:</strong> {parsedData.statusCode}</p>
                        <p><strong>Body:</strong> {JSON.parse(parsedData.body)}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LambdaApiTest;