import json


class User:
    password: str = None
    symbols = "!@#$%^&*()1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    def encrypt_password(self):
        encrypted_password = ''
        for user_symbol in self.password:
            for symbol in self.symbols:
                if user_symbol!=symbol:
                    continue
                index_of_symbol = str( self.symbols.index( symbol ) )
                index_length_pointer = len( index_of_symbol )

                encrypted_password += f'{ index_length_pointer }{ index_of_symbol }'

        self.password = encrypted_password

    def decrypt_password(self):
        password = ''

        index_length_pointer = 0

        while index_length_pointer < len(self.password):

            length_of_index_of_symbol = self.password[index_length_pointer]
            
            n_index_length_pointer = index_length_pointer + 1 + int(length_of_index_of_symbol)

            index = int( self.password[index_length_pointer+1:n_index_length_pointer] )
            symbol = self.symbols[index]

            password += symbol

            index_length_pointer = n_index_length_pointer


        self.password = password
