
def encrypt(password: str,symbols: str) -> str:
    encrypted_password = ''
    for user_symbol in password:
        for symbol in symbols:

            if user_symbol==symbol:
                index_of_symbol = str( symbols.index( symbol ) )
                index_length_pointer = len(index_of_symbol)

                encrypted_password += f'{index_length_pointer}{index_of_symbol}'

    return encrypted_password





    
        





        