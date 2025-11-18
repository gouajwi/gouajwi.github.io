print("""
========================================
|          ** XOR CHALLENGE ** |
========================================
|                                      |
|  Greetings, seeker of the flag.      |
|  A simple, repeating key hides a secret.|
|  Can you reverse the bitwise logic?  |
|                                      |
|  Connect and reveal the plain text.  |
|                                      |
========================================
The encrypted flag is:
""")
flag = open('Xor/flag.txt', 'r').read()
key = "Key"

def encrypt(message: str, key: str) -> str:
    payload = ""
    for i in range(len(message)):
        payload += chr(ord(message[i]) ^ ord(key[i % len(key)]))
    return payload

encrypted = encrypt(flag, key)

print(encrypted.encode().hex(), flush=True)