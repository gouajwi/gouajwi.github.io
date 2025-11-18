#!/usr/bin/env python3
import random
import time


def hash_string(text: str) -> str:
    encoded = [ord(char) for char in text]
    transformed = []

    for i, num in enumerate(encoded):
        if i % 3 == 0:
            transformed.append(num + i)
        elif i % 3 == 1:
            transformed.append(num * 2)
        else:
            transformed.append(num - 3)

    return ",".join(str(x) for x in transformed)



def generate_random_string() -> str:
    chars = "abcdefghijklmnopqrstuvwxyz0123456789"
    length = random.randint(8, 15)
    return "".join(random.choice(chars) for _ in range(length))


def main() -> None:
    original_text = generate_random_string()
    hashed_value = hash_string(original_text)

    print(f"Hashed string: {hashed_value}")
    print("You have 5 seconds to recover the original string.")

    start_time = time.time()

    try:
        user_input = input("Original string: ")
        elapsed_time = time.time() - start_time

        if elapsed_time > 5:
            print("Time's up!")
            print(f"The original string was: {original_text}")
            return

        if user_input.strip() == original_text:
            print("Correct! Here's your flag:")
            flag = open("flag.txt", "r").read()
            print(f"FLAG{{{flag}}}")
        else:
            print(f"Wrong! The original was: {original_text}")

    except KeyboardInterrupt:
        print(f"\nOriginal string was: {original_text}")


if __name__ == "__main__":
    main()