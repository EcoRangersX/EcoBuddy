## RUN the project:

**Open Terminal** 

Open terminal in the cloned repository directory. 
Navigate to backend directory: `cd backend`

**Create Virtual Environment**

Use `python3 -m venv venv` to  create a virtual environment named venv.

Check if folder `env/bin` contains files named active with different extensions.

*IF* not delete venv folder and use: `virtualenv -p python3 venv`

**Activate Virtual Environment**
                
On Windows, use `.\venv\Scripts\activate` to activate the virtual environment.

On macOS/Linux, use `source venv/bin/activate`

*IF* virtual environment was succesfully activated you should see something like this:
![Alt text](images/venv_img.png)

**Install Dependencies:**
Ensure you have a requirements.txt file with all the necessary dependencies listed.

Run `pip3 install -r requirements.txt` to install the dependencies.

**Setup environmetal variables**
Create .env file in backend folder like this:
GROQ_API_KEY = <groq api key>
OPEN_WEATHER_API_KEY = <open weather api key>

**Run project**
Use `python3 run.py` to run the project.


## TEST BACKEND
To test api you can use `python3 test.py` and see if everything works as intended.


