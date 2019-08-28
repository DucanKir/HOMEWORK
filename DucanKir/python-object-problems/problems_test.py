import unittest
import inspect
import problems

class ProblemsTest(unittest.TestCase):

    def test_laptop(self):
        laptop = problems.Laptop('Apple Mac', 'MacBook Air', 8, 500)

        self.assertTrue(hasattr(laptop, 'make'))
        self.assertTrue(isinstance(laptop.make, str))

        self.assertTrue(hasattr(laptop, 'model'))
        self.assertTrue(isinstance(laptop.model, str))

        self.assertTrue(hasattr(laptop, 'ram'))
        self.assertTrue(isinstance(laptop.ram, int))

        self.assertTrue(hasattr(laptop, 'storage'))
        self.assertTrue(isinstance(laptop.storage, int))



    def test_wine_bottle(self):
        wine_bottle = problems.WineBottle('Jam Shed', 'Shiraz', 2019, 750, 750)

        self.assertTrue(hasattr(wine_bottle, 'name'))
        self.assertTrue(isinstance(wine_bottle.name, str))

        self.assertTrue(hasattr(wine_bottle, 'grape'))
        self.assertTrue(isinstance(wine_bottle.grape, str))

        self.assertTrue(hasattr(wine_bottle, 'vintage'))
        self.assertTrue(isinstance(wine_bottle.vintage, int))

        self.assertTrue(hasattr(wine_bottle, 'volume'))
        self.assertTrue(isinstance(wine_bottle.volume, int))

        self.assertTrue(hasattr(wine_bottle, 'amount_remaining'))
        self.assertTrue(isinstance(wine_bottle.amount_remaining, int))

        self.assertTrue(inspect.ismethod(getattr(wine_bottle, 'drink')))

        wine_bottle.amount_remaining = 750
        wine_bottle.drink(250)
        self.assertEqual(wine_bottle.amount_remaining, 500)

        self.assertTrue(inspect.ismethod(getattr(wine_bottle, 'drink')))

        wine_bottle.amount_remaining = 500
        wine_bottle.refill(250)
        self.assertEqual(wine_bottle.amount_remaining, 750)



    def test_product(self):

        product = problems.Product('iPhone', 'Latest model', 799.99)

        self.assertTrue(hasattr(product, 'name'))
        self.assertTrue(isinstance(product.name, str))

        self.assertTrue(hasattr(product, 'description'))
        self.assertTrue(isinstance(product.description, str))

        self.assertTrue(hasattr(product, 'price'))
        self.assertTrue(isinstance(product.price, float))


    
    def test_cart(self):

        cart = problems.Cart()
        shirt = problems.Product('Shirt', 'White, 16" collar, long-sleve', 20.0)
        cap = problems.Product('Cap', 'Orange, snap-back', 30.0)
        trainers = problems.Product('Trainers', 'Adidas Campus, navy', 70.0)

        self.assertTrue(hasattr(cart, 'contents'))
        self.assertTrue(isinstance(cart.contents, list))

        self.assertTrue(inspect.ismethod(getattr(cart, 'add_item')))

        cart.add_item(shirt)
        self.assertEqual(len(cart.contents), 1)

        self.assertTrue(inspect.ismethod(getattr(cart, 'remove_item')))

        cart.add_item(trainers)
        cart.remove_item(trainers)
        self.assertEqual(len(cart.contents), 1)

        self.assertTrue(inspect.ismethod(getattr(cart, 'empty')))

        cart.add_item(cap)
        cart.add_item(trainers)
        cart.empty()
        self.assertEqual(len(cart.contents), 0)

        self.assertTrue(inspect.ismethod(getattr(cart, 'get_total')))

        cart.add_item(cap)
        cart.add_item(shirt)
        cart.add_item(trainers)
        self.assertEqual(cart.get_total(), 120)



    def test_shape(self):

        shape = problems.Shape(10, 20)

        self.assertTrue(hasattr(shape, 'width'))
        self.assertTrue(isinstance(shape.width, int))

        self.assertTrue(hasattr(shape, 'height'))
        self.assertTrue(isinstance(shape.height, int))

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_area')))
        self.assertEqual(shape.get_area(), 200)

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_perimeter')))
        self.assertEqual(shape.get_perimeter(), 60)



    def test_square(self):

        shape = problems.Square(20)

        self.assertTrue(isinstance(shape, problems.Shape))

        self.assertTrue(hasattr(shape, 'width'))
        self.assertTrue(isinstance(shape.width, int))

        self.assertTrue(hasattr(shape, 'height'))
        self.assertTrue(isinstance(shape.height, int))

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_area')))
        self.assertEqual(shape.get_area(), 400)

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_perimeter')))
        self.assertEqual(shape.get_perimeter(), 80)



    def test_triangle(self):

        shape = problems.Triangle(10, 20)

        self.assertTrue(isinstance(shape, problems.Shape))

        self.assertTrue(hasattr(shape, 'width'))
        self.assertTrue(isinstance(shape.width, int))

        self.assertTrue(hasattr(shape, 'height'))
        self.assertTrue(isinstance(shape.height, int))

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_area')))
        self.assertEqual(shape.get_area(), 100)

        self.assertTrue(inspect.ismethod(getattr(shape, 'get_perimeter')))
        self.assertEqual(shape.get_perimeter(), 37.63441361516796)



if __name__ == '__main__':
    unittest.main()
