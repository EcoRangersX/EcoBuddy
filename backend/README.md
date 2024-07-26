## RUN the project:
**Open Terminal**: Open your terminal in Visual Studio Code.

Navigate to Project Directory: Use the cd command to navigate to your project **backend** directory.

**Create Virtual Environment:**

Use `python3 -m venv venv` to  create a virtual environment named venv.

Check if in folder env/bin are files named activate,
if not delete venv folder and use: `virtualenv -p python3 venv`

**Activate Virtual Environment:**

! In Visual Studio Code evironment should be activated by itself but if you don't see 
(venv) on the left side of terminal you need to use this command !
                                       
On Windows, use `.\venv\Scripts\activate` to activate the virtual environment.

On macOS/Linux, use `source venv/bin/activate`

**Install Dependencies:**
Ensure you have a requirements.txt file with all the necessary dependencies listed.

Run `pip3 install -r requirements.txt` to install the dependencies.

**Run project**
Use `python3 run.py` to run the project.


## TEST BACKEND
To test api you can use `test.py` and see if everything works as intended.


