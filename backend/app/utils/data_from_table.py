
def data_from_table(table_name: str,values: list = None) -> list:
    from app.database import conn

    cursor = conn.cursor()
    if not values:
        cursor.execute(f'SELECT * FROM {table_name}')
        return cursor.fetchall()
    
    values_str = ''
    for value in values:
        values_str += f',{value}'

    cursor.execute(f"SELECT {values_str[1:]} FROM {table_name}")
    return cursor.fetchall()



