
from app import create_app,globals_dict



app = create_app()
if __name__ == '__main__':
    app.run(debug=globals_dict['debug'],threaded=True)

