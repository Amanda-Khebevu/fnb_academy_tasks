cart = []

while True:
    product = input("Enter a food item (or type 'exit' to finish): ").strip()
    if product.lower() == 'exit':
        break

    try:
        price = float(input(f"Enter the price of {product}: R"))
    except ValueError:
        print("Invalid price. Please enter a number.")
        continue

    cart.append((product, price))

# Display cart items and total
print("\nShopping Cart Summary:")
total = 0
for item, price in cart:
    print(f"- {item}: R{price:.2f}")
    total += price

print(f"\nTotal Cost: R{total:.2f}")
