
class Migrate_quizes():
    def __init__(self,conn):
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS quizzes(
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       quiz text,
                       views int
                       )""")
        conn.commit()

        q = """{
            "title": "Ecology Fundamentals Quiz",
            "level": "Intermediate",
            "description": "This quiz tests your knowledge of basic ecological concepts, including ecosystems, biodiversity, and conservation.",
            "quiz": [
                {
                    "question": "What is the primary source of energy for most ecosystems?",
                    "options": [
                        { "id": 0, "text": "The Sun" },
                        { "id": 1, "text": "Geothermal energy" },
                        { "id": 2, "text": "Chemical energy" }
                    ],
                    "correct-answer": 0
                },
                {
                    "question": "Which of the following is a biotic component of an ecosystem?",
                    "options": [
                        { "id": 0, "text": "Sunlight" },
                        { "id": 1, "text": "Water" },
                        { "id": 2, "text": "Plants" }
                    ],
                    "correct-answer": 2
                },
                {
                    "question": "What term describes the variety of life found within an ecosystem?",
                    "options": [
                        { "id": 0, "text": "Biodiversity" },
                        { "id": 1, "text": "Productivity" },
                        { "id": 2, "text": "Biomass" }
                    ],
                    "correct-answer": 0
                },
                {
                    "question": "What is the main consequence of habitat destruction on biodiversity?",
                    "options": [
                        { "id": 0, "text": "Increased species migration" },
                        { "id": 1, "text": "Loss of species" },
                        { "id": 2, "text": "Increased ecosystem stability" }
                    ],
                    "correct-answer": 1
                },
                {
                    "question": "Which of the following is an example of an abiotic factor in an ecosystem?",
                    "options": [
                        { "id": 0, "text": "Temperature" },
                        { "id": 1, "text": "Bacteria" },
                        { "id": 2, "text": "Animals" }
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
    

 

        
        
