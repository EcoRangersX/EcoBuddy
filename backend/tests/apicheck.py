from .test_modules import *

def api_check():

    ai_threads = Ai_tester().threads
    air_threads = Air_tester().threads
    quiz_threads = Quiz_tester().threads
    #article_threads = Article_tester().threads
    auth_threads = Auth_tester().threads
    docs_threads = Docs_tester().threads
    eco_tips_threads = Eco_tips_tester().threads
    
    


    threads =  auth_threads + docs_threads + eco_tips_threads + ai_threads + air_threads + quiz_threads


    for thread in threads:
        thread.start()
        
    for thread in threads:
        thread.join()
    
    



    

    
    
    
    

