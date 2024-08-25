# RUN the project:


## Open Terminal

Open terminal in the cloned repository directory. 

![Alt text](images/ecobuddy_img.png)

Right click and click `open in terminal`

![Alt text](images/terminal_directory.png)

Navigate to backend directory: `cd backend`


## Create Virtual Environment:

Use `python3 -m venv venv` to  create a virtual environment named venv.

Check if folder `venv/bin` looks like this:

![Alt text](images/venv_structure.png)

*IF NOT* delete venv folder and use: `virtualenv -p python3 venv`


## Activate Virtual Environment:
                
On Windows, use `.\venv\Scripts\activate` to activate the virtual environment.

On macOS/Linux, use `source venv/bin/activate`

*IF* virtual environment was succesfully activated you should see something like this:

![Alt text](images/venv_img.png)


## Install Dependencies:

Run `pip3 install -r requirements.txt` to install the dependencies.


## Setup environmetal variables

Create `.env` file in backend folder: `touch .env`, and fill it like this:

![Alt text](images/env_file.png)


## Run the project

Use `python3 run.py` to run the project.


## Test project

Use `python3 test.py` and see if everything works.


