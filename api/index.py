from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import json
from process_file import process
import pandas as pd
import io

app = FastAPI()

# Allow all origins (or specify the frontend URL)
origins = [
    "http://localhost:3000",  # or you can use "*" to allow all origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.post("/api/py/your-endpoint")
async def process_json(request: Request):
    try:
        # Read the raw body as a string
        body = await request.body()
        body_str = body.decode("utf-8")  # Decode the bytes to string

        # Split the input by lines, assuming each line is a separate JSON object
        objects = []
        for line in body_str.strip().splitlines():
            try:
                obj = json.loads(line)  # Parse each line as a separate JSON object
                objects.append(obj)  # Add to list
            except json.JSONDecodeError:
                print(f"Skipping invalid JSON line: {line}")  # Log invalid JSON lines

        # Process the data using the process function
        user_result = process(objects)  

        # Convert the result into a Pandas DataFrame
        DF = pd.DataFrame(user_result)

        # Save the DataFrame to a CSV in memory (no local file)
        csv_buffer = io.StringIO()
        DF.to_csv(csv_buffer, index=False)  # Convert DataFrame to CSV and store in buffer
        csv_buffer.seek(0)  # Go to the start of the buffer

        # Return the CSV as a streaming response to the frontend
        return StreamingResponse(csv_buffer, media_type="text/csv", headers={"Content-Disposition": "attachment; filename=data.csv"})

    except Exception as e:
        print(f"Error processing JSON: {e}")
        raise HTTPException(status_code=400, detail="Invalid JSON data")