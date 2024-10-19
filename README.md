# Ejar Frontend -- Using React.js

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## How to Run the Project Locally

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Mohammedbbk/Ejar.git
```


### 2. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd Ejar
npm install
```

### 3. Run the Application

Start the application on your local machine:

```bash
npm start
```

The application will open at `http://localhost:3000`.

## How to Integrate the AI Backend Model

### 1. Integration Point

- In the file `EjarLanding.js`, locate the `handleAnalyze` function.
- This function is where you should integrate the AI model.
- Currently, it simulates analysis with the following line:

  ```jsx
  setAnalysisResult(`Analysis complete for ${file.name}`);
  ```

### 3. Modifying the Frontend to Call the API

- Replace the simulated analysis in `handleAnalyze` with an actual API call.
- Example using `fetch`:

  ```jsx
  const handleAnalyze = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setAnalysisResult(data.result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  ```

- Ensure the API returns a JSON response containing the analysis result.

### 4. Running the Backend API

- Run your AI model's API server on a specific port (e.g., 5000).
- Configure **CORS** if necessary to allow the frontend to access the API.

## Notes

- Only PDF and Word document types are accepted.

