def decrypt(encrypted_password: str, symbols: str) -> str:
    password = ''

    index_length_pointer = 0
    while index_length_pointer < len(encrypted_password):

        length_of_index_of_symbol = encrypted_password[index_length_pointer]
        
        n_index_length_pointer = index_length_pointer + 1 + int(length_of_index_of_symbol)

        index = int(encrypted_password[index_length_pointer+1:n_index_length_pointer])
        symbol = symbols[index]

        password += symbol

        index_length_pointer = n_index_length_pointer


    return password