
from app import create_app,globals



app = create_app()
if __name__ == '__main__':
    
    app.run(debug=globals['debug'],threaded=True)
