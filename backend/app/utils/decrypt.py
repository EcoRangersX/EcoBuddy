

def decrypt(encrypted_text: str):
    text = ''
    symbols = "!@#$%^&*()1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    index_length_pointer = 0

    while index_length_pointer < len(encrypted_text):

        length_of_index_of_symbol = encrypted_text[index_length_pointer]
        
        n_index_length_pointer = index_length_pointer + 1 + int(length_of_index_of_symbol)

        index = int( encrypted_text[index_length_pointer+1:n_index_length_pointer] )
        symbol = symbols[index]

        text += symbol

        index_length_pointer = n_index_length_pointer


    return text