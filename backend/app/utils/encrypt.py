

def encrypt(text: str):
    symbols = "!@#$%^&*()1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    encrypted_text = ''
    for user_symbol in text:
        for symbol in symbols:
            if user_symbol!=symbol:
                continue
            index_of_symbol = str( symbols.index( symbol ) )
            index_length_pointer = len( index_of_symbol )

            encrypted_text += f'{ index_length_pointer }{ index_of_symbol }'

    return encrypted_text