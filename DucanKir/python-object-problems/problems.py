import math
'''
Write a Laptop class. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
'''

class Laptop:
    def __init__(self, make, model, ram, storage):
        self.make = make
        self.model = model
        self.ram = ram
        self.storage = storage


'''
Write a WineBottle class. It should have the following properties:

name (string)
grape (string, eg: Merlot)
vintage (int, eg: 2017)
volume (int, eg: 750)
amount_remaining (int, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amount_remaining`
refill(amount) - adds the `amount` to the `amount_remaining`
'''

class WineBottle:
    def __init__(self, name, grape, vintage, volume, amount_remaining):
        self.name = name
        self.grape = grape
        self.vintage = vintage
        self.volume = volume
        self.amount_remaining = amount_remaining

    def drink(self, amount):
        self.amount_remaining -= amount

    def refill(self, amount):
        self.amount_remaining += amount


'''
Write a Product class that has the following properties:

name (string)
description (string)
price (number)
'''

class Product:
    def __init__(self, name, description, price):
        self.name = name
        self.description = description
        self.price = price


'''
Write a Cart class that has the following properties:

contents (array)

and the following methods:

add_item(product) - adds the given product into the contents array
remove_item(product) - removes the given product from the contents array
empty() - removes all items from the contents array
get_total() - returns the total price of all items in the contents array
'''

class Cart:
    def __init__(self):
        self.contents = []

    def add_item(self, product):
        self.contents.append(product)

    def remove_item(self, product):
        self.contents.remove(product)

    def empty(self):
        self.contents = []

    def get_total(self):
        prices = [item.price for item in self.contents]
        return int(sum(prices))




'''
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

get_area() - calculates the area of the shape
get_perimeter() - calculates the total length of all sides of the shape
'''

class Shape:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return (self.width + self.height)*2

'''
Write a Square class that extends the Shape class above. It should have the same properties and methods as the Shape class, but only take a width when being instantiated. The height should be automatically set to be equal to the width.
'''

class Square(Shape):
    def __init__(self, width):
        super().__init__(width, width)




'''
Write a Tringle class that extends the Shape class above. It should have the following properties:

width (number)
height (number)

and the following methods:

get_area() - calculates the area of the triangle
get_perimeter() - calculates the perimeter of the triangle (assuming it's right-angled, so width + height + √width + √height)
'''

class Triangle(Shape):
    def get_area(self):
        triangle_area = super().get_area()
        return triangle_area*1/2


    def get_perimeter(self):
        triangle_perimeter = super().get_perimeter()
        return triangle_perimeter/2 + math.sqrt(self.width)+math.sqrt(self.height)
