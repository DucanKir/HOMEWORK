# JavaScript Constructor Functions Lab

##### This is your chance to practice what you've learnt about JavaScript objects.

> ***Note:*** _This can be a pair programming activity or done independently._


## Task One - Cars

Create a `Car` constructor, which has properties for the following:

  - `brand (String)`
  - `number of seats (Number)`
  - `speed in mph (Number)`

And the following methods:

  - `speedUp`: which increments the car's current speed.
  - `slowDown`: which decrements the car's current speed.

Both methods should also console log the following string, passing in the brand name and new speed value: ```"The (brand) is travelling at (speed)mph"```

**Add the methods to the constructor's prototype**

Test drive your cars by invoking their methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).

## Task Two - Ice Cream

Create an `IceCream` constructor with the following properties:

- `number of scoops (Number)`
- `flake (Boolean)`

They should also have a method `calculatePrice` which returns the price of the ice cream assuming that:

 - 1 scoop of ice cream costs £1.10
 - A flake costs £0.30

**Add the method to the constructor's prototype**

## Task Three - Countries

Create a new `Country` constructor with the following properties:

- `name (String)`
- `population (Number)`
- `size in square kilometres (Number)`

It should have a method `calculateDensity` that calculates the countries population density and prints out a string:

`(name) has a population density of (density) people per sq km. This is (low/average/high).`

The string should use `low` if the density is under 100 per sq km, `average` if it is between 100-500 and `high` if it is over 500.

**Add the methods to the constructor's prototype**

## Task Four - The Bag

Create a bag object with the following property:

- `contents (Array)`

The bag should have the following methods:

- `addItem(String)` - pushes a new item into the bag's contents array.
- `removeItem(String)` - removes a given item from the bag's contents array.
- `listItems` - lists all the current contents of the bag.
- `emptyBag` - removes all items from the bag.

You may need to do some Googling for this one!

**Add the methods to the constructor's prototype**

>**Note** Remember to use the `new` keyword when using your constructors
