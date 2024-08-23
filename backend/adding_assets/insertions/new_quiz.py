from checks import Quiz_checker

def insert_quiz(json_quiz: dict,conn,cursor):
    quiz_check = Quiz_checker(json_quiz)

    if quiz_check.check_quiz():
        cursor.execute('SELECT quiz FROM quizes WHERE title = :title',{'title': json_quiz['Title']})
        if cursor.fetchone():
            print('Quiz already exists')
            return False
        cursor.execute('INSERT INTO quizes VALUES (:title,:quiz)',{'title': json_quiz['Title'],'quiz': str(json_quiz)})
        conn.commit()
        conn.close()
        print('all good')
        return True
    else:
        print('smth went wrong try again or check the quiz')
        return False

'''
d = {
    "Title": "Quiz2",
    "Answer_key": {
            "q1": "Answer1",
            "q2": "Answer1"
          },
    "Questions": {
        "sdsdsd": {
            "Answer1": "blabla",
            "Answer2": "blbla"
        },
        "dsfsdfs": {
            "Answer1": "babla",
            "Answer2": "idfidfhid"
        }
    }
}
'''






        