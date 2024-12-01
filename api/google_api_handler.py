import os
import requests
from dotenv import load_dotenv

load_dotenv()

GOOGLE_KEY = os.getenv("GOOGLE_KEY")
SEARCH_ENGINE_ID = os.getenv("SEARCH_ENGINE_ID")



def google_search(query, num_results):

    print("IN GOOGLE SEARCH")
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key={GOOGLE_KEY}&cx={SEARCH_ENGINE_ID}"
    print(url)
    # Make the request
    response = requests.get(url)
    print(response)
    response_string = ""

    # response_dictionary = []

    # Process the response
    if response.status_code == 200:
        print("gettings response.json")
        results = response.json()
        print("got results = response.json")
        print(results)


        # Iterate through the search results and display them
        for item in results.get("items", [])[:num_results]:  # 'items' contains the search results
        
            # Creating the response string
            response_string += f"Title: {item.get('title', 'no title available')}\n"
            response_string += f"Link: {item.get('link', 'no link available')}\n"
            response_string += f"Snippet: {item.get('snippet', 'no snippet available')}\n\n"

            # result = {"Title":item.get('title', 'no title available'),"Link":item.get('link', 'no link available'),"Snippet":item.get('snippet', 'No snippet available')}
            # adding each response to a list 
            # response_dictionary.append(result)
            
        print(response_string)
        return response_string
    
    else:
        print(f"Error: {response.status_code}, {response.text}")
