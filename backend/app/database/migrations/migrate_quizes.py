
class Migrate_quizes():
    def __init__(self,conn):
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS quizzes(
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       quiz text
                       )""")
        conn.commit()

        q = """{
    "title": "Ecology Fundamentals Quiz",
    "level": "Intermediate",
    "description": "This quiz tests your knowledge of basic ecological concepts, including ecosystems, biodiversity, and conservation.",
    "quiz": [
        {
            "question": "What is the primary source of energy for most ecosystems?",
            "answers": [
                "The Sun",
                "Geothermal energy",
                "Chemical energy"
            ],
            "correct-answer": 0
        },
        {
            "question": "Which of the following is a biotic component of an ecosystem?",
            "answers": [
                "Sunlight",
                "Water",
                "Plants"
            ],
            "correct-answer": 2
        },
        {
            "question": "What term describes the variety of life found within an ecosystem?",
            "answers": [
                "Biodiversity",
                "Productivity",
                "Biomass"
            ],
            "correct-answer": 0
        },
        {
            "question": "What is the main consequence of habitat destruction on biodiversity?",
            "answers": [
                "Increased species migration",
                "Loss of species",
                "Increased ecosystem stability"
            ],
            "correct-answer": 1
        },
        {
            "question": "Which of the following is an example of an abiotic factor in an ecosystem?",
            "answers": [
                "Temperature",
                "Bacteria",
                "Animals"
            ],
            "correct-answer": 0
        }
    ]
}
"""
        
        
        cursor.execute(
                """INSERT INTO quizzes (quiz) VALUES(:quiz)""",
                {
                    "quiz": q
            }
            )

        conn.commit()
    

 

        
        
