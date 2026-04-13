import math

def find_gcd(a, b):
    """
    Find the greatest common divisor of two numbers using the built-in math.gcd function.
    """
    return math.gcd(a, b)

def find_gcd_euclidean(a, b):
    """
    Find the greatest common divisor using the Euclidean algorithm.
    """
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a

# Example usage
if __name__ == "__main__":
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    
    result = find_gcd(num1, num2)
    print(f"The greatest common divisor of {num1} and {num2} is: {result}")
    
    # Alternatively, using the Euclidean algorithm:
    result2 = find_gcd_euclidean(num1, num2)
    print(f"Using Euclidean algorithm: {result2}")
